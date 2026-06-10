// Admin password hash, stored in Supabase so it can be changed at runtime from
// the admin. Falls back to the ADMIN_PASSWORD_HASH env var (the initial password).
import bcrypt from 'bcryptjs'
import { getSupabase, BUCKET } from './supabase'

const AUTH_PATH = 'auth.json'

export async function getPasswordHash(): Promise<string | null> {
  const sb = getSupabase()
  if (sb) {
    try {
      const { data, error } = await sb.storage.from(BUCKET).download(AUTH_PATH)
      if (!error && data) {
        const parsed = JSON.parse(await data.text())
        if (parsed?.passwordHash) return parsed.passwordHash as string
      }
    } catch {
      // fall through to env
    }
  }
  return process.env.ADMIN_PASSWORD_HASH || null
}

export async function setPasswordHash(plainPassword: string): Promise<void> {
  const sb = getSupabase()
  if (!sb) throw new Error('Stockage non configuré')
  const hash = await bcrypt.hash(plainPassword, 10)
  const body = new Blob([JSON.stringify({ passwordHash: hash })], { type: 'application/json' })
  const { error } = await sb.storage.from(BUCKET).upload(AUTH_PATH, body, {
    upsert: true,
    contentType: 'application/json',
    cacheControl: '0',
  })
  if (error) throw error
}
