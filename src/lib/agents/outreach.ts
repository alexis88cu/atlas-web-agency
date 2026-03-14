/**
 * Outreach Agent
 * Sends WhatsApp Business + Email messages to leads.
 * Handles initial contact and day-3 / day-7 follow-ups.
 */

import { db, Lead } from '../db'
import { generateOutreachCopy, generateDemoContent } from './analyzer'
import { log } from '../logger'

const DEMO_BASE_URL = 'https://atlaswebagency.net/demo'
const OWNER_PHONE = process.env.OWNER_WHATSAPP_PHONE!  // e.g. 17864353507
const WA_PHONE_ID = process.env.WHATSAPP_PHONE_NUMBER_ID!
const WA_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN!
const RESEND_KEY = process.env.RESEND_API_KEY!
const FROM_EMAIL = 'Alexis @ Atlas Web Agency <alexis@atlaswebagency.net>'

// ─── WhatsApp Business Cloud API ─────────────────────────────────────────────

export async function sendWhatsApp(to: string, body: string): Promise<string | null> {
  const phone = to.replace(/\D/g, '')
  const url = `https://graph.facebook.com/v19.0/${WA_PHONE_ID}/messages`

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${WA_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to: phone,
      type: 'text',
      text: { body },
    }),
  })

  const data = await res.json()
  if (!res.ok) {
    console.error('[WhatsApp] Send failed:', JSON.stringify(data))
    return null
  }

  console.log(`[WhatsApp] Sent OK — msg_id: ${data.messages?.[0]?.id}`)
  return data.messages?.[0]?.id ?? null
}

// ─── Resend Email ─────────────────────────────────────────────────────────────

export async function sendEmail(
  to: string,
  subject: string,
  text: string
): Promise<boolean> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to,
      subject,
      text,
    }),
  })

  if (!res.ok) {
    const err = await res.json()
    console.error('[Email] Send failed:', err)
    return false
  }

  return true
}

// ─── Notify owner on WhatsApp ─────────────────────────────────────────────────

export async function notifyOwner(message: string): Promise<void> {
  if (!OWNER_PHONE) return
  await sendWhatsApp(OWNER_PHONE, message)
}

// ─── Send initial outreach to a lead ─────────────────────────────────────────

export async function sendInitialOutreach(lead: Lead): Promise<boolean> {
  // Guard: check credentials are configured
  if (!WA_PHONE_ID || !WA_TOKEN) {
    await log('outreach', 'WhatsApp not configured', `Missing WHATSAPP_PHONE_NUMBER_ID or WHATSAPP_ACCESS_TOKEN in environment variables. Cannot send to ${lead.business_name}.`, { lead_id: lead.id, level: 'error' })
    console.error('[Outreach] WhatsApp credentials missing — set WHATSAPP_PHONE_NUMBER_ID and WHATSAPP_ACCESS_TOKEN in Vercel env vars')
  }

  if (!RESEND_KEY) {
    await log('outreach', 'Resend not configured', `Missing RESEND_API_KEY in environment variables.`, { level: 'error' })
    console.error('[Outreach] RESEND_API_KEY missing — set it in Vercel env vars')
  }

  // Guard: must have at least one contact channel
  if (!lead.phone && !lead.email) {
    await log('outreach', 'Skipped — no contact info', `${lead.business_name}: no phone or email found. Update the lead manually to retry.`, { lead_id: lead.id, level: 'warning' })
    console.warn(`[Outreach] Skipping ${lead.business_name} — no phone or email`)
    return false
  }

  // 1. Generate demo content
  const demo = await generateDemoContent(lead)
  const slug = lead.business_name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  const demoUrl = `${DEMO_BASE_URL}/${slug}`

  // Update demo_url on lead
  await db.from('leads').update({ demo_url: demoUrl }).eq('id', lead.id)

  // 2. Generate personalized copy
  const copy = await generateOutreachCopy({ ...lead, demo_url: demoUrl }, demoUrl)

  let sent = false

  // 3. Send WhatsApp if phone available
  if (lead.phone) {
    if (WA_PHONE_ID && WA_TOKEN) {
      const waId = await sendWhatsApp(lead.phone, copy.whatsappBody)
      if (waId) {
        await db.from('messages').insert({
          lead_id: lead.id,
          channel: 'whatsapp',
          direction: 'outbound',
          body: copy.whatsappBody,
          wa_msg_id: waId,
        })
        sent = true
        await log('outreach', 'WhatsApp sent', `📱 ${lead.business_name} (${lead.phone})`, { lead_id: lead.id, level: 'success' })
      } else {
        await log('outreach', 'WhatsApp failed', `❌ Could not send to ${lead.business_name} (${lead.phone}). Check WhatsApp API credentials and that the number is registered in Meta Business.`, { lead_id: lead.id, level: 'error' })
      }
    }
  } else {
    await log('outreach', 'No phone for WhatsApp', `${lead.business_name} — no phone number from Google Places`, { lead_id: lead.id, level: 'warning' })
  }

  // 4. Send email if address available
  if (lead.email) {
    if (RESEND_KEY) {
      const ok = await sendEmail(lead.email, copy.emailSubject, copy.emailBody)
      if (ok) {
        await db.from('messages').insert({
          lead_id: lead.id,
          channel: 'email',
          direction: 'outbound',
          subject: copy.emailSubject,
          body: copy.emailBody,
        })
        sent = true
        await log('outreach', 'Email sent', `📧 ${lead.business_name} (${lead.email})`, { lead_id: lead.id, level: 'success' })
      } else {
        await log('outreach', 'Email failed', `❌ Could not send email to ${lead.business_name} (${lead.email}). Check RESEND_API_KEY and domain verification.`, { lead_id: lead.id, level: 'error' })
      }
    }
  } else {
    await log('outreach', 'No email for lead', `${lead.business_name} — email not available (Google Places doesn't provide emails). Add manually or enrich from website.`, { lead_id: lead.id, level: 'warning' })
  }

  if (sent) {
    const followUpAt = new Date()
    followUpAt.setDate(followUpAt.getDate() + 3)

    await db.from('leads').update({
      status: 'demo_sent',
      last_contacted_at: new Date().toISOString(),
      follow_up_at: followUpAt.toISOString(),
    }).eq('id', lead.id)

    await log('outreach', 'Initial outreach sent', `Demo sent to ${lead.business_name} (${lead.niche}, ${lead.city}) → ${demoUrl}`, { lead_id: lead.id, level: 'success' })
    console.log(`[Outreach] Sent to ${lead.business_name} | demo: ${demoUrl}`)
  }

  return sent
}

