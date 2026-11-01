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
    title: 'Results-Driven Search Engine Marketing.',
    subtitle: 'Paid search campaigns that deliver ROI.',
    button: 'Start My SEM Campaign',
    image: '/assets/img/marketing_sub_pages/4.svg',
    what: 'We run targeted ads on search engines to help you drive traffic and leads.',
    highlights: ['Google Ads Management', 'Campaign Strategy & Setup', 'Budget Optimization', 'Performance Tracking'],
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
    title: 'Build a Website That Works for You',
    subtitle: 'Beautiful, functional websites that convert visitors into customers.',
    button: 'Let’s Build Your Website',
    image: '/assets/img/marketing_sub_pages/6.svg',
    what: 'We design and develop websites that are fast, responsive, and built for success.',
    highlights: ['Custom Website Design', 'Mobile Optimization', 'E-Commerce Solutions', 'UX/UI Focused Development'],
  },
};
