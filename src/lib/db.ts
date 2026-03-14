import { createClient, SupabaseClient } from '@supabase/supabase-js'

let _db: SupabaseClient | null = null

function getDb(): SupabaseClient {
  if (!_db) {
    const url = process.env.SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (!url || !key) throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required')
    _db = createClient(url, key, { auth: { persistSession: false } })
  }
  return _db
}

// Lazy proxy — client only created on first actual DB call (not at import time)
export const db = new Proxy({} as SupabaseClient, {
  get(_t, prop) {
    return (getDb() as unknown as Record<string | symbol, unknown>)[prop]
  },
})

// ─── Types ───────────────────────────────────────────────────────────────────

export type LeadStatus =
  | 'new'
  | 'demo_sent'
  | 'interested'
  | 'proposal_sent'
  | 'contract_pending'
  | 'client'
  | 'lost'

export type ContractStatus =
  | 'draft'
  | 'pending_approval'
  | 'approved'
  | 'sent'
  | 'signed'
  | 'cancelled'

export interface Lead {
  id: string
  business_name: string
  owner_name: string | null
  phone: string | null
  email: string | null
  address: string | null
  city: string | null
  niche: string | null
  website_url: string | null
  google_rating: number | null
  google_reviews: number | null
  google_place_id: string | null
  website_score: number | null
  lead_score: number | null
  status: LeadStatus
  demo_url: string | null
  notes: string | null
  created_at: string
  last_contacted_at: string | null
  follow_up_at: string | null
}

export interface Message {
  id: string
  lead_id: string
  channel: 'email' | 'whatsapp'
  direction: 'outbound' | 'inbound'
  subject: string | null
  body: string
  wa_msg_id: string | null
  sent_at: string
}

export interface Contract {
  id: string
  lead_id: string
  plan: 'starter' | 'professional' | 'premium'
  setup_fee: number
  monthly_fee: number
  status: ContractStatus
  content: string | null
  created_at: string
  approved_at: string | null
  sent_at: string | null
  signed_at: string | null
}

export interface AgencyKPIs {
  leads_this_week: number
  demos_sent_this_week: number
  replies_this_week: number
  total_clients: number
  current_mrr: number
  contracts_pending: number
  hot_leads: number
}
