# CTA Section Specification

## Overview
- **Target file:** src/components/CtaSection.tsx
- **Interaction model:** time-driven
- **Complexity:** medium
- **Screenshot:** docs/design-references/ctaSection.png (video poster frame saved here)

---

## DOM Structure

```
section.section                                             ← outer wrapper, position: relative, padding: 12px, margin: 100px 0
  └── div.padding-global                                    ← flex column, padding: 8px
        └── div.container-medium                           ← max-width: 1000px, border-radius: 40px, flex column, gap: 50px
              └── div.tumbnail-wrapper                     ← border-radius: 32px, overflow: hidden, position: relative, 984×420px
                    └── div.tumbnail-sections.w-background-video.w-background-video-atom  ← 984×420px, overflow: hidden, bg: linear-gradient(rgba(0,0,0,0.31), rgba(0,0,0,0.31))
                          ├── video                        ← position: absolute, top: -420px, left: -984px, width: 984px, height: 420px, object-fit: cover, z-index: -100
                          │     ├── source (mp4)           ← 960×540 30fps
                          │     └── source (webm)          ← 960×540 30fps
                          ├── div.section-tittle.center    ← flex column, align-items: center, gap: 14px, position: relative, 884px wide
                          │     ├── img.icon.mini-hero     ← camera outline icon, 24×24px, z-index: 1, transform: matrix(-1,0,0,-1,0,0)
                          │     └── div.text               ← flex column, align-items: center, gap: 6px
                          │           ├── h2.heading-style-h2.center.white   ← "The ideal shot is only a chat away."
                          │           └── p.paragraph-large.center.white     ← "Reach out to us to transform your vision into captivating photography."
                          └── button.w-backgroundvideo-backgroundvideoplaypausebutton.play-pause-button.w-background-video--control
                                ├── span (visible)         ← pause state (display: block), 24×24px
                                │     └── img.icon         ← pause icon PNG, 24×24px
                                └── span (hidden)          ← play state (display: none), toggles on click
                                      └── img.icon         ← play icon PNG, 24×24px
```

---

## Computed Styles (exact values from getComputedStyle)

### Container — `section.section`
```
position:         relative
display:          block
width:            1512px (full viewport)
height:           476px
padding:          12px (all sides)
margin:           100px 0px
overflow:         visible
font-family:      Manrope, sans-serif
font-size:        16px
font-weight:      400
line-height:      22px
color:            rgb(1, 1, 1)
opacity:          1
transition:       all
```

### Inner wrapper — `div.padding-global`
```
display:          flex
flex-direction:   column
justify-content:  center
align-items:      center
width:            1488px
height:           452px
padding:          8px (all sides)
```

### Centering container — `div.container-medium`
```
display:          flex
flex-direction:   column
justify-content:  center
align-items:      center
max-width:        1000px
width:            1000px
height:           436px
padding:          8px
gap:              50px
border-radius:    40px
overflow:         visible
position:         relative
opacity:          1
transition:       all
```

### Video wrapper — `div.tumbnail-wrapper`
```
display:          flex
flex-direction:   row
justify-content:  center
align-items:      center
width:            984px
height:           420px
border-radius:    32px
overflow:         hidden
position:         relative
opacity:          1
transform:        matrix(1, 0, 0, 1, 0, 0)   ← driven by Webflow IX2 scroll animation
transition:       all
data-w-id:        bf2910ba-bda8-2cd6-7592-1ea631ba7e3e
inline-style:     opacity: 1; transform: translate3d(0px,0px,0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg); transform-style: preserve-3d
```

### Video background container — `div.tumbnail-sections.w-background-video`
```
display:          flex
flex-direction:   row
justify-content:  center
align-items:      center
width:            984px
height:           420px
padding:          50px (all sides)
background-image: linear-gradient(rgba(0, 0, 0, 0.31), rgba(0, 0, 0, 0.31))
overflow:         hidden
position:         relative
color:            rgb(255, 255, 255)
opacity:          1
object-fit:       cover
```

### Video element — `video`
```
position:         absolute
top:              -420px
left:             -984px
right:            -984px
bottom:           -420px
width:            984px
height:           420px
object-fit:       cover
z-index:          -100
background-image: url(...poster.jpg)   ← fallback poster
background-size:  cover
autoplay:         true
muted:            true
loop:             true
playsInline:      true
```

### Content title wrapper — `div.section-tittle.center`
```
display:          flex
flex-direction:   column
align-items:      center
gap:              14px
width:            884px
height:           138px
justify-content:  center
position:         relative
color:            rgb(255, 255, 255)
```

### Camera icon — `img.icon.mini-hero`
```
width:            24px
height:           24px
display:          flex
justify-content:  center
align-items:      center
position:         relative
z-index:          1
overflow:         clip
transform:        matrix(-1, 0, 0, -1, 0, 0)   ← flipped 180deg (CSS mirror)
```

### Text wrapper — `div.text`
```
display:          flex
flex-direction:   column
align-items:      center
justify-content:  center
gap:              6px
width:            499.492px
```

### Heading — `h2.heading-style-h2.center.white`
```
font-size:        32px
font-weight:      500
font-family:      Manrope, sans-serif
line-height:      44px
color:            rgb(255, 255, 255)
text-align:       center
max-width:        700px
width:            499.492px
display:          block
overflow:         visible
position:         static
```

