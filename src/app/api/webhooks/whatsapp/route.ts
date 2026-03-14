export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { classifyReply, ReplyIntent } from '@/lib/agents/analyzer'
import { sendWhatsApp, notifyOwner } from '@/lib/agents/outreach'
import { generateContract } from '@/lib/agents/contract'
import { Lead } from '@/lib/db'

const WA_VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN!

// ─── Webhook verification (GET) ───────────────────────────────────────────────
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const mode = searchParams.get('hub.mode')
  const token = searchParams.get('hub.verify_token')
  const challenge = searchParams.get('hub.challenge')

  if (mode === 'subscribe' && token === WA_VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 })
  }
  return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
}

// ─── Incoming message (POST) ──────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const body = await req.json()

  try {
    const entry = body.entry?.[0]
    const changes = entry?.changes?.[0]
    const messages = changes?.value?.messages

    if (!messages?.length) return NextResponse.json({ ok: true })

    for (const msg of messages) {
      if (msg.type !== 'text') continue

      const fromPhone = msg.from  // e.g. "13051234567"
      const text = msg.text.body as string
      const msgId = msg.id

      // Find lead by phone
      const phoneVariants = [
        fromPhone,
        `+${fromPhone}`,
        fromPhone.replace(/^1/, ''),
        `(${fromPhone.slice(1, 4)}) ${fromPhone.slice(4, 7)}-${fromPhone.slice(7)}`,
      ]

      const { data: lead } = await db
        .from('leads')
        .select('*')
        .or(phoneVariants.map((p) => `phone.eq.${p}`).join(','))
        .single()

      if (!lead) {
        console.log(`[Webhook] Unknown number: ${fromPhone}`)
        continue
      }

      // Store incoming message
      await db.from('messages').insert({
        lead_id: lead.id,
        channel: 'whatsapp',
        direction: 'inbound',
        body: text,
        wa_msg_id: msgId,
      })

      // Classify intent
      const { intent, suggestedReply } = await classifyReply(
        text,
        lead.owner_name ?? lead.business_name,
        lead.niche ?? 'business'
      )

      await handleIntent(lead as Lead, intent, suggestedReply)
    }
  } catch (err) {
    console.error('[Webhook] Error:', err)
  }

  return NextResponse.json({ ok: true })
}

async function handleIntent(lead: Lead, intent: ReplyIntent, suggestedReply: string): Promise<void> {
  const demoUrl = lead.demo_url ?? ''
  const reply = suggestedReply.replace('[DEMO_URL]', demoUrl)

  switch (intent) {
    case 'not_interested':
      await db.from('leads').update({ status: 'lost' }).eq('id', lead.id)
      console.log(`[Webhook] ${lead.business_name} not interested`)
      break

    case 'spam':
      // Do nothing
      break

    case 'needs_info':
      // Send Claude's suggested reply
      if (lead.phone) {
        const waId = await sendWhatsApp(lead.phone, reply)
        if (waId) {
          await db.from('messages').insert({
            lead_id: lead.id, channel: 'whatsapp',
            direction: 'outbound', body: reply, wa_msg_id: waId,
          })
        }
      }
      break

    case 'interested':
      await db.from('leads').update({ status: 'interested' }).eq('id', lead.id)

      // Generate contract
      await generateContract(lead)

      // Send acknowledgement
      if (lead.phone) {
        const ack = `Awesome ${lead.owner_name ?? ''}! 🙌 I'm putting together your service agreement right now. Give me a few minutes — I'll send it over shortly!`
        const waId = await sendWhatsApp(lead.phone, ack)
        if (waId) {
          await db.from('messages').insert({
            lead_id: lead.id, channel: 'whatsapp',
            direction: 'outbound', body: ack, wa_msg_id: waId,
          })
        }
      }

      // Notify owner
      await notifyOwner(
        `🔥 HOT LEAD REPLIED!\n\n${lead.business_name} is interested!\nPhone: ${lead.phone}\n\nContract is being generated — check the dashboard to approve.`
      )
      break

    case 'ready_to_buy':
      await db.from('leads').update({ status: 'interested' }).eq('id', lead.id)
      await generateContract(lead)

      if (lead.phone) {
        const ack = `Let's go! 🚀 I'm sending your contract and payment link right now. You'll have your new website live within a week!`
        const waId = await sendWhatsApp(lead.phone, ack)
        if (waId) {
          await db.from('messages').insert({
            lead_id: lead.id, channel: 'whatsapp',
            direction: 'outbound', body: ack, wa_msg_id: waId,
          })
        }
      }

      await notifyOwner(
        `💰 READY TO BUY!\n\n${lead.business_name} wants to proceed!\nPhone: ${lead.phone}\n\nApprove the contract NOW: https://atlaswebagency.net/dashboard`
      )
      break
  }
}
