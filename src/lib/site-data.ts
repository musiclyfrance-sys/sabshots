// Shared data for blog posts and portfolio items
// Used by both list pages and detail pages

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
    slug: 'post-processing-tips',
    title: 'Tips for Photographers',
    tag: 'Popular',
    readTime: '7 min read',
    author: 'Michael Brown',
    image: '/assets/blog-1.png',
    excerpt: 'Essential tips to elevate your photography game and capture breathtaking moments.',
    body: `Post-processing is an essential part of the photography workflow. It allows you to enhance your images and correct any issues that may have occurred during shooting.

## Basic Adjustments

Start with basic adjustments such as exposure, contrast, and color balance. These adjustments can significantly improve the overall look of your images. Use editing software to fine-tune these settings and achieve the desired effect.

## Crop and Straighten

Cropping can help improve composition by removing distracting elements from the frame. Additionally, straightening your images ensures that horizons are level, which is crucial for landscape photography.

## Sharpening and Noise Reduction

Applying sharpening can enhance details in your images, while noise reduction helps to clean up any grain or digital noise. Use these tools sparingly to avoid over-processing.

## Color Grading

Color grading allows you to set the mood of your images. Experiment with different color tones to achieve the desired look and feel. Warm tones can create a cozy atmosphere, while cool tones can evoke a sense of calm.

## Final Touches

After making all the necessary adjustments, take a final look at your image to ensure everything looks good. Make any last-minute tweaks and save your edited image in the desired format.`,
  },
  {
    slug: 'understanding-camera-lenses',
    title: 'Camera Lenses',
    tag: 'News',
    readTime: '5 min read',
    author: 'Sarah Davis',
    image: '/assets/blog-2.png',
    excerpt: 'A deep dive into lens selection — from portraits to landscapes and everything in between.',
    body: `Understanding camera lenses is crucial for any photographer. The right lens can make a significant difference in the quality of your images.

## Prime vs Zoom Lenses

Prime lenses have a fixed focal length, which means they are optimized for a specific use case. Zoom lenses, on the other hand, offer flexibility by allowing you to zoom in and out.

## Focal Length

The focal length of a lens determines how much of the scene will be captured. Wide-angle lenses capture more of the scene, while telephoto lenses allow you to zoom in on distant subjects.

## Aperture

The aperture of a lens controls the amount of light that enters the camera. A wide aperture (low f-number) allows more light in and creates a shallow depth of field, ideal for portrait photography.

## Choosing the Right Lens

When choosing a lens, consider the type of photography you will be doing. Landscape photographers typically prefer wide-angle lenses, while portrait photographers often use prime lenses with wide apertures.`,
  },
  {
    slug: 'exploring-natural-light',
    title: 'Exploring Natural Light',
    tag: 'Popular',
    readTime: '6 min read',
    author: 'Emily Johnson',
    image: '/assets/blog-3.png',
    excerpt: 'How to harness natural light to create stunning, mood-driven photography.',
    body: `Natural light is one of the most powerful tools in a photographer's arsenal. Understanding how to use it effectively can dramatically improve your images.

## The Golden Hour

The golden hour occurs shortly after sunrise and before sunset. During this time, the sun is low on the horizon, creating a warm, soft light that is ideal for photography.

## The Blue Hour

The blue hour occurs just before sunrise and after sunset. During this time, the sky takes on a deep blue hue that can create stunning images, especially in urban environments.

## Overcast Light

Overcast conditions create a soft, diffused light that is ideal for portrait photography. The clouds act as a natural diffuser, eliminating harsh shadows.

## Using Shadows

Shadows can add depth and dimension to your images. Look for interesting shadow patterns that can enhance your compositions and add visual interest.`,
  },
  {
    slug: 'the-art-of-composition',
    title: 'The Art of Composition',
    tag: 'Popular',
    readTime: '8 min read',
    author: 'Johnson Lee',
    image: '/assets/blog-1.png',
    excerpt: 'Rule of thirds, leading lines, and compositional techniques that transform your shots.',
    body: `Composition is the arrangement of elements within a photograph. Mastering composition techniques can help you create more visually appealing images.

## Rule of Thirds

The rule of thirds divides the frame into nine equal parts. Placing your subject at the intersection of these lines creates a more balanced and visually interesting composition.

## Leading Lines

Leading lines are lines within the composition that lead the viewer's eye to the main subject. Roads, fences, and rivers are common examples of leading lines.

## Symmetry and Patterns

Symmetry and patterns can create visually striking images. Look for reflections, repetitive patterns, or symmetrical subjects in your environment.

## Framing

Using elements within the scene to frame your subject can add depth and context to your images. Doorways, windows, and tree branches are common framing elements.`,
  },
  {
    slug: 'understanding-camera-settings',
    title: 'Camera Settings',
    tag: 'Update',
    readTime: '9 min read',
    author: 'Jane Smith',
    image: '/assets/blog-2.png',
    excerpt: 'Master ISO, aperture and shutter speed — the exposure triangle explained simply.',
    body: `Understanding your camera settings is fundamental to taking great photographs. The exposure triangle — ISO, aperture, and shutter speed — controls the exposure of your images.

## ISO

ISO determines the sensitivity of your camera's sensor to light. A lower ISO value results in less noise but requires more light, while a higher ISO allows shooting in low light but introduces noise.

## Aperture

Aperture controls the size of the lens opening, affecting the amount of light that reaches the sensor and the depth of field. A wide aperture (e.g., f/1.8) creates a shallow depth of field, ideal for portraits.

## Shutter Speed

Shutter speed determines how long the sensor is exposed to light. A fast shutter speed freezes motion, while a slow shutter speed creates motion blur.

## Balancing the Triangle

The key to perfect exposure is balancing these three settings. Changing one element requires adjusting the others to maintain the correct exposure.`,
  },
]

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'nature',
    title: 'Nature',
    category: 'Nature',
    year: '2026',
    image: '/assets/portfolio-1.png',
    description: 'Exploring city life through my lens.',
    images: ['/assets/portfolio-1.png', '/assets/showcase-1.png', '/assets/showcase-2.png'],
  },
  {
    slug: 'photography-shoot-5',
    title: 'Travel',
    category: 'Photography',
    year: '2022',
    image: '/assets/portfolio-2.png',
    description: 'A journey through colors and horizons.',
    images: ['/assets/portfolio-2.png', '/assets/showcase-3.png', '/assets/showcase-4.png'],
  },
  {
    slug: 'photography-shoot-1',
    title: 'Urban',
    category: 'Photography',
    year: '2023',
    image: '/assets/portfolio-3.png',
    description: 'The pulse of the city captured in light.',
    images: ['/assets/portfolio-3.png', '/assets/showcase-1.png', '/assets/portrait-3.avif'],
  },
  {
    slug: 'photography-shoot-3',
    title: 'Emotion',
    category: 'Photography',
    year: '2021',
    image: '/assets/portfolio-4.png',
    description: 'Raw moments of human expression.',
    images: ['/assets/portfolio-4.png', '/assets/portrait-1.avif', '/assets/portrait-2.avif'],
  },
  {
    slug: 'photography-shoot-2',
    title: 'Wonders',
    category: 'Photography',
    year: '2022',
    image: '/assets/portfolio-5.png',
    description: 'Beauty found in unexpected places.',
    images: ['/assets/portfolio-5.png', '/assets/showcase-2.png', '/assets/portrait-4.avif'],
  },
  {
    slug: 'photography-shoot-4',
    title: 'Event',
    category: 'Photography',
    year: '2023',
    image: '/assets/portfolio-6.png',
    description: 'Memories preserved in every frame.',
    images: ['/assets/portfolio-6.png', '/assets/showcase-3.png', '/assets/portrait-3.avif'],
  },
]
