import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import FaqSection from '@/components/FaqSection'
import CtaSection from '@/components/CtaSection'
import PageHero from '@/components/PageHero'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/lib/site-data'

export const metadata = {
  title: 'Paris Photography Tips & Guides | SabShots Photographer',
  description:
    'Discover tips and guides from a Paris photographer: the best photo spots, when to shoot the Eiffel Tower, what to wear, and how to prepare for your session.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    siteName: 'SabShots',
    url: 'https://sabshots.com/blog',
    title: 'Paris Photography Tips & Guides | SabShots Photographer',
    description:
      'Discover tips and guides from a Paris photographer: the best photo spots, when to shoot the Eiffel Tower, what to wear, and how to prepare for your session.',
    images: ['/assets/blog-1.png'],
  },
}

export default function BlogPage() {
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
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(1,1,1)' }}>{post.title}</span>
                  <span style={{ fontSize: '12px', fontWeight: 300, color: 'rgb(124,124,124)', backgroundColor: 'rgb(240,242,248)', padding: '3px 12px', borderRadius: '20px', whiteSpace: 'nowrap' }}>
                    {post.tag}
                  </span>
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
