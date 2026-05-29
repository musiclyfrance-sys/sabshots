export interface NavItem {
  label: string
  href: string
}

export interface PortfolioCard {
  title: string
  category: string
  year?: string
  image: string
  hoverImage?: string
  link?: string
  tags?: string[]
}

export interface FAQItem {
  question: string
  answer: string
}

export interface MarqueeItem {
  text?: string
  image?: string
  alt?: string
}
