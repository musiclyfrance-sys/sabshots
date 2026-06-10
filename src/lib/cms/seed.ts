// Builds the initial CMS content from the existing hardcoded site-data. This is
// the fallback the public site uses until the KV store is populated, and the
// source the one-time migration imports into KV + Cloudinary.
import { portfolioItems, blogPosts } from '@/lib/site-data'
import type { CmsContent, CmsAlbum, CmsBlogPost, CmsPhoto } from './types'

// Template/placeholder assets shipped with the theme (not real client photos).
export function isTemplateSrc(src: string): boolean {
  return /\/(showcase-\d+\.png|portfolio-\d+\.png|portrait-\d+\.avif)$/.test(src)
}

let cached: CmsContent | null = null

export function seedContent(): CmsContent {
  if (cached) return cached

  const albums: CmsAlbum[] = portfolioItems.map((item) => ({
    slug: item.slug,
    title: item.title,
    category: item.category,
    year: item.year,
    cover: item.image,
    coverAlt: item.imageAlt,
    description: item.description,
    photos: item.images.map(
      (img, i): CmsPhoto => ({
        id: `${item.slug}-${i + 1}`,
        src: img.src,
        alt: img.alt,
        wide: img.wide,
        template: isTemplateSrc(img.src),
      })
    ),
  }))

  const posts: CmsBlogPost[] = blogPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    tag: p.tag,
    readTime: p.readTime,
    author: p.author,
    image: p.image,
    excerpt: p.excerpt,
    body: p.body,
    bodyFormat: 'markdown',
  }))

  cached = { albums, posts, version: 1 }
  return cached
}
