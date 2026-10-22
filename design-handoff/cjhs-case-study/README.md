# Handoff: CJHS case study (add to Backpack site)

Add one new case study, **Calgary John Howard Society · Website rebuild**, to the existing Case Studies section. It must look and behave like the three existing case studies (painting, reno, BankYourSalary). Reuse that template; do not build a new one.

## What to add
1. **Route:** `/case-studies/cjhs` (in the prototype it's `#cs-cjhs`).
2. **Index card:** a fourth row on the Case Studies index, after BankYourSalary. Same card component as the others.
   - Image: `assets/img/case-studies/cjhs/home.png`, shown whole at its natural wide ratio (no square crop, no background fill): `width:100%; height:auto`.
   - Label: "Calgary John Howard Society · Website rebuild"
   - Headline: "A 75-year-old nonprofit, three audiences, one website that finally serves all of them"
   - Lime stat pills: "15 days" (To first design) and "12 weeks" (To full review site). There are no before→after values.
3. **Detail page:** the existing case-study template, filled from `cjhs-data.js`. Sections, in order:
   - Hero with 3 lime stat cards. These have **no before values**, so hide the strikethrough and the arrow.
   - Summary paragraph, then "The client".
   - The Before/After ledger. On the left, the label is "The starting point" and the title is "Organized by the org chart". On the right, the title is "What Backpack did" with 4 numbered steps. The intro paragraph is empty, so don't render it. On mobile this becomes tabs, the same as the other case studies.
   - **No insight block.**
   - Gallery: the heading is **"The site we built."** (the other case studies use "The ads that did it."). Content below.
   - Results table in **2-column mode** (Milestone | Result) with 4 rows. There's no note above the table and no callout box below it. Hide both when empty.
   - "Why it worked": one paragraph. There are no chips.
   - CTA, using `ctaTitle` and `ctaBody`.

## Gallery (CJHS-specific)
- **Screenshot:** `home.png` full width, radius 20px, shadow `0 12px 32px rgba(40,40,40,.18)`. Caption below it (18px): "The homepage: a clear mission statement up front and the Donate button always in reach."
- **Mobile recording:** below that (64px top margin), a two-column grid that stacks on narrow screens:
  - Left: `scroll.mp4`, a **portrait phone recording (1170×2532)**. Set it to autoplay, muted, loop and playsinline, with max-width 360px, centred, radius 28px, the same shadow, and a #282828 background.
  - Right: H3 "Built for the phone first" (uppercase, 700 weight, `clamp(26px,2.6vw,34px)`), then "A scroll through the live site on mobile." (19px).
- **Video file size:** compress `scroll.mp4` (for example H.264 at about 1–2 Mbps, 720px wide) and add a `poster` frame.

## Template changes needed (if not already supported)
- Hero stat cards hide the "before" value when it is missing.
- Results table supports 2-column mode (`fourCol: false`).
- Callout box, results note and changes intro hide when empty.
- Gallery heading comes from the data (`wallTitle`), defaulting to "The ads that did it."

## Files
- `cjhs-data.js`: all copy for the page, final and approved.
- `assets/img/case-studies/cjhs/home.png`: homepage screenshot.
- `assets/img/case-studies/cjhs/scroll.mp4`: mobile scroll recording.
- `reference/index-card.html` and `reference/gallery.html`: the exact prototype markup (inline styles) for the card and the gallery, for pixel reference.
- `reference/Backpack Website.dc.html`: the full prototype. Search for `cs-cjhs`.

## Design tokens (same as the rest of the site)
- Colours: Blue #5D84ED, Lime #CEED5D, Ink #282828, card background #F5F5F5.
- Font: Helvetica Neue.
- Radius: 20px.
