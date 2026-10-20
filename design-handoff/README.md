# Handoff: Backpack Digital Media website (backpackdigitalmedia.com)

## Overview
A full rebuild and content upgrade of backpackdigitalmedia.com. There are 15 routes: Home, About Us, Digital Marketing, Recruitment Marketing, six service sub-pages, a Case Studies index, three case-study pages, and a new Contact page. Shared on every page: a sticky nav and a blue footer.

## About the design files
The files in this bundle are **design references built in HTML**. They show the intended look, copy and behavior; they are not production code to ship. The task is to **recreate them in the target codebase** using its existing framework and patterns. If no codebase exists yet, pick an appropriate stack; a static-friendly React or Astro site is a good fit.

- `Backpack Website.dc.html` is the source of truth. To run it, serve this folder locally (for example `npx serve .`) and open the file. It needs `support.js` (the runtime) and `hero.js` next to it.
- **Template:** the markup between `<x-dc>` and `</x-dc>`. All styles are inline. `{{ name }}` holes are filled from `renderVals()`, `<sc-if>` is a conditional block and `<sc-for>` is a loop.
- **Logic:** the `class Component` script at the bottom holds routing, page data (`subPages`, `caseStudies`, `bys`) and the animation helpers.
- `hero.js` is a standalone `<bp-hero>` web component for the animated homepage illustration (inline SVG plus Web Animations). It can be ported as-is or wrapped in a component.

## Fidelity
**High fidelity.** Colors, typography, spacing, copy and animations are final. Recreate pixel-accurately.

## Design tokens
- **Colors:**
  - Blue (primary) `#5D84ED`
  - Lime (accent) `#CEED5D`
  - Ink `#282828`
  - Black headings `#000`
  - Nav and light-card background `#F0F0F0`
  - Table stripe `#F5F5F5`
  - White `#FFF`
  - Footer divider `#dee2e6`
  - Input border `#cfcfcf`
- **Gradient:** `linear-gradient(to right, #5D84ED, #CEED5D)`, used on gradient buttons and gradient text. On hover the direction reverses.
- **Font:** Helvetica Neue (Light 300, Roman 400, Medium 500, Bold 700), self-hosted from `assets/font/*.otf`.
- **Type scale:**
  - H1: `clamp(35px, 5vw, 64px)`, weight 500, uppercase, line-height 1.1
  - H2: `clamp(30px, 3.4vw, 42px)`, weight 500, uppercase
  - Body large: `clamp(20px, 2.2vw, 28px)`, weight 300, line-height 1.3
  - Body: 18–22px, weight 300
- **Radius:**
  - Buttons: 10px (classic) or 999px (pill)
  - Cards and panels: 20px
- **Layout:**
  - Container: max-width 1320px, horizontal padding 12px
  - Section rhythm: 70–100px vertical spacing
- **Button hover:** `transform: scale(1.01) translateY(-2px); opacity: .8`, transition `.3s ease`.

## Global components
- **Nav:**
  - Sticky, background `#F0F0F0`.
  - Vertical padding is 20px, shrinking to 10px once `scrollY > 50`; padding transitions over .5s.
  - Contents: logo (`assets/img/logo.svg`, 46px tall), five text links (20px, hover color blue), and a lime "Contact Us" button.
  - Below 1200px wide the links collapse into a hamburger menu; the three bars animate into an X.
- **Footer:**
  - Background `#5D84ED`, padding `100px 0 30px`.
  - Contents: white logo (250px wide), a short blurb, then address, email and hours (15px, weight 300).
  - Link list: Home, About Us, Digital Marketing, Recruitment Marketing, Case Studies, Contact.
  - Bottom line: "© Copyright 2026, All Rights Reserved".
- **Scroll reveal:** elements with `[data-reveal]` fade up once (1s) as they enter the viewport. Anything already on screen at load is shown immediately.

## Screens
All copy is final and is in the HTML. Notes per screen:

### Home
1. **Hero:**
   - H1 "Marketing That *Moves* You Forward". "Moves" is italic and blue, with a subtle 5s loop: translateX 0→4px and skewX 0→−3deg, ease-in-out. It does not run under reduced motion.
   - Subline, plus two buttons: blue "Explore Services" and black "Contact Us".
   - Right column: `<bp-hero>` illustration, about 405px tall.
2. **Client logo strip:** 7 logos, each 170px wide.
3. **Who We Are:**
   - Dark `#282828` band.
   - Left: a dot ring rotating 360° every 30s (linear, infinite) around the white B mark.
   - Right: H2, paragraph, and a gradient "Learn More About Us" button.
