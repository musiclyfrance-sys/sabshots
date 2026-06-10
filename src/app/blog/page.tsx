import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import FaqSection from '@/components/FaqSection'
import CtaSection from '@/components/CtaSection'
import PageHero from '@/components/PageHero'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts } from '@/lib/cms/public-data'

export const metadata = {
  title: 'SabShots | Paris Photography Tips & Guides',
  description:
    'Discover practical tips and local guides from a Paris photographer to help you plan your session and make the most of your time in the city.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    siteName: 'SabShots',
    url: 'https://www.sabshots.com/blog',
    title: 'SabShots | Paris Photography Tips & Guides',
    description:
      'Discover practical tips and local guides from a Paris photographer to help you plan your session and make the most of your time in the city.',
    images: ['/assets/blog-1.png'],
  },
}

export const revalidate = 300

export default async function BlogPage() {
  const blogPosts = (await getBlogPosts()).filter((p) => !p.draft)
  return (
    <main style={{ background: 'rgb(240, 242, 248)', color: 'rgb(1,1,1)', fontFamily: 'Manrope, sans-serif', overflow: 'hidden' }}>
      <NavBar />

      <PageHero
        badge="Our Blog"
        title="Paris Photography Tips & Guides"
        subtitle="Local guides and practical tips for photo sessions in Paris."
      />

      {/* Blog grid — cards are clickable */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 12px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`reveal ${['', 'reveal-delay-1', 'reveal-delay-2'][i % 3]}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <article
                className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: 'rgb(255,255,255)',
                  borderRadius: '34px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  height: '100%',
                }}
              >
                {/* Thumbnail */}
                <div style={{ width: '100%', height: '220px', position: 'relative', backgroundColor: 'rgb(220,222,228)' }}>
                  <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                {/* Card footer */}
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: '16px 20px' }}>
                  <span style={{ fontSize: '15px', fontWeight: 400, color: 'rgb(1,1,1)' }}>{post.title}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
