# Blog Section Specification

## Overview
- **Target file:** src/components/BlogSection.tsx
- **Interaction model:** hover-driven
- **Complexity:** medium
- **Screenshot:** docs/design-references/blogSection.png

## DOM Structure

```
section.section                                        (body > section:nth-of-type(8))
  div.container-medium
    div.section-tittle.center                          (header block)
      div.badge                                        ("Blog" pill)
        div                                            (text node wrapper)
      h2.heading-style-h2.center                       ("News & Update")
      p.paragraph-large.center                         (subtitle paragraph)
    div.collection-list-wrapper.sections.w-dyn-list   (Webflow CMS list wrapper)
      div.grid.blog.w-dyn-items                        (CSS grid — 3 columns)
        a.card-cms.blog.w-inline-block                 (card 1 — links to post)
          div.tumbnail-wrapper                         (image area, overflow:hidden)
            img.tumbnail.blog                          (thumbnail photo)
            div.icon-wrapper.popup.blog                (arrow-up-right icon, hidden by default)
              img.icon                                 (arrow-up-right icon image)
          div.content-cms-item.blog                    (bottom info row)
            div.sub-heading-regular.left.for-sub-blog  (post title text)
            div.badge.two                              (category pill)
        a.card-cms.blog.w-inline-block                 (card 2 — same structure)
        a.card-cms.blog.w-inline-block                 (card 3 — same structure)
```

## Computed Styles (exact values from getComputedStyle)

### Section (body > section:nth-of-type(8))
```
tag:              section.section
display:          block
position:         relative
width:            1512px
height:           584px
padding:          12px (all sides)
margin:           100px 0px
fontFamily:       Manrope, sans-serif
fontSize:         16px
fontWeight:       400
lineHeight:       22px
color:            rgb(1, 1, 1)
background:       transparent
overflow:         visible
opacity:          1
transition:       all
```

### .container-medium
```
display:          flex
flexDirection:    column
justifyContent:   center
alignItems:       center
gap:              50px
width:            1000px
height:           544px
maxWidth:         1000px
padding:          8px (all sides)
borderRadius:     40px
backgroundColor:  transparent
position:         relative
opacity:          1
transition:       all
```

### .section-tittle.center (header block)
```
display:          flex
flexDirection:    column
justifyContent:   center
alignItems:       center
gap:              14px
width:            984px
height:           144px
position:         relative
opacity:          1
transition:       all
```

### .badge (top "Blog" pill)
```
display:          flex
flexDirection:    row
justifyContent:   center
alignItems:       center
gap:              8px
backgroundColor:  rgb(255, 255, 255)
color:            rgb(1, 1, 1)
fontSize:         16px
fontWeight:       400
lineHeight:       22px
padding:          4px 12px
borderRadius:     26px
width:            ~52px
height:           30px
position:         static
opacity:          1
transition:       all
textAlign:        center
```

### h2.heading-style-h2.center ("News & Update")
```
display:          block
fontSize:         32px
fontWeight:       500
fontFamily:       Manrope, sans-serif
lineHeight:       44px
color:            rgb(1, 1, 1)
textAlign:        center
width:            450px
height:           44px
maxWidth:         700px
position:         static
opacity:          1
transition:       all
```

### p.paragraph-large.center (subtitle)
```
display:          flex
flexDirection:    row
justifyContent:   center
alignItems:       center
fontSize:         18px
fontWeight:       300
fontFamily:       Manrope, sans-serif
lineHeight:       25px
color:            rgb(124, 124, 124)
textAlign:        center
width:            450px
height:           50px
maxWidth:         450px
position:         static
opacity:          1
transition:       all
```

### .collection-list-wrapper.sections.w-dyn-list (CMS list outer)
```
display:          flex
flexDirection:    row
justifyContent:   center
alignItems:       center
gap:              16px
width:            984px
height:           334px
position:         static
opacity:          1
transition:       all
textAlign:        center
```

### .grid.blog.w-dyn-items (3-column CSS grid)
```
display:          grid
gridTemplateColumns: 314.664px 314.664px 314.664px
gridTemplateRows:    334px
gap:              20px
width:            984px
height:           334px
justifyContent:   center
alignItems:       center
backgroundColor:  transparent
position:         static
opacity:          1
transition:       all
textAlign:        center
```

### a.card-cms.blog.w-inline-block (each card)
```
display:          flex
flexDirection:    column
justifyContent:   center
alignItems:       center
backgroundColor:  rgb(255, 255, 255)
borderRadius:     34px
width:            314.664px
height:           334px
maxWidth:         100%
padding:          8px (all sides)
cursor:           pointer
position:         static
opacity:          1
transition:       all
overflow:         visible
```

### .tumbnail-wrapper (image container inside card)
```
display:          flex
flexDirection:    row
justifyContent:   center
alignItems:       center
borderRadius:     32px
overflow:         hidden
position:         relative
width:            298.664px
height:           260px
opacity:          1
transition:       all
```

### img.tumbnail.blog (thumbnail image — default/idle state)
```
display:          block
width:            298.664px
height:           260px
maxWidth:         100%
objectFit:        cover
position:         static
transform:        matrix(1, 0, 0, 1, 0, 0)   /* scale(1) */
transition:       all
opacity:          1
overflow:         clip
```

### .icon-wrapper.popup.blog (hover popup icon — default state)
```
display:          none                         /* hidden by default */
flexDirection:    row
justifyContent:   center
alignItems:       center
backgroundColor:  rgba(255, 255, 255, 0.04)
borderRadius:     99px
padding:          8px (all sides)
position:         absolute
top:              5%
right:            4%
zIndex:           (auto)
opacity:          1
transition:       all
```

