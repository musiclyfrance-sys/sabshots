import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'
import TrustedGloballySection from '@/components/TrustedGloballySection'
import PortfolioSection from '@/components/PortfolioSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import ProcessSection from '@/components/ProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CtaSection from '@/components/CtaSection'
import FaqSection from '@/components/FaqSection'
import { BlogSection } from '@/components/BlogSection'
import Footer from '@/components/Footer'
import { getPortfolioItems, getBlogPosts } from '@/lib/cms/public-data'

export const revalidate = 300

export default async function Home() {
  const projects = (await getPortfolioItems()).slice(0, 6)
  const blogTeaser = (await getBlogPosts())
    .filter((p) => !p.draft)
    .slice(0, 3)
    .map((p, i) => ({
      id: i + 1,
      title: p.title,
      category: p.tag,
      image: p.image,
      imageAlt: p.imageAlt || p.title,
      href: `/blog/${p.slug}`,
    }))
  return (
    <main
      className="relative overflow-hidden"
      style={{ background: 'rgb(247, 248, 253)', color: 'rgb(1, 1, 1)' }}
    >
      <NavBar />
      <HeroSection />
      <TrustedGloballySection />
      <PortfolioSection projects={projects} />
      <ExpertiseSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqSection />
      <BlogSection posts={blogTeaser} />
      <Footer />
    </main>
  )
}
