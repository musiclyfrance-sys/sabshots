// Adapters the public pages use to read CMS content (from Supabase, falling back
// to the seed). React `cache` dedupes the fetch within a single render/request.
import { cache } from 'react'
import { getContent } from './store'
import type { CmsBlogPost } from './types'

export interface PublicPhoto {
  src: string
  alt: string
  wide: boolean
}

export interface PublicAlbum {
  slug: string
  title: string
  category: string
  year: string
  image: string
  imageAlt: string
  description: string
  images: PublicPhoto[]
}

export const getPortfolioItems = cache(async (): Promise<PublicAlbum[]> => {
  const { albums } = await getContent()
  return albums.map((a) => ({
    slug: a.slug,
    title: a.title,
    category: a.category,
    year: a.year,
    image: a.cover,
    imageAlt: a.coverAlt,
    description: a.description,
    images: a.photos.map((p) => ({
      src: p.src,
      alt: p.alt,
      wide: p.wide,
    })),
  }))
})

export const getPortfolioItem = cache(
  async (slug: string): Promise<PublicAlbum | null> => {
    const items = await getPortfolioItems()
    return items.find((a) => a.slug === slug) ?? null
  }
)

export const getBlogPosts = cache(async (): Promise<CmsBlogPost[]> => {
  const { posts } = await getContent()
  return posts
})

export const getBlogPost = cache(
  async (slug: string): Promise<CmsBlogPost | null> => {
    const posts = await getBlogPosts()
    return posts.find((p) => p.slug === slug) ?? null
  }
)
