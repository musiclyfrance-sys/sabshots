// CMS data model. The admin edits these; public pages read them (from the KV
// store, falling back to the seed built from site-data.ts).

export interface CmsPhoto {
  id: string // stable unique id within an album
  src: string // delivery URL: Cloudinary secure_url, or /assets/... for legacy/templates
  publicId?: string // Cloudinary public_id (enables transforms/crop); absent for legacy & templates
  alt: string
  wide: boolean // true = landscape (fills a 3:2 slot), false = portrait (2:3 slot)
  template?: boolean // true = placeholder image to be replaced by the photographer
  width?: number
  height?: number
  // Optional manual crop (normalized 0..1) applied on top of the smart crop.
  crop?: { x: number; y: number; w: number; h: number }
}

export interface CmsAlbum {
  slug: string
  title: string
  category: string
  year: string
  cover: string // cover delivery URL
  coverAlt: string
  coverPublicId?: string
  coverCrop?: { x: number; y: number; w: number; h: number }
  description: string
  photos: CmsPhoto[] // ordered; the 2-landscape + 6-portrait block structure is enforced on save
}

export interface CmsBlogPost {
  slug: string
  title: string
  tag: string
  readTime: string
  author: string
  image: string
  imagePublicId?: string
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
