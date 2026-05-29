# NavBar Specification

## Overview
- **Target file:** src/components/NavBar.tsx
- **Interaction model:** scroll-driven (fixed position, no color-change on scroll — gradient stays static)
- **Complexity:** simple
- **Screenshot:** docs/design-references/navBar.png

---

## DOM Structure

```
nav.header                                    ← fixed full-width wrapper, z-index 3
  └── div.navbar-no-shadow-container.w-nav    ← inner centering container, z-index 10
        └── div.navbar-container              ← 3-column flex row, max-width 1000px, gap 5px, padding 9px
              ├── a.navbar-brand.w-nav-brand.w--current   ← logo link → href="/"
              │     └── img                               ← Lightory wordmark/star logo PNG
              ├── nav.navbar-wrapper.w-nav-menu           ← center nav wrapper (holds links + CTA)
              │     └── ul.navbar-menu.w-list-unstyled    ← single list item wrapping everything
              │           └── li.list-item                ← flex row, justifyContent: flex-end, alignItems: center, gap: 20px
              │                 ├── a.navbar-link.w--current  ← "Home" (active/current page)
              │                 ├── a.navbar-link             ← "Portfolio"
              │                 ├── a.navbar-link             ← "Blog"
              │                 ├── a.navbar-link             ← "About"
              │                 └── a.button                  ← "Get In Touch" CTA
              └── div.menu-button-nav.w-nav-button        ← mobile hamburger (display: none on desktop)
                    └── img                               ← three-bar hamburger icon PNG
```

---

## Computed Styles (exact values from getComputedStyle)

### Container: `nav.header`
| Property | Value |
|---|---|
| position | fixed |
| top | 0 |
| left | 0 |
| right | 0 |
| bottom | auto (inset: 0% 0% auto) |
| z-index | 3 |
| width | 100% (computed: 1512px at 1512px viewport) |
| height | 104px |
| display | flex |
| flex-direction | row |
| justify-content | center |
| align-items | center |
| padding | 24px (all sides) |
| background-image | linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0)) |
| background-color | transparent |
| backdrop-filter | blur(2px) |
| font-family | Manrope, sans-serif |
| font-size | 16px |
| font-weight | 400 |
| line-height | 22px |
| color | rgb(1, 1, 1) |
| overflow | visible |
| transition | all |

### Inner wrapper: `div.navbar-no-shadow-container`
| Property | Value |
|---|---|
| position | relative |
| z-index | 10 |
| width | 100% (computed: 1464px) |
| height | 56px |
| display | flex |
| flex-direction | row |
| justify-content | center |
| align-items | center |
| background-color | transparent |
| max-width | none |
| margin-left | auto |
| margin-right | auto |
| padding | 0px |

### Container row: `div.navbar-container`
| Property | Value |
|---|---|
| display | flex |
| flex-direction | row |
| justify-content | space-between |
| align-items | center |
| width | 100% |
| max-width | 1000px |
| gap | 5px |
| padding | 9px (all sides) |
| background-color | transparent |
| border-radius | 0px |

### Logo link: `a.navbar-brand`
| Property | Value |
|---|---|
| display | flex |
| flex-direction | row |
| justify-content | center |
| align-items | center |
| width | 65px |
| height | 22.8125px |
| position | relative |
| background-color | transparent |
| cursor | pointer |
| transition | all |
| color | rgb(51, 51, 51) |

### Logo image: `img` (inside .navbar-brand)
| Property | Value |
|---|---|
| src | https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/69742c6f33cfc60ce0c4501e_logo%20(1).png |
| alt | Eight black outlined stars arranged in a circle on a transparent background. |
| natural width | 188px |
| natural height | 66px |
| position | static |

### Nav wrapper: `nav.navbar-wrapper`
| Property | Value |
|---|---|
| display | flex |
| flex-direction | row |
| justify-content | center |
| align-items | center |
| width | 914px (computed) |
| height | 40px |
| position | relative |

### Nav menu list: `ul.navbar-menu`
| Property | Value |
|---|---|
| display | block |
| width | 914px |
| height | 40px |
| list-style | outside none none |
| margin-bottom | 0px |
| padding-left | 0px |

### Nav list item: `li.list-item`
| Property | Value |
|---|---|
| display | flex |
| flex-direction | row |
| justify-content | flex-end |
| align-items | center |
| gap | 20px |
| width | 914px |
| height | 40px |

### Nav links (default, inactive): `a.navbar-link`
| Property | Value |
|---|---|
| display | block |
| font-family | Manrope, sans-serif |
| font-size | 14px |
| font-weight | 300 |
| line-height | 20px |
| color | rgb(124, 124, 124) — CSS var: `--_color-guide---global-style--content` |
| background-color | transparent |
| padding | 4px 6px |
| border-radius | 99px |
| height | 28px |
| cursor | pointer |
| transition | all |

### Nav link (active/current): `a.navbar-link.w--current` (Home)
| Property | Value |
|---|---|
| background-color | rgb(255, 255, 255) — CSS var: `--_color-guide---global-style--base-card` |
| color | rgb(1, 1, 1) — CSS var: `--_color-guide---global-style--title` |
| border-radius | 99px |
| padding | 4px 6px |
| (all other properties same as default nav link) |

