// ✏️ Service sub-page content (one entry per page at /services/<slug>/).
// NOTE from the design handoff: this copy has not been rewritten yet for
// the six new services. Edit the text here when it is ready.

// ✏️ "How we work" steps. The same three steps appear on every service page.
export const howWeWork = [
  { title: 'We learn your business.', text: 'What you sell, who buys it, what they ask before they buy, and why they pick you over the competition.' },
  { title: 'We build the plan around it.', text: 'The channels, the message and the budget come from what we learned, and we walk you through the reasoning first.' },
  { title: 'We keep improving it.', text: 'We’re in your campaigns every month, reporting in plain language, and you can always reach us.' },
];

export const services = {
  social: {
    title: 'Grow Your Brand on Social Media.',
    subtitle: 'Strategy. Content. Results.',
    button: 'Let’s Grow Your Social Media',
    image: '/assets/img/marketing_sub_pages/1.svg',
    what: 'We help businesses build meaningful connections on social media platforms with engaging content, consistent strategy, and measurable results.',
    highlights: ['Social Media Strategy', 'Content Creation & Scheduling', 'Social Advertising Campaigns', 'Community Management'],
  },
  branding: {
    title: 'Stand Out with a Strong Brand.',
    subtitle: 'Strategy. Content. Results.',
    button: 'Let’s Build Your Brand',
    image: '/assets/img/marketing_sub_pages/2.svg',
    what: 'We design brands that capture who you are and connect with your audience.',
    highlights: ['Logo Design', 'Brand Identity Development', 'Visual Guidelines', 'Messaging & Tone of Voice'],
  },
  seo: {
    name: 'SEO and AI Search',
    seoTitle: 'SEO and AI Search in Vancouver',
    seoDescription: 'Get found on Google, in AI Overviews, and in answers from ChatGPT and Gemini. SEO, AEO and GEO built around your business.',
    title: 'Get found on Google and in AI answers.',
    subtitle: 'Rank in search, show up in the AI summary, and get named when someone asks ChatGPT who to call.',
    button: 'Boost My SEO',
    image: '/assets/img/marketing_sub_pages/3.svg',
    what: [
      'When we look at a business’s search presence, the problems are usually basic: an old address still listed on half the directories, a Google profile nobody has touched in a year, service pages that never say what area they cover. Those gaps can affect more than traditional search. AI tools also use information from across the web to understand businesses and decide which ones to mention.',
      'We work on all of them. SEO gets your site ranking. Answer engine optimization (AEO) makes your pages easy for Google and AI tools to pull answers from. Generative engine optimization (GEO) builds the reputation across the web that AI tools look at when they recommend a business.',
    ],
    highlights: [
      { title: 'Keyword research.', text: 'The searches and questions that lead to sales for your business, ranked by what they’re likely to bring in.' },
      { title: 'Technical SEO.', text: 'A fast, mobile-friendly site with nothing blocking Google or AI tools from reading it.' },
      { title: 'On-page and content.', text: 'Service and location pages written around how your customers actually search.' },
      { title: 'Answer engine optimization (AEO).', text: 'Clear answers, FAQs and schema markup that make your pages easy to quote.' },
      { title: 'AI search visibility (GEO).', text: 'Matching business details, reviews and mentions across the web, so AI tools have good reasons to recommend you.' },
      { title: 'Google Business Profile.', text: 'A complete, active profile that helps you win map searches.' },
    ],
    faq: [
      { q: 'What’s the difference between SEO, AEO and GEO?', a: 'SEO is about ranking your website in search results. AEO is about structuring your content so Google and voice assistants can use it as the answer to a question. GEO is about making sure AI tools like ChatGPT, Gemini and Perplexity understand what your business does and have reasons to recommend it. A lot of the same work feeds all three.' },
      { q: 'Do I still need SEO if people use ChatGPT?', a: 'Yes. AI tools lean heavily on pages that already rank well and on businesses with a strong, consistent presence online. If your SEO is weak, AI tools have less to go on.' },
      { q: 'How long does SEO take?', a: 'It depends on your market, your competition and where your site starts. Technical fixes can show up quickly. Rankings and AI visibility build gradually and keep compounding.' },
      { q: 'Can you guarantee I’ll show up in AI answers?', a: 'No, and you should be careful with anyone who promises that. AI tools change how they pick sources all the time. What we can do is build the signals they rely on and track how your business shows up.' },
    ],
    cta: {
      title: 'See how you show up today.',
      text: 'Send us your website and we’ll check your rankings, your Business Profile and what ChatGPT says when someone asks about businesses like yours.',
      button: 'Let’s Talk SEO',
    },
  },
  sem: {
    name: 'Google Ads Management',
    seoTitle: 'Google Ads Management in Vancouver',
    seoDescription: 'Google Ads campaigns that put your business in front of people ready to buy. Keywords, ad copy, landing pages and tracking.',
    title: 'Show up when customers search for you.',
    subtitle: 'Google Ads that put you in front of people who are ready to buy.',
    button: 'Get More Leads',
    image: '/assets/img/marketing_sub_pages/4.svg',
    what: [
      'Someone searching for what you sell is already close to buying. Google Ads puts you at the top of those searches right away, while SEO builds over time.',
      'Most wasted Google Ads budget goes to searches that look relevant but never buy. Someone searching "how to fix a leaky tap" probably isn’t ready to hire a plumber. Someone searching "emergency plumber Vancouver" is a different story. We keep a close eye on what people actually searched before they clicked, block what isn’t working, and track every call and form, so you can see where the money goes and what it brings back.',
    ],
    highlights: [
      { title: 'Keyword strategy.', text: 'Go after the searches that turn into customers, and block the ones that waste budget.' },
      { title: 'Local campaigns.', text: 'Campaigns set up for your service area, built to bring in calls and form fills.' },
      { title: 'Ad copy.', text: 'Ads with your offer, location and a reason to click, plus call buttons where they help.' },
      { title: 'Landing pages.', text: 'Pages built to turn clicks into calls and enquiries.' },
      { title: 'Conversion tracking.', text: 'Calls, forms and bookings tracked so you know which keywords pay off.' },
      { title: 'Ongoing optimization.', text: 'Bids, keywords and budget adjusted every month.' },
    ],
    faq: [
      { q: 'Should I do Google Ads or SEO?', a: 'Ads get you visible right away and you pay for each click. SEO builds free traffic over time. Many businesses run both, and the ads data shows which keywords to go after in SEO first.' },
      { q: 'How much budget do I need?', a: 'It depends on how competitive your industry and area are. We’ll recommend a budget during planning and show you exactly how it splits between ad spend and our management.' },
      { q: 'Who owns the account?', a: 'You do. Your campaigns, data and history stay with your business.' },
      { q: 'Why not run it myself?', a: 'You can. Most wasted spend comes from broad keywords and missing tracking, and catching those takes regular attention. That’s the part we take off your plate.' },
    ],
    cta: {
      title: 'Want to be at the top of the page?',
      text: 'Tell us what you sell and where, and we’ll look at what people in your area are searching for.',
      button: 'Let’s Talk Google Ads',
    },
  },
  email: {
    title: 'Turn Emails into Results.',
    subtitle: 'Strategic campaigns that engage, convert, and retain customers.',
    button: 'Let’s Launch Your Email Campaign',
    image: '/assets/img/marketing_sub_pages/5.svg',
    what: 'From newsletters to automated campaigns, we create emails that your audience wants to open.',
    highlights: ['Email Strategy & Campaigns', 'List Building & Segmentation', 'Automated Email Workflows', 'Performance Analytics'],
  },
  web: {
    name: 'Website Design',
    seoTitle: 'Website Design in Vancouver',
    seoDescription: 'Fast, modern websites built to turn visitors into customers. Design, copywriting, SEO setup, hosting and ongoing care.',
    title: 'Websites built to turn visitors into customers.',
    subtitle: 'Fast, modern sites that make it easy for customers to book, buy, call or enquire.',
    button: 'Start My Website',
    image: '/assets/img/marketing_sub_pages/6.svg',
    what: [
      'A website can look good and still lose customers. If someone on a phone can’t quickly figure out how to book, call or ask a question, they go back and pick someone else.',
      'We start from what your customer came to do and build every page around it. We write the copy, set up the SEO basics, and then host and maintain the site after launch, so it stays fast and up to date.',
    ],
    highlights: [
      { title: 'Custom design.', text: 'Designed for your brand and the people you’re trying to reach.' },
      { title: 'Copywriting.', text: 'Clear words that explain what you do and why people should choose you.' },
      { title: 'Mobile-first and fast.', text: 'Quick to load and easy to use on any phone.' },
      { title: 'SEO-ready build.', text: 'Clean structure, page titles and schema markup from launch.' },
      { title: 'Lead capture.', text: 'Contact forms, click-to-call and tracking so enquiries don’t slip through.' },
      { title: 'Hosting and maintenance.', text: 'We host the site and keep it updated after launch.' },
    ],
    faq: [
      { q: 'How long does a website take?', a: 'It depends on the size of the site and how quickly feedback comes back. We’ll lay out a schedule once we know what you need.' },
      { q: 'Do you write the content?', a: 'Yes. We write the copy for every page and you review it before launch.' },
      { q: 'Can I make changes after launch?', a: 'Yes. We look after updates for you, so just tell us what you need changed.' },
      { q: 'Will my site work with ads and SEO?', a: 'Yes. Every site launches with tracking and SEO basics in place, so it’s ready for Google Ads, Meta ads and search.' },
    ],
    cta: {
      title: 'Ready for a better website?',
      text: 'Send us your current site, or tell us you don’t have one yet, and we’ll take it from there.',
      button: 'Let’s Talk Websites',
    },
  },
};
