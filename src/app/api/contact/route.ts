import { NextResponse } from 'next/server'

const RESEND_KEY = process.env.RESEND_API_KEY!
const TO_EMAIL = 'sonny.onlyone@gmail.com'
const FROM_EMAIL = 'Atlas Web Agency <noreply@atlaswebagency.net>'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, business, phone, email, message } = body

  if (!name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const emailBody = `
New lead from atlaswebagency.net contact form!

Name: ${name}
Business: ${business ?? '—'}
Phone / WhatsApp: ${phone ?? '—'}
Email: ${email}

Message:
${message ?? '(no message)'}

---
Reply directly to this email to contact the lead.
`.trim()

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      reply_to: email,
      subject: `🔥 New Lead: ${business ?? name} — Atlas Web Agency`,
      text: emailBody,
    }),
  })

  if (!res.ok) {
    const err = await res.json()
    console.error('[Contact] Resend error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
