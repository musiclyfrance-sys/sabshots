# Footer Specification

## Overview
- **Target file:** src/components/Footer.tsx
- **Interaction model:** static
- **Complexity:** simple
- **Screenshot:** docs/design-references/footer.png

---

## DOM Structure

```
footer.section.footer                              ← full-width white wrapper, marginTop: 100px, padding: 12px, height: 238px, overflow: hidden
  └── div.padding-global                           ← flex column, padding: 8px, width: 1488px, height: 214px, justifyContent: center, alignItems: center
        └── div.container-medium                   ← flex column, maxWidth: 1000px, width: 1000px, padding: 8px, gap: 50px, borderRadius: 40px, justifyContent: center, alignItems: center
              └── div.footer-content               ← flex column, width: 984px, gap: 50px, justifyContent: center, alignItems: center
                    ├── div.column-foter           ← flex row, width: 984px, height: 104px, justifyContent: space-between, alignItems: flex-start, gap: 50px
                    │     ├── div.footer-wrapper   ← flex row, width: 467px, height: 64.8px, justifyContent: flex-start, alignItems: flex-start
                    │     │     ├── div.column-footer-logo   ← flex column, width: 184px, gap: 20px, alignItems: flex-start
                    │     │     │     ├── a.navbar-brand.w-inline-block.w--current  ← logo link, href="/", width: 65px, height: 22.8px
                    │     │     │     │     └── img.logo     ← Lightory star PNG, width: 65px, height: 22.8px, display: block
                    │     │     │     └── p.paragraph-regular.left  ← tagline "Captivating Visual Stories", color: rgb(124,124,124), fontWeight: 300
                    │     │     └── div.container-menu        ← (empty/spacer div)
                    │     └── div.container-menu-footer       ← flex row, width: 467px, gap: 40px, justifyContent: flex-end, alignItems: flex-start
                    │           ├── div.menu                  ← flex column, gap: 5px, alignItems: flex-start  [Pages column]
                    │           │     ├── div.sub-menu        ← padding: 8px 6px
                    │           │     │     └── div.sub-heading-regular  ← "Pages", color: rgb(1,1,1), fontWeight: 400, fontSize: 16px
                    │           │     ├── div.sub-menu
                    │           │     │     └── a.navbar-link  ← "Home", href="/", color: rgb(1,1,1), fontWeight: 300, fontSize: 14px
                    │           │     └── div.sub-menu
                    │           │           └── a.navbar-link  ← "Portfolio", href="/portfolio", color: rgb(124,124,124), fontWeight: 300, fontSize: 14px
                    │           ├── div.menu                  ← flex column, gap: 5px, alignItems: flex-start  [Informations column]
                    │           │     ├── div.sub-menu
                    │           │     │     └── div.sub-heading-regular  ← "Informations", color: rgb(1,1,1), fontWeight: 400, fontSize: 16px
                    │           │     ├── div.sub-menu
                    │           │     │     └── a.navbar-link  ← "Blog", href="/blog", color: rgb(124,124,124), fontWeight: 300, fontSize: 14px
                    │           │     └── div.sub-menu
                    │           │           └── a.navbar-link  ← "About", href="/about", color: rgb(124,124,124), fontWeight: 300, fontSize: 14px
                    │           └── div.menu                  ← flex column, gap: 5px, alignItems: flex-start  [Contact column]
                    │                 ├── div.sub-menu
                    │                 │     └── div.sub-heading-regular  ← "Contact", color: rgb(1,1,1), fontWeight: 400, fontSize: 16px
                    │                 ├── div.sub-menu
                    │                 │     └── a.navbar-link  ← "XYZ Square", href="https://maps.com/", color: rgb(124,124,124), fontWeight: 300, fontSize: 14px
                    │                 └── div.sub-menu
                    │                       └── a.navbar-link  ← "Hello@mail.com", href="mailto:Hello@mail.com", color: rgb(124,124,124), fontWeight: 300, fontSize: 14px
                    └── div.column-footer           ← flex row, width: 984px, height: 28px, justifyContent: space-between, alignItems: center  [bottom bar]
                          ├── p.paragraph-regular.left  ← "© All Rights Reserved, 2025", color: rgb(124,124,124), fontWeight: 300, fontSize: 16px
                          └── div.menu.buttom           ← flex row, gap: 5px, justifyContent: center, alignItems: center  [License + Changelog links]
                                ├── a.navbar-link  ← "License", href="/templates-info/license", color: rgb(124,124,124), fontWeight: 300, fontSize: 14px
                                └── a.navbar-link  ← "Changelog", href="/templates-info/changelog", color: rgb(124,124,124), fontWeight: 300, fontSize: 14px
```

