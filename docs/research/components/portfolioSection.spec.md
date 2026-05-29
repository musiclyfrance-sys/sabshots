# Portfolio Section Specification

## Overview
- **Target file:** src/components/PortfolioSection.tsx
- **Interaction model:** hover-driven
- **Complexity:** complex
- **Screenshot:** docs/design-references/portfolioSection.png

---

## DOM Structure

```
section.section                            (body > section:nth-of-type(2))
  div.padding-global
    div.container-medium
      div.section-tittle.center            (header: icon + h2 + paragraph)
        div.icon-wrapper
          img.icon                         (camera icon, 45x45)
        h2.heading-style-h2.center         "A lens into my world"
        p.paragraph-large.center           "I capture your vision through creative photography."
      div.collection-list-wrapper.featured.w-dyn-list
        div.grid.portfolio.w-dyn-items     (3-col CSS grid, 6 items)
          div.item.w-dyn-item (x6)
            a.card-cms.portfolio.w-inline-block  (link to portfolio detail page)
              div.tumbnail-wrapper
                img.tumbnail-portfolio     (CMS-driven photo, object-fit: cover)
                div.column-potrfolio-item  (top overlay: title + camera icon, display:none by default)
                  div.sub-heading-regular.white-portfolio  "Nature" | "Travel" | etc.
                  img.icon-portfolio       (camera icon 22x22, rotates 180deg on hover)
                div.column-potrfolio-item._2  (bottom overlay: category + year, display:none by default)
                  p.paragraph-regular.white.portfolio-text  "Nature" | "Photography"
                  p.paragraph-regular.white.portfolio-text  "2026" | "2022" | etc.
```

---

## Computed Styles (exact values from getComputedStyle)

### Section Container (`body > section:nth-of-type(2)`)
```
font-family:         Manrope, sans-serif
font-size:           16px
color:               rgb(1, 1, 1)
padding:             12px (all sides)
margin:              100px 0px
width:               1512px (full viewport width)
height:              1085px
display:             block
position:            relative
opacity:             1
transition:          all
```

### `.padding-global`
```
display:             flex
flex-direction:      column
justify-content:     center
align-items:         center
padding:             8px
width:               1488px
height:              1061px
text-align:          center
position:            relative
```

### `.container-medium`
```
display:             flex
flex-direction:      column
justify-content:     center
align-items:         center
gap:                 50px
padding:             8px
width:               1000px
max-width:           1000px
height:              1045px
border-radius:       40px
position:            relative
text-align:          center
background:          rgba(255, 255, 255, 0)
```

### `.section-tittle.center` (header block)
```
display:             flex
flex-direction:      column
justify-content:     center
align-items:         center
gap:                 14px
width:               984px
height:              127px
position:            relative
text-align:          center
transform:           matrix(1, 0, 0, 1, 0, 0)   (scroll-reveal animated)
```

### `.icon-wrapper` (camera icon badge)
```
display:             flex
justify-content:     center
align-items:         center
background-color:    rgb(1, 1, 1)
padding:             7px
width:               38px
height:              38px
border-radius:       99px
box-shadow:          rgba(255, 255, 255, 0.38) -3px 1px 8px 1px inset
position:            relative
```

### `.icon` (img inside icon-wrapper)
```
display:             block
width:               45px
height:              45px
object-fit:          cover
position:            relative
```

### `.heading-style-h2.center`
```
font-size:           32px
font-weight:         500
color:               rgb(1, 1, 1)
width:               412.578px
height:              44px
max-width:           700px
text-align:          center
display:             block
position:            static
```

### `.paragraph-large.center`
```
font-size:           18px
font-weight:         300
color:               rgb(124, 124, 124)
text-align:          center
display:             block
```

### `.grid.portfolio.w-dyn-items` (card grid)
```
display:             grid
grid-template-columns: 314.664px 314.664px 314.664px
grid-template-rows:  416px 416px
gap:                 20px
width:               984px
height:              852px
```

### `.item.w-dyn-item` (grid cell wrapper)
```
display:             block
width:               314.664px
height:              416px
position:            static
```

### `.card-cms.portfolio.w-inline-block` (card link)
```
display:             flex
flex-direction:      column
justify-content:     center
align-items:         center
gap:                 10px
background-color:    rgba(252, 253, 255, 0.97)
padding:             8px
width:               314.664px
height:              416px
border-radius:       32px
border:              0px none rgb(255, 255, 255)
overflow:            visible
position:            relative
cursor:              pointer
transform:           matrix(1, 0, 0, 1, 0, 0)    (Webflow IX2 controlled)
transition:          all
```

### `.tumbnail-wrapper`
```
display:             flex
justify-content:     center
align-items:         center
width:               298.664px
height:              400px
border-radius:       32px
overflow:            hidden
position:            relative
```

### `img.tumbnail-portfolio`
```
display:             block
width:               298.664px
height:              400px
object-fit:          cover
position:            static
overflow:            clip
transition:          all
filter:              grayscale(0)           (default, no filter)
transform:           matrix(1, 0, 0, 1, 0, 0)  (scale controlled by IX2)
```