// ─── Follow-up messages ───────────────────────────────────────────────────────

async function sendFollowUp(lead: Lead, attempt: 1 | 2): Promise<void> {
  const name = lead.owner_name ?? 'there'
  const demoUrl = lead.demo_url ?? `${DEMO_BASE_URL}/${lead.business_name.toLowerCase().replace(/\s+/g, '-')}`

  let body: string

  if (attempt === 1) {
    body = `Hey ${name}, just making sure this didn't get buried in your messages 😅

Your demo is still live:
👉 ${demoUrl}

Real talk — every day without a strong online presence, customers searching for ${lead.niche ?? 'your services'} in ${lead.city ?? 'your area'} are finding your competitors instead of you. The ones who DO show up on Google are getting those calls right now.

It takes 10 seconds to look. What do you think? 🙏`
  } else {
    body = `${name}, last message from me — I promise 🤝

I know you're heads-down running your business and this might not be the right moment. But I'd be doing you a disservice if I didn't send one final follow-up.

Your demo is still here:
👉 ${demoUrl}

Here's what you'd get for $14.99/month:
✅ Your business showing up on Google — 24/7
✅ Customers calling YOU instead of your competitors
✅ Professional image that builds trust before they even call
✅ Live in 5–7 days from today — $250 one-time setup, that's it

Most clients recover that $250 in their very first new customer.

If the timing isn't right, no worries at all. When you're ready, I'm here.
— Alexis | (786) 435-3507`
  }

  if (lead.phone) {
    const waId = await sendWhatsApp(lead.phone, body)
    if (waId) {
      await db.from('messages').insert({
        lead_id: lead.id,
        channel: 'whatsapp',
        direction: 'outbound',
        body,
        wa_msg_id: waId,
      })
    }
  }

  // Set next follow-up or mark as lost after 2 attempts
  if (attempt === 1) {
    const next = new Date()
    next.setDate(next.getDate() + 4)
    await db.from('leads').update({
      last_contacted_at: new Date().toISOString(),
      follow_up_at: next.toISOString(),
    }).eq('id', lead.id)
  } else {
    await db.from('leads').update({
      last_contacted_at: new Date().toISOString(),
      follow_up_at: null,
      status: 'lost',
    }).eq('id', lead.id)
  }

  await log('outreach', `Follow-up #${attempt} sent`, `${lead.business_name} — ${attempt === 2 ? 'final follow-up, marking as lost if no reply' : 'day-3 follow-up'}`, { lead_id: lead.id, level: 'info' })
  console.log(`[Outreach] Follow-up #${attempt} sent to ${lead.business_name}`)
}

// ─── Daily outreach run ───────────────────────────────────────────────────────

export async function runOutreachAgent(): Promise<{ sent: number; followUps: number }> {
  let sent = 0
  let followUps = 0

  // 1. Send initial outreach to qualified new leads
  const { data: newLeads } = await db
    .from('leads')
    .select('*')
    .eq('status', 'new')
    .gte('lead_score', 7)
    .limit(10)

  const qualifiedCount = (newLeads ?? []).length
  await log('outreach', `Starting outreach`, `${qualifiedCount} qualified leads (score ≥ 7) ready for outreach`, { level: 'info' })

  for (const lead of (newLeads ?? []) as Lead[]) {
    const ok = await sendInitialOutreach(lead)
    if (ok) sent++
    await new Promise((r) => setTimeout(r, 1500)) // rate limit
  }

  // 2. Follow-ups due today
  const now = new Date().toISOString()
  const { data: dueLeads } = await db
    .from('leads')
    .select('*')
    .lte('follow_up_at', now)
    .not('follow_up_at', 'is', null)
    .eq('status', 'demo_sent')

  for (const lead of (dueLeads ?? []) as Lead[]) {
    // Count previous messages to determine follow-up number
    const { count } = await db
      .from('messages')
      .select('*', { count: 'exact', head: true })
      .eq('lead_id', lead.id)
      .eq('direction', 'outbound')

    const attempt = (count ?? 1) >= 2 ? 2 : 1
    await sendFollowUp(lead, attempt as 1 | 2)
    followUps++
    await new Promise((r) => setTimeout(r, 1000))
  }

  return { sent, followUps }
}
