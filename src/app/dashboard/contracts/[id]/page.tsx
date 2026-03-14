'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function ContractReview() {
  const { id } = useParams()
  const router = useRouter()
  const [contract, setContract] = useState<{
    id: string
    plan: string
    setup_fee: number
    monthly_fee: number
    content: string
    status: string
    leads: { business_name: string; phone: string; city: string; niche: string }
  } | null>(null)
  const [approving, setApproving] = useState(false)

  useEffect(() => {
    fetch(`/api/contracts/${id}`)
      .then((r) => r.json())
      .then(setContract)
  }, [id])

  async function approve() {
    setApproving(true)
    await fetch(`/api/contracts/${id}/approve`, { method: 'POST' })
    router.push('/dashboard')
  }

  if (!contract) {
    return (
      <div className="min-h-screen bg-[#0a0f1e] text-white flex items-center justify-center">
        <div className="text-slate-400">Loading contract...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white px-6 py-10 max-w-3xl mx-auto">
      <a href="/dashboard" className="text-slate-400 hover:text-white text-sm mb-8 block">← Back to Dashboard</a>

      <div className="bg-white/5 border border-orange-500/30 rounded-2xl p-6 mb-8">
        <h1 className="text-2xl font-black mb-2">Contract Review</h1>
        <div className="text-slate-300 space-y-1 text-sm">
          <div><strong>Client:</strong> {contract.leads.business_name}</div>
          <div><strong>Niche:</strong> {contract.leads.niche} · {contract.leads.city}</div>
          <div><strong>Phone:</strong> {contract.leads.phone}</div>
          <div><strong>Plan:</strong> <span className="capitalize font-bold text-blue-400">{contract.plan}</span></div>
          <div><strong>Setup:</strong> <span className="text-green-400 font-bold">${contract.setup_fee}</span></div>
          <div><strong>Monthly:</strong> <span className="text-blue-400 font-bold">${contract.monthly_fee}/mo</span></div>
        </div>
      </div>

      {/* Contract content */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 prose prose-invert max-w-none">
        <pre className="whitespace-pre-wrap font-sans text-sm text-slate-200 leading-relaxed">
          {contract.content}
        </pre>
      </div>

      {contract.status === 'pending_approval' ? (
        <button
          onClick={approve}
          disabled={approving}
          className="w-full bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white font-black text-lg py-4 rounded-2xl transition-all"
        >
          {approving ? 'Sending contract to client...' : '✅ Approve & Send to Client'}
        </button>
      ) : (
        <div className="text-center text-slate-400 py-4 border border-white/10 rounded-2xl">
          Contract status: <strong className="text-white capitalize">{contract.status}</strong>
        </div>
      )}
    </div>
  )
}
