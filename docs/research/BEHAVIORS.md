# Lightoory Site Behaviors

Source: https://lightoory.webflow.io/
Analyzed: 2026-05-29
Interaction engine: Webflow IX2 (14 action lists, 474 events, jQuery 3.5.1 + Webflow JS)

---

## NavBar

- NavBar | page load | position: fixed; top: 0; z-index: 3; background: linear-gradient(white, transparent) | nav.header selector
- NavBar | scroll (any amount) | background stays gradient (no solid bg transition detected in IX2) | static gradient overlay
- NavBar | page load | logo = img.logo (star icon SVG PNG) + text "Lightory" rendered as image | no separate text node

---

## HeroSection (MAIN.section, offsetTop: 100)

- HeroSection | page load / PAGE_START event | .section-tittle.center fades in: opacity 0→1, translateY 11px→0, scale 0.9→1 | duration 1300ms, delay 100ms, easing "ease"
- HeroSection | page load / PAGE_START event | img.background (large pink/section guide PNG) fades in | opacity 0→1, translateY, scale
- HeroSection | page load | img.icon.mini-hero (camera aperture icon) rotates to -180deg | Rotate Effect action (a-138): delay 2000ms, duration 2000ms, repeat
- HeroSection | page load | img.hero-image (main foreground person image) fades in | opacity 0→1, scale 0.9→1 
- HeroSection | page load | circular portrait thumbnails (.tumbnail-shoot, .tumbnail-shoot._1, ._4, ._4._5, ._4._6) fade in and move | translateY + opacity, duration 500ms stagger

---

## TrustedGloballySection (SECTION, offsetTop: 990)

- TrustedGloballySection | scroll into view | .container-medium fades in: opacity 0→1, translateY 11px→0, scale 0.9→1 | action "Fade In & Move On Scroll" (a-48), duration 1300ms, delay 100ms
- TrustedGloballySection | scroll into view | slider widget (.slider._2.w-slider) with 4 slides auto-plays | Webflow native slider, 4 slides
- TrustedGloballySection | always | brand name badges (HANDUX, HALOZA, PETYU, NASYO) displayed as .badge/.tittle-badge pill elements below slider
- TrustedGloballySection | slider nav | left/right arrows (.left-arrow-2, .right-arrow-2) and dot nav (.slide-nav-mini._1) | Webflow native slider interaction

---

## PortfolioSection (SECTION, offsetTop: 1744 — "A lens into my world")

- PortfolioSection | scroll into view | .section-tittle.center fades in | opacity 0→1, scale 0.9→1, translateY 11px→0, duration 1300ms
- PortfolioSection | scroll into view | .grid.portfolio.w-dyn-items fades in | opacity 0→1, scale 0.9→1, translateY 11px→0, duration 1300ms
- PortfolioCard | mouseover (MOUSE_OVER event) | "Hover Portfolio" (a-136): img.tumbnail-portfolio scales up (duration 500ms/1000ms) + filter darkens, .column-potrfolio-item displayed (flex), .content-cms-item shown, .icon-portfolio rotates, card moves | complex multi-target IX2
- PortfolioCard | mouseout (MOUSE_OUT event) | "Hover Portfolio out" (a-140): reversal of hover state | duration 500ms
- PortfolioCard | always | 6 cards in a 3-column grid (1 row of 3 + 1 row of 3), each card: img.tumbnail-portfolio + text overlay that reveals on hover
- PortfolioCard overlay | hover | .column-potrfolio-item._2 (category + year text) displayed | display: none → flex
- PortfolioCard icon | hover | img.icon-portfolio rotates | TRANSFORM_ROTATE 1000ms

---

## ExpertiseSection (SECTION, offsetTop: 2929 — "How can I help you today?")

- ExpertiseSection | scroll into view | .section-tittle.center fades in | opacity 0→1, scale 0.9→1, translateY 11px→0
- ExpertiseSection | scroll into view | .grid.expertise fades in | opacity 0→1, scale 0.9→1
- ExpertiseSection | always | left large card: phone-mockup image slider (.slider._2.w-slider) with 4 photo shoot slides + rating stars + "Photo Shoot" label
- ExpertiseSection | always | center card: feature highlight (Shot with Top Gear) with tags (Lighting, Direction, Editing)
- ExpertiseSection | always | right side: 3 small cards (E-Commerce Shoots, Smooth client experience, Portrait Photography) each with icon + tags
- ExpertiseSection cards | MOUSE_OVER | "Move Card" (a-105): card scales up TRANSFORM_SCALE 500ms | "Move Card Close" (a-106): reversal

---

## ProcessSection (SECTION, offsetTop: 3889 — "Capture the Vision")

- ProcessSection | scroll into view | .section-tittle.center fades in | opacity 0→1, scale 0.9→1
- ProcessSection | scroll into view | .grid.benefits fades in | opacity 0→1, scale 0.9→1
- ProcessSection | always | 3 process cards (.card.process): "Capture the Vision", "Enhance the Details", "Deliver with Impact" | horizontal layout, each with icon + dots-separator + title + description
- ProcessSection cards | PAGE_START | "♦️timeline" (a-124) animation | staggered reveal

