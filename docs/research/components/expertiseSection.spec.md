# Expertise Section Specification

## Overview
- **Target file:** src/components/ExpertiseSection.tsx
- **Interaction model:** mixed
- **Complexity:** complex
- **Screenshot:** docs/design-references/expertiseSection.png
- **Source URL:** https://lightoory.webflow.io/ — `body > section:nth-of-type(3)`

---

## DOM Structure

```
section.section                                    (margin: 100px 0; padding: 12px)
  div.padding-global                               (display: flex; flex-direction: column; align-items: center; gap: [internal])
    div.container-medium                           (display: flex; flex-direction: column; align-items: center; gap: 50px; max-width: 1000px)
      div.section-tittle.center                    (display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center)
        div.badge                                  (pill label "Expertise")
          div.tittle-badge                         (text: "Expertise")
        h2.heading-style-h2.center                 (text: "How can I help you today?")
        p.paragraph-large.center                   (text: "I bring your ideas to life…")
      div.grid.expertise                           (display: grid; grid-template-columns: repeat(3, 314.664px); gap: 20px)
        ── Col 1: div.slider._2.w-slider           (left card — Webflow slider / phone mockup)
             div.mask.w-slider-mask
               div.slide.expertise.w-slide (x4)
                 img.photo-shoot                   (slide image, 298.664×594px, border-radius: 34px)
                 div.column-icon.slide             (star icons row, position: absolute, bottom of slide)
                   img.icon (x4 star images)
                 div.sub-heading-regular.slide-text ("Photo Shoot", position: absolute, bottom: 17.8px, color: #fff)
             div.slide-nav-mini.w-slider-nav       (position: absolute; bottom: 30.5px; 4 dot indicators)
        ── Col 2: div.column-expertise             (display: flex; flex-direction: column; gap: 20px)
             div.card.expertise                    (large card, h: 464px — "Shot with Top Gear")
               img.tumbnail-expertise              (gear lens image, 266.664×218px, border-radius: 32px)
               img.icon                            (gear icon, 24×24px)
               div.content.expertise               (flex column, gap: 6px)
                 div.sub-heading-regular.left      ("Shot with Top Gear")
                 p.paragraph-regular.left          ("Using premium equipment for stunning images.")
               div.column-badge.left              (flex row, flex-wrap: wrap, gap: 10px)
                 div.badge.two > div.tittle-badge  ("Lighting")
                 div.badge.two > div.tittle-badge  ("Direction")
                 div.badge.two > div.tittle-badge  ("Edting")
             div.card.expertise                    (stat card, h: 118px — "Over 500+ happy clients served.")
               img.icon                            (star badge icon, 24×24px)
               div.content.expertise
                 div.sub-heading-regular.left      ("Over 500+ happy clients served.")
        ── Col 3: div.column-expertise             (display: flex; flex-direction: column; gap: 20px)
             div.card.expertise                    (medium card, h: 222px — "E-Commerce Shoots")
               img.icon                            (bag icon, 24×24px)
               div.content.expertise
                 div.sub-heading-regular.left      ("E-Commerce Shoots")
                 p.paragraph-regular.left          ("Visuals that enhance value and conversion.")
               div.column-badge.left
                 div.badge.two > div.tittle-badge  ("Styling")
                 div.badge.two > div.tittle-badge  ("Product")
                 div.badge.two > div.tittle-badge  ("Optimized")
             div.card.expertise                    (mini card, h: 118px — "Smooth client experience")
               img.icon                            (profile icon, 24×24px)
               div.content.expertise
                 div.sub-heading-regular.left      ("Smooth client experience")
             div.card.expertise                    (medium card, h: 222px — "Portrait Photography")
               img.icon                            (camera icon, 24×24px)
               div.content.expertise
                 div.sub-heading-regular.left      ("Portrait Photography")
                 p.paragraph-regular.left          ("For individuals, couples, and professionals.")
               div.column-badge.left
                 div.badge.two > div.tittle-badge  ("Studio")
                 div.badge.two > div.tittle-badge  ("Location")
                 div.badge.two > div.tittle-badge  ("Retouch")
```

---

## Computed Styles (exact values from getComputedStyle)

