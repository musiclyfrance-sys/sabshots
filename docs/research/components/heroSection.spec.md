# Hero Section Specification

## Overview
- **Target file:** src/components/HeroSection.tsx
- **Interaction model:** time-driven (Webflow IX2 PAGE_START)
- **Complexity:** complex
- **Screenshot:** docs/design-references/heroSection.png

---

## DOM Structure

```
<main class="section">                          <!-- position: relative, margin: 100px 0, padding: 12px, height: 790px -->
  <div class="padding-global">                  <!-- display: flex, flexDirection: column, justifyContent: center, alignItems: center, padding: 8px -->
    <div class="container-medium">              <!-- display: flex, flexDirection: column, alignItems: center, justifyContent: center, gap: 50px, maxWidth: 1000px, width: 1000px, height: 750px, borderRadius: 40px, padding: 8px -->
      <img class="icon mini-hero" />            <!-- camera aperture SVG, 24x24px, position: relative, rotateZ: 180deg (IX2 driven), data-w-id -->
      <div class="section-tittle center">       <!-- display: flex, flexDirection: column, alignItems: center, gap: 14px, width: 984px, height: 210px, textAlign: center, position: relative -->
        <div class="badge">                     <!-- display: flex, backgroundColor: #fff, padding: 4px 12px, borderRadius: 26px, width: 153.859px, height: 30px -->
          <div class="tittle-badge">            <!-- fontSize: 14px, fontWeight: 300, color: rgb(1,1,1), lineHeight: 22px -->
            "Creative Photograpy"
          </div>
        </div>
        <div class="text">                      <!-- display: flex, flexDirection: column, gap: (default) -->
          <h1 class="heading-style-h1 center">  <!-- fontSize: 42px, fontWeight: 500, lineHeight: 54px, color: rgb(1,1,1), textAlign: center -->
            "Captivating Visual Stories"
          </h1>
          <p class="paragraph-large center">    <!-- fontSize: 18px, color: rgb(124,124,124), lineHeight: 25px, textAlign: center -->
            "Meticulously composed visuals, enhanced by strategic lighting and refined artistic guidance."
          </p>
        </div>
        <div class="button-column">             <!-- display: flex, flexDirection: row, alignItems: center, gap: 10px -->
          <a class="button w-button">           <!-- "Get In Touch" -->
          <a class="button secondary w-button"> <!-- "View Portfolio" -->
        </div>
      </div>
      <div class="hero-wrapper-image">          <!-- position: relative, width: 800px, height: 400px, overflow: visible -->
        <img class="hero-image" />              <!-- main portrait, width: 800px, height: 400px, objectFit: cover, data-w-id -->
        <img class="tumbnail-shoot" />          <!-- 90x90px, borderRadius: 999px, position: absolute, bottom: 40px, left: 80px -->
        <img class="tumbnail-shoot _4" />       <!-- 70x70px, borderRadius: 999px, position: absolute, top: 20px, left: 160px -->
        <img class="tumbnail-shoot _1" />       <!-- 90x90px, borderRadius: 999px, position: absolute, top: 0, right: 80px -->
        <img class="tumbnail-shoot _4 _6" />    <!-- 45x45px, borderRadius: 999px, position: absolute, top: 8px, left: 459px -->
        <img class="tumbnail-shoot _4 _5" />    <!-- 70x70px, borderRadius: 999px, position: absolute, top: 230px, left: 530px -->
      </div>
    </div>
  </div>
</main>
```

Background decoration (outside main.section, child of body):
```
<img class="background" />  <!-- Sections.png, position: absolute, top: 0, left: 0, width: 1512px, height: 936.531px, zIndex: -2, objectFit: contain -->
```

---

## Computed Styles (exact values from getComputedStyle)

