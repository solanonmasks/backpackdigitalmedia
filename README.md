# Backpack Digital Media website

The rebuilt backpackdigitalmedia.com site, made with [Astro](https://astro.build). Astro turns the files in `src/` into plain HTML pages that can be hosted anywhere (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any web host).

## Run it on your computer

You need [Node.js](https://nodejs.org) version 22 or newer.

```bash
npm install      # first time only: downloads Astro
npm run dev      # starts a local preview at http://localhost:4321
```

The preview reloads by itself when you save a file.

## Publish it

```bash
npm run build    # creates the finished site in the dist/ folder
```

Upload the contents of `dist/` to your host, or connect this repo to Netlify, Vercel or Cloudflare Pages. If you connect the repo, set the build command to `npm run build` and the output folder to `dist`.

## Where to change things

| To change… | Edit this file |
| --- | --- |
| Email, address, opening hours, nav links | `src/data/site.js` |
| Where the contact form sends to | `FORM_ENDPOINT` in `src/data/site.js` |
| Service sub-page text (Social, SEO, etc.) | `src/data/services.js` |
| Case study text and numbers | `src/data/caseStudies.js` |
| Home page text | `src/pages/index.astro` |
| About page text and team | `src/pages/about.astro` |
| Colors, fonts, button styles | `src/styles/global.css` |
| Nav / footer | `src/components/Nav.astro`, `src/components/Footer.astro` |
| Images and fonts | `public/assets/` |

Text you're likely to edit is marked with ✏️ in the code.

## Pages

| Page | Address |
| --- | --- |
| Home | `/` |
| About Us | `/about/` |
| Digital Marketing | `/digital-marketing/` |
| Recruitment Marketing | `/recruitment-marketing/` |
| Service pages | `/services/social/`, `/services/branding/`, `/services/seo/`, `/services/sem/`, `/services/email/`, `/services/web/` |
| Case Studies | `/case-studies/` |
| Case study pages | `/case-studies/painting/`, `/case-studies/renovation/`, `/case-studies/bankyoursalary/`, `/case-studies/cjhs/` |
| Contact | `/contact/` |

## Contact form

The form sends to Formspree (`https://formspree.io/f/mjygqezg`, set as `FORM_ENDPOINT` in `src/data/site.js`). Formspree emails each enquiry to the address on your Formspree account, with the subject "Website enquiry: <business name>". Visitors see a thank-you message, or Formspree's error message if something goes wrong. If `FORM_ENDPOINT` is ever emptied (`''`), the form goes back to opening the visitor's email app instead.

## Still to do (from the design handoff)

- Rewrite the six service sub-pages for the new service list (`src/data/services.js`).
- Confirm the team roster (Garik and Ramneek).
- Compress the large case-study PNGs in `public/assets/img/case-studies/` (about 14 MB total).
- Check the Helvetica Neue font licence covers web use.

## Design reference

`design-handoff/` holds the original design file and notes (plus `design-handoff/cjhs-case-study/` for the CJHS case study). It is reference only and is not part of the live site.
