# Trusted Globally Section Specification

## Overview
- **Target file:** src/components/TrustedGloballySection.tsx
- **Interaction model:** scroll-driven
- **Complexity:** medium
- **Screenshot:** docs/design-references/trustedGloballySection.png

---

## DOM Structure

```
section.section                                      ← outer section wrapper, display:block, position:relative
  └── div.padding-global                             ← display:flex, flexDirection:column, alignItems:center, padding:8px
        └── div.container-medium                     ← max-width:1000px, width:1000px, display:flex, flexDirection:column
              │                                         justifyContent:center, alignItems:center, gap:50px, padding:8px
              │                                         data-w-id="e8a99ab3-9356-2f39-f9c0-65764c4fa42a" (IX2 scroll reveal)
              ├── div.section-tittle.center           ← display:flex, flexDirection:column, justifyContent:center
              │     │                                    alignItems:center, gap:14px, textAlign:center, height:152px
              │     ├── div.column-icon               ← display:flex, flexDirection:row, justifyContent:center
              │     │     │                              alignItems:center, gap:6px, height:38px
              │     │     ├── img.icon                ← star icon (24x24 displayed), objectFit:cover
              │     │     ├── img.icon                ← star icon (24x24 displayed), objectFit:cover
              │     │     ├── div.icon-wrapper        ← dark circular wrapper, backgroundColor:rgb(1,1,1)
              │     │     │     │                        borderRadius:99px, padding:7px, width:38px, height:38px
              │     │     │     │                        display:flex, justifyContent:center, alignItems:center
              │     │     │     │                        boxShadow: rgba(255,255,255,0.38) -3px 1px 8px 1px inset
              │     │     │     └── img.icon          ← camera icon (24x24 displayed), white on dark bg
              │     │     ├── img.icon                ← star icon (24x24 displayed), objectFit:cover
              │     │     └── img.icon                ← star icon (24x24 displayed), objectFit:cover
              │     └── div.text                      ← display:flex, flexDirection:column, justifyContent:center
              │           │                              alignItems:center, gap:6px, textAlign:center, height:100px
              │           ├── h2.heading-style-h2.center  ← "Trusted Globally by Brands and Creatives"
              │           └── p.paragraph-large.center    ← "Over 100 brands and creatives..."
              ├── div.slider-wrapper                  ← max-width:700px, width:700px, height:316px
              │     └── div.slider._2.w-slider        ← Webflow slider, backgroundColor:rgb(255,255,255)
              │           │                              borderRadius:34px, padding:8px, overflow:hidden
              │           │                              display:flex, flexDirection:column, justifyContent:center
              │           │                              alignItems:center, gap:10px, position:relative
              │           ├── div.mask.w-slider-mask  ← position:relative, width:684px, height:300px
              │           │     │                        overflow:hidden, whiteSpace:nowrap, zIndex:1
              │           │     ├── div.slide.expertise.w-slide  ← Slide 1: Serene Tree Landscape
              │           │     ├── div.slide.hero.w-slide       ← Slide 2: Sun/Red Field
              │           │     ├── div.slide.hero.w-slide       ← Slide 3: Majestic Mountain Peak
              │           │     └── div.slide.hero.w-slide       ← Slide 4: Ethereal Landscape Cosmic Reflection
              │           ├── div.left-arrow-2.w-slider-arrow-left   ← position:absolute, left:0, top:0, bottom:0
              │           │                                              width:80px, zIndex:3, cursor:pointer
              │           ├── div.right-arrow-2.w-slider-arrow-right ← position:absolute, right:0, top:0, bottom:0
              │           │                                              width:80px, zIndex:3, cursor:pointer
              │           └── div.slide-nav-mini._1.w-slider-nav.w-shadow.w-round
              │                 │                    ← position:absolute, bottom:0, left:310px, right:310px
              │                 │                      width:80px, height:40px, zIndex:2
              │                 ├── div.w-slider-dot  ← inactive dot, size:16x16, borderRadius:100%
              │                 ├── div.w-slider-dot  ← inactive dot
              │                 ├── div.w-slider-dot  ← inactive dot
              │                 └── div.w-slider-dot.w-active ← active dot, solid white
              └── div.helper-column.center            ← display:flex, flexDirection:row, justifyContent:center
                    │                                    alignItems:center, gap:10px, height:30px
                    ├── div.badge                     ← brand badge pill #1: HANDUX
                    ├── div.badge                     ← brand badge pill #2: HALOZA
                    ├── div.badge                     ← brand badge pill #3: PETYU
                    └── div.badge                     ← brand badge pill #4: NASYO
                          └── div.tittle-badge        ← text inside each badge
```

