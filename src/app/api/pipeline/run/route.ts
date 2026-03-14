export const dynamic = 'force-dynamic'
export const maxDuration = 300

import { NextResponse } from 'next/server'
import { runDailyPipeline } from '@/lib/agents/orchestrator'

// Manual trigger from dashboard (no cron secret needed since dashboard has no auth)
export async function POST() {
  try {
    const result = await runDailyPipeline()
    return NextResponse.json({ ok: true, result })
  } catch (err) {
    console.error('[Pipeline] Manual run error:', err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
