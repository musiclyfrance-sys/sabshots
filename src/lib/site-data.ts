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
    body: `Paris is one of the most photogenic cities in the world, and choosing the right spot makes all the difference. Here are the locations I love the most for a private photo session in Paris.

## The Trocadéro

The Trocadéro offers the cleanest view of the Eiffel Tower, and early morning is the best time to shoot there before the crowds arrive. It works beautifully for couples, proposals, and solo travelers who want that iconic Paris backdrop without the chaos. You can see examples in my [Eiffel Tower photo album](/portfolio/eiffel-tower).

## The Louvre and the Pyramid

The glass pyramid and the long arcades of the Louvre create striking lines and reflections that work beautifully for portraits. It is one of the most versatile spots in the city for editorial and street-style photography.

## Montmartre

The cobbled streets and the steps below the Sacré-Cœur give a romantic, timeless feel that suits couples and solo travelers alike. It is one of my favorite spots for a [street and lifestyle session](/portfolio/street-photography) because every corner tells a story.

## Hidden Streets and Rooftops

Beyond the icons, Paris is full of quiet streets, flower-covered façades, and rooftop views that make your photos feel personal and unique. These are the spots that turn a good session into something truly memorable.

## Ready to Shoot in Paris?

If any of these locations speak to you, send me a message on WhatsApp and we will plan your session together. I know these spots at every hour of the day, and I will pick the timing that gives you the best light.`,
  },
  {
    slug: 'when-to-shoot-eiffel-tower',
    title: 'When to Shoot at the Eiffel Tower',
    tag: 'Tips',
    readTime: '5 min read',
    author: 'Yassir Sabounji',
    image: '/assets/blog-2.png',
    excerpt: 'The best times of day to photograph the Eiffel Tower, and how to avoid the crowds.',
    body: `The Eiffel Tower is stunning at any hour, but the light and the crowds change everything. Here is how I plan a private photo session at the Eiffel Tower in Paris.

## Sunrise

Sunrise is my favorite moment. The light is soft and warm, the streets are empty, and you get the tower almost to yourself. It is the best time for couples, proposals, and anyone who wants a clean, quiet backdrop. Browse my [Eiffel Tower photo album](/portfolio/eiffel-tower) to see what this light looks like in real sessions.

## Golden Hour

The hour before sunset gives a beautiful golden glow on the stone and the skyline. It is perfect for romantic couple sessions and for anyone who wants a warm, cinematic mood in their photos.

## Blue Hour and Night

After sunset, the Eiffel Tower sparkles for five minutes at the top of each hour, which creates a magical backdrop for evening photos. This is also a great moment for [proposal photography in Paris](/portfolio/proposals), when the city light wraps everything in a soft glow.

## A Quick Tip

Weekdays are far quieter than weekends, so we can find clean angles even at the most popular viewpoints. I always recommend arriving early and moving fast to get the best spots before the crowds build up.

## Book Your Eiffel Tower Session

If you are planning a trip to Paris and want to capture a moment at the tower, send me a message and we will find the perfect timing for your session.`,
  },
  {
    slug: 'how-to-prepare-paris-session',
    title: 'How to Prepare for Your Paris Session',
    tag: 'Guide',
    readTime: '5 min read',
    author: 'Yassir Sabounji',
    image: '/assets/blog-3.png',
    excerpt: 'Simple steps to get the most out of your photo session in Paris.',
    body: `A little preparation goes a long way toward relaxed, natural photos. Here is how to get ready for your private photo session in Paris.

## Plan Your Outfits

Choose outfits that make you feel confident and that match the mood of the location. Solid colors and simple textures usually photograph best. If you are unsure what to wear, read my guide on [what to wear for your Paris photoshoot](/blog/what-to-wear-paris-photoshoot) for specific ideas.

## Think About Timing

Early morning gives the softest light and the fewest people, so we have more freedom to move and create. If you want to shoot at the Eiffel Tower, I always recommend reading my tips on [when to shoot at the Eiffel Tower](/blog/when-to-shoot-eiffel-tower) before we plan your session.

## Share Your Vision

Send me a few references or ideas before the shoot, and I will plan a route and a style that fit exactly what you want. Whether you are a couple, a family, a solo traveler, or planning a [surprise proposal](/portfolio/proposals), I adapt the session to you.

## Just Relax

The best images come when you feel at ease, so trust the process and enjoy your time in Paris. My goal is always to make you forget the camera is there.

## Let's Plan Your Session

Ready to book? Send me a message on WhatsApp and we will take care of every detail together.`,
  },
  {
    slug: 'instagrammable-paris-guide',
    title: 'A Local Guide to Instagrammable Shots in Paris',
    tag: 'Guide',
    readTime: '6 min read',
    author: 'Yassir Sabounji',
    image: '/assets/showcase-4.png',
    excerpt: 'Discover the most Instagram-worthy and aesthetic photo spots in Paris, from pastel streets to rooftop views, for a feed that turns heads.',
    body: `If you want aesthetic photos that stand out on your feed, Paris has endless Instagram-worthy backdrops. These are the spots I return to again and again for the most shareable, beautiful shots.

## Colorful Streets

Rue Crémieux and the streets of the Marais are full of pastel façades and charming details that look incredible in a single frame. These spots are perfect for solo portraits, couples, and anyone chasing that light, airy, editorial aesthetic. See examples in my [Instagrammable Paris album](/portfolio/instagrammable-paris).

## Cafés and Terraces

A classic Parisian café terrace, with its woven chairs and warm tones, is one of the most recognizable and aesthetic backdrops in the world. A cup of coffee, a croissant, and the right angle is all you need.

## Gardens and Bridges

The Tuileries, the Pont Alexandre III, and the banks of the Seine offer elegant, timeless scenes in every season. These are the locations that make your Instagram feed feel like a fashion editorial.

## Rooftops

A rooftop view at golden hour turns the whole Paris skyline into your background. It is always a favorite for travelers who want something unique beyond the classic Eiffel Tower shot.

## Want These Shots for Your Feed?

Book a private photo session in Paris and I will take you to the spots that work best for your style and your vision.`,
  },
  {
    slug: 'what-to-wear-paris-photoshoot',
    title: 'What to Wear for Your Paris Photoshoot',
    tag: 'Tips',
    readTime: '5 min read',
    author: 'Yassir Sabounji',
    image: '/assets/showcase-3.png',
    excerpt: 'Outfit tips to look your best and feel comfortable during your Paris session.',
    body: `What you wear shapes the whole mood of your Paris photos. Here are a few simple ideas that always work well, whether you are booking a solo session, a couple shoot, or a [surprise proposal](/portfolio/proposals).

## Keep It Timeless

Classic pieces in solid colors never go out of style, and they keep the focus on you rather than on busy patterns. Neutral tones, cream, soft beige, and muted earth colors photograph beautifully against the stone streets and monuments of Paris.

## Match the Season

Light fabrics and soft tones suit spring and summer, while coats and scarves add elegance to autumn and winter sessions. Paris looks stunning in every season, and your outfit should feel natural for the moment.

## Add a Touch of Color

A single bold accent, like a red dress or a warm coat, stands out beautifully against the soft tones of the city. It is one of the easiest ways to make your photos feel intentional and editorial.

## Comfort Matters

A Paris photo session often means walking between several locations, from the [Eiffel Tower](/portfolio/eiffel-tower) to hidden streets and rooftops, so choose shoes and clothes that let you move and feel relaxed.

## Still Unsure?

Send me a few photos of what you are thinking of wearing and I will give you honest feedback before the session. I want you to feel confident on the day.`,
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
    images: ['/assets/portfolio-2.png', '/assets/showcase-3.png', '/assets/portrait-1.avif', '/assets/portrait-2.avif', '/assets/portrait-3.avif', '/assets/portrait-4.avif', '/assets/portrait-1.avif', '/assets/portrait-2.avif'],
  },
  {
    slug: 'eiffel-tower',
    title: 'Eiffel Tower',
    category: 'Eiffel Tower',
    year: '2025',
    image: '/assets/portfolio-1.png',
    description: 'Private sessions with the most iconic view in Paris, from golden hour to the evening sparkle.',
    images: ['/assets/portfolio-1.png', '/assets/showcase-1.png', '/assets/portrait-3.avif', '/assets/portrait-4.avif', '/assets/portrait-1.avif', '/assets/portrait-2.avif', '/assets/portrait-3.avif', '/assets/portrait-4.avif'],
  },
  {
    slug: 'instagrammable-paris',
    title: 'Instagrammable',
    category: 'Instagram',
    year: '2025',
    image: '/assets/portfolio-5.png',
    description: 'The most photogenic spots across the whole city, ready for your feed.',
    images: ['/assets/portfolio-5.png', '/assets/showcase-4.png', '/assets/portrait-2.avif', '/assets/portrait-1.avif', '/assets/portrait-4.avif', '/assets/portrait-3.avif', '/assets/portrait-2.avif', '/assets/portrait-1.avif'],
  },
  {
    slug: 'couples',
    title: 'Couples',
    category: 'Couples',
    year: '2024',
    image: '/assets/portfolio-3.png',
    description: 'Romantic shoots for two, anywhere your story feels at home in Paris.',
    images: ['/assets/portfolio-3.png', '/assets/showcase-1.png', '/assets/portrait-3.avif', '/assets/portrait-1.avif', '/assets/portrait-2.avif', '/assets/portrait-4.avif', '/assets/portrait-3.avif', '/assets/portrait-1.avif'],
  },
  {
    slug: 'proposals',
    title: 'Proposals',
    category: 'Proposals',
    year: '2025',
    image: '/assets/portfolio-4.png',
    description: 'Surprise marriage proposals captured discreetly as they happen.',
    images: ['/assets/portfolio-4.png', '/assets/showcase-2.png', '/assets/portrait-1.avif', '/assets/portrait-4.avif', '/assets/portrait-3.avif', '/assets/portrait-2.avif', '/assets/portrait-1.avif', '/assets/portrait-4.avif'],
  },
  {
    slug: 'families',
    title: 'Families',
    category: 'Family',
    year: '2024',
    image: '/assets/portfolio-6.png',
    description: 'Warm family moments in the heart of Paris that you will keep for years.',
    images: ['/assets/portfolio-6.png', '/assets/showcase-3.png', '/assets/portrait-3.avif', '/assets/portrait-2.avif', '/assets/portrait-4.avif', '/assets/portrait-1.avif', '/assets/portrait-3.avif', '/assets/portrait-2.avif'],
  },
  {
    slug: 'nightclubs',
    title: 'Nightclubs',
    category: 'Nightlife',
    year: '2025',
    image: '/assets/showcase-2.png',
    description: 'The energy and atmosphere of Paris nightlife, captured inside the clubs.',
    images: ['/assets/showcase-2.png', '/assets/portfolio-4.png', '/assets/portrait-4.avif', '/assets/portrait-3.avif', '/assets/portrait-1.avif', '/assets/portrait-2.avif', '/assets/portrait-4.avif', '/assets/portrait-3.avif'],
  },
]
