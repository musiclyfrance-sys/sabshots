// JWT session helpers (jose only, no native deps) so this can run in the proxy
// (Node runtime) and in route handlers.
import { SignJWT, jwtVerify } from 'jose'

export const SESSION_COOKIE = 'sabshots_admin'

const encoder = new TextEncoder()

function getSecret(): Uint8Array {
  const secret = process.env.SESSION_SECRET
  if (!secret) throw new Error('SESSION_SECRET is not set')
  return encoder.encode(secret)
}

export interface SessionPayload {
  email: string
}

export async function createSession(email: string): Promise<string> {
  return await new SignJWT({ email, role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getSecret())
}

export async function verifySession(
  token: string | undefined | null
): Promise<SessionPayload | null> {
  if (!token) return null
  try {
    const { payload } = await jwtVerify(token, getSecret())
    if (!payload.email) return null
    return { email: String(payload.email) }
  } catch {
    return null
  }
}