### Section container (`body > section:nth-of-type(3)`)
```
display: block
margin: 100px 0px
padding: 12px
width: 1512px
height: 860px
position: relative
overflow: visible
font-family: Manrope, sans-serif
font-size: 16px
font-weight: 400
line-height: 22px
color: rgb(1, 1, 1)
background: transparent
transition: all
opacity: 1
```
Note: Section background is inherited from `body { background-color: rgb(247, 248, 253) }` (light blue-gray: #F7F8FD).

### `.padding-global`
```
display: flex
flex-direction: column
justify-content: center
align-items: center
width: 1488px
height: 836px
padding: 8px
position: relative
overflow: visible
```

### `.container-medium`
```
display: flex
flex-direction: column
justify-content: center
align-items: center
gap: 50px
width: 1000px
height: 820px
max-width: 1000px
padding: 8px
border-radius: 40px
background: transparent
position: relative
text-align: center
overflow: visible
```

### `.section-tittle.center` (header wrapper)
```
display: flex
flex-direction: column
justify-content: center
align-items: center
gap: 14px
width: 984px
height: 144px
text-align: center
position: relative
overflow: visible
```

### `.badge` (Expertise pill)
```
display: flex
flex-direction: row
justify-content: center
align-items: center
gap: 8px
width: 84.1953px
height: 30px
padding: 4px 12px
background-color: rgb(255, 255, 255)
border-radius: 26px
color: rgb(1, 1, 1)
font-size: 16px
font-weight: 400
line-height: 22px
text-align: center
```

### `.tittle-badge` (text inside badge)
```
display: block
width: fit-content
height: 22px
color: rgb(1, 1, 1)
font-size: 14px
font-weight: 300
line-height: 22px
```

### `h2.heading-style-h2.center`
```
display: block
width: 450px
height: 44px
font-family: Manrope, sans-serif
font-size: 32px
font-weight: 500
line-height: 44px
color: rgb(1, 1, 1)
text-align: center
```

### `p.paragraph-large.center` (subtitle)
```
display: flex
width: 450px
height: 50px
font-family: Manrope, sans-serif
font-size: 18px
font-weight: 300
line-height: 25px
color: rgb(124, 124, 124)
text-align: center
```

### `.grid.expertise`
```
display: grid
grid-template-columns: 314.664px 314.664px 314.664px
gap: 20px
width: 984px
height: 610px
justify-content: center
align-items: center
overflow: visible
```

### `.slider._2.w-slider` (left card — slider/phone mockup)
```
display: flex
flex-direction: column
justify-content: center
align-items: center
gap: 10px
width: 314.664px
height: 610px
padding: 8px
background-color: rgb(255, 255, 255)
border-radius: 34px
position: relative
overflow: hidden
```

### `.mask.w-slider-mask`
```
display: block
width: 298.664px
height: 594px
overflow: hidden (clip)
position: relative
```

### `.slide.expertise.w-slide`
```
display: inline-block
width: 298.664px
height: 594px
position: relative
overflow: hidden
```

### `img.photo-shoot` (slide image)
```
display: inline-block
width: 298.664px
height: 594px
border-radius: 34px
object-fit: cover (fills entire slide)
overflow: clip
```

### `.column-icon.slide` (star rating row, overlaid on slide)
```
display: flex
flex-direction: row
justify-content: center
align-items: center
gap: 6px
width: 298.664px
height: 24px
border-radius: 24px
position: absolute
bottom: ~552px from slide top (near top of slide)
background: transparent
```

### `img.icon` (star icons inside column-icon.slide)
```
display: flex
width: 24px
height: 24px
object-fit: cover
position: relative
z-index: 1
```

### `.sub-heading-regular.slide-text` ("Photo Shoot" label)
```
display: block
width: 298.664px
height: 22px
font-family: Manrope, sans-serif
font-size: 16px
font-weight: 400
line-height: 22px
color: rgb(255, 255, 255)
text-align: center
position: absolute
bottom: 17.8125px
```

### `.slide-nav-mini.w-slider-nav` (dot pagination)
```
display: block
position: absolute
bottom: 30.5px
width: 80px
height: 40px
```
Dot styles:
- Inactive `.w-slider-dot`: `width: 16px; height: 16px; border-radius: 100%; background-color: rgba(255, 255, 255, 0.4)`
- Active `.w-slider-dot.w--current`: `background-color: rgb(255, 255, 255)`

### `.column-expertise` (center and right column wrappers)
```
display: flex
flex-direction: column
justify-content: center
align-items: center
gap: 20px
width: 314.664px
height: 602px
background: transparent
overflow: visible
```

### `.card.expertise` (all expertise cards)
```
display: flex
flex-direction: column
justify-content: center
align-items: flex-start
gap: 24px
padding: 24px
width: 314.664px
background-color: rgb(255, 255, 255)
border-radius: 34px
transition: all
```
Card heights vary:
- Large (Shot with Top Gear): `height: 464px`
- Medium (E-Commerce Shoots, Portrait Photography): `height: 222px`
- Mini (Smooth client experience, stat card): `height: 118px`

### `img.tumbnail-expertise` (gear lens thumbnail in "Shot with Top Gear" card)
```
display: block
width: 266.664px
height: 218px
border-radius: 32px
object-fit: cover
```

### `img.icon` (card icons — 24×24px)
```
display: flex
width: 24px
height: 24px
object-fit: cover
```

### `.content.expertise`
```
display: flex
flex-direction: column
justify-content: center
align-items: flex-start
gap: 6px
width: 266.664px
height: auto
```
At tablet breakpoint: `width: 100%`

### `.sub-heading-regular.left` (card titles)
```
display: block
width: 266.664px
height: 22px
font-family: Manrope, sans-serif
font-size: 16px
font-weight: 400
line-height: 22px
color: rgb(1, 1, 1)
text-align: left
```

### `p.paragraph-regular.left` (card descriptions)
```
display: block
width: 266.664px
height: 44px
font-family: Manrope, sans-serif
font-size: 16px
font-weight: 300
line-height: 22px
color: rgb(124, 124, 124)
text-align: left
```

### `.column-badge.left` (tag pill row)
```
display: flex
flex-direction: row
flex-wrap: wrap
justify-content: flex-start
align-items: center
gap: 10px
width: 266.664px
height: 30px
```

### `.badge.two` (tag pills: Lighting, Styling, etc.)
```
display: flex
flex-direction: row
justify-content: center
align-items: center
gap: 8px
height: 30px
padding: 4px 12px
background-color: rgb(245, 245, 245)
border-radius: 26px
color: rgb(1, 1, 1)
font-size: 16px
font-weight: 400
line-height: 22px
```

---

## States & Behaviors

### Card hover (scale effect)
- **Trigger:** mouseenter on `.card.expertise`
- **State A (default):** `transform: none` (scale 1.0)
- **State B (hovered):** `transform: scale(1.05)` (105% scale per IX2 description)
- **Transition:** `transition: all 500ms ease` (from IX2 TRANSFORM_SCALE 500ms)
- **Implementation note:** The Webflow IX2 interaction "Move Card / a-105" applies this. No CSS hover rule is in the stylesheet; implement via Tailwind `hover:scale-105 transition-transform duration-500`

### Slider navigation
- **Trigger:** Webflow slider auto-advance or dot click
- **Behavior:** 4 slides cycle (Photo Shoot images)
- **Active dot:** `background: rgb(255, 255, 255)`
- **Inactive dot:** `background: rgba(255, 255, 255, 0.4)`
- **Implementation note:** Use a React `useState` for `currentSlide` (0-3), auto-advance with `setInterval` every ~4s

### Scroll reveal (fade-in-up)
- **Trigger:** Section enters viewport (scroll down)
- **Implementation:** IntersectionObserver threshold 0.15, add `.is-visible` to `.reveal` elements
- **Classes:** Apply `.reveal` to the section container; use `.reveal-delay-1/2/3` for stagger on grid cards

---

## Text Content (verbatim from site)

```
Expertise
How can I help you today?

I bring your ideas to life with captivating images, focusing on creativity and lighting.

[Slider — 4 slides, each labeled:]
Photo Shoot

Shot with Top Gear
Using premium equipment for stunning images.
Lighting
Direction
Edting

Over 500+ happy clients served.

E-Commerce Shoots
Visuals that enhance value and conversion.
Styling
Product
Optimized

Smooth client experience

Portrait Photography
For individuals, couples, and professionals.
Studio
Location
Retouch
```

Note: "Edting" is a typo in the original (missing 'i' in "Editing") — reproduce exactly.

---

## Assets Used

| Description | Source URL | Local path in `public/` |
|---|---|---|
| Slide 1 — Majestic Mountain Peak | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697477f2d50cc16bbbe95406_Majestic%20Mountain%20Peak.png` | `/images/expertise/slide-mountain.png` |
| Slide 2 — Dreamlike Portrait | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/69747814a82e8e9527773dba_Dreamlike%20Portrait.png` | `/images/expertise/slide-portrait.png` |
| Slide 3 — Serene Tree Landscape | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/69748603e6f7b5a73ca8438a_Serene%20Tree%20Landscape.png` | `/images/expertise/slide-tree.png` |
| Slide 4 — Serene Floral Embrace | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ef44_Serene%20Floral%20Embrace.avif` | `/images/expertise/slide-floral.avif` |
| Center card thumbnail — Gear lens | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6971dc9b649a4c3f87182e92_Gear.png` | `/images/expertise/gear-lens.png` |
| Icon — Star / Rating | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6971db237223f45c33a08b19_ic--round-star.png` | `/images/expertise/icon-star.png` |
| Icon — Star Badge | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6971da983c6dea9c8394c263_Star%20Badge.png` | `/images/expertise/icon-star-badge.png` |
| Icon — Bag (E-Commerce) | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6971da9867332c971e4a9c28_Bag.png` | `/images/expertise/icon-bag.png` |
| Icon — Profile (Smooth) | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6971da9805b6a5c075ae48d6_Profile.png` | `/images/expertise/icon-profile.png` |
| Icon — Camera (Portrait) | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6971da983f4244df2aabd37b_camera%20(1).png` | `/images/expertise/icon-camera.png` |
| Card image (Image Card) | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6971a0ebaee84e5e2d99b5d3_Image%20Card.png` | `/images/expertise/image-card.png` |

---

## Responsive Behavior

### Desktop 1440–1512px (default)
- `.grid.expertise`: `grid-template-columns: repeat(3, 1fr)` (~314px each), `gap: 20px`
- Section `margin: 100px 0`
- All three columns visible side by side

### Tablet ≤ 991px
- `.grid.expertise`: `grid-template-columns: 1fr; max-width: none` — stacks to single column
- `.column-expertise`: `flex-flow: column; justify-content: center; align-items: center`
- `.content.expertise`: `width: 100%`
- `.tumbnail-expertise`: `height: 400px`
- `.slide.expertise`: `height: auto`
- `.section`: `padding: var(--_size-guide---sections--section-padding); margin: 0`

### Mobile ≤ 767px
- `.slide.expertise`: `height: auto; overflow: hidden`

### Mobile ≤ 479px
- `.slide.expertise`: `border-radius: 24px; height: auto`

---

## Animation Notes

### Scroll Reveal (section fade-in)
- Uses IntersectionObserver with `threshold: 0.15`
- Apply `.reveal` class to `.container-medium` or section wrapper
- Use `.reveal-delay-1`, `.reveal-delay-2`, `.reveal-delay-3` for staggered card entry
- `.reveal` and `.is-visible` styles defined in `globals.css`

### Card Hover Scale (IX2 "Move Card")
- Scale: 1.0 → 1.05 on hover
- Duration: 500ms
- Easing: ease
- Tailwind implementation: `className="... transition-transform duration-500 hover:scale-105 cursor-pointer"`

### Webflow Slider (left card)
- 4 slides with auto-advance behavior
- Slide images are full-bleed within rounded container (298.664×594px, border-radius: 34px)
- Navigation dots: 4 white circles at bottom, active = solid white, inactive = 40% opacity white
- "Photo Shoot" label overlaid at bottom-left as absolute-positioned white text
- Star rating icons overlaid at top of slide (absolute position)

### CSS Design Tokens (CSS Custom Properties)
```css
--_color-guide---neutral--900: #030407
--_color-guide---neutral--300: #cacbd4
--_color-guide---neutral--100: #f5f5f5
--_color-guide---global-style--title: #010101
--_color-guide---global-style--base-card-ii: #fcfdfff7
--_color-guide---global-style--base-card: white
```
Body background: `rgb(247, 248, 253)` (#F7F8FD — very light blue-gray)
Card background: `rgb(255, 255, 255)` (pure white)
Tag pill (`.badge.two`) background: `rgb(245, 245, 245)` (#F5F5F5)
