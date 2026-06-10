// Client-safe Cloudinary delivery-URL builder. The cloud name is public (it
// appears in every delivery URL), exposed via NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME.
// Cloudinary does the compression (q_auto) and format negotiation (f_auto), and
// smart, face-aware cropping (g_auto) into the requested aspect ratio.

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || ''

export type Aspect = '3:2' | '2:3' | 'original'

export interface CldOptions {
  width?: number
  aspect?: Aspect
  crop?: { x: number; y: number; w: number; h: number } // normalized 0..1 manual crop
}

export function cldUrl(publicId: string, opts: CldOptions = {}): string {
  if (!CLOUD || !publicId) return ''
  const { width = 1600, aspect = 'original', crop } = opts
  const t: string[] = ['f_auto', 'q_auto']

  if (crop) {
    // Apply the manual crop first (normalized coordinates), then fit to width.
    t.push(
      'c_crop',
      `g_xy_center`,
      `x_${crop.x.toFixed(4)}`,
      `y_${crop.y.toFixed(4)}`,
      `w_${crop.w.toFixed(4)}`,
      `h_${crop.h.toFixed(4)}`,
      'fl_relative'
    )
  } else if (aspect === '3:2' || aspect === '2:3') {
    t.push('c_fill', `ar_${aspect}`, 'g_auto')
  } else {
    t.push('c_limit')
  }

  t.push(`w_${width}`)
  return `https://res.cloudinary.com/${CLOUD}/image/upload/${t.join(',')}/${publicId}`
}

export function isCloudinaryConfigured(): boolean {
  return CLOUD.length > 0
}
