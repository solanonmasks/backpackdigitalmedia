// ✏️ Service page content (one entry per page at /services/<slug>/), plus the
// Recruitment Marketing page at the bottom. Copy: service page copy v6.
// The layout is in src/components/ServicePage.astro.

// ✏️ "How we work" steps. The same three steps appear on every service page.
export const howWeWork = [
  { title: 'We learn your business.', text: 'What you sell, who buys it, what they ask before they buy, and why they pick you over the competition.' },
  { title: 'We build the plan around it.', text: 'The channels, the message and the budget come from what we learned, and we walk you through the reasoning first.' },
  { title: 'We keep improving it.', text: 'We’re in your campaigns every month, reporting in plain language, and you can always reach us.' },
];

export const services = {
  'meta-ads': {
    name: 'Meta Ads Management',
    seoTitle: 'Meta Ads Management in Vancouver',
    seoDescription: 'Facebook and Instagram ads that bring in real leads and customers. Strategy, creative, targeting and monthly optimization.',
    title: 'Facebook and Instagram ads that bring in customers.',
    subtitle: 'Campaigns measured by leads and sales, with every result tracked.',
    button: 'Get More Leads',
    image: '/assets/img/marketing_sub_pages/5.svg',
    imageAnimated: '/assets/img/marketing_sub_pages/5-animated.svg',
    what: [
      'Most businesses have boosted a post and gotten nothing back. Meta ads start working when the audience, the offer and the creative all match what your customers actually care about.',
      'We choose the setup based on your goals and what we’ve seen work, whether that’s an instant lead form, a landing page or something else. Then we watch lead quality closely, because a cheap lead who never picks up the phone isn’t a good lead. We handle the ads, the targeting and the tracking, and keep testing new creative every month.',
    ],
    highlights: [
      { title: 'Campaign strategy.', text: 'Built around your offer, your customers and the work you want more of.' },
      { title: 'Ad creative.', text: 'Static and video ads with copy written for your business.' },
      { title: 'Audience targeting.', text: 'The right people in your service area, plus retargeting for people who’ve already shown interest.' },
      { title: 'Lead generation.', text: 'Lead forms or landing pages, chosen to fit your goals.' },
      { title: 'Tracking.', text: 'Pixel and conversion tracking so you can see what every lead costs.' },
      { title: 'Monthly optimization.', text: 'New creative, audiences and budget adjustments based on what’s working.' },
    ],
    faq: [
      { q: 'How much should I spend on ads?', a: 'It depends on your market and your goals. We’ll recommend a budget during planning and show you exactly how it splits between ad spend and our management.' },
      { q: 'Who owns the ad account?', a: 'You do. Your ad account, your data and your campaign history stay with your business.' },
      { q: 'Do you make the ads?', a: 'Yes. Ad creative and copy are part of the service. We often find video outperforms other content types, so we use it wherever we can. Some clients send us their own footage, and for others we shoot on-site.' },
      { q: 'How do I know it’s working?', a: 'We report on leads, cost per lead and which leads turned into customers, in plain language.' },
    ],
    cta: {
      title: 'Ready for more leads?',
      text: 'Tell us which jobs you want more of, and we’ll sketch out a campaign to go after them.',
      button: 'Let’s Talk Ads',
    },
  },
  social: {
    name: 'Social Media Management',
    seoTitle: 'Social Media Management in Vancouver',
    seoDescription: 'On-brand social media content, scheduling and community management that builds trust with your customers.',
    title: 'Social media that builds trust in your brand.',
    subtitle: 'Planned content, consistent posting and replies in your voice.',
    button: 'Let’s Talk Social',
    image: '/assets/img/marketing_sub_pages/1.svg',
    what: [
      'Customers check your social pages before they reach out. A quiet or patchy feed makes them wonder whether you’re still open.',
      'We start by getting deep into your business: what you do, who you serve, and just as importantly, how you talk. Your voice and tone matter as much as your services. Our goal is to become an extension of your team, fluent enough in your language that every post sounds like it came from you.',
      'From there, your content strategy is built around your goals, with a focus on high-impact posts people want to share. Where we can, that means real photos and video of your team and your work, and we can shoot those for you.',
    ],
    highlights: [
      { title: 'Content strategy.', text: 'A monthly calendar built around your goals and what your audience cares about.' },
      { title: 'Post design and copy.', text: 'Graphics and captions that look and sound like your business.' },
      { title: 'Short-form video.', text: 'Reels and stories, with on-site shoots available.' },
      { title: 'Scheduling.', text: 'Everything posted on time across your channels.' },
      { title: 'Community management.', text: 'Comments and messages answered in your voice.' },
      { title: 'Monthly reporting.', text: 'What’s working, what we’re changing and why.' },
    ],
    faq: [
      { q: 'Which platforms do you manage?', a: 'Usually Instagram and Facebook, plus LinkedIn for businesses that sell to other businesses. We focus on wherever your customers actually spend their time.' },
      { q: 'Do I approve posts?', a: 'Yes. You review the content calendar before anything goes live.' },
      { q: 'What’s the difference between organic social and ads?', a: 'Organic posts keep the people who already follow you engaged and build trust. Ads reach people who haven’t heard of you yet. The two support each other.' },
      { q: 'How often will you post?', a: 'It depends on your package and goals. We’ll recommend a schedule during planning.' },
    ],
    cta: {
      title: 'Want a feed you’re proud of?',
      text: 'Send us your current pages and we’ll tell you what we’d change first.',
      button: 'Let’s Talk Social',
    },
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
    // Kept live but not linked anywhere, and left out of the sitemap.
    inSitemap: false,
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
  video: {
    name: 'Video Production',
    seoTitle: 'Video Production in Vancouver',
    seoDescription: 'Video shoots at your location or our Vancouver office, edited into ready-to-post clips for social media, ads and your website.',
    title: 'Video that shows people why to choose you.',
    subtitle: 'Your people, your space and your work, filmed on-site and edited to post.',
    button: 'Book a Shoot',
    image: '/assets/img/marketing_sub_pages/2.svg',
    what: [
      'Video is how people get a feel for your business before they ever contact you. It shows your team, your work and your space in a way photos can’t.',
      'Every shoot starts with what you want the video to do, whether that’s getting shared, bringing in leads or showing people what it’s like to work with you. We come to you, or you come to our Kerrisdale office, and we turn the footage into clips for social, ads and your website.',
    ],
    highlights: [
      { title: 'On-location shoots.', text: 'We film at your business, with sessions sized to what you need.' },
      { title: 'Short-form clips.', text: 'Reels and stories cut for each platform.' },
      { title: 'Video ads.', text: 'Footage edited into ads for Meta and other channels.' },
      { title: 'Office shoots.', text: 'Interviews, talking-head clips and product shots at our Kerrisdale office.' },
      { title: 'Editing.', text: 'Captions, music and your branding on every clip.' },
      { title: 'Recruitment video.', text: 'Employer brand videos and video job postings that show candidates the job, the team and the location.' },
    ],
    faq: [
      { q: 'What do I need to prepare?', a: 'Very little. We send a shot plan ahead of time and handle the rest on the day.' },
      { q: 'How many videos do I get?', a: 'We agree on the number of finished clips before the shoot, so you know exactly what you’re getting.' },
      { q: 'Can the footage be used for ads?', a: 'Yes. We edit clips for regular posts and for ads.' },
      { q: 'Can you shoot on a regular schedule?', a: 'Yes. Book a one-off shoot or set up recurring sessions to keep your content fresh.' },
      { q: 'Where do you shoot?', a: 'At your business, or at our office in Kerrisdale, Vancouver. The office works well for interviews, talking-head content and product shots.' },
    ],
    cta: {
      title: 'Ready to show people what you do?',
      text: 'Tell us what you want people to see, and we’ll plan the shoot around it.',
      button: 'Book a Shoot',
    },
  },
};

// ✏️ Recruitment Marketing page (/recruitment-marketing/). Same layout as the
// service pages, but it lives at its own address, so it's kept separate here.
export const recruitment = {
  name: 'Recruitment Marketing',
  seoTitle: 'Recruitment Marketing in Vancouver',
  seoDescription: 'Indeed, Glassdoor and Meta recruitment campaigns, employer branding and recruitment video for employers hiring at volume or in hard-to-fill locations.',
  title: 'Recruitment marketing for roles that are hard to fill.',
  subtitle: 'Job ads, employer branding and video for employers who need qualified people at volume, or need them to move for the role.',
  button: 'Let’s Talk Hiring',
  image: '/assets/img/recruitment/header/logo.svg',
  what: [
    'Most hiring problems come down to one of two things. Either the job ads aren’t reaching the right people, or the right people see them and still don’t find a reason to apply. A posting that lists duties and a pay range has a hard time competing with an employer that shows what the work and the place are actually like.',
    'We run recruitment campaigns on Indeed, Glassdoor and Meta, including for employers hiring across many locations. When a job board isn’t enough, we add employer branding and recruitment video, or a dedicated hiring platform like BankYourSalary.com for roles that need people to relocate.',
  ],
  highlights: [
    { title: 'Indeed and Glassdoor campaigns.', text: 'Job budgets managed and adjusted so spend goes to the roles that need it most.' },
    { title: 'Meta recruitment ads.', text: 'Reach people who aren’t actively job hunting but would move for the right role.' },
    { title: 'Employer value proposition.', text: 'A clear, honest answer to "why work here?" that every ad and posting is built on.' },
    { title: 'Employer branding.', text: 'Careers content and creative that show your culture and the people candidates would be working with.' },
    { title: 'Recruitment video.', text: 'Short clips and longer documentary-style pieces that show the job, the team and the location.' },
    { title: 'Reporting.', text: 'Applications, cost per application and candidate quality by role, in plain language.' },
  ],
  faq: [
    { q: 'Do you replace our recruiters or our hiring system?', a: 'No. We bring in the applicants. Your team and your hiring system take it from there.' },
    { q: 'How much should we budget?', a: 'It depends on the roles, the locations and how many people you need. We’ll recommend a budget during planning, and you’ll see exactly where it’s spent.' },
    { q: 'Can you help with roles that need people to relocate?', a: 'Yes. That’s what BankYourSalary.com was built for. It delivered 43 relocation-ready candidates in 11 weeks at $115 each.' },
    { q: 'Do you work with employers outside BC?', a: 'Yes. We run recruitment campaigns for employers across Canada and the US.' },
  ],
  cta: {
    title: 'Hiring for a hard-to-fill role?',
    text: 'Tell us the role, the location and how many people you need, and we’ll show you how we’d go after them.',
    button: 'Let’s Talk Hiring',
  },
};
