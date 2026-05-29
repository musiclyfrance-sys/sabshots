# Testimonials Section Specification

## Overview
- **Target file:** src/components/TestimonialsSection.tsx
- **Interaction model:** scroll-driven
- **Complexity:** medium
- **Screenshot:** docs/design-references/testimonialsSection.png

---

## DOM Structure

```
section.section                                                  ← outer section, margin 100px 0, padding 12px
  └── div.padding-global                                         ← flex column, padding 8px, centers content
        └── div.container-medium                                 ← max-width 1000px, flex column, gap 50px, padding 8px
              ├── div.section-tittle.center [data-w-id]          ← header block, flex column, gap 14px, h:119px — SCROLL_INTO_VIEW animated
              │     ├── div.badge                                 ← pill label "Testimonials"
              │     └── div.text                                  ← flex column, gap 14px
              │           ├── h2.heading-style-h2.center         ← "Hear from Our User"
              │           └── p.paragraph-large.center           ← subtitle
              └── div.collection-list-wrapper.testimonials.w-dyn-list  ← CMS wrapper, flex row, w:984px
                    └── div.grid.testimonials.w-dyn-items [data-w-id]  ← CSS grid 3-col, role=list — SCROLL_INTO_VIEW animated
                          └── div.item.w-dyn-item × 6            ← grid cell, w:314.664px, h:314px
                                └── div.card.testimonials        ← white card, flex column, gap 24px, padding 24px, border-radius 32px
                                      ├── img.icon               ← quote-mark PNG, 24×24px
                                      └── div.content-testimonials  ← flex column, gap 34px, w:266.664px
                                            ├── div.text.left    ← flex column, gap 6px
                                            │     ├── div.sub-heading-regular.left  ← bold title
                                            │     └── p.paragraph-regular.left     ← body text
                                            └── div.user-column  ← flex row, justify-content: space-between, h:24px
                                                  ├── div.column-name              ← flex row, gap 10px, align-items: center
                                                  │     ├── img.user-reviews       ← avatar, 24×24px, border-radius 99px
                                                  │     └── p.paragraph-regular    ← reviewer name
                                                  └── img.icon.mini                ← verified badge PNG, 20×20px
```

---

## Computed Styles (exact values from getComputedStyle)

### Section container (`body > section:nth-of-type(5)`)
| Property | Value |
|---|---|
| display | block |
| width | 1512px (full viewport) |
| height | 895px |
| padding | 12px |
| margin | 100px 0px |
| backgroundColor | rgba(0, 0, 0, 0) — inherits body bg `rgb(247, 248, 253)` |
| position | relative |
| fontFamily | Manrope, sans-serif |
| fontSize | 16px |
| color | rgb(1, 1, 1) |
| overflow | visible |
| opacity | 1 |

### `.padding-global`
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | center |
| width | 1488px |
| height | 871px |
| padding | 8px |

### `.container-medium`
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | center |
| gap | 50px |
| maxWidth | 1000px |
| width | 1000px |
| height | 855px |
| padding | 8px |
| backgroundColor | rgba(255, 255, 255, 0) |
| borderRadius | 40px |
| position | relative |

### `.section-tittle.center` (header block — animated via Webflow IX2)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | center |
| gap | 14px |
| width | 984px |
| height | 119px |
| data-w-id | e226b6a9-ee87-6963-264a-86b945308b22 |
| style (Webflow IX) | opacity, transform: translate3d / scale3d / rotate / skew (SCROLL_INTO_VIEW) |
| CSS rule | `.section-tittle { flex-flow: column; justify-content: center; align-items: center; display: flex; position: relative; }` |

### `.badge` (the "Testimonials" pill)
| Property | Value |
|---|---|
| display | flex |
| backgroundColor | rgb(255, 255, 255) |
| color | rgb(1, 1, 1) |
| padding | 4px 12px |
| borderRadius | 26px |
| fontSize | 16px |
| fontWeight | 400 |
| lineHeight | 22px |

