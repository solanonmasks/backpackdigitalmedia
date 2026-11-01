// Builds /sitemap.xml when the site is built (npm run build).
// It lists every public page so search engines can find them.
// Service and case study pages are read from the data files, so new ones
// are added here automatically.
import { services } from '../data/services.js';
import { caseStudyList } from '../data/caseStudies.js';

// ✏️ Pages that aren't made from a data file. Add new ones here.
const fixedPages = [
  '/',
  '/about/',
  '/digital-marketing/',
  '/recruitment-marketing/',
  '/case-studies/',
  '/contact/',
];

export function GET({ site }) {
  // `site` is the address set in astro.config.mjs.
  const paths = [
    ...fixedPages,
    ...Object.keys(services).map((slug) => `/services/${slug}/`),
    ...caseStudyList.map((c) => `/case-studies/${c.slug}/`),
  ];

  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