### Container — `main.section`
| Property | Value |
|---|---|
| position | relative |
| display | block |
| width | 1512px |
| height | 790px |
| margin | 100px 0px |
| padding | 12px |
| backgroundColor | transparent (rgba(0,0,0,0)) |
| overflow | visible |
| fontFamily | Manrope, sans-serif |
| fontSize | 16px |
| color | rgb(1, 1, 1) |

### `.padding-global`
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | center |
| padding | 8px |
| width | 1488px |
| height | 766px |
| textAlign | center |

### `.container-medium`
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | center |
| gap | 50px |
| width | 1000px |
| height | 750px |
| maxWidth | 1000px |
| padding | 8px |
| borderRadius | 40px |
| backgroundColor | transparent |
| position | relative |

### `img.icon.mini-hero` (camera aperture icon)
| Property | Value |
|---|---|
| width | 24px |
| height | 24px |
| position | relative |
| display | flex |
| justifyContent | center |
| alignItems | center |
| overflow | clip |
| opacity | 1 |
| transform (IX2-driven inline) | rotateZ(180deg) — continuously updating via PAGE_START loop |
| transform-style | preserve-3d |
| will-change | transform |
| src | https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ef2f_material-symbols--camera-outline%20(1).png |
| data-w-id | 0531664b-ce96-434b-a364-4dc1579cbe79 |

### `.section-tittle.center`
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | center |
| gap | 14px |
| width | 984px |
| height | 210px |
| textAlign | center |
| position | relative |

### `.badge`
| Property | Value |
|---|---|
| display | flex |
| backgroundColor | rgb(255, 255, 255) |
| padding | 4px 12px |
| borderRadius | 26px |
| width | 153.859px |
| height | 30px |

### `.tittle-badge`
| Property | Value |
|---|---|
| fontSize | 14px |
| fontWeight | 300 |
| color | rgb(1, 1, 1) |
| lineHeight | 22px |
| display | block |
| zIndex | 1 |

### `h1.heading-style-h1.center`
| Property | Value |
|---|---|
| fontSize | 42px |
| fontWeight | 500 |
| lineHeight | 54px |
| color | rgb(1, 1, 1) |
| textAlign | center |
| fontFamily | Manrope, sans-serif |

### `p.paragraph-large.center`
| Property | Value |
|---|---|
| fontSize | 18px |
| fontWeight | 400 |
| lineHeight | 25px |
| color | rgb(124, 124, 124) |
| textAlign | center |
| fontFamily | Manrope, sans-serif |

### `.button-column`
| Property | Value |
|---|---|
| display | flex |
| flexDirection | row |
| alignItems | center |
| gap | 10px |

### `a.button.w-button` (primary — "Get In Touch")
| Property | Value |
|---|---|
| fontSize | 14px |
| fontWeight | 300 |
| color | rgb(255, 255, 255) |
| backgroundColor | rgb(1, 1, 1) |
| padding | 9px 20px |
| width | 119.461px |
| height | 40px |
| display | flex |
| flexDirection | row |
| justifyContent | center |
| alignItems | center |
| borderRadius | 99px |
| cursor | pointer |
| fontFamily | Manrope, sans-serif |

### `a.button.secondary.w-button` (secondary — "View Portfolio")
| Property | Value |
|---|---|
| fontSize | 14px |
| fontWeight | 300 |
| color | rgb(1, 1, 1) |
| backgroundColor | rgb(255, 255, 255) |
| padding | 9px 20px |
| width | 128px |
| height | 42px |
| display | flex |
| flexDirection | row |
| justifyContent | center |
| alignItems | center |
| borderRadius | 99px |
| border | 1px solid rgb(245, 245, 245) |
| cursor | pointer |

### `.hero-wrapper-image`
| Property | Value |
|---|---|
| position | relative |
| display | block |
| width | 800px |
| height | 400px |
| overflow | visible |

### `img.hero-image` (main portrait)
| Property | Value |
|---|---|
| width | 800px |
| height | 400px |
| objectFit | cover |
| position | static |
| naturalWidth | 1512px |
| naturalHeight | 688px |
| data-w-id | eb4dc197-e841-6c12-50e9-eb68228b4e23 |

