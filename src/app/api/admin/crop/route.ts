import sharp from 'sharp'
import { getSupabase, BUCKET, ensureBucket } from '@/lib/cms/supabase'
import { isAdmin } from '@/lib/cms/require-admin'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

// Bakes a manual crop (drag + zoom from react-easy-crop) into a real optimized
// JPEG stored in Supabase, so the gallery keeps a proper <img> (alt + SEO) and the
// original is never altered (re-croppable).
export async function POST(request: Request) {
  if (!(await isAdmin())) return Response.json({ error: 'unauthorized' }, { status: 401 })

  let body: { source?: string; crop?: { x: number; y: number; width: number; height: number } }
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Requête invalide' }, { status: 400 })
  }
  const source = String(body?.source || '')
  const c = body?.crop
  if (!source || !c) return Response.json({ error: 'Paramètres manquants' }, { status: 400 })

  // Fetch the original image (Supabase public URL, or a local /assets path served by this deployment).
  let buf: Buffer
  try {
    let url = source
    if (!url.startsWith('http')) {
      const origin = new URL(request.url).origin
      url = origin + (url.startsWith('/') ? url : '/' + url)
    }
    const res = await fetch(url)
    if (!res.ok) throw new Error('not found')
    buf = Buffer.from(await res.arrayBuffer())
  } catch {
    return Response.json({ error: 'Image source illisible' }, { status: 400 })
  }

  try {
    const meta = await sharp(buf).metadata()
    const W = meta.width || 0
    const H = meta.height || 0
    const left = Math.min(Math.max(0, Math.round(c.x)), Math.max(0, W - 1))
    const top = Math.min(Math.max(0, Math.round(c.y)), Math.max(0, H - 1))
    const width = Math.max(1, Math.min(Math.round(c.width), W - left))
    const height = Math.max(1, Math.min(Math.round(c.height), H - top))
    if (width < 8 || height < 8) return Response.json({ error: 'Zone trop petite' }, { status: 400 })

    const out = await sharp(buf)
      .extract({ left, top, width, height })
      .resize(1600, 1600, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85, progressive: true, mozjpeg: true })
      .toBuffer()

    const sb = getSupabase()
    if (!sb) return Response.json({ error: 'Stockage non configuré' }, { status: 500 })
    await ensureBucket()
    const path = `crops/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`
    const up = await sb.storage.from(BUCKET).upload(path, out, {
      contentType: 'image/jpeg',
      cacheControl: '31536000',
      upsert: false,
    })
    if (up.error) return Response.json({ error: up.error.message }, { status: 500 })
    const { data } = sb.storage.from(BUCKET).getPublicUrl(path)
    return Response.json({ url: data.publicUrl, path })
  } catch {
    return Response.json({ error: 'Recadrage impossible' }, { status: 400 })
  }
}