---

## Computed Styles (exact values from getComputedStyle)

### Section Container (`body > section:nth-of-type(1)`, `.section`)
| Property | Value |
|---|---|
| display | block |
| position | relative |
| width | 1512px (full viewport) |
| height | 654px |
| margin | 100px 0px |
| padding | 12px |
| fontFamily | Manrope, sans-serif |
| fontSize | 16px |
| fontWeight | 400 |
| lineHeight | 22px |
| color | rgb(1, 1, 1) |
| backgroundColor | transparent (body bg: rgb(247, 248, 253)) |
| overflow | visible |
| opacity | 1 |
| transition | all |

### `.padding-global`
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | center |
| padding | 8px |

### `.container-medium` (IX2 scroll-reveal target)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | center |
| gap | 50px |
| maxWidth | 1000px |
| width | 1000px |
| padding | 8px |
| textAlign | center |
| data-w-id | e8a99ab3-9356-2f39-f9c0-65764c4fa42a |

### `.section-tittle.center`
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | center |
| gap | 14px |
| width | 984px |
| height | 152px |
| textAlign | center |

### `.column-icon` (icon row: star, star, camera, star, star)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | row |
| justifyContent | center |
| alignItems | center |
| gap | 6px |
| width | 158px |
| height | 38px |

### `.icon-wrapper` (dark circle around camera icon)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | row |
| justifyContent | center |
| alignItems | center |
| backgroundColor | rgb(1, 1, 1) |
| borderRadius | 99px |
| padding | 7px |
| width | 38px |
| height | 38px |
| position | relative |
| boxShadow | rgba(255, 255, 255, 0.38) -3px 1px 8px 1px inset |

### `img.icon` (star and camera icons)
| Property | Value |
|---|---|
| width | 24px (displayed) |
| height | 24px (displayed) |
| objectFit | cover |
| position | relative |
| zIndex | 1 |

### `.text` (h2 + paragraph wrapper)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | center |
| gap | 6px |
| width | 609.703px |
| height | 100px |
| textAlign | center |

### `h2.heading-style-h2.center`
| Property | Value |
|---|---|
| fontSize | 32px |
| fontWeight | 500 |
| fontFamily | Manrope, sans-serif |
| lineHeight | 44px |
| color | rgb(1, 1, 1) |
| maxWidth | 700px |
| display | block |

### `p.paragraph-large.center`
| Property | Value |
|---|---|
| fontSize | 18px |
| fontWeight | 300 |
| fontFamily | Manrope, sans-serif |
| lineHeight | 25px |
| color | rgb(124, 124, 124) |
| maxWidth | 450px |
| width | 450px |
| display | flex |
| justifyContent | center |
| alignItems | center |

### `.slider-wrapper`
| Property | Value |
|---|---|
| display | block |
| width | 700px |
| height | 316px |
| maxWidth | 700px |
| overflow | visible |

### `.slider._2.w-slider` (Webflow slider component)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | center |
| gap | 10px |
| width | 700px |
| height | 316px |
| backgroundColor | rgb(255, 255, 255) |
| borderRadius | 34px |
| padding | 8px |
| overflow | hidden |
| position | relative |

### `.mask.w-slider-mask`
| Property | Value |
|---|---|
| position | relative |
| width | 684px |
| height | 300px |
| overflow | hidden |
| whiteSpace | nowrap |
| zIndex | 1 |

### Individual slides (`.w-slide`)
| Property | Value |
|---|---|
| display | inline-block |
| width | 684px |
| height | 300px |
| position | relative |
| overflow | hidden |
| transition | all, transform 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86) |

