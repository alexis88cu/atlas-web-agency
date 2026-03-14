/**
 * Analyzer Agent
 * Uses Claude to:
 * 1. Score and prioritize new leads
 * 2. Classify incoming WhatsApp/email replies
 * 3. Generate personalized outreach copy
 * 4. Generate demo content for a specific business
 */

import Anthropic from '@anthropic-ai/sdk'
import { db, Lead } from '../db'
import { log } from '../logger'

const claude = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

// ─── Score + Enrich a lead ────────────────────────────────────────────────────

export async function analyzeLead(lead: Lead): Promise<{
  leadScore: number
  notes: string
  bestChannel: string
  ownerName: string | null
}> {
  const prompt = `You are the Lead Analyzer for Atlas Web Agency. Score this Florida local business lead.

Business: ${lead.business_name}
Niche: ${lead.niche}
City: ${lead.city}
Website: ${lead.website_url ?? 'NONE'}
Website Score: ${lead.website_score}/10
Google Rating: ${lead.google_rating ?? 'unknown'} (${lead.google_reviews ?? 0} reviews)
Phone: ${lead.phone ?? 'not found'}
Email: ${lead.email ?? 'not found'}

Respond with JSON only:
{
  "lead_score": <1-10 integer>,
  "notes": "<one sentence: main opportunity and approach>",
  "best_channel": "<whatsapp|email|both>",
  "owner_name": "<guess a plausible first name based on business name, or null>"
}`

  const res = await claude.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 200,
    messages: [{ role: 'user', content: prompt }],
  })

  const text = (res.content[0] as { text: string }).text.trim()
  const json = JSON.parse(text.replace(/```json|```/g, '').trim())

  return {
    leadScore: json.lead_score,
    notes: json.notes,
    bestChannel: json.best_channel,
    ownerName: json.owner_name,
  }
}

// ─── Classify incoming reply ──────────────────────────────────────────────────

export type ReplyIntent =
  | 'interested'
  | 'not_interested'
  | 'needs_info'
  | 'ready_to_buy'
  | 'spam'

export async function classifyReply(
  message: string,
  leadName: string,
  niche: string
): Promise<{ intent: ReplyIntent; suggestedReply: string }> {
  const prompt = `You are Alexis, a seasoned sales closer with 20+ years of experience. A lead just replied to our outreach for Atlas Web Agency (we build professional websites for local businesses: $250 setup + $14.99/month).

Your job: classify their intent AND write a reply that moves them forward in the sales process.

Lead name: ${leadName}
Business niche: ${niche}
Their message: "${message}"

Intent options:
- interested: they're curious, positive, or asking about the demo
- not_interested: they said no or not now
- needs_info: they have objections or want to know price, timeline, what's included
- ready_to_buy: they want to proceed, asking how to pay or get started
- spam: irrelevant message

REPLY RULES:
- If interested: validate their interest + make the next step obvious and easy
- If needs_info: answer their specific objection with confidence and specifics ($250 setup, $14.99/month, 5-7 days live, includes hosting/SSL/mobile/SEO foundations), then redirect to demo [DEMO_URL]
- If ready_to_buy: congratulate them, give them the exact next step (pay $250 setup, then send logo/photos/info), make them feel excited
- If not_interested: be gracious, leave the door open ("no worries at all — if things change, I'm here"), never pushy
- Always be warm, confident, and direct — never desperate or generic
- Keep it short: 2-4 sentences max
- Reference their name and niche when natural

Reply as JSON:
{
  "intent": "<intent>",
  "suggested_reply": "<reply from Alexis — warm, confident, moves deal forward>"
}`

  const res = await claude.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 300,
    messages: [{ role: 'user', content: prompt }],
  })

  const text = (res.content[0] as { text: string }).text.trim()
  const json = JSON.parse(text.replace(/```json|```/g, '').trim())

  return {
    intent: json.intent as ReplyIntent,
    suggestedReply: json.suggested_reply,
  }
}

// ─── Generate personalized outreach copy ─────────────────────────────────────

