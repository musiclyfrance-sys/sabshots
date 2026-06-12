import type { MetadataRoute } from 'next'
import { getPortfolioItems, getBlogPosts } from '@/lib/cms/public-data'

const BASE = 'https://www.sabshots.com'

export const revalidate = 300

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [portfolioItems, posts] = await Promise.all([getPortfolioItems(), getBlogPosts()])

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/portfolio`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq`, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const albums: MetadataRoute.Sitemap = portfolioItems.map((item) => ({
    url: `${BASE}/portfolio/${item.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const blog: MetadataRoute.Sitemap = posts
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      changeFrequency: 'monthly',
      priority: 0.6,
      ...(post.updatedAt ? { lastModified: new Date(post.updatedAt) } : {}),
    }))

  return [...staticPages, ...albums, ...blog]
}
