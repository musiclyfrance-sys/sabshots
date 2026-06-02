// Shared data for blog posts and portfolio items
// Used by both list pages and detail pages

// Primary conversion CTA — opens WhatsApp with a pre-filled booking message so
// Yassir knows the lead came from the website. Single source of truth for every
// "Book a Session" button across the site.
export const WHATSAPP_BOOKING_URL =
  'https://wa.me/33652077909?text=Hey%2C%20I%20just%20saw%20your%20website%20and%20I%20want%20to%20book%20a%20photo%20session%20in%20Paris.'

export interface BlogPost {
  slug: string
  title: string
  tag: string
  readTime: string
  author: string
  image: string
  excerpt: string
  body: string
}

export interface PortfolioItem {
  slug: string
  title: string
  category: string
  year: string
  image: string
  description: string
  images: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-photo-spots-in-paris',
    title: 'The Best Photo Spots in Paris',
    tag: 'Guide',
    readTime: '6 min read',
    author: 'Yassir Sabounji',
    image: '/assets/blog-1.png',
    excerpt: 'A guide to the most beautiful places to shoot in Paris, from the icons to the hidden corners.',
    body: `Paris is one of the most photogenic cities in the world, and choosing the right spot makes all the difference. Here are the locations I love the most for a photo session.

## The Trocadéro

The Trocadéro offers the cleanest view of the Eiffel Tower, and early morning is the best time to shoot there before the crowds arrive.

## The Louvre and the Pyramid

The glass pyramid and the long arcades of the Louvre create striking lines and reflections that work beautifully for portraits.

## Montmartre

The cobbled streets and the steps below the Sacré-Cœur give a romantic, timeless feel that suits couples and solo travelers alike.

## Hidden Streets and Rooftops

Beyond the icons, Paris is full of quiet streets, flower-covered façades, and rooftop views that make your photos feel personal and unique.`,
  },
  {
    slug: 'when-to-shoot-eiffel-tower',
    title: 'When to Shoot at the Eiffel Tower',
    tag: 'Tips',
    readTime: '5 min read',
    author: 'Yassir Sabounji',
    image: '/assets/blog-2.png',
    excerpt: 'The best times of day to photograph the Eiffel Tower, and how to avoid the crowds.',
    body: `The Eiffel Tower is stunning at any hour, but the light and the crowds change everything. Here is how I plan a session around it.

## Sunrise

Sunrise is my favorite moment. The light is soft and warm, the streets are empty, and you get the tower almost to yourself.

## Golden Hour

The hour before sunset gives a beautiful glow on the stone and the skyline, and it is perfect for romantic and couple sessions.

## Blue Hour and Night

After sunset, the tower sparkles for five minutes at the top of each hour, which creates a magical backdrop for evening photos.

## A Quick Tip

Weekdays are far quieter than weekends, so we can find clean angles even at the most popular viewpoints.`,
  },
  {
    slug: 'how-to-prepare-paris-session',
    title: 'How to Prepare for Your Paris Session',
    tag: 'Guide',
    readTime: '5 min read',
    author: 'Yassir Sabounji',
    image: '/assets/blog-3.png',
    excerpt: 'Simple steps to get the most out of your photo session in Paris.',
    body: `A little preparation goes a long way toward relaxed, natural photos. Here is how to get ready for your session.

## Plan Your Outfits

Choose outfits that make you feel confident and that match the mood of the location. Solid colors and simple textures usually photograph best.

## Think About Timing

Early morning gives the softest light and the fewest people, so we have more freedom to move and create.

## Share Your Vision

Send me a few references or ideas before the shoot, and I will plan a route and a style that fit exactly what you want.

## Just Relax

The best images come when you feel at ease, so trust the process and enjoy your time in Paris.`,
  },
  {
    slug: 'instagrammable-paris-guide',
    title: 'A Local Guide to Instagrammable Paris',
    tag: 'Guide',
    readTime: '6 min read',
    author: 'Yassir Sabounji',
    image: '/assets/showcase-4.png',
    excerpt: 'The most photogenic and shareable spots across Paris for your feed.',
    body: `If you want photos that stand out on your feed, Paris has endless backdrops. These are the spots I return to again and again.

## Colorful Streets

Rue Crémieux and the streets of the Marais are full of pastel façades and charming details that look incredible in a single frame.

## Cafés and Terraces

A classic Parisian café terrace, with its woven chairs and warm tones, is one of the most recognizable backdrops in the world.

## Gardens and Bridges

The Tuileries, the Pont Alexandre III, and the banks of the Seine offer elegant scenes in every season.

## Rooftops

A rooftop view at golden hour turns the whole skyline into your background, and it is always a favorite.`,
  },
  {
    slug: 'what-to-wear-paris-photoshoot',
    title: 'What to Wear for Your Paris Photoshoot',
    tag: 'Tips',
    readTime: '5 min read',
    author: 'Yassir Sabounji',
    image: '/assets/showcase-3.png',
    excerpt: 'Outfit tips to look your best and feel comfortable during your Paris session.',
    body: `What you wear shapes the whole mood of your photos. Here are a few simple ideas that always work well in Paris.

## Keep It Timeless

Classic pieces in solid colors never go out of style, and they keep the focus on you rather than on busy patterns.

## Match the Season

Light fabrics and soft tones suit spring and summer, while coats and scarves add elegance to autumn and winter sessions.

## Add a Touch of Color

A single bold accent, like a red dress or a warm coat, stands out beautifully against the soft tones of the city.

## Comfort Matters

We may walk between a few locations, so choose shoes and clothes that let you move and feel relaxed.`,
  },
]