### Paragraph — `p.paragraph-large.center.white`
```
font-size:        18px
font-weight:      300
font-family:      Manrope, sans-serif
line-height:      25px
color:            rgb(255, 255, 255)
text-align:       center
max-width:        450px
width:            450px
```

### Play/Pause button — `button.play-pause-button`
```
display:          flex
flex-direction:   row
align-items:      center
justify-content:  center
width:            24px
height:           24px
position:         absolute
right:            26px
bottom:           16px
top:              360px
left:             934px
background-color: rgba(0, 0, 0, 0)   ← transparent
border-radius:    0px
cursor:           pointer
color:            rgb(255, 255, 255)
margin-top:       20px
```

---

## States & Behaviors

### Video Play/Pause Toggle
- **Trigger:** Click on `.play-pause-button` (bottom-right of video, 26px from right, 16px from bottom)
- **State A (playing):** first `<span>` is `display: block` (pause icon visible), second `<span>` is `display: none`
- **State B (paused):** first `<span>` is `display: none`, second `<span>` is `display: block` (play icon visible)
- **Mechanism:** Webflow's native `w-background-video` JS toggles `.w-background-video--paused` class on button and calls `video.pause()` / `video.play()`
- **Transition:** instant (no CSS transition on spans)

### Scroll Reveal (Fade-in + Scale-in)
- **Trigger:** `.tumbnail-wrapper` enters viewport during scroll (Webflow IX2)
- **Element:** `div.tumbnail-wrapper` (data-w-id: `bf2910ba-bda8-2cd6-7592-1ea631ba7e3e`)
- **State A (before scroll):** opacity: 0, transform: translate3d(0, 30px, 0) scale3d(0.97, 0.97, 1) (estimated initial IX2 state)
- **State B (visible):** opacity: 1, transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1, ...) rotations all 0
- **Transition:** Webflow IX2 driven — easing and duration configured in Webflow Designer (typically 0.6–0.8s ease-out)
- **Implementation:** Use IntersectionObserver with `.reveal` class approach; add `opacity: 0; transform: translateY(30px)` initially, animate to full on intersection

### Video Autoplay
- Starts automatically on page load (muted + playsInline required for autoplay)
- Loops indefinitely
- No controls shown (Webflow hides native controls)

---

## Text Content (verbatim from site)

```
The ideal shot is only a chat away.

Reach out to us to transform your vision into captivating photography.
```

---

## Assets Used

| Asset | Source URL | Local Path |
|-------|-----------|------------|
| Camera outline icon | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ef29_material-symbols--camera-outline.png` | `public/images/icon-camera-outline.png` |
| Pause icon | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ef59_gridicons--pause.png` | `public/images/icon-pause.png` |
| Play icon | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ef5a_icon-park-solid--play.png` | `public/images/icon-play.png` |
| Background video (mp4) | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51%2F69747a47b721007275ed868b_3156805-sd_960_540_30fps_mp4.mp4` | `public/videos/cta-bg.mp4` |
| Background video (webm) | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51%2F69747a47b721007275ed868b_3156805-sd_960_540_30fps_webm.webm` | `public/videos/cta-bg.webm` |
| Video poster | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51%2F69747a47b721007275ed868b_3156805-sd_960_540_30fps_poster.0000000.jpg` | `public/videos/cta-bg-poster.jpg` |

Video specs: 960×540px, 30fps, aerial forest drone footage

---

## Responsive Behavior

- **Desktop 1440px+:** Full layout — video container 984×420px, section padding 12px, margin 100px top/bottom
- **Mobile 390px:** The `.container-medium` max-width collapses; video wrapper scales down with `width: 100%`; padding and margin reduce
- **Breakpoint:** ~991px (Webflow's standard tablet breakpoint) — video wrapper likely switches to full-width with reduced padding

---

## Animation Notes

### Scroll Reveal on `.tumbnail-wrapper`
- Driven by Webflow IX2 (`data-w-id: bf2910ba-bda8-2cd6-7592-1ea631ba7e3e`)
- Current computed inline style when visible: `opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d`
- Implementation guide: use IntersectionObserver (threshold: 0.15), add `.reveal` class to wrapper, animate from `{ opacity: 0, transform: translateY(40px) scale(0.97) }` to `{ opacity: 1, transform: none }` with `transition: opacity 0.7s ease, transform 0.7s ease`

### Video Dark Overlay
- Dark overlay is a CSS `background-image: linear-gradient(rgba(0, 0, 0, 0.31), rgba(0, 0, 0, 0.31))` applied to the `.tumbnail-sections` container (not a separate div)
- This creates a uniform 31% black overlay over the entire video

### Camera Icon Transform
- `transform: matrix(-1, 0, 0, -1, 0, 0)` — this is a 180° rotation (flip), making the camera icon appear inverted/mirrored

### React Implementation Pattern (CTA VIDEO BACKGROUND)
```tsx
// 'use client'
// <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: -100 }}>
//   <source src="/videos/cta-bg.mp4" type="video/mp4" />
//   <source src="/videos/cta-bg.webm" type="video/webm" />
// </video>
// Parent div: position: relative, overflow: hidden, borderRadius: 32px
// Content wrapper: position: relative, z-index: 10
// Dark overlay: add linear-gradient(rgba(0,0,0,0.31), rgba(0,0,0,0.31)) as background on video container
```
