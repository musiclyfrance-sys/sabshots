// Re-check auth inside every admin route/action (defense in depth — never rely on
// the proxy alone, per Next.js guidance).
import { cookies } from 'next/headers'
import { verifySession, SESSION_COOKIE } from './session'

export async function isAdmin(): Promise<boolean> {
  const store = await cookies()
  const token = store.get(SESSION_COOKIE)?.value
  return (await verifySession(token)) !== null
}