### Slide images (`img` inside `.w-slide`)
| Property | Value |
|---|---|
| width | 684px |
| height | 300px |
| display | inline-block |
| objectFit | cover |
| borderRadius | 34px |
| overflow | hidden |

### `.left-arrow-2.w-slider-arrow-left` / `.right-arrow-2.w-slider-arrow-right`
| Property | Value |
|---|---|
| position | absolute |
| width | 80px |
| height | auto (top:0 to bottom:0) |
| left / right | 0px |
| top | 0px |
| bottom | 0px |
| zIndex | 3 |
| cursor | pointer |
| backgroundColor | rgba(0, 0, 0, 0) (transparent) |
| color | rgb(255, 255, 255) |
| fontSize | 40px |
| overflow | hidden |

### `.slide-nav-mini._1.w-slider-nav` (dot navigation)
| Property | Value |
|---|---|
| position | absolute |
| bottom | 0px |
| left | 310px |
| right | 310px |
| width | 80px |
| height | 40px |
| zIndex | 2 |
| display | block |

### `.w-slider-dot` (inactive state)
| Property | Value |
|---|---|
| width | 16px |
| height | 16px |
| backgroundColor | rgba(255, 255, 255, 0.4) |
| borderRadius | 100% |
| marginLeft | 2px |
| marginRight | 2px |
| position | relative |
| cursor | pointer |
| transition | background-color 0.1s, color 0.1s |

### `.w-slider-dot.w-active` (active state)
| Property | Value |
|---|---|
| backgroundColor | rgb(255, 255, 255) |
| (all other dot properties same as above) |

### `.helper-column.center` (brand badges row)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | row |
| justifyContent | center |
| alignItems | center |
| gap | 10px |
| height | 30px |
| width | 317.781px (auto-sized) |

### `.badge` (each brand pill)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | row |
| justifyContent | center |
| alignItems | center |
| gap | 8px |
| backgroundColor | rgb(255, 255, 255) |
| borderRadius | 26px |
| padding | 4px 12px |
| height | 30px |
| border | none |
| boxShadow | none |

### `.tittle-badge` (text inside badge)
| Property | Value |
|---|---|
| fontSize | 14px |
| fontWeight | 300 |
| fontFamily | Manrope, sans-serif |
| lineHeight | 22px |
| color | rgb(1, 1, 1) |
| display | block |

---

## States & Behaviors

### Scroll Reveal (SCROLL_INTO_VIEW IX2)
- **Trigger:** `.container-medium` element enters viewport (Webflow IX2 event, data-w-id: `e8a99ab3-9356-2f39-f9c0-65764c4fa42a`)
- **State A (before):** opacity: 0, transform: translateY(20–30px) (typical IX2 fade-in-up initial)
- **State B (after):** opacity: 1, transform: translateY(0)
- **Transition:** Webflow IX2 easing, approximately 0.5–0.8s ease-out
- **Implementation:** Use IntersectionObserver with `.reveal` + `.is-visible` pattern from globals.css; add `.reveal` class to the container; observer threshold: 0.15

### Slider Navigation (click arrow or dot)
- **Trigger:** User clicks `.w-slider-arrow-left`, `.w-slider-arrow-right`, or a `.w-slider-dot`
- **State A:** Current slide visible at transform `translateX(0)`, others offset ±684px
- **State B:** Next/previous slide slides in
- **Transition:** `transform 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86)` on each `.w-slide`
- **Active dot:** `.w-slider-dot.w-active` gets `backgroundColor: rgb(255, 255, 255)`; inactive dots: `rgba(255, 255, 255, 0.4)`
- **Dot transition:** `background-color 0.1s, color 0.1s`

### Slider Auto-play
- The Webflow slider cycles automatically (standard Webflow behavior — default 2000ms delay or as configured in Webflow designer)

---

## Text Content (verbatim from site)

```
Trusted Globally by Brands and Creatives

Over 100 brands and creatives trust me to capture their stories through bold, refined imagery.

HANDUX
HALOZA
PETYU
NASYO
```

---

## Assets Used

