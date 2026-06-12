import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CtaSection from '@/components/CtaSection'
import { getPortfolioItems, getPortfolioItem } from '@/lib/cms/public-data'

export const revalidate = 300
export const dynamicParams = true

// Per-album SEO: a keyword H1 visitors actually search for, a 50-60 character
// title tag (with the "SabShots | " prefix), and a 150-160 character meta
// description starting with an action verb. Albums added later in the admin
// fall back to a sensible default built from their title.
const ALBUM_SEO: Record<string, { h1: string; titleTag: string; metaDescription: string }> = {
  'street-photography': {
    h1: 'Street Style Photoshoot in Paris',
    titleTag: 'Street Style and Lifestyle Photoshoot in Paris',
    metaDescription:
      'Book a street style photoshoot in Paris with SabShots: editorial portraits and candid lifestyle photos across Haussmann avenues, cafes, and hidden courtyards.',
  },
  'eiffel-tower': {
    h1: 'Eiffel Tower Photoshoot in Paris',
    titleTag: 'Private Eiffel Tower Photoshoot in Paris',
    metaDescription:
      'Book a private Eiffel Tower photoshoot in Paris with SabShots, from a quiet sunrise at the Trocadero to the evening sparkles, with easy guidance at every step.',
  },
  'instagrammable-paris': {
    h1: 'Instagrammable Paris Photoshoot',
    titleTag: 'Instagrammable Paris Photoshoot, Aesthetic Spots',
    metaDescription:
      'Capture instagrammable Paris with SabShots: pastel streets, the Louvre pyramid, elegant cafe terraces, and rooftop views, shot for a feed that truly stands out.',
  },
  couples: {
    h1: 'Couple Photoshoot in Paris',
    titleTag: 'Couple Photoshoot in Paris with the Eiffel Tower',
    metaDescription:
      'Book a couple photoshoot in Paris with SabShots, from the Eiffel Tower at sunrise to quiet cobbled streets, for natural photos of you two in the city of love.',
  },
  proposals: {
    h1: 'Paris Proposal Photographer',
    titleTag: 'Paris Proposal Photographer, Surprise Proposals',
    metaDescription:
      'Plan a surprise proposal in Paris with SabShots: a discreet proposal photographer at the Trocadero or by the Seine, capturing the exact moment they say yes.',
  },
  families: {
    h1: 'Family Photoshoot in Paris',
    titleTag: 'Family Photoshoot in Paris for All Ages',
    metaDescription:
      'Book a family photoshoot in Paris with SabShots: relaxed sessions at the Eiffel Tower, the Louvre, and the parks, with real smiles from kids and parents alike.',
  },
  weddings: {
    h1: 'Paris Wedding Photographer',
    titleTag: 'Paris Wedding and Elopement Photographer',
    metaDescription:
      'Capture your Paris wedding or elopement with SabShots, from chateau ceremonies to portraits in front of the Eiffel Tower, in timeless and elegant photographs.',
  },
  nightclubs: {
    h1: 'Paris Nightlife and Event Photographer',
    titleTag: 'Paris Nightlife, Club and Event Photographer',
    metaDescription:
      'Cover your Paris event with SabShots: nightlife and club photography, DJ sets, private parties, and brand events, captured with energy and delivered fast.',
  },
}

function albumSeo(slug: string, title: string, description: string) {
  return (
    ALBUM_SEO[slug] ?? {
      h1: `${title} Photo Session in Paris`,
      titleTag: `${title} Photo Session in Paris`,
      metaDescription: description,
    }
  )
}

