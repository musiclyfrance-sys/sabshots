# Process Section Specification

## Overview
- **Target file:** src/components/ProcessSection.tsx
- **Selector:** body > section:nth-of-type(4)
- **Interaction model:** scroll-driven
- **Complexity:** medium
- **Screenshot:** docs/design-references/processSection.png

---

## DOM Structure

```
section.section                              (body > section:nth-of-type(4))
  div.padding-global
    div.container-medium
      div.section-tittle.center              [data-w-id IX2 animated]
        div.badge                            "Process"
        h2.heading-style-h2.center           "Capture the Vision"
        p.paragraph-large.center             "We capture images with exceptional clarity and lighting."
      div.grid.benefits                      [data-w-id IX2 animated] — CSS grid, 3 cols
        div.card.process                     Card 1
          div.flex-column                    icon row (space-between)
            img.icon                         camera icon (24x24)
            img.icon.contain                 dots separator (24x24 rendered, 90x21 natural)
          div.line._2                        horizontal rule (1px)
          div.content.process
            div.sub-heading-regular.left     "Capture the Vision"
            p.paragraph-regular.left         "We capture stunning images that reflect your brand."
        div.card.process                     Card 2
          div.flex-column
            img.icon                         color-wheel icon (24x24)
            img.icon.contain                 dots separator
          div.line._2
          div.content.process
            div.sub-heading-regular.left     "Enhance the Details"
            p.paragraph-regular.left         "Photos are edited and color-corrected for consistency ."
        div.card.process                     Card 3
          div.flex-column
            img.icon                         file-send icon (24x24)
            img.icon.contain                 dots separator
          div.line._2
          div.content.process
            div.sub-heading-regular.left     "Deliver with Impact"
            p.paragraph-regular.left         "Final images are optimized for web and social media."
```

---

## Computed Styles (exact values from getComputedStyle)

### Section Container — `section.section`
```
display:          block
position:         relative
width:            1512px (full viewport)
height:           424px
padding:          12px (all sides)
margin:           100px 0px
background:       transparent (rgba(0,0,0,0))
font-family:      Manrope, sans-serif
font-size:        16px
font-weight:      400
line-height:      22px
color:            rgb(1, 1, 1)
overflow:         visible
opacity:          1
transition:       all
```

### `.padding-global`
```
display:          flex
flex-direction:   column
justify-content:  center
align-items:      center
width:            1488px
height:           400px
padding:          8px (all sides)
position:         relative
overflow:         visible
opacity:          1
```

### `.container-medium`
```
display:          flex
flex-direction:   column
justify-content:  center
align-items:      center
gap:              50px
width:            1000px
height:           384px
max-width:        1000px
padding:          8px (all sides)
border-radius:    40px
background:       transparent
overflow:         visible
opacity:          1
```

### `.section-tittle.center`  *(IX2 animated, data-w-id: 63cb28c9-68ce-29e7-a28f-4e1b16360f40)*
```
display:          flex
flex-direction:   column
justify-content:  center
align-items:      center
gap:              14px
width:            984px
height:           119px
position:         relative
overflow:         visible
opacity:          1
transform:        matrix(1,0,0,1,0,0)  → animates from translate3d(0,30px,0) opacity:0
transition:       all
```

### `.badge`
```
display:          flex
flex-direction:   row
align-items:      center
gap:              8px
background-color: rgb(255, 255, 255)
border-radius:    26px
padding:          4px 12px
width:            75.27px
height:           30px
font-size:        16px
font-weight:      400
color:            rgb(1, 1, 1)
border:           none
box-shadow:       none
overflow:         visible
position:         static
```

### `h2.heading-style-h2.center`
```
display:          block
font-size:        32px
font-weight:      500
font-family:      Manrope, sans-serif
line-height:      44px
color:            rgb(1, 1, 1)
max-width:        700px
width:            449.93px
height:           44px
overflow:         visible
position:         static
```

### `p.paragraph-large.center`
```
display:          flex
flex-direction:   row
font-size:        18px
font-weight:      300
font-family:      Manrope, sans-serif
line-height:      25px
color:            rgb(124, 124, 124)
max-width:        450px
width:            449.93px
height:           25px
```

### `.grid.benefits`  *(IX2 animated, data-w-id: 63cb28c9-68ce-29e7-a28f-4e1b16360f48)*
```
display:              grid
grid-template-columns: 314.664px 314.664px 314.664px  (3 equal cols)
justify-content:      center
align-items:          center
gap:                  20px
width:                984px
height:               199px
background:           transparent
overflow:             visible
position:             static
opacity:              1
transform:            matrix(1,0,0,1,0,0)  → stagger animates each card in
```

### `.card.process`
```
display:          flex
flex-direction:   column
justify-content:  center
align-items:      flex-start
gap:              24px
width:            314.664px
height:           199px
padding:          24px (all sides)
background-color: rgba(252, 253, 255, 0.97)
border-radius:    34px
border:           3px solid rgb(255, 255, 255)
box-shadow:       none
overflow:         visible
position:         static
opacity:          1
transition:       all
```

### `.flex-column` (icon row inside card)
```
display:          flex
flex-direction:   row
justify-content:  space-between
align-items:      center
width:            260.664px
height:           24px
overflow:         visible
position:         static
```

### `img.icon` (main icon — camera/color-wheel/file-send)
```
display:          flex
flex-direction:   row
justify-content:  center
align-items:      center
width:            24px
height:           24px
overflow:         clip
position:         relative
object-fit:       cover
```

### `img.icon.contain` (three dots / Dots.png)
```
display:          flex
flex-direction:   row
justify-content:  center
align-items:      center
width:            24px
height:           24px
overflow:         clip
position:         relative
object-fit:       contain
```

