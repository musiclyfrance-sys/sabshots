// Server-side Supabase client (service role — full access, never exposed to the
// browser). Supabase backs BOTH the content store and the photo storage, so this
// is the only external account the CMS needs.
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

export const BUCKET = 'sabshots'
export const CONTENT_PATH = 'content.json'

let client: SupabaseClient | null = null

export function getSupabase(): SupabaseClient | null {
  if (client) return client
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  client = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
  return client
}

export function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
  )
}

// Ensures the public storage bucket exists (idempotent). Safe to call before any
// upload; only the service role can create buckets.
export async function ensureBucket(): Promise<void> {
  const sb = getSupabase()
  if (!sb) throw new Error('Supabase is not configured')
  const { data } = await sb.storage.getBucket(BUCKET)
  if (!data) {
    await sb.storage.createBucket(BUCKET, {
      public: true,
      fileSizeLimit: '20MB',
    })
  }
}
