# Lightoory Page Topology

Source: https://lightoory.webflow.io/
Analyzed: 2026-05-29
Total page height: 7558px
Viewport tested: 1440px wide

---

## Visual Section Order (top to bottom)

### 0. Background Decoration Image
- Element: `body > img.background`
- offsetTop: 0, height: 937px, z-index: -2
- Notes: Absolute-positioned decorative PNG covering the hero area. Contains a soft pink/rose gradient in top corners and a grid/section layout guide overlay. Renders below all content. Width: 1512px, object-fit: contain.
- URL: `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6971932ba37e8c8b3dc8c1bf_Sections.png`

---

### 1. NavBar
- Element: `nav.header`
- Selector: `nav.header`
- offsetTop: 0, height: 104px
- Position: fixed, top: 0, z-index: 3
- Background: linear-gradient(rgb(255,255,255), rgba(255,255,255,0)) — fades from white to transparent
- Content: Logo image (8-pointed star .logo) + nav links (Home, Portfolio, Blog, About) + "Get In Touch" button (.button.w-button)
- Logo: img.logo — star PNG image (no separate "Lightory" wordmark text node; the text "Light**ory**" in screenshots is the Webflow page logo image)
- Nav links: .navbar-link elements, borderRadius: 99px
- CTA button: .button.w-button — bg: rgb(1,1,1), color: white, borderRadius: 99px, padding: 9px 20px
- Mobile: hamburger menu icon (.menu-button-nav)

---

### 2. Hero Section
- Element: `main.section`
- Selector: `main.section`
- offsetTop: 100 (sits under nav), height: 790px
- Background: transparent (body bg shows through: rgb(247, 248, 253))
- Sub-sections:
  - `.section-tittle.center` — badge "Creative Photograpy" + H1 "Captivating Visual Stories" + paragraph + 2 CTA buttons
  - `.hero-wrapper-image` — large portrait of person with pink/neon glasses (silhouette, dramatic lighting)
  - 5x `.tumbnail-shoot` portrait circles (small circular avatars of photographers/subjects, scattered around the hero image)
  - `.icon.mini-hero` — camera aperture icon (continuously rotating via IX2 PAGE_START animation)
- H1: font-size: 42px, font-weight: 500, line-height: 54px, font-family: Manrope
- Buttons: "Get In Touch" (black, pill) + "View Portfolio" (white, border, pill)
- Animations: PAGE_START IX2 fade-in on all hero elements; rotating camera icon

---

### 3. Trusted Globally Section
- Element: `section.section` (index 0 of body > section)
- Selector: `body > section:nth-of-type(1)`
- offsetTop: 990, height: 654px
- Sub-sections:
  - `.section-tittle.center` — icon row (.column-icon with 2 star icons + camera icon) + H2 "Trusted Globally by Brands and Creatives" + paragraph
  - `.slider-wrapper` > `.slider._2.w-slider` — Webflow slider with 4 slides, each showing a showcase image (serene tree landscape, sun, mountain, cosmic landscape)
  - Row of brand badge pills: HANDUX, HALOZA, PETYU, NASYO (as .badge/.tittle-badge elements)
- Slider: .left-arrow-2 / .right-arrow-2 arrows + .slide-nav-mini._1 dot indicators (4 dots)
- Animations: scroll-into-view fade-in + scale (SCROLL_INTO_VIEW event)

---

### 4. Portfolio Section ("A lens into my world")
- Element: `section.section` (index 1)
- Selector: `body > section:nth-of-type(2)`
- offsetTop: 1744, height: 1085px
- Sub-sections:
  - `.section-tittle.center` — camera icon wrapper + H2 "A lens into my world" + paragraph
  - `.collection-list-wrapper.featured.w-dyn-list` > `.grid.portfolio.w-dyn-items` — 6 portfolio image cards in 2 rows x 3 columns
- Card structure (`.card-cms.portfolio.w-inline-block`):
  - `.tumbnail-wrapper` > `.tumbnail-portfolio` (image, borderRadius: 32px)
  - `.column-potrfolio-item._2` (category + year text overlay, hidden by default, display: none)
  - `.column-potrfolio-item` (category label, display: none by default)
  - `.sub-heading-regular.white-portfolio` (title)
  - `.icon-portfolio` (camera outline icon, rotates on hover)
- Hover: image scales + darkens filter + overlay text appears + icon rotates (IX2 a-136/a-140)
- Portfolio images: Modern Villa Serenity, Sun landscape, Modern Speaker Interaction, Serene Floral Contemplation, Abstract Portrait Art, Elegant Hands with Gradient Object
- Animations: SCROLL_INTO_VIEW fade-in + scale

---

