// CMS data model. The admin edits these; public pages read them (from the
// Supabase-backed store, falling back to the seed built from site-data.ts).

export interface CmsPhoto {
  id: string // stable unique id within an album
  src: string // delivery URL: Supabase public URL, or /assets/... for legacy & templates
  path?: string // Supabase Storage object path (for delete/replace); absent for legacy & templates
  alt: string
  wide: boolean // true = landscape (fills a 3:2 slot), false = portrait (2:3 slot)
  template?: boolean // true = placeholder image to be replaced by the photographer
  width?: number
  height?: number
  original?: string // uncropped source URL (for re-cropping); falls back to src
  crop?: CropArea // react-easy-crop area in percent (for re-opening the cropper)
}

export interface CropArea {
  x: number
  y: number
  width: number
  height: number
}

export interface CmsAlbum {
  slug: string
  title: string
  category: string
  year: string
  cover: string // cover delivery URL (cropped to 3:2)
  coverAlt: string
  coverPath?: string
  coverOriginal?: string // uncropped cover source (for re-cropping)
  coverCrop?: CropArea
  description: string
  photos: CmsPhoto[] // ordered; 2-landscape + 6-portrait block structure enforced on save
}

export interface CmsBlogPost {
  slug: string
  title: string
  tag: string
  readTime: string
  author: string
  image: string
  imagePath?: string
  imageOriginal?: string
  imageCrop?: CropArea
  imageAlt?: string
  excerpt: string
  body: string // HTML produced by the editor (legacy seed posts are markdown)
  bodyFormat: 'html' | 'markdown'
  metaDescription?: string
  keyword?: string
  updatedAt?: string
  draft?: boolean
}

export interface CmsContent {
  albums: CmsAlbum[]
  posts: CmsBlogPost[]
  version: number
}
