import { notFound } from 'next/navigation'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CtaSection from '@/components/CtaSection'
import ProcessSection from '@/components/ProcessSection'
import ExperienceHero from '@/components/experience/ExperienceHero'
import ExperienceIntro from '@/components/experience/ExperienceIntro'
import ExperienceGallery from '@/components/experience/ExperienceGallery'
import ExperienceSpots from '@/components/experience/ExperienceSpots'
import ExperienceFaq from '@/components/experience/ExperienceFaq'
import MoreExperiences from '@/components/experience/MoreExperiences'
import { EXPERIENCES, getExperience } from '@/lib/experiences'
import { getPortfolioItem, getPortfolioItems } from '@/lib/cms/public-data'

export const revalidate = 300
export const dynamicParams = false

export function generateStaticParams() {
  return EXPERIENCES.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const exp = getExperience(slug)
  if (!exp) return { title: 'Not Found' }
  return {
    title: `SabShots | ${exp.titleTag}`,
    description: exp.metaDescription,
    keywords: [exp.keyword, 'Paris photographer', 'Paris photography'],
    alternates: { canonical: `/experiences/${slug}` },
    openGraph: {
      type: 'website',
      siteName: 'SabShots',
      url: `https://www.sabshots.com/experiences/${slug}`,
      title: `SabShots | ${exp.titleTag}`,
      description: exp.metaDescription,
      images: [exp.ogImage],
    },
  }
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const exp = getExperience(slug)
  if (!exp) notFound()

  // Gallery photos: from the linked CMS album (editable in the admin) when
  // available, otherwise the curated list. Album covers also feed the cards.
  let galleryPhotos = exp.galleryPhotos ?? []
  if (exp.galleryAlbumSlug) {
    const album = await getPortfolioItem(exp.galleryAlbumSlug)
    if (album && album.images.length > 0) {
      galleryPhotos = album.images.slice(0, 6).map((img) => ({ src: img.src, alt: img.alt }))
    }
  }

  // Sibling experiences for the cross-link grid (next three, cyclic).
  const index = EXPERIENCES.findIndex((e) => e.slug === slug)
  const siblings = [1, 2, 3].map((offset) => EXPERIENCES[(index + offset) % EXPERIENCES.length])
  const albums = await getPortfolioItems()
  const siblingCards = siblings.map((s) => {
    const albumCover = s.galleryAlbumSlug ? albums.find((a) => a.slug === s.galleryAlbumSlug) : undefined
    return {
      href: `/experiences/${s.slug}`,
      name: s.name,
      image: albumCover?.image ?? s.galleryPhotos?.[0]?.src ?? s.ogImage,
      imageAlt: albumCover?.imageAlt ?? s.galleryPhotos?.[0]?.alt ?? s.h1,
    }
  })

  const base = 'https://www.sabshots.com'
  const abs = (src: string) => (src.startsWith('http') ? src : `${base}${src}`)

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: exp.h1,
    serviceType: exp.keyword,
    description: exp.metaDescription,
    url: `${base}/experiences/${slug}`,
    image: abs(exp.ogImage),
    areaServed: { '@type': 'City', name: 'Paris' },
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${base}/#business`,
      name: 'SabShots',
      url: base,
    },
  }
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: exp.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: base },
      { '@type': 'ListItem', position: 2, name: 'Experiences', item: `${base}/experiences` },
      { '@type': 'ListItem', position: 3, name: exp.name, item: `${base}/experiences/${slug}` },
    ],
  }

  return (
    <main
      className="relative overflow-hidden"
      style={{ background: 'rgb(247, 248, 253)', color: 'rgb(1, 1, 1)' }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <NavBar />
      <ExperienceHero
        badge={exp.badge}
        title={exp.h1}
        subtitle={exp.heroSubtitle}
        secondaryHref={exp.secondaryCta.href}
        secondaryLabel={exp.secondaryCta.label}
      />
      <ExperienceIntro h2={exp.introH2} paragraphs={exp.introParagraphs} linksLine={exp.linksLine} />
      <ExperienceGallery title={exp.galleryH2} subtitle={exp.gallerySubtitle} photos={galleryPhotos} />
      <ExperienceSpots h2={exp.spotsH2} spots={exp.spots} />
      <ProcessSection />
      <ExperienceFaq
        title={`${exp.name} Photoshoot Questions`}
        subtitle="The answers clients ask for before booking this experience."
        items={exp.faq}
      />
      <MoreExperiences cards={siblingCards} />
      <CtaSection />
      <Footer />
    </main>
  )
}