### Thumbnail portraits (`.tumbnail-shoot`) — all `position: absolute`, `objectFit: cover`, `borderRadius: 999px`
| Class modifier | width | height | top | left | bottom | right |
|---|---|---|---|---|---|---|
| (base) | 90px | 90px | 270px | 80px | 40px | 630px |
| `._4` | 70px | 70px | 20px | 160px | 40px | 570px |
| `._1` | 90px | 90px | 0px | 630px | 310px | 80px |
| `._4._6` | 45px | 45px | 8px | 459px | 347px | 296px |
| `._4._5` | 70px | 70px | 230px | 530px | 100px | 200px |

### `img.background` (decorative Sections.png — in `<body>`, not inside `<main>`)
| Property | Value |
|---|---|
| position | absolute |
| top | 0px |
| left | 0px |
| width | 1512px |
| height | 936.531px |
| zIndex | -2 |
| objectFit | contain |
| opacity | 1 |

---

## States & Behaviors

### Button hover — primary (`a.button.w-button`)
- **Trigger:** mouseenter
- **State A (default):** backgroundColor: rgb(1, 1, 1), color: rgb(255, 255, 255)
- **State B (hover):** backgroundColor likely lightens (inferred from Webflow pattern, transition: all)
- **Transition:** `transition: all` (Webflow default ~0.2s ease)

### Button hover — secondary (`a.button.secondary.w-button`)
- **Trigger:** mouseenter
- **State A (default):** backgroundColor: rgb(255, 255, 255), border: 1px solid rgb(245, 245, 245)
- **State B (hover):** backgroundColor likely darkens slightly
- **Transition:** `transition: all`

### Camera icon rotation (`.icon.mini-hero`) — IX2 PAGE_START loop
- **Trigger:** Page load (Webflow IX2 PAGE_START action, `data-w-id: 0531664b-ce96-434b-a364-4dc1579cbe79`)
- **Animation:** Continuous rotation via rotateZ. Per spec: 0deg → 180deg, delay 2000ms, duration 2000ms, looping
- **Observed inline style:** `rotateZ(-180deg)` / `rotateZ(180deg)` (alternates as IX2 drives)
- **Implementation in React:** Use CSS `@keyframes spin { from { transform: rotateZ(0deg); } to { transform: rotateZ(360deg); } }` with `animation: spin 2s linear infinite`, or replicate with `useEffect` + `requestAnimationFrame`

### Page-load fade-in (all IX2 elements with `data-w-id`)
- **Trigger:** PAGE_START (immediately on load)
- **From:** opacity: 0, scale3d(0.9, 0.9, 1), translateY(11px)
- **To:** opacity: 1, scale3d(1, 1, 1), translateY(0px)
- **Duration:** 1300ms
- **Easing:** ease (Webflow default)
- **Affected elements:** `.background`, `.section-tittle.center`, `.hero-image`, all `.tumbnail-shoot` variants
- **Implementation:** Use `.reveal` + IntersectionObserver pattern OR apply CSS animation on mount

---

## Text Content (verbatim from site)

```
Creative Photograpy
Captivating Visual Stories
Meticulously composed visuals, enhanced by strategic lighting and refined artistic guidance.
Get In Touch
View Portfolio
```

Note: "Photograpy" is a typo on the live site — preserve it verbatim.

---

## Assets Used