### `.line._2` (horizontal separator)
```
display:          flex
flex-direction:   column
justify-content:  center
align-items:      center
background-color: rgb(245, 245, 245)
width:            260.664px
height:           1px
overflow:         visible
position:         static
```

### `.content.process`
```
display:          flex
flex-direction:   column
justify-content:  center
align-items:      flex-start
gap:              6px
width:            260.664px
height:           72px
overflow:         visible
position:         static
```

### `.sub-heading-regular.left` (card title)
```
display:          block
font-size:        16px
font-weight:      400
font-family:      Manrope, sans-serif
line-height:      22px
color:            rgb(1, 1, 1)
width:            260.664px
height:           22px
position:         static
overflow:         visible
```

### `p.paragraph-regular.left` (card description)
```
display:          block
font-size:        16px
font-weight:      300
font-family:      Manrope, sans-serif
line-height:      22px
color:            rgb(124, 124, 124)
width:            260.664px
height:           44px
position:         static
overflow:         visible
```

---

## States & Behaviors

### State 1 — Section Scroll Reveal (SCROLL_INTO_VIEW)
- **Trigger:** `.section-tittle.center` enters viewport (IntersectionObserver / Webflow IX2)
- **State A (before):** `opacity: 0; transform: translate3d(0, 30px, 0)`
- **State B (after):** `opacity: 1; transform: translate3d(0, 0, 0)` (confirmed in data-w-id inline style)
- **Transition:** IX2 ease (approximate: `opacity 0.6s ease, transform 0.6s ease`)

### State 2 — Cards Grid Stagger (SCROLL_INTO_VIEW on `.grid.benefits`)
- **Trigger:** `.grid.benefits` enters viewport
- **State A (before):** Each `.card.process` at `opacity: 0; transform: translateY(20px)`
- **State B (after):** Cards stagger in one by one: card 1 → card 2 → card 3 with ~150ms delay each
- **Transition:** IX2 a-124 'timeline' animation; final computed: `opacity: 1; transform: matrix(1,0,0,1,0,0)`

### State 3 — Card Hover
- **Trigger:** Mouse enters `.card.process`
- **Observation:** No explicit hover transform/shadow visible in computed styles; card has `transition: all`
- **Likely behavior:** Subtle `box-shadow` or `transform: translateY(-2px)` via Webflow IX2 hover trigger
- **Safe default:** Add `hover:shadow-md hover:-translate-y-1 transition-all duration-300` in Tailwind

### Page Background Color Context
- `body` background: `rgb(247, 248, 253)` (very light blue-gray)
- Section background: transparent (inherits body bg)
- Card background: `rgba(252, 253, 255, 0.97)` (near-white, slightly blue-tinted)

---

## Text Content (verbatim from site)

```
Process
Capture the Vision
We capture images with exceptional clarity and lighting.

Capture the Vision
We capture stunning images that reflect your brand.

Enhance the Details
Photos are edited and color-corrected for consistency .

Deliver with Impact
Final images are optimized for web and social media.
```

---

## Assets Used

| Element | Source URL | Local Path |
|---|---|---|
| Card 1 icon (camera) | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6971da983f4244df2aabd37b_camera%20(1).png` | `public/icons/icon-camera.png` |
| Card 2 icon (color-wheel) | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6972e427e6f4a1f9f5d8feee_iconoir--color-wheel.png` | `public/icons/icon-color-wheel.png` |
| Card 3 icon (file-send) | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6972e3bc51afa3b481ca7bed_solar--file-send-linear.png` | `public/icons/icon-file-send.png` |
| Dots separator | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6971df67936289dea753226a_Dots.png` | `public/icons/icon-dots.png` |

All icons: natural dimensions 45–48px square (except Dots: 90×21px). Rendered at 24×24px via CSS.

---

## Responsive Behavior

- **Desktop 1440px:** 3-column grid (`repeat(3, 314px)`), max-width container 1000px centered, horizontal card layout
- **Tablet ~768px:** Likely 1-column stack (Webflow default breakpoints); cards become full-width
- **Mobile 390px:** Single column, cards stack vertically, padding reduces
- **Breakpoint:** ~768px (standard Webflow tablet breakpoint)

The section has `margin: 100px 0` on desktop. This likely reduces at smaller breakpoints via Webflow's responsive margin classes.

---

## Animation Notes

### IX2 Webflow Interactions
Two animated elements with `data-w-id` attributes:

1. **`.section-tittle.center`** — `data-w-id: 63cb28c9-68ce-29e7-a28f-4e1b16360f40`
   - Type: SCROLL_INTO_VIEW fade-in-up
   - Start: `opacity: 0; transform: translate3d(0, 30px, 0); transform-style: preserve-3d`
   - End: `opacity: 1; transform: translate3d(0, 0, 0); transform-style: preserve-3d`

2. **`.grid.benefits`** — `data-w-id: 63cb28c9-68ce-29e7-a28f-4e1b16360f48`
   - Type: SCROLL_INTO_VIEW stagger on children (IX2 a-124 'timeline')
   - Each `.card.process` fades in with translateY offset, staggered ~150ms apart
   - End state: `opacity: 1; transform: translate3d(0, 0, 0); transform-style: preserve-3d`

### React Implementation
Use the SCROLL REVEALS pattern from globals.css:
```tsx
'use client'
// useEffect with IntersectionObserver(threshold: 0.15)
// Add .reveal class to .section-tittle and each .card.process
// Observer adds .is-visible on intersection
// Use .reveal-delay-1/2/3 on cards for stagger
```

### Key Transition Values
- All animated elements: `transition: all` (Webflow default catch-all)
- Cards: no explicit duration in computed styles; use `transition-all duration-500` in Tailwind
- Card hover: `transition: all` computed — implement as `transition-all duration-300`