### `h2.heading-style-h2.center`
| Property | Value |
|---|---|
| fontSize | 32px |
| fontWeight | 500 |
| color | rgb(1, 1, 1) |
| lineHeight | 44px |
| textAlign | center |
| margin | 0px |
| fontFamily | Manrope, sans-serif |

### `p.paragraph-large.center` (subtitle)
| Property | Value |
|---|---|
| fontSize | 18px |
| fontWeight | 300 |
| color | rgb(124, 124, 124) |
| lineHeight | 25px |
| textAlign | center |
| margin | 0px |

### `.collection-list-wrapper.testimonials` (CMS wrapper)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | row |
| width | 984px |
| gap | 16px |

### `.grid.testimonials.w-dyn-items` (3-column card grid — animated)
| Property | Value |
|---|---|
| display | grid |
| gridTemplateColumns | 314.664px 314.664px 314.664px (= 1fr 1fr 1fr at container width) |
| gap | 20px |
| width | 984px |
| alignItems | center |
| justifyContent | center |
| data-w-id | ed797543-c991-a7ad-f1b0-9af2c0f481b2 |
| style (Webflow IX) | opacity, transform (SCROLL_INTO_VIEW) |

### `.item.w-dyn-item` (grid cell wrapper)
| Property | Value |
|---|---|
| display | block |
| width | 314.664px |
| height | 314px |
| padding | 0px |

### `.card.testimonials` (individual testimonial card)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | flex-start |
| gap | 24px |
| width | 314.664px |
| height | 314px |
| padding | 24px |
| paddingTop | 24px |
| paddingRight | 24px |
| paddingBottom | 24px |
| paddingLeft | 24px |
| backgroundColor | rgb(255, 255, 255) |
| borderRadius | 32px |
| boxShadow | none |
| position | static |
| CSS token `--_size-guide---border--border-small` | 32px |
| CSS token `--_color-guide---global-style--base-card` | white |

### `img.icon` (quote mark)
| Property | Value |
|---|---|
| display | flex |
| width | 24px |
| height | 24px |
| objectFit | cover |
| borderRadius | 0px |
| alignItems | center |

### `.content-testimonials`
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | flex-start |
| gap | 34px |
| width | 266.664px |
| height | 218px |

### `.text.left`
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | flex-start |
| gap | 6px |
| width | 266.664px |
| height | 160px |

### `.sub-heading-regular.left` (card title / headline)
| Property | Value |
|---|---|
| display | block |
| fontSize | 16px |
| fontWeight | 400 |
| color | rgb(1, 1, 1) |
| lineHeight | 22px |
| height | 22px |

### `p.paragraph-regular.left` (card body text)
| Property | Value |
|---|---|
| fontSize | 16px |
| fontWeight | 300 |
| color | rgb(124, 124, 124) |
| lineHeight | 22px |
| height | 132px |
| CSS token `--weight--paragraph` | 300 |
| CSS token `--_color-guide---global-style--content` | #7c7c7c |

### `.user-column` (bottom row: avatar + name + badge)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | row |
| justifyContent | space-between |
| alignItems | center |
| gap | 10px |
| width | 266.664px |
| height | 24px |

### `.column-name` (avatar + name group)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | row |
| justifyContent | center |
| alignItems | center |
| gap | 10px |
| height | 24px |

### `img.user-reviews` (circular avatar)
| Property | Value |
|---|---|
| display | block |
| width | 24px |
| height | 24px |
| objectFit | cover |
| borderRadius | 99px |

### `p.paragraph-regular` (reviewer name, no `.left` modifier)
| Property | Value |
|---|---|
| fontSize | 16px |
| fontWeight | 300 |
| color | rgb(124, 124, 124) |
| lineHeight | 22px |

### `img.icon.mini` (verified badge)
| Property | Value |
|---|---|
| display | flex |
| width | 20px |
| height | 20px |
| objectFit | cover |
| borderRadius | 0px |

---

## States & Behaviors

