export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'

export async function GET() {
  const checks: Record<string, boolean | string> = {}

  // ─── Env var checks ───────────────────────────────────────────────────────
  const required = {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
    GOOGLE_PLACES_API_KEY: process.env.GOOGLE_PLACES_API_KEY,
    WHATSAPP_PHONE_NUMBER_ID: process.env.WHATSAPP_PHONE_NUMBER_ID,
    WHATSAPP_ACCESS_TOKEN: process.env.WHATSAPP_ACCESS_TOKEN,
    WHATSAPP_VERIFY_TOKEN: process.env.WHATSAPP_VERIFY_TOKEN,
    OWNER_WHATSAPP_PHONE: process.env.OWNER_WHATSAPP_PHONE,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CRON_SECRET: process.env.CRON_SECRET,
  }

  for (const [key, val] of Object.entries(required)) {
    checks[key] = val ? '✅ set' : '❌ MISSING'
  }

  // ─── Supabase connection test ─────────────────────────────────────────────
  let dbStatus = '❌ failed'
  try {
    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false } }
    )
    const { error } = await supabase.from('leads').select('id').limit(1)
    dbStatus = error ? `❌ ${error.message}` : '✅ connected'
  } catch (e) {
    dbStatus = `❌ ${String(e)}`
  }
  checks['DB_CONNECTION'] = dbStatus

  // ─── WhatsApp token test ──────────────────────────────────────────────────
  let waStatus = '❌ failed'
  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}`,
      { headers: { Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}` } }
    )
    const data = await res.json()
    waStatus = data.error
      ? `❌ ${data.error.message}`
      : `✅ phone: ${data.display_phone_number ?? 'ok'}`
  } catch (e) {
    waStatus = `❌ ${String(e)}`
  }
  checks['WHATSAPP_API'] = waStatus

  const allOk = Object.values(checks).every((v) => String(v).startsWith('✅'))

  return NextResponse.json({ ok: allOk, checks }, { status: allOk ? 200 : 500 })
}
