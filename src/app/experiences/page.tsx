import Link from 'next/link'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CtaSection from '@/components/CtaSection'
import FaqSection from '@/components/FaqSection'
import PageHero from '@/components/PageHero'
import { EXPERIENCES } from '@/lib/experiences'
import { getPortfolioItems } from '@/lib/cms/public-data'

export const revalidate = 300

export const metadata = {
  title: 'SabShots | Paris Photoshoot Experiences, Spots and Themes',
  description:
    'Explore Paris photoshoot experiences with SabShots: the Louvre, the Eiffel Tower, Montmartre, Le Marais, surprise proposals, weddings, and nights out in Paris.',
  alternates: { canonical: '/experiences' },
  openGraph: {
    type: 'website',
    siteName: 'SabShots',
    url: 'https://www.sabshots.com/experiences',
    title: 'SabShots | Paris Photoshoot Experiences, Spots and Themes',
    description:
      'Explore Paris photoshoot experiences with SabShots: the Louvre, the Eiffel Tower, Montmartre, Le Marais, surprise proposals, weddings, and nights out in Paris.',
    images: ['/seo/og-image.jpg'],
  },
}

const base = 'https://www.sabshots.com'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: base },
    { '@type': 'ListItem', position: 2, name: 'Experiences', item: `${base}/experiences` },
  ],
}

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Paris Photoshoot Experiences',
  itemListElement: EXPERIENCES.map((e, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: e.h1,
    url: `${base}/experiences/${e.slug}`,
  })),
}

export default async function ExperiencesPage() {
  const albums = await getPortfolioItems()
  const cards = EXPERIENCES.map((e) => {
    const albumCover = e.galleryAlbumSlug ? albums.find((a) => a.slug === e.galleryAlbumSlug) : undefined
    return {
      slug: e.slug,
      name: e.name,
      tagline: e.cardTagline,
      image: albumCover?.image ?? e.galleryPhotos?.[0]?.src ?? e.ogImage,
      imageAlt: albumCover?.imageAlt ?? e.galleryPhotos?.[0]?.alt ?? e.h1,
    }
  })

  return (
    <main
      style={{
        background: 'rgb(240, 242, 248)',
        color: 'rgb(1,1,1)',
        fontFamily: 'Manrope, sans-serif',
        overflow: 'hidden',
      }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <NavBar />

      <PageHero
        badge="Experiences"
        title="Paris Photoshoot Experiences"
        subtitle="Pick a place or a moment, and I will build the session around it."
      />

      {/* SEO intro */}
      <section style={{ maxWidth: '820px', margin: '0 auto', padding: '0 28px 40px' }}>
        <p
          style={{
            fontSize: '17px',
            fontWeight: 300,
            lineHeight: '27px',
            color: 'rgb(60,60,60)',
            margin: 0,
            textAlign: 'center',
          }}
        >
          Every great Paris photography session starts with the right setting. As a Paris
          photographer, I shoot each of these experiences week after week: sunrise at the
          Eiffel Tower, golden reflections at the Louvre, quiet lanes in Montmartre and
          Le Marais, surprise proposals, weddings, and nights out. Choose yours below,
          and I will handle the route, the timing, and the light.
        </p>
      </section>

      {/* Experience cards grid */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 12px 60px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
          }}
        >
          {cards.map((card, i) => (
            <Link
              key={card.slug}
              href={`/experiences/${card.slug}`}
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
                <div style={{ width: '100%', height: '220px', position: 'relative', backgroundColor: 'rgb(220,222,228)' }}>
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '16px 20px 18px' }}>
                  <h2 style={{ fontSize: '17px', fontWeight: 500, color: 'rgb(1,1,1)', margin: 0 }}>{card.name}</h2>
                  <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: '20px', color: 'rgb(124,124,124)', margin: 0 }}>
                    {card.tagline}
                  </p>
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