---

## Computed Styles (exact values from getComputedStyle)

### Container: `footer.section.footer`
| Property | Value |
|---|---|
| backgroundColor | rgb(255, 255, 255) |
| color | rgb(1, 1, 1) |
| fontFamily | Manrope, sans-serif |
| fontSize | 16px |
| fontWeight | 400 |
| lineHeight | 22px |
| display | block |
| width | 1512px |
| height | 238px |
| padding | 12px |
| margin | 100px 0px 0px |
| overflow | hidden |
| position | static |

### `div.padding-global`
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | center |
| padding | 8px |
| width | 1488px |
| height | 214px |

### `div.container-medium`
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | center |
| maxWidth | 1000px |
| width | 1000px |
| padding | 8px |
| gap | 50px |
| borderRadius | 40px |

### `div.footer-content`
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | center |
| width | 984px |
| height | 182px |
| gap | 50px |

### `div.column-foter` (main columns row)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | row |
| justifyContent | space-between |
| alignItems | flex-start |
| width | 984px |
| height | 104px |
| gap | 50px |

### `div.footer-wrapper` (logo + tagline side)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | row |
| justifyContent | flex-start |
| alignItems | flex-start |
| width | 467px |
| height | 64.8px |

### `div.column-footer-logo`
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| alignItems | flex-start |
| gap | 20px |
| width | 184px |
| height | 64.8px |

### `a.navbar-brand` (logo link in footer)
| Property | Value |
|---|---|
| display | flex |
| alignItems | center |
| width | 65px |
| height | 22.8px |
| color | rgb(1, 1, 1) |
| textDecoration | none |
| opacity | 1 |
| transition | all |

### `img.logo`
| Property | Value |
|---|---|
| display | block |
| width | 65px |
| height | 22.8px |
| naturalWidth | 188px |
| naturalHeight | 66px |

### `p.paragraph-regular.left` (tagline)
| Property | Value |
|---|---|
| fontSize | 16px |
| fontWeight | 300 |
| fontFamily | Manrope, sans-serif |
| lineHeight | 22px |
| color | rgb(124, 124, 124) |
| opacity | 1 |

### `div.container-menu-footer` (links columns wrapper)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | row |
| justifyContent | flex-end |
| alignItems | flex-start |
| width | 467px |
| height | 104px |
| gap | 40px |

### `div.menu` (each link column: Pages, Informations, Contact)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | column |
| justifyContent | center |
| alignItems | flex-start |
| gap | 5px |
| height | 104px |

### `div.sub-menu` (wrapper per item within a column)
| Property | Value |
|---|---|
| display | block |
| padding | 8px 6px |

### `div.sub-heading-regular` (column heading: "Pages", "Informations", "Contact")
| Property | Value |
|---|---|
| fontSize | 16px |
| fontWeight | 400 |
| fontFamily | Manrope, sans-serif |
| lineHeight | 22px |
| color | rgb(1, 1, 1) |
| display | block |

### `a.navbar-link` (footer nav links)
| Property | Value |
|---|---|
| fontSize | 14px |
| fontWeight | 300 |
| fontFamily | Manrope, sans-serif |
| lineHeight | 20px |
| color | rgb(1, 1, 1) for active/current, rgb(124, 124, 124) for others |
| textDecoration | none |
| display | block |
| padding | 4px 6px |
| transition | all |

### `div.column-footer` (bottom bar)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | row |
| justifyContent | space-between |
| alignItems | center |
| width | 984px |
| height | 28px |