### Scroll reveal — section header (`.section-tittle.center`)
- **Trigger:** IntersectionObserver via Webflow IX2 (SCROLL_INTO_VIEW), `data-w-id="e226b6a9-ee87-6963-264a-86b945308b22"`
- **State A (before visible):** `opacity: 0; transform: translate3d(0px, 30px, 0px)` (typical Webflow fade-in-up initial state)
- **State B (after visible):** `opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d`
- **Transition:** Webflow IX2 easing (ease, ~0.5–0.8s duration)

### Scroll reveal — testimonials grid (`.grid.testimonials`)
- **Trigger:** IntersectionObserver via Webflow IX2 (SCROLL_INTO_VIEW), `data-w-id="ed797543-c991-a7ad-f1b0-9af2c0f481b2"`
- **State A:** `opacity: 0; transform: translate3d(0, 30px, 0)` (typical initial)
- **State B:** `opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) ...; transform-style: preserve-3d`
- **Transition:** Webflow IX2 (ease, ~0.5–0.8s duration)

### Hover on `.card.testimonials`
- **Trigger:** CSS `:hover`
- **Observed:** No explicit `boxShadow` or `transform` change observed in computed styles at rest
- **Transition value:** `all` (catch-all transition; Webflow default)
- **Note:** Cards appear static — no hover elevation or scale detected

---

## Text Content (verbatim from site)

```
Testimonials
Hear from Our User
Read how our users have achieved success

Card 1 — A joy to work with.
Working with this photographer on our wedding day was a joy. Their creativity, professionalism, and ability to capture genuine moments resulted in timeless photos we truly cherish. Highly recommended!
Johnson

Card 2 — Creative Wedding Photography!
Incredible wedding photos—full of emotion, creativity, and beautiful details. Every image feels meaningful, and we're beyond happy with the results. Highly recommended!
Sarah Davis

Card 3 — Memorable Family Photos!
Incredible wedding photos—rich in emotion, creativity, and stunning detail. Every image feels special, and we couldn't be happier. Highly recommended!
Michael Brown

Card 4 — Breathtaking Landscapes!
The landscape photos are absolutely breathtaking—authentic, artistic, and beautifully composed. Each image feels like a true masterpiece and looks stunning on display. Truly exceptional work!
Emily Johnson

Card 5 — Incredible Portraits!
The portrait session was unforgettable—the photographer made me feel confident and at ease, and the results truly reflect my personality. The creativity and skill exceeded my expectations. I'll definitely be back for more!
Jane Smith

Card 6 — Stunning Work!
Working with this photographer for our wedding was a wonderful experience. Their attention to detail and ability to capture the true essence of the day was incredible—every photo tells a story we'll cherish forever. Highly recommended!
John Doe
```

---

## Assets Used

### Icons (shared across all 6 cards — same file)
| Role | Source URL | Local path | Display size |
|---|---|---|---|
| Quote mark icon | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6972dd06d8e5466789b9c683_oui--quote.png` | `public/images/oui--quote.png` | 24×24px |
| Verified badge | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6972de0f561903461d046d23_material-symbols--verified-rounded.png` | `public/images/material-symbols--verified-rounded.png` | 20×20px |

### Avatar images (6 unique, from CMS path `/697188003e8e3143dfd8ea56/`)
| Card | Reviewer | Source URL | Local path | Natural size |
|---|---|---|---|---|
| 1 | Johnson | `…6972e27547c5431766f0c0b7_Dynamic%20Black-and-White%20Portrait%20(2).jpeg` | `public/images/avatar-johnson.jpeg` | 673×841px |
| 2 | Sarah Davis | `…6972e2834dd72f7af8f14c51_Dynamic%20Black-and-White%20Portrait%20(1).jpeg` | `public/images/avatar-sarah-davis.jpeg` | 673×841px |
| 3 | Michael Brown | `…6972e291e629715f463dfced_Black%20and%20White%20Portrait.jpeg` | `public/images/avatar-michael-brown.jpeg` | 673×841px |
| 4 | Emily Johnson | `…6972e29e62269dd99630a45f_Dynamic%20Black-and-White%20Portrait.jpeg` | `public/images/avatar-emily-johnson.jpeg` | 673×841px |
| 5 | Jane Smith | `…6972e2ac8c12a332fcb0f898_Blurred%20Portrait%20Art.jpeg` | `public/images/avatar-jane-smith.jpeg` | 673×841px |
| 6 | John Doe | `…6972e2b9aaff2b29e8d16b0c_Dynamic%20Afro%20Portrait.jpeg` | `public/images/avatar-john-doe.jpeg` | 673×841px |

