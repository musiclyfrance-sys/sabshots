// Content store backed by Supabase Storage (a single content.json object). Reads
// fall back to the seed (built from site-data.ts) when Supabase is not configured
// or still empty, so the public site never breaks while the CMS is being set up.
import type { CmsContent } from './types'
import { seedContent } from './seed'
import { getSupabase, BUCKET, CONTENT_PATH, ensureBucket } from './supabase'

export async function getContent(): Promise<CmsContent> {
  const sb = getSupabase()
  if (!sb) return seedContent()
  try {
    const { data, error } = await sb.storage.from(BUCKET).download(CONTENT_PATH)
    if (error || !data) return seedContent()
    const parsed = JSON.parse(await data.text()) as CmsContent
    if (!parsed || !Array.isArray(parsed.albums)) return seedContent()
    return parsed
  } catch {
    return seedContent()
  }
}

export async function saveContent(content: CmsContent): Promise<void> {
  const sb = getSupabase()
  if (!sb) throw new Error('Supabase is not configured')
  await ensureBucket()
  const body = new Blob([JSON.stringify(content)], { type: 'application/json' })
  const { error } = await sb.storage
    .from(BUCKET)
    .upload(CONTENT_PATH, body, {
      upsert: true,
      contentType: 'application/json',
      cacheControl: '0',
    })
  if (error) throw error
}

export async function hasStoredContent(): Promise<boolean> {
  const sb = getSupabase()
  if (!sb) return false
  try {
    const { data, error } = await sb.storage.from(BUCKET).download(CONTENT_PATH)
    if (error || !data) return false
    const parsed = JSON.parse(await data.text()) as CmsContent
    return !!(parsed && Array.isArray(parsed.albums))
  } catch {
    return false
  }
}