### `.column-potrfolio-item` (top overlay — title + icon)
```
display:             none               (default; flex on hover)
position:            absolute
top:                 6%
width:               85%
height:              auto
flex-direction:      row
justify-content:     space-between
align-items:         center
gap:                 10px
padding:             0px
```

### `.column-potrfolio-item._2` (bottom overlay — category + year)
```
display:             none               (default; flex on hover)
position:            absolute
bottom:              6%
width:               85%
height:              auto
flex-direction:      row
justify-content:     space-between
align-items:         center
```

### `.sub-heading-regular.white-portfolio` (card title in top overlay)
```
font-size:           16px
font-weight:         400
color:               rgb(255, 255, 255)
display:             block
```

### `.paragraph-regular.white.portfolio-text` (category/year text in bottom overlay)
```
font-size:           16px
font-weight:         300
color:               rgb(255, 255, 255)
display:             block
```

### `img.icon-portfolio` (camera icon on card)
```
display:             inline-block
width:               22px
height:              22px
object-fit:          cover
position:            relative
z-index:             1
overflow:            clip
transition:          all
```

---

## States & Behaviors

### State: Default (no hover)
- `.tumbnail-portfolio`: `filter: grayscale(0)`, `transform: scale(1)`
- `.column-potrfolio-item` (top): `display: none`
- `.column-potrfolio-item._2` (bottom): `display: none`
- `.icon-portfolio`: `transform: rotate(0deg)`
- `.card-cms.portfolio`: `transform: translateY(0px)`

### State: Hover (mouseover)
Driven by **Webflow IX2 animation list a-136** ("Hover Portfolio"), triggered on `MOUSE_OVER`:

| Action ID     | Type               | Target                     | Value / End State             | Duration |
|---------------|--------------------|----------------------------|-------------------------------|----------|
| a-136-n       | TRANSFORM_SCALE    | `.tumbnail-portfolio`      | scale(1,1) — reset initial    | 500ms    |
| a-136-n-2     | GENERAL_DISPLAY    | (overlay)                  | `none` — hide stale           | 0ms      |
| a-136-n-3     | TRANSFORM_SCALE    | `.icon` (header badge)     | scale(0.8, 0.8)               | 500ms    |
| a-136-n-8     | TRANSFORM_ROTATE   | `.icon-portfolio`          | rotate Z=0 (initial)          | 500ms    |
| a-136-n-10    | GENERAL_DISPLAY    | `.content-cms-item`        | `none`                        | 0ms      |
| a-136-n-12    | GENERAL_DISPLAY    | `.column-potrfolio-item`   | `none` (reset)                | 0ms      |
| a-136-n-15    | GENERAL_DISPLAY    | (overlay)                  | `none`                        | 0ms      |
| a-136-n-17    | TRANSFORM_MOVE     | `.card-cms.portfolio`      | x=0, y=0 (reset)              | 500ms    |
| a-136-n-4     | GENERAL_DISPLAY    | (overlay)                  | `flex`                        | 0ms      |
| a-136-n-5     | TRANSFORM_SCALE    | `.tumbnail-portfolio`      | **scale(1.05, 1.05)**         | 1000ms   |
| a-136-n-7     | STYLE_FILTER       | `.tumbnail-portfolio`      | **blur(3px)**                 | 500ms    |
| a-136-n-6     | TRANSFORM_SCALE    | `.icon` (header badge)     | scale(1, 1)                   | 500ms    |
| a-136-n-9     | TRANSFORM_ROTATE   | `.icon-portfolio`          | **rotate Z=180deg**           | 1000ms   |
| a-136-n-11    | GENERAL_DISPLAY    | `.content-cms-item`        | `block`                       | 0ms      |
| a-136-n-13    | GENERAL_DISPLAY    | `.column-potrfolio-item`   | **`flex`** (both overlays)    | 0ms      |
| a-136-n-14    | STYLE_FILTER       | `.tumbnail-portfolio`      | **grayscale(68%)**            | 500ms    |
| a-136-n-16    | GENERAL_DISPLAY    | (bottom overlay `._2`)     | **`flex`**                    | 0ms      |
| a-136-n-18    | TRANSFORM_MOVE     | `.card-cms.portfolio`      | **y=-8px** (lift card up)     | 500ms    |

**Net hover state on image**: `filter: grayscale(0.68) blur(3px)`, `transform: scale(1.05)`
**Net hover state on card**: `transform: translateY(-8px)`
**Net hover state on overlays**: both `.column-potrfolio-item` and `._2` change to `display: flex`
**Net hover state on icon**: `transform: rotate(180deg)` (rotates 180deg, appears flipped)

### State: Mouse Out
Driven by **Webflow IX2 animation list a-140** ("Hover Portfolio out"), triggered on `MOUSE_OUT`:
Reverses all hover states:
- `.tumbnail-portfolio`: scale back to 1, filter removed, blur removed (500ms)
- `.column-potrfolio-item`: `display: none`
- `._2`: `display: none`
- `.icon-portfolio`: rotate back to 0deg (500ms)
- `.card-cms.portfolio`: translateY back to 0 (500ms)

