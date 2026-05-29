# FAQ Section Specification

## Overview
- **Target file:** src/components/FaqSection.tsx
- **Interaction model:** click-driven
- **Complexity:** medium
- **Screenshot:** docs/design-references/faqSection.png

---

## DOM Structure

```
section.section                                               ← outer wrapper, position: relative, padding: 12px, margin: 100px 0
  └── div.padding-global                                      ← flex column, padding: 8px, justify-content: center, align-items: center
        └── div.container-medium                              ← max-width: 1000px, border-radius: 40px, flex column, gap: 50px, align-items: center
              ├── div.section-tittle.center                   ← flex column, align-items: center, gap: 14px, has data-w-id (scroll reveal animation)
              │     ├── div.badge                             ← white pill, border-radius: 26px, padding: 4px 12px, flex row center
              │     │     └── div.tittle-badge               ← text "FAQ", font 14px/300/Manrope
              │     ├── h2.heading-style-h2.center            ← "Frequently asked questions", 32px/500
              │     └── p.paragraph-large.center             ← subtitle text, 18px/300, color: rgb(124,124,124)
              └── div.faq-list                                ← flex column, gap: 10px, max-width: 500px, overflow: hidden, border-radius: 24px, has data-w-id (scroll reveal)
                    ├── div.faq-accordion [data-w-id]         ← each FAQ item, flex column, border-radius: 24px, overflow: hidden, bg: rgba(252,253,255,0.97)
                    │     ├── div.faq-question                ← flex row, justify-content: space-between, align-items: center, padding: 18px, gap: 5px, bg: rgba(252,253,255,0.97), height: 68px
                    │     │     ├── div.sub-heading-large     ← question text, font 18px/400
                    │     │     └── div.faq-icon             ← white circle button, 32px × 32px, border-radius: 99px, flex center, padding: 4px 3px 3px
                    │     │           └── img.icon.mini      ← plus icon PNG 20×20px, z-index: 1
                    │     └── div.faq-answer                  ← answer container, height: 0px (closed), overflow: hidden, padding: 0 18px, width: 500px
                    │           └── p.paragraph-regular.answer ← answer text, font 16px/300, color: rgb(124,124,124)
                    ├── div.faq-accordion [data-w-id]         ← (same structure, items 2-4)
                    ├── div.faq-accordion [data-w-id]
                    └── div.faq-accordion [data-w-id]
```

---

## Computed Styles (exact values from getComputedStyle)

### Container: `section.section`
```
font-family:        Manrope, sans-serif
font-size:          16px
font-weight:        400
line-height:        22px
color:              rgb(1, 1, 1)
background-color:   transparent (body bg: rgb(247, 248, 253))
padding:            12px
margin:             100px 0px
width:              1512px (full viewport)
height:             552px (collapsed) / 608px (one item open)
position:           relative
opacity:            1
transition:         all
```

### `div.padding-global`
```
padding:            8px
display:            flex
flex-direction:     column
justify-content:    center
align-items:        center
background:         transparent
```

### `div.container-medium`
```
max-width:          1000px
width:              1000px
display:            flex
flex-direction:     column
justify-content:    center
align-items:        center
gap:                50px
border-radius:      40px
padding:            8px
background:         transparent
```

### `div.section-tittle.center`
```
display:            flex
flex-direction:     column
justify-content:    center
align-items:        center
gap:                14px
width:              984px
height:             144px
position:           relative
opacity:            1
transform:          matrix(1, 0, 0, 1, 0, 0)  ← controlled by Webflow IX2 scroll reveal
transition:         all
```

### `div.badge`
```
background-color:   rgb(255, 255, 255)
border-radius:      26px
padding:            4px 12px
display:            flex
flex-direction:     row
justify-content:    center
align-items:        center
gap:                8px
width:              ~49px
height:             30px
```

### `div.tittle-badge` (badge text)
```
font-size:          14px
font-weight:        300
font-family:        Manrope, sans-serif
line-height:        22px
color:              rgb(1, 1, 1)
```

### `h2.heading-style-h2.center`
```
font-size:          32px
font-weight:        500
font-family:        Manrope, sans-serif
line-height:        44px
color:              rgb(1, 1, 1)
max-width:          700px
width:              450px
text-align:         center
display:            block
```