export async function generateOutreachCopy(lead: Lead, demoUrl: string): Promise<{
  emailSubject: string
  emailBody: string
  whatsappBody: string
}> {
  const websiteSituation = lead.website_url
    ? `Has a website (${lead.website_url}) but it scores ${lead.website_score}/10 — outdated, slow, or not showing up on Google.`
    : `NO WEBSITE AT ALL — completely invisible online while competitors get all the calls.`

  const reviewContext = lead.google_rating
    ? `${lead.google_rating} stars with ${lead.google_reviews ?? 0} Google reviews — good reputation but not capitalizing on it online.`
    : `No Google reviews data — likely low online visibility.`

  const prompt = `You are a world-class sales copywriter with 20+ years closing deals for local businesses. Your specialty is writing outreach that hits the owner's PAIN and immediately shows the VALUE waiting for them.

Your job: write the INITIAL outreach message for a local business that gets them to click a demo link and want to learn more.

LEAD CONTEXT:
- Business: ${lead.business_name}
- Owner: ${lead.owner_name ?? 'there'}
- Industry: ${lead.niche}
- City: ${lead.city}
- Website situation: ${websiteSituation}
- Online presence: ${reviewContext}
- Notes: ${lead.notes ?? 'none'}
- Demo already built for them: ${demoUrl}

WRITING RULES — follow every single one:
1. Open the WhatsApp with a SHORT hook that references their real situation — no generic intros
2. Lead with OUTCOME not features: more calls from Google, customers finding them instead of a competitor, look professional and trustworthy
3. NEVER say "we build websites" — say "I already built your demo, here it is" — the demo EXISTS
4. Create mild urgency: while they wait, competitors in ${lead.city} ARE showing up on Google and getting those calls
5. Numbers build credibility: $250 once, $14.99/month, live in 5-7 days — use them
6. End with a soft, low-friction CTA: "Take a look — what do you think?" not "Buy now"
7. WhatsApp tone: direct, warm, like a trusted friend giving them a heads-up — conversational
8. Email tone: slightly more structured but still punchy — open with a bold question or pain point
9. Email subject line: specific to their situation, creates curiosity — NOT generic
10. Use emojis sparingly in WhatsApp (2-3 max), none in email body

RESPOND AS JSON ONLY — no extra text:
{
  "email_subject": "<subject that creates curiosity and references their specific situation>",
  "email_body": "<email, 6-8 lines, plain text. Open with a pain-point question. Show value. Include demo URL. End with soft CTA. Sign off as Alexis from Atlas Web Agency with phone (786) 435-3507>",
  "whatsapp_body": "<WhatsApp message, 4-6 lines. Hook → pain/opportunity → demo URL → value snapshot → CTA. Punchy and conversational.>"
}`

  const res = await claude.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 500,
    messages: [{ role: 'user', content: prompt }],
  })

  const text = (res.content[0] as { text: string }).text.trim()
  const json = JSON.parse(text.replace(/```json|```/g, '').trim())

  return {
    emailSubject: json.email_subject,
    emailBody: json.email_body,
    whatsappBody: json.whatsapp_body,
  }
}

// ─── Generate demo page content ───────────────────────────────────────────────

export async function generateDemoContent(lead: Lead): Promise<{
  tagline: string
  description: string
  services: string[]
  ctaText: string
  colorScheme: string
}> {
  const prompt = `Generate website demo content for a ${lead.niche} business.

Business name: ${lead.business_name}
City: ${lead.city}
Rating: ${lead.google_rating ?? 'N/A'} (${lead.google_reviews ?? 0} reviews)

Return JSON only:
{
  "tagline": "<short powerful headline>",
  "description": "<2 sentence business description>",
  "services": ["<service 1>", "<service 2>", "<service 3>", "<service 4>"],
  "cta_text": "<call to action button text>",
  "color_scheme": "<blue|green|red|orange|purple — pick best for niche>"
}`

  const res = await claude.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 300,
    messages: [{ role: 'user', content: prompt }],
  })

  const text = (res.content[0] as { text: string }).text.trim()
  const json = JSON.parse(text.replace(/```json|```/g, '').trim())

  // Save demo to DB
  const slug = lead.business_name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

  await db.from('demos').upsert({
    lead_id: lead.id,
    slug,
    niche: lead.niche,
    content: {
      businessName: lead.business_name,
      city: lead.city,
      phone: lead.phone,
      tagline: json.tagline,
      description: json.description,
      services: json.services,
      ctaText: json.cta_text,
      colorScheme: json.color_scheme,
      rating: lead.google_rating,
      reviews: lead.google_reviews,
    },
  }, { onConflict: 'lead_id' })

  return {
    tagline: json.tagline,
    description: json.description,
    services: json.services,
    ctaText: json.cta_text,
    colorScheme: json.color_scheme,
  }
}

// ─── Batch: analyze all new leads ────────────────────────────────────────────

export async function analyzeNewLeads(): Promise<number> {
  const { data: leads } = await db
    .from('leads')
    .select('*')
    .eq('status', 'new')
    .is('lead_score', null)
    .limit(20)

  if (!leads?.length) return 0

  let processed = 0

  for (const lead of leads as Lead[]) {
    const analysis = await analyzeLead(lead)
    await db.from('leads').update({
      lead_score: analysis.leadScore,
      notes: analysis.notes,
      owner_name: analysis.ownerName,
    }).eq('id', lead.id)
    processed++
    const emoji = analysis.leadScore >= 8 ? '🔥' : analysis.leadScore >= 6 ? '⭐' : '👎'
    await log('analyzer', 'Lead scored', `${emoji} ${lead.business_name} — score ${analysis.leadScore}/10. ${analysis.notes}`, { lead_id: lead.id, level: analysis.leadScore >= 7 ? 'success' : 'info' })
  }

  await log('analyzer', 'Scoring complete', `${processed} leads analyzed`)
  console.log(`[Analyzer] Scored ${processed} new leads`)
  return processed
}