4. **What we do:**
   - Grid of 6 cards, `repeat(auto-fill, minmax(360px, 1fr))`, gap 24px.
   - Card: background `#F0F0F0`, radius 20px, padding 36px 32px. Contents: number "01"–"06" (60% opacity), uppercase title, one-line description, "Learn more →".
   - Card hover: background turns blue, text turns white, card lifts 4px.
   - Card links: Ads → `sem`, Video → `branding`, Social → `social`, Websites → `web`, SEO → `seo`, Recruitment → `recruitment`.
   - Below the grid: blue pill button "Not sure where to start? Book a call." linking to Contact.
5. **How we work:**
   - Dark band. H2 "We learn your business before we market it." plus an intro line.
   - 4 steps in a grid (`minmax(280px, 1fr)`). Each step has a 2px lime top border, a lime number (40px), a white H3 (24px) and a white paragraph (18px, weight 300).
6. **CTA panel:** dark rounded panel, "Ready to Take Your Business Further?", gradient "Get Started" button.

### About Us
Contents, in order:
- Hero panel.
- "Who We Are" (new paragraph).
- Core values Clarity, Collaboration and Results. Each icon spins one full turn on hover.
- Team cards: six people, including Dan Ma.
- CTA.

### Digital Marketing / Recruitment Marketing
- **Digital Marketing:** on service-card hover the icon swaps from blue to the lime "-hover" version.
- **Recruitment Marketing:** "Our Approach" rings spin (1s loop) on hover while the inner icon counter-rotates to stay upright.

### Service sub-pages (social, branding, seo, sem, email, web)
- All six share one template, filled from the `subPages` object.
- **Pending content decision:** the brief merges these into six new services (SEM becomes Meta and Google Ads, Branding folds into Video and content, Email folds into Social or is dropped). The sub-page copy has **not** been rewritten yet.

### Case Studies index and case-study pages
- **Index:** full-width rows. The ad image sits uncropped and square on the left. On the right: label, headline, two before→after stats in lime pills, and a dark "Read the case study →" button. On narrow screens the image stacks above the text.
- **Case-study pages** are data-driven (`caseStudies`, `bys`). Sections:
  - hero stats
  - client and problem
  - insight
  - what changed (numbered)
  - results table (the lime cell marks the key metric)
  - creative gallery
  - CTA
- On mobile the before/after ledger switches to two tabs.

### Contact (new)
- **Heading:** H1 "Tell us what you want to grow." plus a subline.
- **Form:** panel with background `#F0F0F0`, radius 20px.
  - Fields: Name, Business name, Email, Phone. All are required and sit in a two-column grid.
  - "What do you need?" is a required dropdown: Leads from Meta or Google Ads / Video and content / Social media / A website / Recruitment / Not sure yet.
  - "Anything else we should know?" is an optional textarea.
  - "Send it" is a blue pill button.
- **Beside the form:** Email, Office and Hours blocks. Each has a blue uppercase label above its value.
- **Prototype behavior:** submitting opens a pre-filled `mailto:` link and swaps the form for a thank-you panel.
- **Production:** the form should POST to a real form handler or email service that sends to **contact@backpackdigitalmedia.com**, with server-side validation and a success/error state.

## Interactions and state
- **Routing:** hash-based in the prototype (`#home`, `#about`, `#contact`, etc.). Use real routes in production. Every page change scrolls to the top.
- **State:**
  - current page
  - `scrolled` (nav padding)
  - `desktop` (window width of 1200px or more) and `narrow` (under 992px)
  - `menuOpen`
  - `hoverSvc` (Digital Marketing card icon hover)
  - `csTab` (mobile ledger tab)
  - `sent` (contact form)
- **Homepage hero animation:** 14s loop, coded in `hero.js`.
  1. The zipper opens.
  2. Each social icon flies into the bag, one at a time, and the bag squishes slightly on each landing. Each icon's arrow slides toward the bag and fades out just before its icon leaves.
  3. The zipper closes.
  4. The icons pop back into their circles and the arrows fade back in.
- **Reduced motion:** with `prefers-reduced-motion`, every animation is disabled or falls back to a still image.

## Contact details
- **Email:** contact@backpackdigitalmedia.com (shown in the footer and on the Contact page; the form target).
- **Address:** Unit 209 - 5729 West Boulevard, Vancouver, BC (from November).
- **Hours:** Monday to Friday, 8:30am to 5:30pm.
- No phone number appears anywhere on the site.

## Open items
- Rewrite and consolidate the service sub-pages to match the six new services.
- Confirm the team roster (Garik and Ramneek still current?).
- Connect the contact form to a real backend.
- Compress the case-study PNGs (several are large).

## Assets
- `assets/img/`: logos, illustrations, client logos, team photos, icons, case-study creatives. All come from the client's existing site or were supplied by the client.
- `assets/font/`: Helvetica Neue OTFs (check that the font is licensed for web use).

## Files
- `Backpack Website.dc.html`: full design (template plus logic).
- `hero.js`: animated hero illustration web component.
- `support.js`: prototype runtime (needed only to view the prototype, not for production).
