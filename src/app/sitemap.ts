import type { MetadataRoute } from 'next'
import { blogPosts, portfolioItems } from '@/lib/site-data'

const BASE = 'https://sabshots.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/portfolio`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/about`, changeFrequency: 'monthly', priority: 0.7 },
  ]

  const albums: MetadataRoute.Sitemap = portfolioItems.map((item) => ({
    url: `${BASE}/portfolio/${item.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...albums, ...posts]
}
