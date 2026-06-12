import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import FaqSection from '@/components/FaqSection'
import CtaSection from '@/components/CtaSection'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'SabShots | Paris Photoshoot FAQ and Booking Answers',
  description:
    'Find answers about booking a photo session in Paris with SabShots: locations, languages, photo delivery times, group sizes, and how custom quotes work.',
  alternates: { canonical: '/faq' },
  openGraph: {
    type: 'website',
    siteName: 'SabShots',
    url: 'https://www.sabshots.com/faq',
    title: 'SabShots | Paris Photoshoot FAQ and Booking Answers',
    description:
      'Find answers about booking a photo session in Paris with SabShots: locations, languages, photo delivery times, group sizes, and how custom quotes work.',
    images: ['/seo/og-image.jpg'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sabshots.com' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.sabshots.com/faq' },
  ],
}

export default function FaqPage() {
  return (
    <main style={{ background: 'rgb(240,242,248)', color: 'rgb(1,1,1)', fontFamily: 'Manrope, sans-serif', overflow: 'hidden' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <NavBar />

      <PageHero
        badge="FAQ"
        title="Paris Photoshoot Questions, Answered"
        subtitle="Everything about booking, locations, quotes, and your photo delivery."
      />

      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