### `p.paragraph-large.center`
```
font-size:          18px
font-weight:        300
font-family:        Manrope, sans-serif
line-height:        25px
color:              rgb(124, 124, 124)
max-width:          450px
width:              450px
text-align:         center
display:            flex
flex-direction:     row
justify-content:    center
align-items:        center
```

### `div.faq-list`
```
display:            flex
flex-direction:     column
justify-content:    flex-start
align-items:        center
gap:                10px
max-width:          500px
width:              500px
height:             302px (all collapsed)
border-radius:      24px
overflow:           hidden
position:           static
opacity:            1
transform:          matrix(1, 0, 0, 1, 0, 0)  ← controlled by Webflow IX2 scroll reveal
```

### `div.faq-accordion` (collapsed state)
```
background-color:   rgba(252, 253, 255, 0.97)
border-radius:      24px
display:            flex
flex-direction:     column
justify-content:    flex-start
align-items:        center
width:              500px
height:             68px
overflow:           hidden
padding:            0px
```

### `div.faq-accordion` (expanded state — first item open)
```
height:             124px   ← 68px question + 56px answer
overflow:           hidden
(all other styles same as collapsed)
```

### `div.faq-question`
```
background-color:   rgba(252, 253, 255, 0.97)
display:            flex
flex-direction:     row
justify-content:    space-between
align-items:        center
padding:            18px
gap:                5px
width:              500px
height:             68px
overflow:           hidden
cursor:             auto (clickable via Webflow IX2 on the accordion element)
```

### `div.sub-heading-large` (question text)
```
font-size:          18px
font-weight:        400
font-family:        Manrope, sans-serif
line-height:        25px
color:              rgb(1, 1, 1)
display:            block
width:              ~229px
height:             25px
```

### `div.faq-icon` (plus button — default/closed)
```
background-color:   rgb(255, 255, 255)
border-radius:      99px
display:            flex
flex-direction:     row
justify-content:    center
align-items:        center
width:              32px
height:             32px
padding:            4px 3px 3px
transform:          none
transform-origin:   16px 16px
transition:         all
```

### `div.faq-icon` (open state — icon rotated 90deg)
```
transform:          matrix(0, -1, 1, 0, 0, 0)  ← rotate(-90deg)
(all other styles same)
```

### `img.icon.mini` (plus/add icon)
```
width:              20px
height:             20px
display:            flex
justify-content:    center
align-items:        center
position:           relative
z-index:            1
src:                https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8eed6_gg--add%20(1).png
```

### `div.faq-answer` (closed state)
```
display:            flex
flex-direction:     column
justify-content:    flex-start
align-items:        center
width:              500px
height:             0px
overflow:           hidden
padding:            0px 18px
background-color:   rgba(255, 255, 255, 0.06)
border-radius:      24px
position:           static
opacity:            1
```

### `div.faq-answer` (open state)
```
height:             56px   ← expands to fit content
(all other styles same — overflow remains hidden, animation drives height)
```

### `p.paragraph-regular.answer`
```
font-size:          16px
font-weight:        300
font-family:        Manrope, sans-serif
line-height:        22px
color:              rgb(124, 124, 124)
width:              464px
height:             22px
display:            block
text-align:         left
padding:            0px
```

---

## States & Behaviors

### State 1: Section — Scroll Reveal (Fade-in-up)
- **Trigger:** IntersectionObserver — section enters viewport (Webflow IX2 scroll reveal, data-w-id on `.section-tittle` and `.faq-list`)
- **State A (before):** opacity: 0, transform: translate3d(0, 30px, 0) (typical Webflow reveal start)
- **State B (after):** opacity: 1, transform: translate3d(0px, 0px, 0px) scale3d(1,1,1)
- **Transition:** 500ms ease (Webflow IX2 default)
- **Implementation:** Use `.reveal` class with IntersectionObserver (threshold: 0.15), add `.is-visible` class on intersection