### CTA Button: `a.button` ("Get In Touch")
| Property | Value |
|---|---|
| display | flex |
| flex-direction | row |
| justify-content | center |
| align-items | center |
| font-family | Manrope, sans-serif |
| font-size | 14px |
| font-weight | 300 |
| line-height | 22px |
| color | rgb(255, 255, 255) |
| background-color | rgb(1, 1, 1) — CSS var: `--_color-guide---global-style--button` |
| padding | 9px 20px |
| border-radius | 99px — CSS var: `--_size-guide---border--button-border` |
| width | 119.461px (auto) |
| height | 40px |
| gap | 10px |
| cursor | pointer |
| transition | all |
| text-decoration | none |

### Mobile hamburger: `div.menu-button-nav`
| Property | Value |
|---|---|
| display | none (desktop) |
| padding | 18px |
| position | relative |
| cursor | pointer |

---

## States & Behaviors

### Nav link hover
- **Trigger:** mouseenter on `a.navbar-link`
- **State A (default):** `background-color: transparent; color: rgb(124, 124, 124)`
- **State B (hover):** `background-color: #fcfdfff7 (--_color-guide---global-style--base-card-ii); color: rgb(1,1,1); border-radius: 99px`
- **Transition:** `transition: all` (browser default ~0.2s ease)

### Nav link active/current
- **Trigger:** current page match (Webflow `.w--current` class)
- **State:** `background-color: white; color: rgb(1,1,1); border-radius: 99px; padding: 4px 6px`

### CTA Button hover
- **Trigger:** mouseenter on `a.button`
- **State A (default):** `background-color: rgb(1,1,1); opacity: 1`
- **State B (hover):** `background-color: #030407 (--_color-guide---neutral--900); opacity: 0.8`
- **Transition:** `transition: all`

### Scroll behavior
- No color change or style mutation on scroll detected.
- Nav stays `position: fixed` with the white-to-transparent gradient at all scroll positions.
- No IX2 scroll-driven animations on this element.

---

## Text Content (verbatim from site)

```
Home
Portfolio
Blog
About
Get In Touch
```

Note: The "Lightory" wordmark is rendered as an image (PNG), not text. The `a.navbar-brand` contains only the logo image — no text node.

---

## Assets Used

| Element | Remote URL | Local path in `public/` |
|---|---|---|
| Logo (wordmark + star) | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/69742c6f33cfc60ce0c4501e_logo%20(1).png` | `/images/logo.png` |
| Mobile hamburger icon | `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ef55_eva--menu-fill.png` | `/images/hamburger.png` |

Logo dimensions: 188 × 66px natural size; rendered at ~65 × 23px in the navbar.

---

## Responsive Behavior

- **Desktop (≥1000px):** Full layout — logo left, nav links center/right (flex-end in the list item), CTA button far right. Mobile hamburger hidden (`display: none`).
- **Mobile (<768px, Webflow breakpoint):** Nav links and CTA hidden; hamburger icon visible (`display: block` or `flex`). Clicking hamburger reveals a dropdown/overlay menu.
- **Breakpoint:** ~768px (Webflow default tablet breakpoint)

---

## Animation Notes

- No marquee, scroll-reveal, or IX2 animations on this component.
- All interactive transitions use `transition: all` (inherited browser default duration ~0.2s ease).
- `backdrop-filter: blur(2px)` is applied to `nav.header` — creates subtle frosted-glass effect over content scrolling underneath.
- The linear-gradient background (`white → transparent`) fades the nav into the page content below rather than having a hard edge.

---

## CSS Variables Reference

| Variable | Resolved Value | Used on |
|---|---|---|
| `--_color-guide---global-style--base-card` | `white` | Active nav link bg |
| `--_color-guide---global-style--base-card-ii` | `#fcfdfff7` | Hovered nav link bg |
| `--_color-guide---global-style--title` | `#010101` | Active/hovered nav link text, body text |
| `--_color-guide---global-style--content` | `#7c7c7c` | Default nav link text |
| `--_color-guide---global-style--button` | `#010101` | CTA button background |
| `--_color-guide---neutral--white` | `#fff` | CTA button text |
| `--_color-guide---neutral--900` | `#030407` | CTA button hover bg |
| `--_size-guide---button-spaching--margin-width` | `9px` | CTA button padding-top/bottom |
| `--_size-guide---button-spaching--margin-long` | `20px` | CTA button padding-left/right |
| `--_size-guide---border--button-border` | `99px` | CTA button border-radius |
| `--_size-guide---sections--container-max-width` | `1000px` | navbar-container max-width |
| `--font-style-guide--paragraph-small` | `14px` | Nav link & CTA font-size |
| `--font-style-guide--height--height-paragraph-small` | `20px` | Nav link line-height |
| `--weight--paragraph` | `300` | Nav link & CTA font-weight |
| `--type-font--content` | `Manrope, sans-serif` | All nav text |

---

## Implementation Notes

- The logo `a.navbar-brand` links to `href="/"` and renders an `<img>` only — no text.
- Nav links use `a` tags (not `button`) with `href` attributes pointing to `/`, `/portfolio`, `/blog`, `/about`.
- CTA "Get In Touch" is also an `a.button` linking to `href="/contact"`.
- The pill-style active state on "Home" is a white background + full border-radius (99px) — implement with a conditional `w--current`-equivalent active class in Next.js using `usePathname()`.
- The `ul.navbar-menu` contains a single `li.list-item` that holds all links + CTA in one flex row (justify-content: flex-end). This positions the group to the right inside the full-width wrapper.
- The outer `nav.header` has `justify-content: center` to center the inner `div.navbar-no-shadow-container`, which in turn has `max-width: none` and `width: 100%` but the inner `div.navbar-container` constrains content to `max-width: 1000px`.
