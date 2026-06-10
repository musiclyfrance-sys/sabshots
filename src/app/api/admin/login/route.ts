import { cookies } from 'next/headers'
import { verifyCredentials } from '@/lib/cms/auth'
import { createSession, SESSION_COOKIE } from '@/lib/cms/session'

export async function POST(request: Request) {
  let email = ''
  let password = ''
  try {
    const body = await request.json()
    email = String(body?.email ?? '')
    password = String(body?.password ?? '')
  } catch {
    return Response.json({ error: 'Requête invalide' }, { status: 400 })
  }

  const ok = await verifyCredentials(email, password)
  if (!ok) {
    return Response.json({ error: 'Email ou mot de passe incorrect' }, { status: 401 })
  }

  const token = await createSession(email.trim().toLowerCase())
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
  return Response.json({ ok: true })
}