### State: Scroll Into View (SCROLL_INTO_VIEW)
Driven by **IX2 action list a-48** ("Fade In & Move On Scroll"):
- **Initial state**: opacity: 0, scale(0.9), translateY(11px)
- **Final state**: opacity: 1, scale(1), translateY(0) — 1300ms duration

---

## Text Content (verbatim from site)

**Section heading:**
```
A lens into my world
I capture your vision through creative photography.
```

**Card 1 (Nature):**
- Title: Nature
- Category: Nature | Year: 2026

**Card 2 (Travel):**
- Title: Travel
- Category: Photography | Year: 2022

**Card 3 (Urban):**
- Title: Urban
- Category: Photography | Year: 2023

**Card 4 (Emotion):**
- Title: Emotion
- Category: Photography | Year: 2021

**Card 5 (Wonders):**
- Title: Wonders
- Category: Photography | Year: 2022

**Card 6 (Event):**
- Title: Event
- Category: Photography | Year: 2023

---

## Assets Used

| Element | Source URL | Local Path in `public/` |
|---------|-----------|------------------------|
| Section icon (camera badge) | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ef29_material-symbols--camera-outline.png` | `/images/icons/camera-outline.png` |
| Card icon-portfolio (same icon) | Same as above | `/images/icons/camera-outline.png` |
| Card 1 thumbnail | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69744892b004248019907e3b_Modern%20Villa%20Serenity.png` | `/images/portfolio/modern-villa-serenity.png` |
| Card 2 thumbnail | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69743066ebbab186ad41c48d_Sun.png` | `/images/portfolio/sun.png` |
| Card 3 thumbnail | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69747bc4479da39d61be602b_Modern%20Speaker%20Interaction.png` | `/images/portfolio/modern-speaker-interaction.png` |
| Card 4 thumbnail | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69747c0cfce8ee90c4533f54_Serene%20Floral%20Contemplation.png` | `/images/portfolio/serene-floral-contemplation.png` |
| Card 5 thumbnail | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69747c3527afa05fd6db2a81_Abstract%20Portrait%20Art.png` | `/images/portfolio/abstract-portrait-art.png` |
| Card 6 thumbnail | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69747c89c1bb8c1db487c71d_Elegant%20Hands%20with%20Gradient%20Object.png` | `/images/portfolio/elegant-hands-gradient-object.png` |

Card image natural dimensions: ~1512 × 949–2007px (portrait and landscape mixed)

---

## Responsive Behavior

- **Desktop 1440px+**: 3-column grid, `grid-template-columns: repeat(3, ~314px)`, gap: 20px
- **Tablet ~768px**: Likely 2-column grid (Webflow breakpoint)
- **Mobile 390px**: Likely 1-column stack
- **Breakpoint**: ~768px (standard Webflow tablet breakpoint)

Note: Exact mobile breakpoint computed styles not captured. The grid is defined via `w-layout-grid` / `grid.portfolio`; Webflow typically collapses to 1-col at 479px and 2-col at 768px.

---

## Animation Notes

### Hover Animation (React Implementation)
Use React state + CSS transitions to replicate the IX2 behavior:

```tsx
// Group hover approach
<a
  className="group relative flex flex-col items-center justify-center w-full h-full rounded-[32px] bg-[rgba(252,253,255,0.97)] p-2 cursor-pointer transition-transform duration-500 ease-out"
  style={{ transform: isHovered ? 'translateY(-8px)' : 'translateY(0px)' }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  {/* Thumbnail wrapper */}
  <div className="relative w-full h-full rounded-[32px] overflow-hidden flex items-center justify-center">
    <img
      className="w-full h-full object-cover transition-all duration-[1000ms] ease-out"
      style={{
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        filter: isHovered ? 'grayscale(0.68) blur(3px)' : 'grayscale(0) blur(0px)'
      }}
    />
    {/* Top overlay: title + icon */}
    <div
      className="absolute top-[6%] w-[85%] flex flex-row justify-between items-center gap-2.5"
      style={{ display: isHovered ? 'flex' : 'none' }}
    >
      <span className="text-white text-base font-normal">{card.title}</span>
      <img
        className="w-[22px] h-[22px] object-cover relative z-[1] transition-transform duration-[1000ms]"
        style={{ transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)' }}
        src="/images/icons/camera-outline.png"
        alt=""
      />
    </div>
    {/* Bottom overlay: category + year */}
    <div
      className="absolute bottom-[6%] w-[85%] flex flex-row justify-between items-center"
      style={{ display: isHovered ? 'flex' : 'none' }}
    >
      <p className="text-white text-base font-light">{card.category}</p>
      <p className="text-white text-base font-light">{card.year}</p>
    </div>
  </div>
</a>
```

### Scroll Reveal (React IntersectionObserver)
```tsx
// a-48: Fade In & Move On Scroll
// Initial: opacity:0, scale(0.9), translateY(11px)
// Final: opacity:1, scale(1), translateY(0) — 1300ms
// Add .reveal class and IntersectionObserver per globals.css pattern
```

### Grid Layout (Tailwind)
```tsx
<div className="grid grid-cols-3 gap-5" style={{ gridTemplateRows: 'repeat(2, 416px)' }}>
```