---

## TestimonialsSection (SECTION, offsetTop: 4413 — "Hear from Our User")

- TestimonialsSection | scroll into view | .section-tittle.center fades in | opacity 0→1, scale 0.9→1
- TestimonialsSection | scroll into view | .grid.testimonials fades in | opacity 0→1, scale 0.9→1
- TestimonialsSection | always | 6 testimonial cards (.card.testimonials) in 3-column grid, 2 rows | each has quote icon, title, body text, user avatar, name, verified badge
- TestimonialsSection | always | cards have white background, rounded corners (~24px radius), no hover effect detected in IX2

---

## CTASection (SECTION, offsetTop: 5408 — "The ideal shot is only a chat away.")

- CTASection | always | full-width video background (.tumbnail-sections.w-background-video) playing aerial drone footage of forest | video: autoplay=true, muted=true, loop=true
- CTASection | always | white text overlay: h2 "The ideal shot is only a chat away." + paragraph "Reach out to us to transform your vision into captivating photography."
- CTASection | always | camera icon (.icon.mini-hero) above heading, white color
- CTASection | always | play/pause button (.play-pause-button) in bottom-right corner with pause/play icon toggle
- CTASection video | scroll into view | .tumbnail-wrapper fades in | opacity 0→1, scale 0.9→1, duration 1300ms
- CTASection | always | no CTA button in this section (text + video only, no "Contact" button visible)

---

## FAQSection (SECTION, offsetTop: 5984 — "Frequently asked questions")

- FAQSection | scroll into view | .section-tittle.center fades in | opacity 0→1, scale 0.9→1
- FAQSection | scroll into view | .faq-list fades in | opacity 0→1, scale 0.9→1
- FAQItem | MOUSE_CLICK (first click) | "FAQ Accordion Open" (a-45): .faq-answer height 0→auto (STYLE_SIZE, duration 500ms), .faq-icon rotates (TRANSFORM_ROTATE, duration 1000ms) | 3 action groups
- FAQItem | MOUSE_SECOND_CLICK (second click) | "FAQ Accordion Close" (a-117): reversal | STYLE_SIZE .faq-answer height auto→0
- FAQItem | always | 4 questions: "What services do you offer?", "How do I book a session?", "Do you offer photo editing?", "How long until I get my photos?" | full-width accordion list
- FAQItem icon | open state | .faq-icon rotates from 0deg → 45deg (+ sign becomes x) | duration 1000ms
- FAQAnswer | closed | height: 0px, overflow: hidden, display: flex | CSS
- FAQAnswer | open | height: auto, animated via IX2 STYLE_SIZE

---

## BlogSection (SECTION, offsetTop: 6636 — "News & Update")

- BlogSection | scroll into view | .section-tittle.center fades in | opacity 0→1, scale 0.9→1
- BlogSection | scroll into view | .grid.blog fades in | opacity 0→1, scale 0.9→1
- BlogCard | MOUSE_OVER | "Hover blog" (a-131): thumbnail scales (TRANSFORM_SCALE 500ms/1000ms), .icon-wrapper.popup.blog appears (display none→flex) | complex multi-target
- BlogCard | MOUSE_OUT | "Hover blog out" (a-132): reversal
- BlogCard | always | 3 cards (.card-cms.blog) in horizontal row, each: image thumbnail + title text + category badge (.badge.two) | no text overlay on hover, only image scale + popup icon
- BlogCard popup icon | hover | arrow-up-right icon appears over image center

---

## Footer (FOOTER.section.footer, offsetTop: 7320)

- Footer | always | white background (rgb 255,255,255) | contrast against body light blue-grey
- Footer | always | 3-column layout: logo + tagline | Pages links (Home, Portfolio) | Informations links (Blog, About) | Contact (XYZ Square, Hello@mail.com)
- Footer | always | copyright "© All Rights Reserved, 2025" + License + Changelog links
- Footer logo | always | star icon image (.logo) — same logo as navbar

---

## Global / Scroll Behavior

- AllSections | scroll into view | Webflow IX2 "Fade In & Move On Scroll" (a-48) and "Fade In & Scale On Scroll" (a-49) triggered on SCROLL_INTO_VIEW events (474 total events) | initial state: opacity:0, transform: scale(0.9) translateY(11px); final: opacity:1, scale(1) translateY(0)
- HeroImages | PAGE_START | tumbnail portrait circles animate in individually on page load with stagger
- CameraIcon | PAGE_START | "Rotate Effect" (a-138): 180deg rotation loop with delay 2000ms, duration 2000ms, repeating
- NavBar | always | position: fixed, z-index: 3, background: linear-gradient(white, transparent) — acts as a subtle fade from white
- Body | always | background-color: rgb(247, 248, 253) — very light blue-gray
- BackgroundImage | always | img.background positioned absolute, top:0 left:0, z-index: -2, contains the decorative pink corner gradient sections design
