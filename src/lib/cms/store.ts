// Content store backed by Upstash Redis (Vercel KV). Reads fall back to the seed
// (built from site-data.ts) when KV is not configured or still empty, so the
// public site never breaks while the CMS is being set up.
import { Redis } from '@upstash/redis'
import type { CmsContent } from './types'
import { seedContent } from './seed'

const CONTENT_KEY = 'sabshots:content:v1'

let client: Redis | null = null

export function getRedis(): Redis | null {
  if (client) return client
  const url =
    process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
  const token =
    process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  client = new Redis({ url, token })
  return client
}

export function isStoreConfigured(): boolean {
  return getRedis() !== null
}

export async function getContent(): Promise<CmsContent> {
  const redis = getRedis()
  if (!redis) return seedContent()
  try {
    const data = await redis.get<CmsContent>(CONTENT_KEY)
    if (!data || !Array.isArray(data.albums)) return seedContent()
    return data
  } catch {
    return seedContent()
  }
}

export async function saveContent(content: CmsContent): Promise<void> {
  const redis = getRedis()
  if (!redis) throw new Error('Content store (KV) is not configured')
  await redis.set(CONTENT_KEY, content)
}

export async function hasStoredContent(): Promise<boolean> {
  const redis = getRedis()
  if (!redis) return false
  try {
    const data = await redis.get<CmsContent>(CONTENT_KEY)
    return !!(data && Array.isArray(data.albums))
  } catch {
    return false
  }
}