export async function generateStaticParams() {
  const items = await getPortfolioItems()
  return items.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = await getPortfolioItem(slug)
  if (!item) return { title: 'Not Found' }
  const seo = albumSeo(slug, item.title, item.description)
  return {
    title: `SabShots | ${seo.titleTag}`,
    description: seo.metaDescription,
    alternates: { canonical: `/portfolio/${slug}` },
    openGraph: {
      type: 'article',
      siteName: 'SabShots',
      url: `https://www.sabshots.com/portfolio/${slug}`,
      title: `SabShots | ${seo.titleTag}`,
      description: seo.metaDescription,
      images: [item.image],
    },
  }
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = await getPortfolioItem(slug)
  if (!item) notFound()

  const seo = albumSeo(slug, item.title, item.description)
  // The description is written in the admin; blank lines split it into paragraphs.
  const descriptionParagraphs = item.description.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)

  // Other projects for "more work" section
  const others = (await getPortfolioItems()).filter((p) => p.slug !== slug).slice(0, 3)

  const galleryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: seo.h1,
    description: descriptionParagraphs[0] ?? item.description,
    url: `https://www.sabshots.com/portfolio/${slug}`,
    image: item.images.map((img) =>
      img.src.startsWith('http') ? img.src : `https://www.sabshots.com${img.src}`
    ),
  }
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sabshots.com' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://www.sabshots.com/portfolio' },
      { '@type': 'ListItem', position: 3, name: item.title, item: `https://www.sabshots.com/portfolio/${slug}` },
    ],
  }

  return (
    <main style={{ background: 'rgb(240,242,248)', color: 'rgb(1,1,1)', fontFamily: 'Manrope, sans-serif', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <NavBar />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '120px 28px 0' }}>

        {/* Header card — back link + title + description (no date, no icon) */}
        <div
          className="reveal"
          style={{
            backgroundColor: 'rgb(255,255,255)', borderRadius: '34px',
            padding: '28px 32px', marginBottom: '40px',
          }}
        >
          <Link
            href="/portfolio"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontSize: '14px', fontWeight: 300, color: 'rgb(1,1,1)',
              textDecoration: 'none', marginBottom: '20px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to portfolio
          </Link>
          <h1 style={{ fontSize: 'clamp(30px, 6.5vw, 40px)', fontWeight: 500, lineHeight: '1.2', margin: '0 0 10px', color: 'rgb(1,1,1)' }}>
            {seo.h1}
          </h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '720px' }}>
            {descriptionParagraphs.map((paragraph, i) => (
              <p key={i} style={{ fontSize: '16px', fontWeight: 300, lineHeight: '25px', color: 'rgb(124,124,124)', margin: 0 }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Gallery — alternating landscape (3:2) and portrait (2:3) rows.
            Desktop: 2 per row. Mobile: landscapes 2-up, portraits full-width. */}
        <div className="album-gallery reveal">
          {item.images.map((img, i) => (
            <div key={i} className={`album-shot ${img.wide ? 'album-shot-l' : 'album-shot-p'}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 700px) 100vw, 480px"
                priority={i < 2}
              />
            </div>
          ))}
        </div>

        {/* More Work — centered, at the bottom */}
        <div className="reveal" style={{ paddingTop: '80px', paddingBottom: '8px' }}>
          <h2 style={{ fontSize: 'clamp(26px, 5vw, 32px)', fontWeight: 500, lineHeight: '1.3', margin: '0 0 28px', color: 'rgb(1,1,1)', textAlign: 'center' }}>
            More Work
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
            {others.map((other) => (
              <Link key={other.slug} href={`/portfolio/${other.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div
                  className="hover:scale-105 transition-transform duration-300"
                  style={{
                    position: 'relative', aspectRatio: '3/2', borderRadius: '20px',
                    overflow: 'hidden', backgroundColor: 'rgb(200,202,208)', cursor: 'pointer',
                  }}
                >
                  <Image src={other.image} alt={other.title} fill style={{ objectFit: 'cover' }} sizes="320px" />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: '14px 16px', background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 70%)' }}>
                    <span style={{ color: 'white', fontSize: '15px', fontWeight: 500 }}>{other.title}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Pretty divider before the CTA (same as the portfolio list page) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', maxWidth: '900px', margin: '64px auto 0', padding: '0 28px' }}>
        <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(1,1,1,0.16))' }} />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(1,1,1,0.4)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(1,1,1,0.16))' }} />
      </div>

      <CtaSection />
      <Footer />
    </main>
  )
}