### State 2: FAQ Accordion — Open
- **Trigger:** Click on `.faq-accordion` (entire item is clickable via Webflow IX2)
- **State A (closed):**
  - `.faq-answer` height: 0px, overflow: hidden
  - `.faq-accordion` height: 68px
  - `.faq-icon` transform: none (plus icon at 0deg)
- **State B (open):**
  - `.faq-answer` height: 56px (auto-height for answer content)
  - `.faq-accordion` height: 124px
  - `.faq-icon` transform: matrix(0, -1, 1, 0, 0, 0) = rotate(-90deg)
- **Transition:** Webflow IX2 STYLE_SIZE animation 500ms; icon TRANSFORM_ROTATE 1000ms
- **React implementation:** useState openIndex, use maxHeight approach:
  ```
  style={{ maxHeight: isOpen ? '1000px' : '0px', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)' }}
  ```

### State 3: FAQ Accordion — Close (second click)
- **Trigger:** Second click on already-open `.faq-accordion`
- **State A (open):** height: 124px, faq-icon rotated
- **State B (closed):** height: 68px, faq-icon at 0deg
- **Transition:** same as open, reversed

### State 4: Only one open at a time
- The original Webflow implementation uses MOUSE_SECOND_CLICK event meaning clicking an open item closes it. In React, `openIndex` state handles this: if clicking the open item, set to null; otherwise set to that item's index.

---

## Text Content (verbatim from site)

**Badge:** FAQ

**H2:** Frequently asked questions

**Subtitle:** Get answers to your questions and discover how we can enhance your brand.

**FAQ Items:**
1. Q: What services do you offer?
   A: We provide portrait, event, product, and brand photography.

2. Q: How do I book a session?
   A: Simply contact us with your preferred date — we'll confirm availability.

3. Q: Do you offer photo editing?
   A: Yes, all final photos include professional retouching.

4. Q: How long until I get my photos?
   A: Usually within 5–7 days after the shoot.

---

## Assets Used

| Asset | Source URL | Target local path |
|---|---|---|
| Plus/Add icon | https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8eed6_gg--add%20(1).png | public/images/icon-add.png |

Note: The same icon PNG (45×45px) is used for all 4 accordion items. It is a "+" (plus/add) icon. When the accordion is open, the icon container `.faq-icon` rotates -90deg (becoming an "×"-like symbol via rotation). In the React implementation, use a `PlusIcon` SVG component from `@/components/icons` instead, rotating the container div with CSS transform on open state.

---

## Responsive Behavior

- **Desktop 1440px+:** All content centered, `.container-medium` max-width 1000px, `.faq-list` max-width 500px. Section margin: 100px 0.
- **Mobile 390px:** `.container-medium` should go full-width with reduced padding. `.faq-list` and `.faq-question` should be full-width. Font size adjustments: h2 likely 24–28px, subtitle 16px. Accordion items remain same structure.
- **Breakpoint:** ~768px — layout becomes single column mobile stack

---

## Animation Notes

### Scroll Reveal (`.section-tittle` and `.faq-list`)
- Both have `data-w-id` attributes triggering Webflow IX2 scroll-based animations
- Final state: `opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;`
- **React implementation:** Add `.reveal` class, use IntersectionObserver with threshold 0.15, apply `.is-visible` to trigger fade-in-up (already in globals.css)
- Use `.reveal-delay-1` on `.faq-list` for stagger effect after header

### FAQ Accordion Animation
- Webflow IX2 action: STYLE_SIZE on `.faq-answer` height 0 → auto (500ms ease)
- Webflow IX2 action: TRANSFORM_ROTATE on `.faq-icon` 0deg → -90deg (1000ms)
- **React implementation:**
  ```tsx
  // Answer div
  style={{
    maxHeight: isOpen ? '1000px' : '0px',
    overflow: 'hidden',
    transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  }}
  
  // Icon container
  className={`faq-icon transition-transform duration-500 ${isOpen ? 'rotate-[-90deg]' : ''}`}
  ```

### Icon Asset Note
- Icon image: 45×45px PNG (displayed at 20×20px via CSS width/height)
- The `+` icon does NOT change to an `×` — only the container div rotates -90deg
- In React, use `<PlusIcon />` from `@/components/icons` inside the `.faq-icon` div