### 5. Expertise Section ("How can I help you today?")
- Element: `section.section` (index 2)
- Selector: `body > section:nth-of-type(3)`
- offsetTop: 2929, height: 860px
- Sub-sections:
  - `.section-tittle.center` — "Expertise" badge + H2 "How can I help you today?" + paragraph
  - `.grid.expertise` — 3-column layout:
    - Left large card: phone mockup w/ slider of 4 photo shoot images + star ratings + "Photo Shoot" label
    - Center feature card: gear image + "Shot with Top Gear" + Over 500+ clients + tags (Lighting, Direction, Editing)
    - Right column: 3 stacked mini cards (E-Commerce Shoots / Smooth client experience / Portrait Photography), each with icon + description + tags
- Slide types: `.slide.expertise.w-slide` x4, each has `.photo-shoot` image + `.sub-heading-regular.slide-text` + `.column-icon.slide` with star-rating icons
- Card hover: IX2 a-105 "Move Card" scales card (TRANSFORM_SCALE 500ms)
- Animations: SCROLL_INTO_VIEW fade-in + scale

---

### 6. Process Section ("Capture the Vision")
- Element: `section.section` (index 3)
- Selector: `body > section:nth-of-type(4)`
- offsetTop: 3889, height: 424px
- Sub-sections:
  - `.section-tittle.center` — "Process" badge + H2 "Capture the Vision" + paragraph
  - `.grid.benefits` — 3 process cards in a row
- Card structure (`.card.process`):
  - `.flex-column` > icon + dots separator (.line._2)
  - `.content.process` > `.sub-heading-regular.left` title + `.paragraph-regular.left` description
- 3 steps: "Capture the Vision" / "Enhance the Details" / "Deliver with Impact"
- Style: white card with rounded corners, icon at top-left, dots separator (three dots visible)
- Animations: SCROLL_INTO_VIEW fade-in + scale; IX2 a-124 "♦️timeline" animation on cards

---

### 7. Testimonials Section ("Hear from Our User")
- Element: `section.section` (index 4)
- Selector: `body > section:nth-of-type(5)`
- offsetTop: 4413, height: 895px
- Sub-sections:
  - `.section-tittle.center` — "Testimonials" badge + H2 "Hear from Our User" + paragraph
  - `.collection-list-wrapper.testimonials.w-dyn-list` > `.grid.testimonials.w-dyn-items` — 6 testimonial cards, 3 columns x 2 rows
- Card structure (`.card.testimonials`):
  - `.content-testimonials` > quote icon (.icon, oui--quote.png) + title (bold) + body text + user info row
  - User info: `.user-reviews` avatar img + name text + `.icon.mini` verified badge icon
- 6 testimonials: Johnson, Sarah Davis, Michael Brown, Emily Johnson, Jane Smith, John Doe
- Style: white cards, rounded corners, large quote mark icon
- Animations: SCROLL_INTO_VIEW fade-in + scale

---

### 8. CTA Section ("The ideal shot is only a chat away.")
- Element: `section.section` (index 5)
- Selector: `body > section:nth-of-type(6)`
- offsetTop: 5408, height: 476px
- Sub-sections:
  - `.padding-global` > `.container-medium` > `.tumbnail-wrapper`
  - `.tumbnail-sections.w-background-video.w-background-video-atom` — Webflow background video div containing `<video autoplay muted loop>`
  - Video sources: mp4 + webm (aerial forest drone footage, 960x540 30fps)
  - `.section-tittle.center` positioned over video — white text: camera icon + H2 + paragraph
  - `.play-pause-button` control button (bottom-right of video, shows pause/play icons)
- Video URL: `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/69747a47b721007275ed868b_3156805-sd_960_540_30fps_mp4.mp4`
- Overlay text: white (`.heading-style-h2.center.white` + `.paragraph-large.center.white`)
- Rounded corners on the video container (~24px radius)
- Animations: SCROLL_INTO_VIEW fade-in on `.tumbnail-wrapper`

---

### 9. FAQ Section ("Frequently asked questions")
- Element: `section.section` (index 6)
- Selector: `body > section:nth-of-type(7)`
- offsetTop: 5984, height: 552px
- Sub-sections:
  - `.section-tittle.center` — "FAQ" badge + H2 "Frequently asked questions" + paragraph
  - `.faq-list` — 4 accordion items
- Accordion structure (`.faq-accordion`):
  - `.faq-question` > `.sub-heading-large` (question text) + `.faq-icon` > `.icon.mini` (+ icon that rotates on open)
  - `.faq-answer` > `.paragraph-regular.answer` (answer text, overflow: hidden, height: 0 by default)
- 4 FAQ items:
  1. "What services do you offer?" — portrait, event, product, brand photography
  2. "How do I book a session?" — contact with preferred date
  3. "Do you offer photo editing?" — professional retouching included
  4. "How long until I get my photos?" — 5–7 days
