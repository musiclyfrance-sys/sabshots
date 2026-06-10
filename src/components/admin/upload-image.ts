'use client'

// Downscale in the browser first (respecting EXIF orientation) so the upload
// stays well under the serverless body limit, then the server (sharp) does the
// final compression. Net result matches the rest of the site: ~1600px, high quality.
export async function resizeImage(file: File, maxSide = 1800, quality = 0.9): Promise<Blob> {
  const bitmap = await createImageBitmap(file, {
    imageOrientation: 'from-image',
  } as ImageBitmapOptions)
  let { width, height } = bitmap
  const scale = Math.min(1, maxSide / Math.max(width, height))
  width = Math.round(width * scale)
  height = Math.round(height * scale)
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas indisponible')
  ctx.drawImage(bitmap, 0, 0, width, height)
  if (typeof bitmap.close === 'function') bitmap.close()
  return await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error('Compression impossible'))),
      'image/jpeg',
      quality
    )
  })
}

export interface UploadResult {
  url: string
  path: string
  width: number
  height: number
  wide: boolean
}

export async function uploadImage(file: File, folder: string): Promise<UploadResult> {
  const blob = await resizeImage(file)
  const fd = new FormData()
  fd.append('file', blob, 'photo.jpg')
  fd.append('folder', folder)
  const r = await fetch('/api/admin/upload', { method: 'POST', body: fd })
  if (!r.ok) {
    const d = await r.json().catch(() => ({}))
    throw new Error(d.error || 'Upload impossible')
  }
  return (await r.json()) as UploadResult
}
