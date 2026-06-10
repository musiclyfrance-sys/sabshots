import { isAdmin } from '@/lib/cms/require-admin'
import { verifyCredentials } from '@/lib/cms/auth'
import { setPasswordHash } from '@/lib/cms/admin-secret'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  if (!(await isAdmin())) return Response.json({ error: 'unauthorized' }, { status: 401 })

  let body: { current?: string; next?: string }
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Requête invalide' }, { status: 400 })
  }
  const current = String(body?.current ?? '')
  const next = String(body?.next ?? '')
  if (next.length < 8) {
    return Response.json({ error: 'Le nouveau mot de passe doit faire au moins 8 caractères.' }, { status: 400 })
  }

  const email = process.env.ADMIN_EMAIL || ''
  const ok = await verifyCredentials(email, current)
  if (!ok) return Response.json({ error: 'Mot de passe actuel incorrect.' }, { status: 401 })

  try {
    await setPasswordHash(next)
  } catch (e) {
    return Response.json({ error: (e as Error).message }, { status: 500 })
  }
  return Response.json({ ok: true })
}