Full CDN base: `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/`

---

## Responsive Behavior

| Breakpoint | Grid columns | Notes |
|---|---|---|
| Desktop ≥ 992px | 3 columns (`1fr 1fr 1fr`) | Default 3×2 layout |
| Tablet ≤ 991px | 2 columns (`1fr 1fr`) | `.grid.testimonials { grid-template-columns: 1fr 1fr; }` + `.content-testimonials { width: 100%; }` |
| Mobile ≤ 767px | 1 column | `.grid.testimonials { grid-template-columns: 1fr; }` + `.grid { gap: 10px; }` + `.card.testimonials { flex-flow: column; }` |
| Small mobile ≤ 479px | 1 column | `.grid { column-gap: 20px; padding: 0px; }` + `.content-testimonials { gap: 10px; }` |

- Breakpoints: 991px, 767px, 479px
- Container `max-width: 1000px` stays fixed; padding-global handles outer gutters

---

## Animation Notes

### Webflow IX2 Scroll Reveal (SCROLL_INTO_VIEW)
Both the section header (`.section-tittle.center`) and the cards grid (`.grid.testimonials`) are animated by Webflow Interactions 2.0:

- Each animated element has a `data-w-id` attribute linking to a Webflow IX2 action sequence
- **Initial state** set by Webflow IX at page load: `opacity: 0; transform: translate3d(0, Xpx, 0)` (fade-in-up pattern)
- **Trigger:** element enters viewport (SCROLL_INTO_VIEW event)
- **End state** (in-view): `opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d`
- The inline `style` attribute on these elements confirms Webflow IX is managing the transform

### Implementation for React clone
Use the **SCROLL REVEALS** pattern from the animation guide:
```tsx
'use client'
// useEffect with IntersectionObserver(threshold: 0.15)
// Add .reveal class to .section-tittle and .grid wrappers
// Observer adds .is-visible on intersection
// .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
// .reveal.is-visible { opacity: 1; transform: translateY(0); }
// Use .reveal-delay-1 / .reveal-delay-2 for staggered effect (grid after header)
```

### CSS transition on `.card.testimonials`
- `transition: all` (Webflow catch-all) — no visible hover effect observed at rest
- No hover `box-shadow` or `transform` scale detected in CSS rules

---

## Design Tokens (CSS custom properties)
| Token | Value |
|---|---|
| `--type-font--content` | `Manrope, sans-serif` |
| `--_color-guide---global-style--content` | `#7c7c7c` |
| `--_color-guide---global-style--title` | `#010101` |
| `--_color-guide---global-style--base-card` | `white` |
| `--_color-guide---global-style--base-card-ii` | `#fcfdfff7` |
| `--_color-guide---global-style--outline` | `#fff` |
| `--_size-guide---card--card-margin` | `24px` |
| `--_size-guide---card--card-gap` | `24px` |
| `--_size-guide---border--border-small` | `32px` |
| `--_size-guide---sections--container-max-width` | `1000px` |
| `--_size-guide---global-spacing--container-medium-gap` | `50px` |
| `--_size-guide---gap--gap-sections` | `14px` |
| `--weight--paragraph` | `300` |
| `--weight--heading` | `500` |
| `--font-style-guide--paragraph-large` | `18px` |
| `--font-style-guide--height--height-paragraph-large` | `25px` |
| `--_color-guide---neutral--300` | `#cacbd4` |
