export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { approveAndSendContract } from '@/lib/agents/contract'

export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const ok = await approveAndSendContract(params.id)
  if (!ok) return NextResponse.json({ error: 'Contract not found or already sent' }, { status: 400 })
  return NextResponse.json({ ok: true })
}