### `p.paragraph-regular.left` (copyright text)
| Property | Value |
|---|---|
| fontSize | 16px |
| fontWeight | 300 |
| fontFamily | Manrope, sans-serif |
| lineHeight | 22px |
| color | rgb(124, 124, 124) |

### `div.menu.buttom` (License + Changelog links container)
| Property | Value |
|---|---|
| display | flex |
| flexDirection | row |
| justifyContent | center |
| alignItems | center |
| gap | 5px |
| width | 147.6px |
| height | 28px |

### `a.navbar-link` in `.buttom` (License, Changelog)
| Property | Value |
|---|---|
| fontSize | 14px |
| fontWeight | 300 |
| fontFamily | Manrope, sans-serif |
| color | rgb(124, 124, 124) |
| textDecoration | none |
| transition | all |

---

## States & Behaviors

### Static section — no scroll-driven or JS-controlled behaviors.

### Link hover state
- **Trigger:** Mouse enters `.navbar-link`
- **State A (default):** color: rgb(124, 124, 124) for most links; rgb(1, 1, 1) for active "Home" link
- **State B (hover):** color changes (likely to rgb(1, 1, 1) based on transition: all pattern used site-wide)
- **Transition:** `transition: all` (inherited from site global — implies color transition on hover)

### No accordion, video, marquee, or scroll-reveal animations in this section.

---

## Text Content (verbatim from site)

```
Captivating Visual Stories

Pages
Home
Portfolio
Informations
Blog
About
Contact
XYZ Square
Hello@mail.com

© All Rights Reserved, 2025

License
Changelog
```

---

## Assets Used

| Element | Source URL | Local path |
|---|---|---|
| Logo (star/wordmark image) | https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/69742c6f33cfc60ce0c4501e_logo%20(1).png | public/images/logo.png |

- naturalWidth: 188px, naturalHeight: 66px
- alt: "Eight black outlined stars arranged in a circle on a transparent background."
- Same logo image as used in the navbar

---

## Links (with hrefs)

| Text | Href |
|---|---|
| Logo (brand) | https://lightoory.webflow.io/ → / |
| Home | https://lightoory.webflow.io/ → / |
| Portfolio | https://lightoory.webflow.io/portfolio → /portfolio |
| Blog | https://lightoory.webflow.io/blog → /blog |
| About | https://lightoory.webflow.io/about → /about |
| XYZ Square | https://maps.com/ |
| Hello@mail.com | mailto:Hello@mail.com |
| License | https://lightoory.webflow.io/templates-info/license → /templates-info/license |
| Changelog | https://lightoory.webflow.io/templates-info/changelog → /templates-info/changelog |

---

## Layout Notes

### Three-column link layout (right side)
- Three `.menu` columns rendered side-by-side in `.container-menu-footer`
- Each column has a heading (`.sub-heading-regular`, fontWeight 400) followed by links (`.navbar-link`, fontWeight 300, fontSize 14px)
- Column gap: 40px between the three menu groups

### Left side (logo + tagline)
- Logo image rendered at 65×22.8px (scaled down from 188×66px natural)
- Tagline "Captivating Visual Stories" below logo, gap: 20px between them

### Bottom bar
- Full-width 984px flex row, `justifyContent: space-between`
- Left: "© All Rights Reserved, 2025" (paragraph, gray)
- Right: License + Changelog links (flex row, gap: 5px)

### Overall layout
- Left half (`footer-wrapper`, width 467px): logo + tagline
- Right half (`container-menu-footer`, width 467px): 3-column link grid
- Both aligned via `justifyContent: space-between` in `.column-foter`

---

## Responsive Behavior

- **Desktop 1440px+:** Full two-column layout (logo left, 3-column links right), bottom bar with copyright left and links right
- **Mobile 390px:** Likely stacks to single column; `.column-foter` flex row collapses to column; link columns stack vertically
- **Breakpoint:** ~768px (inferred from site-wide pattern; no explicit mobile styles captured in this extraction)

---

## Animation Notes

- No animations in this section
- `transition: all` is set on links site-wide (inherited), enabling smooth color hover transitions
- No marquee, scroll-reveal, accordion, or video background in the footer