| Element | Remote URL | Local path in public/ |
|---|---|---|
| Camera aperture icon | https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ef2f_material-symbols--camera-outline%20(1).png | /images/camera-aperture-icon.png |
| Hero main portrait (neon glasses) | https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/69718ad08fb0fbc691ee5572_Image%20Container.png | /images/hero-portrait.png |
| Thumbnail 1 (base — bottom-left) | https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ecf7_Portrait%20of%20Young%20Man.avif | /images/portrait-thumb-1.avif |
| Thumbnail 2 (._4 — top-left) | https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ed38_Close-Up%20Portrait.avif | /images/portrait-thumb-2.avif |
| Thumbnail 3 (._1 — top-right) | https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ed38_Close-Up%20Portrait.avif | /images/portrait-thumb-2.avif |
| Thumbnail 4 (._4._6 — small center-top) | https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ed0e_Portrait%20of%20Young%20Man%20(1).avif | /images/portrait-thumb-3.avif |
| Thumbnail 5 (._4._5 — mid-right) | https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ed1a_Confident%20Young%20Man.avif | /images/portrait-thumb-4.avif |
| Background decoration | https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6971932ba37e8c8b3dc8c1bf_Sections.png | /images/sections-bg.png |

---

## Responsive Behavior

- **Desktop 1440–1512px:** Full layout as described above. container-medium = 1000px wide, hero-wrapper-image = 800px wide.
- **Breakpoint ~991px (tablet):** container-medium likely stacks differently; hero-wrapper-image may reduce. Thumbnails repositioned.
- **Mobile 390px:** Single column, hero image stacks below text, thumbnails hidden or repositioned. Button column likely stays row or wraps. Font sizes scale down.

---

## Animation Notes

### IX2 PAGE_START — all animated elements share this pattern
- Initial state set by Webflow IX2 before paint: `opacity: 0; transform: translate3d(0px, 11px, 0px) scale3d(0.9, 0.9, 1); transform-style: preserve-3d;`
- Final state: `opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;`
- Duration: 1300ms, easing: ease
- All elements observed post-load show `opacity: 1` confirming animation completed

### Camera icon rotation loop
- IX2 continuously drives `rotateZ` on `img.icon.mini-hero` (data-w-id: `0531664b-ce96-434b-a364-4dc1579cbe79`)
- Observed live value: `rotateZ(-180deg)` cycling back and forth (180deg rotation, 2000ms delay, 2000ms duration, loop)
- In React: implement with `animation: spin 2s linear infinite` CSS keyframes
- The icon itself is a camera aperture/shutter SVG rendered as a 24x24px `<img>`

### Thumbnail positioning
- All 5 thumbnails are `position: absolute` within `.hero-wrapper-image` (position: relative, 800x400px)
- They scatter around the main hero portrait image
- Sizes vary: 45px, 70px, 70px, 90px, 90px — creating visual depth hierarchy

### Body background
- `body` has `backgroundColor: rgb(247, 248, 253)` — a very light blue-gray tint
- The `img.background` (Sections.png decorative grid) sits at `zIndex: -2` in the body, spanning the top of the page

---

## Implementation Notes for React/Next.js

1. **Font:** Manrope (Google Font or next/font). Weights needed: 300, 400, 500.
2. **Badge:** White pill with text "Creative Photograpy" (preserve typo). `borderRadius: 26px`, no border, white bg.
3. **H1:** 42px / 500 weight / 54px line-height. Very dark near-black `rgb(1,1,1)`.
4. **Paragraph:** 18px / 400 / gray `rgb(124, 124, 124)`.
5. **Primary button:** Black bg, white text, 99px border-radius, 9px 20px padding.
6. **Secondary button:** White bg, black text, 1px solid `rgb(245, 245, 245)` border, 99px border-radius, 2px taller than primary (42px vs 40px).
7. **Camera icon rotation:** CSS `@keyframes` on mount or Framer Motion `animate={{ rotate: 360 }}` with `repeat: Infinity`.
8. **Hero image:** PNG with transparent/gradient edges, displayed 800x400, `objectFit: cover`.
9. **Thumbnails:** Absolutely positioned within a `position: relative` wrapper; all `borderRadius: 9999px` (fully circular).
10. **Background Sections.png:** In the page-level layout (not inside HeroSection), position absolute, zIndex -2, top 0, full width.
