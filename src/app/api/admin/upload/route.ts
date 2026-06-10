import sharp from 'sharp'
import { getSupabase, BUCKET, ensureBucket } from '@/lib/cms/supabase'
import { isAdmin } from '@/lib/cms/require-admin'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

// Compresses an uploaded image (resize to 1600px long side, q85 progressive JPEG,
// EXIF-orientation applied then stripped) and stores it in Supabase Storage.
export async function POST(request: Request) {
  if (!(await isAdmin())) return Response.json({ error: 'unauthorized' }, { status: 401 })

  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return Response.json({ error: 'Requête invalide' }, { status: 400 })
  }

  const file = form.get('file')
  if (!(file instanceof File)) return Response.json({ error: 'Aucun fichier' }, { status: 400 })

  const folder = String(form.get('folder') || 'uploads').replace(/[^a-z0-9-_]/gi, '') || 'uploads'

  let optimized: Buffer
  let width = 0
  let height = 0
  try {
    const input = Buffer.from(await file.arrayBuffer())
    optimized = await sharp(input)
      .rotate()
      .resize(1600, 1600, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85, progressive: true, mozjpeg: true })
      .toBuffer()
    const meta = await sharp(optimized).metadata()
    width = meta.width || 0
    height = meta.height || 0
  } catch {
    return Response.json({ error: 'Image illisible' }, { status: 400 })
  }

  const sb = getSupabase()
  if (!sb) return Response.json({ error: 'Stockage non configuré' }, { status: 500 })
  await ensureBucket()

  const rand = Math.random().toString(36).slice(2, 8)
  const path = `${folder}/${Date.now()}-${rand}.jpg`
  const { error } = await sb.storage.from(BUCKET).upload(path, optimized, {
    contentType: 'image/jpeg',
    cacheControl: '31536000',
    upsert: false,
  })
  if (error) return Response.json({ error: error.message }, { status: 500 })

  const { data } = sb.storage.from(BUCKET).getPublicUrl(path)
  return Response.json({
    url: data.publicUrl,
    path,
    width,
    height,
    wide: width >= height,
  })
}