### img.icon (arrow-up-right icon inside popup wrapper)
```
display:          flex
width:            24px
height:           24px
objectFit:        cover
position:         relative
zIndex:           1
```

### .content-cms-item.blog (bottom info row)
```
display:          flex
flexDirection:    row
justifyContent:   space-between
alignItems:       center
gap:              24px
width:            298.664px
height:           58px
padding:          14px (all sides)
backgroundColor:  transparent
position:         relative
zIndex:           1
cursor:           pointer
opacity:          1
transition:       all
```

### .sub-heading-regular.left.for-sub-blog (post title)
```
display:          block
fontSize:         16px
fontWeight:       400
fontFamily:       Manrope, sans-serif
lineHeight:       22px
color:            rgb(1, 1, 1)
width:            ~174px
height:           22px
maxWidth:         300px
position:         static
opacity:          1
transition:       all
```

### .badge.two (category pill — "Popular" / "News")
```
display:          flex
flexDirection:    row
justifyContent:   center
alignItems:       center
gap:              8px
backgroundColor:  rgb(245, 245, 245)
color:            rgb(1, 1, 1)
fontSize:         16px
fontWeight:       400
fontFamily:       Manrope, sans-serif
lineHeight:       22px
textAlign:        center
padding:          4px 12px
borderRadius:     26px
height:           30px
width:            ~72px
cursor:           pointer
position:         relative
opacity:          1
transition:       all
```

## States & Behaviors

### Hover State (IX2 interactions a-131 / a-132)

**Trigger:** Mouse enter on `.card-cms.blog` element

**State A — Idle (default):**
- `.tumbnail.blog` transform: `matrix(1, 0, 0, 1, 0, 0)` (scale 1)
- `.icon-wrapper.popup.blog` display: `none`

**State B — Hovered:**
- `.tumbnail.blog` transform: `matrix(1.05, 0, 0, 1.05, 0, 0)` (scale 1.05)
- `.icon-wrapper.popup.blog` display: `flex`

**Transition:** `transition: all` on all elements; Webflow IX2 animation durations 500ms (hover-in) / 1000ms (hover-out)

**Hover-out (a-132):** Reverses — icon fades to `display: none`, image scales back to 1.0

### React Implementation Notes
- Use Tailwind `group` on `.card-cms` and `group-hover:scale-105` on the thumbnail image
- Use `group-hover:flex` (or useState) to toggle icon-wrapper from `hidden` to `flex`
- Thumbnail container `.tumbnail-wrapper` has `overflow: hidden` — required for scale clip
- Apply `transition-transform duration-500 ease-in-out` on the thumbnail img

### Scroll Reveal
- Section and card grid fade in on scroll via Webflow IX2 scroll-into-view trigger
- Implement with `.reveal` + IntersectionObserver (threshold: 0.15) adding `.is-visible`
- Stagger cards with `.reveal-delay-1`, `.reveal-delay-2`, `.reveal-delay-3`

## Text Content (verbatim from site)

```
Blog
News & Update
Highlights from my photography journey, featuring my creative process and latest projects.

Tips for Photographers   | Popular
Camera Lenses            | News
Exploring Natural Light  | Popular
```

## Assets Used

| Asset | Source URL | Local path |
|---|---|---|
| Card 1 thumbnail (floral portrait) | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69747ab3beb70ea081e03c0c_Serene%20Floral%20Embrace.png` | `public/images/blog/blog-thumb-1.png` |
| Card 2 thumbnail (camera lens) | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69747ae944723a30fb674907_Modern%20Camera%20Close-Up.png` | `public/images/blog/blog-thumb-2.png` |
| Card 3 thumbnail (natural light canyon) | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69747afb3923a91a4920e962_ChatGPT%20Image%20Dec%2022%2C%202025%2C%2010_29_55%20AM.png` | `public/images/blog/blog-thumb-3.png` |
| Arrow-up-right icon | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ee6f_mynaui--arrow-up-right%20(2).png` | `public/images/icons/arrow-up-right.png` |

## Responsive Behavior

- **Desktop 1440px+:** 3-column grid, 314px per card, container maxWidth 1000px, centered
- **Tablet ~768px:** Likely stacks to 1–2 columns; cards go full-width
- **Mobile 390px:** Single column, cards fill width, gap collapses
- **Breakpoint:** ~768px (Webflow default breakpoint)
- Container max-width enforced at 1000px; section padding 12px keeps edges inset

## Animation Notes

### Thumbnail Scale on Hover
- **Property:** CSS transform scale
- **Idle:** `transform: matrix(1, 0, 0, 1, 0, 0)` — scale(1)
- **Hovered:** `transform: matrix(1.05, 0, 0, 1.05, 0, 0)` — scale(1.05)
- **Duration:** ~500ms hover-in, ~1000ms hover-out (Webflow IX2 a-131/a-132)
- **Easing:** ease (Webflow default)
- **Container clip:** `.tumbnail-wrapper` has `overflow: hidden` + `borderRadius: 32px`

### Icon Popup on Hover
- **Property:** display toggle (none → flex)
- **Icon wrapper position:** absolute, top: 5%, right: 4% within `.tumbnail-wrapper`
- **Icon size:** 24×24px arrow-up-right
- **Wrapper:** borderRadius: 99px (circle), backgroundColor: rgba(255,255,255,0.04), padding: 8px

### Scroll Reveal
- Section fades in as it enters the viewport
- Cards stagger in on scroll
- Implementation: IntersectionObserver with threshold 0.15, `.reveal` / `.is-visible` classes