// Portfolio categories, ordered by priority. Images are placeholders for now,
// to be replaced with real photos per category.
export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'street-photography',
    title: 'Street & Lifestyle',
    category: 'Lifestyle',
    year: '2025',
    image: '/assets/portfolio-2.png',
    description: 'Candid, editorial moments captured in the streets and hidden corners of Paris.',
    images: ['/assets/portfolio-2.png', '/assets/showcase-3.png', '/assets/portrait-1.avif', '/assets/portrait-2.avif', '/assets/portrait-3.avif', '/assets/portfolio-5.png', '/assets/showcase-4.png', '/assets/portrait-4.avif', '/assets/portrait-1.avif', '/assets/portrait-2.avif'],
  },
  {
    slug: 'eiffel-tower',
    title: 'Eiffel Tower',
    category: 'Eiffel Tower',
    year: '2025',
    image: '/assets/portfolio-1.png',
    description: 'Private sessions with the most iconic view in Paris, from golden hour to the evening sparkle.',
    images: ['/assets/portfolio-1.png', '/assets/showcase-1.png', '/assets/portrait-3.avif', '/assets/portrait-4.avif', '/assets/portrait-1.avif', '/assets/portfolio-6.png', '/assets/showcase-2.png', '/assets/portrait-2.avif', '/assets/portrait-3.avif', '/assets/portrait-4.avif'],
  },
  {
    slug: 'instagrammable-paris',
    title: 'Instagrammable',
    category: 'Instagram',
    year: '2025',
    image: '/assets/portfolio-5.png',
    description: 'The most photogenic spots across the whole city, ready for your feed.',
    images: ['/assets/portfolio-5.png', '/assets/showcase-4.png', '/assets/portrait-2.avif', '/assets/portrait-1.avif', '/assets/portrait-4.avif', '/assets/portfolio-3.png', '/assets/showcase-3.png', '/assets/portrait-3.avif', '/assets/portrait-2.avif', '/assets/portrait-1.avif'],
  },
  {
    slug: 'couples',
    title: 'Couples',
    category: 'Couples',
    year: '2024',
    image: '/assets/portfolio-3.png',
    description: 'Romantic shoots for two, anywhere your story feels at home in Paris.',
    images: ['/assets/portfolio-3.png', '/assets/showcase-1.png', '/assets/portrait-3.avif', '/assets/portrait-1.avif', '/assets/portrait-2.avif', '/assets/portfolio-4.png', '/assets/showcase-2.png', '/assets/portrait-4.avif', '/assets/portrait-1.avif', '/assets/portrait-3.avif'],
  },
  {
    slug: 'proposals',
    title: 'Proposals',
    category: 'Proposals',
    year: '2025',
    image: '/assets/portfolio-4.png',
    description: 'Surprise marriage proposals captured discreetly as they happen.',
    images: ['/assets/portfolio-4.png', '/assets/showcase-2.png', '/assets/portrait-1.avif', '/assets/portrait-4.avif', '/assets/portrait-3.avif', '/assets/portfolio-2.png', '/assets/showcase-4.png', '/assets/portrait-2.avif', '/assets/portrait-1.avif', '/assets/portrait-4.avif'],
  },
  {
    slug: 'families',
    title: 'Families',
    category: 'Family',
    year: '2024',
    image: '/assets/portfolio-6.png',
    description: 'Warm family moments in the heart of Paris that you will keep for years.',
    images: ['/assets/portfolio-6.png', '/assets/showcase-3.png', '/assets/portrait-3.avif', '/assets/portrait-2.avif', '/assets/portrait-4.avif', '/assets/portfolio-1.png', '/assets/showcase-1.png', '/assets/portrait-1.avif', '/assets/portrait-3.avif', '/assets/portrait-2.avif'],
  },
  {
    slug: 'nightclubs',
    title: 'Nightclubs',
    category: 'Nightlife',
    year: '2025',
    image: '/assets/showcase-2.png',
    description: 'The energy and atmosphere of Paris nightlife, captured inside the clubs.',
    images: ['/assets/showcase-2.png', '/assets/portfolio-4.png', '/assets/portrait-4.avif', '/assets/portrait-3.avif', '/assets/portrait-1.avif', '/assets/showcase-4.png', '/assets/portfolio-2.png', '/assets/portrait-2.avif', '/assets/portrait-4.avif', '/assets/portrait-3.avif'],
  },
]
