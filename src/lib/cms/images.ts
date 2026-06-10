// Client-safe image helpers. Photos are served straight from Supabase Storage
// public URLs (stored as the photo `src`); next/image then optimizes them per
// device. Cropping into a 3:2 / 2:3 block is lossless via object-position driven
// by the stored focal point.

function supaOrigin(): string {
  const raw = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim()
  if (!raw) return ''
  try {
    return new URL(raw).origin
  } catch {
    return raw.replace(/\/+$/, '')
  }
}
const SUPA = supaOrigin()
const BUCKET = 'sabshots'

// Build a public URL from a storage object path. `src` values are usually already
// full URLs (Supabase public URL, or /assets/... legacy); this is for path-only cases.
export function storageUrl(pathOrUrl: string): string {
  if (!pathOrUrl) return ''
  if (pathOrUrl.startsWith('http') || pathOrUrl.startsWith('/')) return pathOrUrl
  if (!SUPA) return ''
  return `${SUPA}/storage/v1/object/public/${BUCKET}/${pathOrUrl}`
}

// CSS object-position string from a normalized focal point (defaults to centre).
export function focalPosition(focusX?: number, focusY?: number): string {
  const x = Math.round((focusX ?? 0.5) * 100)
  const y = Math.round((focusY ?? 0.5) * 100)
  return `${x}% ${y}%`
}