| Asset | CDN URL | localPath in public/ |
|---|---|---|
| Star icon | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6971de4316aab6ce86e4b8bb_ic--round-star%20(1).png` | `/images/ic--round-star.png` |
| Camera icon | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/69719766e451e767783ace5e_Camera.png` | `/images/Camera.png` |
| Slide 1: Serene Tree Landscape | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/69748603e6f7b5a73ca8438a_Serene%20Tree%20Landscape.png` | `/images/Serene-Tree-Landscape.png` |
| Slide 2: Sun / Red Field | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/69719f24d0a24c23b1ab1669_Sun.png` | `/images/Sun.png` |
| Slide 3: Majestic Mountain Peak | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697477f2d50cc16bbbe95406_Majestic%20Mountain%20Peak.png` | `/images/Majestic-Mountain-Peak.png` |
| Slide 4: Ethereal Landscape Cosmic Reflection | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697477f26ee88f4dce384ede_Ethereal%20Landscape%20with%20Cosmic%20Reflection.png` | `/images/Ethereal-Landscape-with-Cosmic-Reflection.png` |

---

## Responsive Behavior

- **Desktop 1440px+:** Full layout as described — centered column, max-width 1000px container, slider at 700px wide
- **Mobile 390px:** Layout expected to stack vertically; slider likely becomes full-width or narrower; badge row may wrap; icon row same; heading font size reduces
- **Breakpoint:** Webflow default ~991px (tablet), ~767px (mobile landscape), ~479px (mobile portrait)
- **Key changes at mobile:**
  - `.container-medium` max-width shrinks to viewport width
  - `.slider-wrapper` width likely reduces to ~100% of container
  - `.helper-column` may wrap badges to 2 rows
  - Body background remains `rgb(247, 248, 253)` — pinkish tones in screenshot come from current slide image color bleeding through transparent section bg

---

## Animation Notes

### Scroll Reveal
- Animation type: **SCROLL_INTO_VIEW** (Webflow IX2 on `.container-medium`)
- Implement as IntersectionObserver fade-in-up:
  - `.reveal` initial state: `opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease;`
  - `.reveal.is-visible`: `opacity: 1; transform: translateY(0);`
  - Observer threshold: `0.15`
  - Add stagger with `.reveal-delay-1/2/3` if needed for child elements

### Slider Transition
- Slide-to-slide: `transform 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86)` (strong ease-in-out)
- Slides use `transform: matrix(1,0,0,1,±684,0)` for positioning (translateX by slide width)
- Dot indicator: `background-color 0.1s` ease

### Section Background
- Section itself has `backgroundColor: transparent`
- Page body has `backgroundColor: rgb(247, 248, 253)` — a very light blue-grey
- The pinkish/salmon tones visible at section edges in the screenshot are from the current slide image bleeding through the rounded slider edges

---

## Implementation Notes for TrustedGloballySection.tsx

1. **Icon Row:** Render 5 items: `[star, star, div.icon-wrapper > camera, star, star]` using `<img>` tags with `objectFit: cover`
2. **Slider:** Implement as controlled carousel — state `currentSlide` (0-3), `setCurrentSlide`. Use `transform: translateX(-${currentSlide * 100}%)` on the mask's flex container
3. **Slide images:** Display at `width: 684px, height: 300px, objectFit: cover, borderRadius: 34px`
4. **Slider outer container:** `backgroundColor: white, borderRadius: 34px, padding: 8px, overflow: hidden`
5. **Dot nav:** Absolute positioned, centered at bottom of slider; active dot gets `backgroundColor: white`, inactive gets `rgba(255,255,255,0.4)`
6. **Arrow buttons:** Transparent, absolute, full-height on left/right edges; use Webflow's built-in left/right chevron SVGs or Lucide ChevronLeft/ChevronRight at `fontSize: 40px, color: white`
7. **Brand badges:** White pill buttons `borderRadius: 26px, padding: 4px 12px, backgroundColor: white`; text at `fontSize: 14px, fontWeight: 300`
8. **Scroll reveal:** Wrap entire inner content in a div with `.reveal` class; IntersectionObserver adds `.is-visible`
9. **Section margin:** `margin: 100px 0` (100px top and bottom)
