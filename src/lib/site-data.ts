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

export interface AlbumPhoto {
  src: string
  alt: string
  wide: boolean
}

export interface PortfolioItem {
  slug: string
  title: string
  category: string
  year: string
  image: string
  imageAlt: string
  description: string
  images: AlbumPhoto[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-photo-spots-in-paris',
    title: 'The Best Photo Spots in Paris',
    tag: 'Guide',
    readTime: '6 min read',
    author: 'Yassir',
    image: '/assets/blog-1.png',
    excerpt: 'A guide to the most beautiful places to shoot in Paris, from the icons to the hidden corners.',
    body: `Paris is consistently ranked among the most photogenic cities in the world, and the difference between a good photo and a stunning one often comes down to location. Knowing where to go, at what time, and how to frame each spot is what separates a tourist snapshot from a professional photo session. Here is a complete guide to the best photo spots in Paris for your next session.

## The Trocadéro and the Eiffel Tower

The Trocadéro esplanade offers the most iconic and symmetrical view of the Eiffel Tower in Paris. Arriving before 8am on a weekday gives you near-empty streets and soft morning light that wraps the tower in a warm, cinematic glow. This location works for every type of session: [couples photography](/portfolio/couples), [surprise proposals](/portfolio/proposals), solo portraits, and family shoots. The trick is knowing exactly where to stand to get the tower perfectly centered without any construction fences or tourist crowds in the frame. See real examples in the [Eiffel Tower photo album](/portfolio/eiffel-tower).

## The Louvre Courtyard and the Arcades

The Cour Carrée and the colonnades of the Louvre are one of the most underused photo spots in Paris. The symmetric stone architecture creates natural leading lines, and the golden hour light that hits the facades between 6pm and 7pm in summer is extraordinary. The glass pyramid at night, with the fountains lit up and almost no people around, produces reflections that look straight out of a fashion editorial. This spot works especially well for [street and lifestyle photography](/portfolio/street-photography).

## Montmartre and the Sacré-Cœur Steps

Montmartre is one of the few neighborhoods in Paris where every single street feels like a set. The cobbled lanes of Rue Lepic, the colorful facades of the artists' quarter, and the wide stone steps of the Sacré-Cœur all photograph beautifully at any hour. Early morning in Montmartre is particularly magical: the streets are empty, the light is diffused, and you can move freely from corner to corner without waiting for passersby to clear the frame.

## Rue Crémieux and the Marais

Rue Crémieux is arguably the most Instagram-worthy street in Paris, with its pastel-painted facades in yellow, blue, green and pink. The Marais district, just minutes away, adds Haussmann architecture, hidden courtyards, and the stunning Place des Vosges for a completely different aesthetic. These two spots combined make for one of the richest and most varied [instagrammable photo sessions](/portfolio/instagrammable-paris) you can have in the city.

## The Seine and Its Bridges

The banks of the Seine and the bridges above it offer a constantly changing backdrop depending on the season and the hour. Pont Alexandre III, with its golden statues and ornate lampposts, is one of the most elegant bridges in the world for portrait photography. The Pont des Arts and the Quai de la Tournelle, with Notre-Dame visible in the background, are equally striking.

## Palais Royal and Hidden Courtyards

The Palais Royal gardens are a quiet, refined alternative to the more crowded tourist spots. The striped columns of the Colonnes de Buren in the courtyard create a graphic, modern contrast with the classical architecture around them. Just a few streets away, hidden courtyards and covered passages like the Galerie Vivienne offer a warm, timeless aesthetic that works beautifully for couple portraits and solo editorial shoots.`,
  },
  {
    slug: 'when-to-shoot-eiffel-tower',
    title: 'When to Shoot at the Eiffel Tower',
    tag: 'Tips',
    readTime: '5 min read',
    author: 'Yassir',
    image: '/assets/blog-2.png',
    excerpt: 'The best times of day to photograph the Eiffel Tower, and how to avoid the crowds.',
    body: `The Eiffel Tower is the most photographed monument in the world, and yet most visitors end up with the same crowded, flat, overexposed shots that look nothing like what they imagined. Timing is everything. Here is a detailed breakdown of when to shoot at the Eiffel Tower in Paris to get photos that actually stand out.

## Before Sunrise: The Golden Window

Arriving at the Trocadéro between 6am and 7:30am on a weekday is the single best decision you can make for an Eiffel Tower photo session. The streets are nearly empty, the sky shifts from deep blue to soft pink and gold, and the light wraps the iron structure in a warmth that disappears once the sun rises higher. This window is ideal for [couples photography at the Eiffel Tower](/portfolio/couples), [surprise proposals](/portfolio/proposals), and anyone who wants a clean, emotional backdrop without fighting the crowds. See real examples in the [Eiffel Tower photo album](/portfolio/eiffel-tower).

## Golden Hour: Warm Light, Long Shadows

The 60 to 90 minutes before sunset, typically between 7pm and 8:30pm in summer and 4pm and 5:30pm in winter, produce what photographers call golden hour light. The sun sits low on the horizon and casts long, warm shadows across the Champ de Mars and the Trocadéro esplanade. Skin tones look richer, colors feel deeper, and the entire scene takes on a cinematic quality. This is the most popular window for romantic Paris photo sessions and family portraits.

## Blue Hour: Moody and Cinematic

Blue hour falls in the 20 to 30 minutes immediately after sunset. The sky turns a deep, even shade of blue that balances perfectly with the warm artificial lights of the tower. The Eiffel Tower is already lit up, and the reflections in the fountains at the Trocadéro become mirror-sharp. Blue hour produces a more editorial, magazine-style aesthetic that photographs exceptionally well.

## The Sparkling Effect: Every Hour After Dark

Every hour on the hour from nightfall until 1am, the Eiffel Tower activates its 20,000 light bulbs for a five-minute sparkling display. It is one of the most magical backdrops available for an evening portrait session in Paris, and it is particularly spectacular for [proposal photography](/portfolio/proposals) when the city light wraps everything in a soft, golden glow.

## What to Avoid

Midday light between 11am and 3pm is harsh and flat, creates strong shadows under the eyes, and makes the sky appear washed out. Weekends are significantly more crowded than weekdays at every time of day. The Champ de Mars fills up quickly on warm evenings, so knowing the less obvious viewpoints is essential.

## The Best Viewpoints Beyond the Trocadéro

The Bir-Hakeim bridge, recognizable from the film Inception, offers a dramatic framing of the tower between its metal pillars. The Champ de Mars, shot from the far end, gives a wide and symmetrical perspective. The Passy neighborhood and elevated city viewpoints offer angles that most visitors never consider. A strong private photo session at the Eiffel Tower combines at least two or three of these viewpoints to give variety to the final gallery.`,
  },
  {
    slug: 'how-to-prepare-paris-session',
    title: 'How to Prepare for Your Paris Session',
    tag: 'Guide',
    readTime: '5 min read',
    author: 'Yassir',
    image: '/assets/blog-3.png',
    excerpt: 'Simple steps to get the most out of your photo session in Paris.',
    body: `A private photo session in Paris is one of the most memorable experiences you can have as a traveler or visitor. But a little preparation makes the difference between photos you love and photos that end up forgotten on your phone. Here is a complete guide to getting the most out of your Paris photo session.

## Choose Your Locations in Advance

Paris has hundreds of iconic and hidden photo spots, and the session flows much more smoothly when both the photographer and the client have a clear plan. Think about the mood you want: the classic Eiffel Tower backdrop, the colorful streets of Montmartre, the elegant bridges along the Seine, or the [instagrammable spots](/portfolio/instagrammable-paris) scattered across the city. Mixing two or three different locations in a single session adds variety and gives you a richer final gallery.

## Plan Your Outfits Carefully

Clothing is one of the most overlooked parts of a photo session. Solid colors and simple textures work best in photography because they do not distract from your face and expression. Neutrals like cream, beige, soft white, and earth tones look beautiful against the stone and iron of Paris. Avoid logos, busy patterns, and very bright neon colors unless they are part of a specific creative brief. For full advice, read the guide on [what to wear for your Paris photoshoot](/blog/what-to-wear-paris-photoshoot).

## Time Your Session Right

The quality of light in Paris changes dramatically throughout the day. Early morning between 6am and 9am offers soft, diffused light, almost empty streets, and a calm atmosphere that is nearly impossible to replicate later in the day. Golden hour in the evening produces warm, flattering tones that make skin glow and cityscapes look cinematic. If your session includes the Eiffel Tower, check the full guide on [when to shoot at the Eiffel Tower](/blog/when-to-shoot-eiffel-tower) to pick the ideal window.

## Send References Before the Session

Sharing a mood board or a few reference photos beforehand helps align expectations and lets the photographer plan a route that matches your vision. Pinterest boards, Instagram saves, or even screenshots from magazines all work. The more specific the brief, the better the results.

## Dress for Walking

A Paris photo session typically involves moving between several locations on foot. Comfortable shoes are not optional. Heels or new shoes that have not been broken in are a common mistake that leads to discomfort and stiffness in the photos. Dress to feel good and to move freely.

## Understand the Delivery Process

After a professional photo session in Paris, edited photos are typically delivered within 24 to 72 hours via a private online gallery. RAW files are usually available on request. Make sure you understand what is included in your session before booking, including the number of edited photos, the delivery format, and any options for prints or albums.

## Relax and Be Present

The best photos from any session are the ones taken when people forget the camera is there. Laughing, walking, looking at each other or at the city, these candid moments always produce the most emotional and authentic results. Trust the process, enjoy Paris, and let the photos happen naturally.`,
  },
  {
    slug: 'instagrammable-paris-guide',
    title: 'A Local Guide to Instagrammable Shots in Paris',
    tag: 'Guide',
    readTime: '6 min read',
    author: 'Yassir',
    image: '/assets/showcase-4.png',
    excerpt: 'Discover the most Instagram-worthy and aesthetic photo spots in Paris, from pastel streets to rooftop views, for a feed that turns heads.',
    body: `Paris is probably the most Instagram-friendly city in the world, and yet most visitors leave with photos that look the same as everyone else's. The difference between a generic tourist shot and an aesthetic, editorial-quality photo that performs on Instagram comes down to three things: location, timing, and composition. Here is a local guide to the most photogenic and shareable photo spots in Paris.

## Rue Crémieux: The Pastel Street

Rue Crémieux in the 12th arrondissement is one of the most recognizable streets on Instagram. Its brightly painted facades in yellow, blue, green, and pink create an instant aesthetic backdrop that works for solo portraits, couple shots, and lifestyle photography. The best time to visit is early morning on a weekday, before residents leave for work and before the tourists arrive. Afternoon light hits the facades at a flattering angle in spring and summer. See how this spot photographs in the [Instagrammable Paris album](/portfolio/instagrammable-paris).

## The Marais: Architecture, Color, and Texture

The Marais district in the 3rd and 4th arrondissements is one of the richest neighborhoods in Paris for photography. The Place des Vosges, the oldest planned square in the city, offers covered arcades and perfectly symmetric architecture. The surrounding streets are full of independent boutiques, colorful doors, and hidden courtyards. The aesthetic here is refined and editorial, making it perfect for fashion-inspired portraits and travel content.

## Pont Alexandre III: The Most Elegant Bridge in Paris

Pont Alexandre III is arguably the most photogenic bridge in Paris, with its gilded statues, ornate Art Nouveau lampposts, and the Grand Palais visible in the background. It works at every hour but looks particularly spectacular at golden hour, when the gold leaf on the sculptures catches the low sun and everything glows. This bridge is a favorite for [couples photo sessions](/portfolio/couples) and engagement shoots in Paris.

## Café Terraces and Covered Passages

A classic Parisian café terrace with woven rattan chairs and small marble tables is one of the most recognized aesthetic backdrops in the world. For something less expected, the covered passages of Paris, including the Galerie Vivienne, the Passage Jouffroy, and the Galerie Colbert, offer a warm, intimate atmosphere with gorgeous ironwork ceilings and mosaic floors that photograph beautifully.

## The Tuileries Garden

The Tuileries Garden between the Louvre and the Place de la Concorde is a wide, open space with sculpted hedgerows, classical statues, and long gravel alleys. It looks completely different in each season: bright and open in summer, misty and moody in autumn, elegant and quiet in winter. It is one of the most versatile spots in the city for lifestyle and portrait photography.

## Rooftops and Elevated Views

Elevated viewpoints are one of the most sought-after aesthetics in Paris travel content. The rooftop of the Galeries Lafayette offers a 360-degree view of the city with the Eiffel Tower visible in the distance. The Institut du Monde Arabe terrace, the Sacré-Cœur steps, and the Montparnasse Tower observation deck each offer a completely different angle on the city skyline.

## What Makes a Paris Photo Truly Shareable

Beyond location, what makes a Paris photo perform well on Instagram is the consistency of mood, the quality of the light, and the authenticity of the moment. Forced poses rarely work. The most engaging Paris photos capture movement, connection, and genuine emotion in a beautiful setting. A professional [private photo session in Paris](/portfolio/street-photography) gives you that combination.`,
  },
  {
    slug: 'what-to-wear-paris-photoshoot',
    title: 'What to Wear for Your Paris Photoshoot',
    tag: 'Tips',
    readTime: '5 min read',
    author: 'Yassir',
    image: '/assets/showcase-3.png',
    excerpt: 'Outfit tips to look your best and feel comfortable during your Paris session.',
    body: `What you wear to a photo session in Paris matters more than most people think. The wrong outfit can make even the best location and lighting feel flat, while the right one makes every single frame look intentional. Here is a complete guide to choosing outfits for your Paris photoshoot, whether you are shooting solo, as a couple, or as a family.

## The One Rule That Always Works: Keep It Simple

Solid colors and simple textures consistently outperform busy patterns and bold logos in photography. The reason is straightforward: patterns compete visually with the background and draw the eye away from your face. A clean, single-tone outfit keeps all the attention where it should be.

## The Paris Color Palette

Paris has a specific tonal quality. The stone facades, iron balconies, cream-colored buildings, and grey cobblestones create a muted, warm background that certain colors work with beautifully. Cream, ivory, soft white, camel, terracotta, dusty rose, sage green, and warm browns all feel at home in the city. Bright neons and very saturated primary colors tend to clash with the environment unless used intentionally for a bold, graphic aesthetic.

## How to Coordinate Outfits for Couples

For [couple photo sessions in Paris](/portfolio/couples), the goal is to complement rather than match. Wearing the exact same outfit often looks forced. Instead, choose a shared color palette with different garments. For example: one person in a cream shirt and beige trousers, the other in a soft ivory dress with warm accessories. The tones coordinate without looking identical.

## What to Wear for a Proposal Session

[Surprise proposal photography in Paris](/portfolio/proposals) presents a specific challenge: one person knows about the session and can plan an outfit, the other does not. The best approach is to communicate a loose dress code, for example "we are going to a nice dinner afterwards, dress accordingly", which naturally produces an elegant and photogenic outfit for both people without revealing the plan.

## Season-by-Season Advice

Spring and early summer in Paris are the easiest seasons for outfit planning. Light fabrics, pastel colors, and minimal layering all work well. Summer midday heat can make heavily layered outfits uncomfortable, so choose breathable fabrics. Autumn in Paris is one of the most beautiful seasons photographically, and heavier fabrics, coats, and scarves add texture and elegance to the photos. Winter sessions, especially around the [Eiffel Tower](/portfolio/eiffel-tower) in December, look stunning with wool coats, tailored jackets, and warm-toned accessories.

## Shoes: More Important Than You Think

A Paris photo session typically involves walking between several locations over one to two hours. Blisters and discomfort show up in body language almost immediately and affect the natural quality of the photos. Choose shoes that feel good to walk in and that have been worn before. This is especially important for cobblestone neighborhoods like Montmartre and the Marais.

## Accessories and Details

Accessories are one of the easiest ways to add personality to an outfit without changing the overall tone. A silk scarf, a structured handbag, delicate jewelry, or a well-chosen hat can elevate a simple outfit significantly. For men, a blazer over a plain shirt transforms a casual look into something editorial in seconds.

## A Final Tip

If there is any doubt about an outfit choice before the session, sending a photo in advance allows the photographer to give honest feedback and suggest alternatives. Confidence in your outfit translates directly into confidence in front of the camera.`,
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
    image: '/assets/paris-street-lifestyle-photoshoot-01.jpg',
    imageAlt: 'Editorial street style model walking across the Passerelle Debilly bridge over the Seine in Paris by SabShots',
    description: 'Candid, editorial moments captured in the streets and hidden corners of Paris.',
    images: [
      { src: '/assets/paris-street-lifestyle-photoshoot-01.jpg', alt: 'Editorial street style model walking across the Passerelle Debilly bridge over the Seine in Paris by SabShots', wide: true },
      { src: '/assets/paris-street-lifestyle-photoshoot-02.jpg', alt: 'Fashion model in a red fur coat outside a Paris gallery, editorial street photography by SabShots', wide: true },
      { src: '/assets/paris-street-lifestyle-photoshoot-08.jpg', alt: 'Man in a beige tracksuit before a Haussmann facade in Paris, contemporary street style photography by SabShots', wide: false },
      { src: '/assets/paris-street-lifestyle-photoshoot-09.jpg', alt: 'Woman in red velvet holding heart balloons by a Paris cafe near the Eiffel Tower, lifestyle photography by SabShots', wide: false },
      { src: '/assets/paris-street-lifestyle-photoshoot-10.jpg', alt: 'Man in a black hooded coat and leather gloves against an ochre Paris wall, moody editorial street style by SabShots', wide: false },
      { src: '/assets/paris-street-lifestyle-photoshoot-11.jpg', alt: 'Woman in a black tailored suit leaning on the Louvre pyramid glass in Paris, editorial fashion photography by SabShots', wide: false },
      { src: '/assets/paris-street-lifestyle-photoshoot-12.jpg', alt: 'Woman in leopard trousers and red heels by Paris street signs, candid lifestyle street photography by SabShots', wide: false },
      { src: '/assets/paris-street-lifestyle-photoshoot-13.jpg', alt: 'Man in a long overcoat leaning in a doorway in golden Paris light, editorial menswear street photography by SabShots', wide: false },
      { src: '/assets/paris-street-lifestyle-photoshoot-03.jpg', alt: 'Smiling man in sunglasses and a headscarf posing by a Paris colonnade, candid lifestyle photography by SabShots', wide: true },
      { src: '/assets/paris-street-lifestyle-photoshoot-04.jpg', alt: 'Child watching a giant soap bubble float over the Louvre courtyard in Paris, candid street photography by SabShots', wide: true },
      { src: '/assets/paris-street-lifestyle-photoshoot-14.jpg', alt: 'Woman in a white corset top outside a Paris fruit shop, chic lifestyle street photography by SabShots', wide: false },
      { src: '/assets/paris-street-lifestyle-photoshoot-15.jpg', alt: 'Woman in a trench coat crossing a Paris street with the Eiffel Tower behind, candid lifestyle photography by SabShots', wide: false },
      { src: '/assets/paris-street-lifestyle-photoshoot-16.jpg', alt: 'Woman in a cream suit in an ornate Parisian doorway, elegant editorial lifestyle portrait by SabShots', wide: false },
      { src: '/assets/paris-street-lifestyle-photoshoot-17.jpg', alt: 'Woman in a black cardigan and sunglasses in a classical Paris courtyard, timeless street style photography by SabShots', wide: false },
      { src: '/assets/portrait-1.avif', alt: 'Template photo to replace with your own Paris street portrait by SabShots', wide: false },
      { src: '/assets/portrait-2.avif', alt: 'Template photo to replace with your own Paris street portrait by SabShots', wide: false },
      { src: '/assets/paris-street-lifestyle-photoshoot-05.jpg', alt: 'Avant-garde editorial portrait of a man in an oversized suit against a stone wall in Paris by SabShots', wide: true },
      { src: '/assets/paris-street-lifestyle-photoshoot-06.jpg', alt: 'Candid lifestyle portrait of a man seated inside a vintage car in Paris, editorial street photography by SabShots', wide: true },
      { src: '/assets/paris-street-lifestyle-photoshoot-07.jpg', alt: 'Two male fashion models in tailored knitwear against a textured Paris wall, menswear street photography by SabShots', wide: true },
      { src: '/assets/showcase-1.png', alt: 'Template photo to replace with your own Paris street landscape by SabShots', wide: true },
    ],
  },
  {
    slug: 'eiffel-tower',
    title: 'Eiffel Tower',
    category: 'Eiffel Tower',
    year: '2025',
    image: '/assets/paris-eiffel-tower-photoshoot-01.jpg',
    imageAlt: 'Stylish woman in a beret on a love-lock bridge over the Seine with the Eiffel Tower at golden hour in Paris by SabShots',
    description: 'Private sessions with the most iconic view in Paris, from golden hour to the evening sparkle.',
    images: [
      { src: '/assets/paris-eiffel-tower-photoshoot-01.jpg', alt: 'Stylish woman in a beret on a love-lock bridge over the Seine with the Eiffel Tower at golden hour in Paris by SabShots', wide: true },
      { src: '/assets/paris-eiffel-tower-photoshoot-02.jpg', alt: 'Elegant woman in white on a sunny Seine riverside terrace with the Eiffel Tower behind her in Paris by SabShots', wide: true },
      { src: '/assets/paris-eiffel-tower-photoshoot-04.jpg', alt: 'Chic woman walking the Trocadero steps with a clear morning view of the Eiffel Tower in Paris by SabShots', wide: false },
      { src: '/assets/paris-eiffel-tower-photoshoot-05.jpg', alt: 'Fashionable woman on the love-lock bridge under blue skies with the Eiffel Tower in Paris by SabShots', wide: false },
      { src: '/assets/paris-eiffel-tower-photoshoot-06.jpg', alt: 'Romantic couple kissing framed by green leaves with the Eiffel Tower over the Seine in summer Paris by SabShots', wide: false },
      { src: '/assets/paris-eiffel-tower-photoshoot-07.jpg', alt: 'Woman in a leather jacket holding coffee beneath a stone bridge arch with the Eiffel Tower in Paris by SabShots', wide: false },
      { src: '/assets/paris-eiffel-tower-photoshoot-08.jpg', alt: 'Loving couple seated against a soft view of the full Eiffel Tower at Trocadero in Paris by SabShots', wide: false },
      { src: '/assets/paris-eiffel-tower-photoshoot-09.jpg', alt: 'Trendy woman in sunglasses by leafy trees with the Eiffel Tower and Seine boats behind her in Paris by SabShots', wide: false },
      { src: '/assets/paris-eiffel-tower-photoshoot-03.jpg', alt: 'Glamorous woman in a black dress blowing a kiss before the golden illuminated Eiffel Tower at night in Paris by SabShots', wide: true },
      { src: '/assets/showcase-2.png', alt: 'Template photo to replace with your own Paris Eiffel Tower landscape by SabShots', wide: true },
      { src: '/assets/paris-eiffel-tower-photoshoot-10.jpg', alt: 'Stylish woman in a trench coat on a quiet cobbled street leading to the Eiffel Tower in Paris by SabShots', wide: false },
      { src: '/assets/paris-eiffel-tower-photoshoot-11.jpg', alt: 'Elegant woman in a black lace gown at night with the illuminated Eiffel Tower in Paris by SabShots', wide: false },
      { src: '/assets/portrait-3.avif', alt: 'Template photo to replace with your own Paris Eiffel Tower portrait by SabShots', wide: false },
      { src: '/assets/portrait-4.avif', alt: 'Template photo to replace with your own Paris Eiffel Tower portrait by SabShots', wide: false },
      { src: '/assets/portrait-1.avif', alt: 'Template photo to replace with your own Paris Eiffel Tower portrait by SabShots', wide: false },
      { src: '/assets/portrait-2.avif', alt: 'Template photo to replace with your own Paris Eiffel Tower portrait by SabShots', wide: false },
    ],
  },
  {
    slug: 'instagrammable-paris',
    title: 'Instagrammable',
    category: 'Instagram',
    year: '2025',
    image: '/assets/paris-instagrammable-photoshoot-01.jpg',
    imageAlt: 'Woman enjoying a champagne breakfast on a balcony with an Eiffel Tower view, the most instagrammable Paris photo spot by SabShots',
    description: 'The most photogenic spots across the whole city, ready for your feed.',
    images: [
      { src: '/assets/paris-instagrammable-photoshoot-01.jpg', alt: 'Woman enjoying a champagne breakfast on a balcony with an Eiffel Tower view, the most instagrammable Paris photo spot by SabShots', wide: true },
      { src: '/assets/paris-instagrammable-photoshoot-02.jpg', alt: 'Woman beside the glowing Louvre Pyramid at golden sunset, an aesthetic instagrammable Paris photo spot by SabShots', wide: true },
      { src: '/assets/paris-instagrammable-photoshoot-08.jpg', alt: 'Man leaning by the Allee des Cygnes sign on the Pont de Bir-Hakeim, an instagrammable Paris bridge photo spot by SabShots', wide: false },
      { src: '/assets/paris-instagrammable-photoshoot-09.jpg', alt: 'Woman smiling in front of the Sacre-Coeur basilica in Montmartre, a charming instagrammable Paris photo spot by SabShots', wide: false },
      { src: '/assets/paris-instagrammable-photoshoot-10.jpg', alt: 'Woman in a polka-dot skirt in a historic Parisian courtyard, a chic instagrammable fashion photo spot by SabShots', wide: false },
      { src: '/assets/paris-instagrammable-photoshoot-11.jpg', alt: 'Woman in yellow at a classic Parisian cafe terrace, an aesthetic instagrammable Paris photo spot by SabShots', wide: false },
      { src: '/assets/paris-instagrammable-photoshoot-12.jpg', alt: 'Woman holding a fluffy dog on a Paris crosswalk, a candid instagrammable city street photo spot by SabShots', wide: false },
      { src: '/assets/paris-instagrammable-photoshoot-13.jpg', alt: 'Woman seated on stone steps at the Palais de Tokyo, an instagrammable Paris photo spot by SabShots', wide: false },
      { src: '/assets/paris-instagrammable-photoshoot-03.jpg', alt: 'Edgy fashion portrait with the illuminated Eiffel Tower at night, a dreamy instagrammable Paris photo spot by SabShots', wide: true },
      { src: '/assets/paris-instagrammable-photoshoot-04.jpg', alt: 'Woman in a black lace dress overlooking the Seine city lights at night, a romantic aesthetic Paris photo spot by SabShots', wide: true },
      { src: '/assets/paris-instagrammable-photoshoot-14.jpg', alt: 'Woman in a striped sweater with the Eiffel Tower behind, a classic instagrammable Paris photo spot by SabShots', wide: false },
      { src: '/assets/paris-instagrammable-photoshoot-15.jpg', alt: 'Woman beside a grand wooden Parisian door in golden light, an aesthetic instagrammable photo spot by SabShots', wide: false },
      { src: '/assets/paris-instagrammable-photoshoot-16.jpg', alt: 'Woman relaxing on a bench outside a Paris cafe, an effortless instagrammable street style photo spot by SabShots', wide: false },
      { src: '/assets/paris-instagrammable-photoshoot-17.jpg', alt: 'Woman on a green chair by a fountain in the Palais-Royal garden, an instagrammable Paris photo spot by SabShots', wide: false },
      { src: '/assets/paris-instagrammable-photoshoot-18.jpg', alt: 'Woman walking a quiet cobbled Parisian street, an aesthetic instagrammable Marais photo spot by SabShots', wide: false },
      { src: '/assets/paris-instagrammable-photoshoot-19.jpg', alt: 'Woman on green stools outside a specialty coffee shop in Paris, a cozy instagrammable photo spot by SabShots', wide: false },
      { src: '/assets/paris-instagrammable-photoshoot-05.jpg', alt: 'Woman in a fur coat on a crisp winter day in Paris, a cool instagrammable street photo spot by SabShots', wide: true },
      { src: '/assets/paris-instagrammable-photoshoot-06.jpg', alt: 'Woman in a white suit between the grand columns of the Palais de Tokyo, a minimalist aesthetic Paris photo spot by SabShots', wide: true },
      { src: '/assets/paris-instagrammable-photoshoot-20.jpg', alt: 'Woman striding past a marble fountain in Paris, a dynamic instagrammable photo spot by SabShots', wide: false },
      { src: '/assets/portrait-3.avif', alt: 'Template photo to replace with your own Paris instagrammable portrait by SabShots', wide: false },
      { src: '/assets/portrait-4.avif', alt: 'Template photo to replace with your own Paris instagrammable portrait by SabShots', wide: false },
      { src: '/assets/portrait-1.avif', alt: 'Template photo to replace with your own Paris instagrammable portrait by SabShots', wide: false },
      { src: '/assets/portrait-2.avif', alt: 'Template photo to replace with your own Paris instagrammable portrait by SabShots', wide: false },
      { src: '/assets/portrait-3.avif', alt: 'Template photo to replace with your own Paris instagrammable portrait by SabShots', wide: false },
      { src: '/assets/paris-instagrammable-photoshoot-07.jpg', alt: 'Woman in an oversized leather jacket framed by towering stone columns in Paris, a moody instagrammable photo spot by SabShots', wide: true },
      { src: '/assets/showcase-3.png', alt: 'Template photo to replace with your own Paris instagrammable landscape by SabShots', wide: true },
    ],
  },
  {
    slug: 'couples',
    title: 'Couples',
    category: 'Couples',
    year: '2024',
    image: '/assets/paris-couple-photoshoot-01.jpg',
    imageAlt: 'Joyful couple laughing in the gardens of the Palace of Versailles near Paris during a romantic engagement session by SabShots',
    description: 'Romantic shoots for two, anywhere your story feels at home in Paris.',
    images: [
      { src: '/assets/paris-couple-photoshoot-01.jpg', alt: 'Joyful couple laughing in the gardens of the Palace of Versailles near Paris during a romantic engagement session by SabShots', wide: true },
      { src: '/assets/paris-couple-photoshoot-02.jpg', alt: 'Stylish couple taking a selfie at a classic red Parisian brasserie terrace, a candid romantic moment in Paris by SabShots', wide: true },
      { src: '/assets/paris-couple-photoshoot-03.jpg', alt: 'Couple twirling on a quiet Paris street with the Eiffel Tower behind during a playful engagement photoshoot by SabShots', wide: false },
      { src: '/assets/paris-couple-photoshoot-04.jpg', alt: 'Couple sharing a tender kiss beneath leafy branches framing the Eiffel Tower in Paris during a summer session by SabShots', wide: false },
      { src: '/assets/paris-couple-photoshoot-05.jpg', alt: 'Affectionate couple in matching olive outfits on a Parisian street with the Eiffel Tower behind them by SabShots', wide: false },
      { src: '/assets/paris-couple-photoshoot-06.jpg', alt: 'Elegant couple holding hands along a Haussmann avenue with the Eiffel Tower in golden light in Paris by SabShots', wide: false },
      { src: '/assets/paris-couple-photoshoot-07.jpg', alt: 'Playful couple touching noses on the Montmartre staircase above the Seine in Paris during a couple session by SabShots', wide: false },
      { src: '/assets/paris-couple-photoshoot-08.jpg', alt: 'Groom carrying his bride in a flowing tutu dress in front of the Eiffel Tower in Paris during a couple photoshoot by SabShots', wide: false },
    ],
  },
  {
    slug: 'proposals',
    title: 'Proposals',
    category: 'Proposals',
    year: '2025',
    image: '/assets/paris-proposal-photoshoot-01.jpg',
    imageAlt: 'Newly engaged couple holding hands with a diamond ring in front of the Eiffel Tower during a Paris proposal by SabShots',
    description: 'Surprise marriage proposals captured discreetly as they happen.',
    images: [
      { src: '/assets/paris-proposal-photoshoot-01.jpg', alt: 'Newly engaged couple holding hands with a diamond ring in front of the Eiffel Tower during a Paris proposal by SabShots', wide: true },
      { src: '/assets/showcase-4.png', alt: 'Template photo to replace with your own Paris proposal landscape by SabShots', wide: true },
      { src: '/assets/paris-proposal-photoshoot-02.jpg', alt: 'Man kneeling with a ring box as his girlfriend reacts at Trocadero, a Paris marriage proposal by the Eiffel Tower by SabShots', wide: false },
      { src: '/assets/paris-proposal-photoshoot-03.jpg', alt: 'Boyfriend on one knee proposing at Trocadero with the best Eiffel Tower view, a surprise Paris proposal by SabShots', wide: false },
      { src: '/assets/paris-proposal-photoshoot-04.jpg', alt: 'Couple at a candlelit tablescape with roses by the Seine facing the Eiffel Tower after a Paris proposal by SabShots', wide: false },
      { src: '/assets/portrait-4.avif', alt: 'Template photo to replace with your own Paris proposal portrait by SabShots', wide: false },
      { src: '/assets/portrait-1.avif', alt: 'Template photo to replace with your own Paris proposal portrait by SabShots', wide: false },
      { src: '/assets/portrait-2.avif', alt: 'Template photo to replace with your own Paris proposal portrait by SabShots', wide: false },
    ],
  },
  {
    slug: 'families',
    title: 'Families',
    category: 'Family',
    year: '2024',
    image: '/assets/paris-family-photoshoot-01.jpg',
    imageAlt: 'Joyful family of five smiling by the Seine with the Eiffel Tower behind during a Paris family photo session by SabShots',
    description: 'Warm family moments in the heart of Paris that you will keep for years.',
    images: [
      { src: '/assets/portfolio-4.png', alt: 'Template photo to replace with your own Paris family landscape by SabShots', wide: true },
      { src: '/assets/showcase-1.png', alt: 'Template photo to replace with your own Paris family landscape by SabShots', wide: true },
      { src: '/assets/paris-family-photoshoot-01.jpg', alt: 'Joyful family of five smiling by the Seine with the Eiffel Tower behind during a Paris family photo session by SabShots', wide: false },
      { src: '/assets/paris-family-photoshoot-02.jpg', alt: 'Father lifting his laughing toddler in front of the Eiffel Tower on a Paris family photoshoot by SabShots', wide: false },
      { src: '/assets/paris-family-photoshoot-03.jpg', alt: 'Elegant family of three in matching pink gowns in a Parisian colonnade for a family portrait in Paris by SabShots', wide: false },
      { src: '/assets/paris-family-photoshoot-04.jpg', alt: 'Mother and daughter walking hand in hand along a chic Paris street during a family photo session by SabShots', wide: false },
      { src: '/assets/portrait-3.avif', alt: 'Template photo to replace with your own Paris family portrait by SabShots', wide: false },
      { src: '/assets/portrait-4.avif', alt: 'Template photo to replace with your own Paris family portrait by SabShots', wide: false },
    ],
  },
  {
    slug: 'weddings',
    title: 'Weddings',
    category: 'Wedding',
    year: '2025',
    image: '/assets/paris-wedding-photoshoot-01.jpg',
    imageAlt: 'Intimate rooftop wedding ceremony with an Eiffel Tower view in Paris by SabShots',
    description: 'Elegant Paris weddings, from intimate ceremonies to celebrations across the city.',
    images: [
      { src: '/assets/paris-wedding-photoshoot-01.jpg', alt: 'Intimate rooftop wedding ceremony with an Eiffel Tower view in Paris by SabShots', wide: true },
      { src: '/assets/paris-wedding-photoshoot-02.jpg', alt: 'Joyful newlyweds under a flower petal toss outside a church at a Paris wedding by SabShots', wide: true },
      { src: '/assets/paris-wedding-photoshoot-04.jpg', alt: 'Couple kissing beside a vintage car near the Eiffel Tower at a Paris wedding by SabShots', wide: false },
      { src: '/assets/paris-wedding-photoshoot-05.jpg', alt: 'Elegant bride and groom embracing on a sunset terrace at a Paris wedding by SabShots', wide: false },
      { src: '/assets/paris-wedding-photoshoot-06.jpg', alt: 'Bride holding a colorful bouquet beside her groom at a Paris wedding by SabShots', wide: false },
      { src: '/assets/portrait-1.avif', alt: 'Template photo to replace with your own Paris wedding portrait by SabShots', wide: false },
      { src: '/assets/portrait-2.avif', alt: 'Template photo to replace with your own Paris wedding portrait by SabShots', wide: false },
      { src: '/assets/portrait-3.avif', alt: 'Template photo to replace with your own Paris wedding portrait by SabShots', wide: false },
      { src: '/assets/paris-wedding-photoshoot-03.jpg', alt: 'Bride and groom on a grand chateau staircase during their Paris wedding by SabShots', wide: true },
      { src: '/assets/showcase-2.png', alt: 'Template photo to replace with your own Paris wedding landscape by SabShots', wide: true },
    ],
  },
  {
    slug: 'nightclubs',
    title: 'Nightclubs',
    category: 'Nightlife',
    year: '2025',
    image: '/assets/showcase-2.png',
    imageAlt: 'Paris nightlife and nightclub photography by SabShots',
    description: 'The energy and atmosphere of Paris nightlife, captured inside the clubs.',
    images: [
      { src: '/assets/showcase-2.png', alt: 'Paris nightlife atmosphere captured by SabShots', wide: true },
      { src: '/assets/portfolio-4.png', alt: 'Night photography inside a Paris club by SabShots', wide: true },
      { src: '/assets/portrait-1.avif', alt: 'Nightclub portrait photography in Paris by SabShots', wide: false },
      { src: '/assets/portrait-2.avif', alt: 'Paris nightlife portrait by SabShots', wide: false },
      { src: '/assets/portrait-3.avif', alt: 'Club photography session in Paris by SabShots', wide: false },
      { src: '/assets/portrait-4.avif', alt: 'Paris nightlife photo session by SabShots', wide: false },
      { src: '/assets/portrait-1.avif', alt: 'Paris nightclub portrait session by SabShots', wide: false },
      { src: '/assets/portrait-2.avif', alt: 'Paris club night portrait by SabShots', wide: false },
    ],
  },
]