- Interaction: MOUSE_CLICK opens (height 0→auto, icon rotates); MOUSE_SECOND_CLICK closes
- Animations: SCROLL_INTO_VIEW fade-in + scale on whole section

---

### 10. Blog Section ("News & Update")
- Element: `section.section` (index 7)
- Selector: `body > section:nth-of-type(8)`
- offsetTop: 6636, height: 584px
- Sub-sections:
  - `.section-tittle.center` — "Blog" badge + H2 "News & Update" + paragraph
  - `.collection-list-wrapper.sections.w-dyn-list` > `.grid.blog.w-dyn-items` — 3 blog cards in a row
- Card structure (`.card-cms.blog.w-inline-block`):
  - `.tumbnail-wrapper` > blog thumbnail image
  - `.icon-wrapper.popup.blog` — arrow icon that appears on hover (display: none normally)
  - `.content-cms-item.blog` > `.sub-heading-regular.left.for-sub-blog` (title) + `.badge.two` > `.tittle-badge` (category tag)
- 3 posts: "Tips for Photographers" (Popular), "Camera Lenses" (News), "Exploring Natural Light" (Popular)
- Hover: IX2 a-131/a-132 — thumbnail scales, popup icon appears (TRANSFORM_SCALE + GENERAL_DISPLAY)
- Animations: SCROLL_INTO_VIEW fade-in + scale

---

### 11. Footer
- Element: `footer.section.footer`
- Selector: `footer.section.footer`
- offsetTop: 7320, height: 238px
- Background: rgb(255, 255, 255) — solid white
- Structure:
  - `.footer-content` > `.column-foter`
  - `.footer-wrapper` > `.column-footer-logo` (logo img + tagline "Captivating Visual Stories")
  - `.container-menu` > `.container-menu-footer` > 3x `.menu` columns:
    - Pages: Home, Portfolio
    - Informations: Blog, About
    - Contact: XYZ Square, Hello@mail.com
  - Bottom bar: "© All Rights Reserved, 2025" + License + Changelog links
- No hover animations detected in IX2

---

## Design Tokens Summary

| Token | Value |
|-------|-------|
| Body background | rgb(247, 248, 253) — very light blue-gray |
| Body text color | rgb(1, 1, 1) — near black |
| Secondary text color | rgb(124, 124, 124) — medium gray |
| Primary font | Manrope, sans-serif |
| Google Fonts | Manrope (weight variations) |
| H1 font-size | 42px, weight 500, line-height 54px |
| H2 font-size | 32px, weight 500, line-height 44px |
| Body paragraph | 18px, line-height 25px |
| Primary button | bg: rgb(1,1,1), color: white, borderRadius: 99px, padding: 9px 20px |
| Secondary button | bg: rgb(255,255,255), border: 1px solid rgb(245,245,245), borderRadius: 99px |
| Card background | rgba(252, 253, 255, 0.97) — near white with slight blue |
| Card border-radius | 32px (portfolio cards) / 24px (testimonials, process) |
| Badge pill | bg: white, color: black, borderRadius: 26px |
| Footer background | rgb(255, 255, 255) |
| Accent color | rgb(1, 1, 1) black (primary) / subtle pink from bg image |
| Scroll reveal | opacity: 0 → 1, scale: 0.9 → 1, translateY: 11px → 0, duration: 1300ms, delay: 100ms |

---

## Assets Inventory

### Key Images
- Background decoration: `6971932ba37e8c8b3dc8c1bf_Sections.png` (1512x936)
- Logo (star): `69742c6f33cfc60ce0c4501e_logo_(1).png` (188x66)
- Favicon: `69748565c7ef768b4d03796a_logo_(2).png`
- Hero main image: `69718ad08fb0fbc691ee5572_Image_Container.png` (person with neon glasses, 1512x688)
- Hero thumbnails: `Portrait_of_Young_Man.avif`, `Close-Up_Portrait.avif`, `Portrait_of_Young_Man_(1).avif`, `Confident_Young_Man.avif`
- Portfolio images: `Modern_Villa_Serenity.png`, `Sun.png`, `Modern_Speaker_Interaction.png`, `Serene_Floral_Contemplation.png`, `Abstract_Portrait_Art.png`, `Elegant_Hands_with_Gradient_Object.png`
- Testimonial avatars: 6x JPEG portrait photos

### Key Videos
- CTA background video: `69747a47b721007275ed868b_3156805-sd_960_540_30fps_mp4.mp4` (aerial forest, 960x540, 30fps, autoplay muted loop)
- Also available as WebM: `69747a47b721007275ed868b_3156805-sd_960_540_30fps_webm.webm`

### CDN Base URL
All assets: `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/` (site assets)
CMS assets: `https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/` (portfolio/blog images)
