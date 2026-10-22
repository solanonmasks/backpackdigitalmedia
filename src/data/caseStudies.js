// ✏️ Case study content (copied from the design handoff; copy is final).
// Each entry becomes a page at /case-studies/<slug>/.
// "rows" in a results table: [metric, before, after, change, highlight?]
// A trailing 1 marks the change cell lime (the key metrics).

const raw = {
  'cs-painting': {
    descriptor: 'California painting contractor · Meta Ads',
    headline: '$15,000+ in booked painting jobs from under $1,000 in Meta ad spend',
    hero: [
      { before: '2', after: '17', label: 'Leads' },
      { before: '$173', after: '$58', label: 'Cost per lead' },
      { before: '$0', after: '$15K+', label: 'Client revenue' },
    ],
    summary: ['A California residential painting contractor went from 2 leads at $173 each to 17 leads at $58 each after Backpack Digital Media rebuilt their Meta Ads campaign. Over two months, on a budget of roughly $500 per month, the new campaign produced more than $15,000 in client revenue. Cost per lead dropped 67 percent and lead volume rose 8.5x, with the same daily budget as before.'],
    client: ['A locally owned residential painting contractor in California offering interior and exterior painting for homeowners. Average job value sits in the low thousands, so a single booked project pays for months of advertising. They had been running Meta Ads through a previous agency with a daily budget of $16.50 and were getting almost nothing back.'],
    beforeTitle: '$173 per lead and two enquiries',
    before: [
      { p: 1, t: 'The previous campaign spent $346, produced 2 leads and booked zero jobs. The ads got clicks (85 link clicks at $4.07 each) but those clicks went nowhere: only 1 in 43 people who clicked became a lead.' },
      { p: 1, t: 'What was holding it back:' },
      { b: 1, t: 'Generic creative that looked like every other contractor ad in the feed' },
      { b: 1, t: 'No clear offer. A homeowner had to read the whole ad to work out why they should care' },
      { b: 1, t: 'Nothing to prove the company could do the work: no past projects, no results, no social proof' },
      { b: 1, t: 'A lead form that either asked too little (unqualified leads) or asked nothing useful' },
      { p: 1, t: 'The one thing already in good shape was their social presence: active Facebook and Instagram pages with real project photos. The previous campaign simply did not take advantage of it.' },
    ],
    changedIntro: 'Same platform, same daily budget, same service area. Four things were rebuilt, and one existing strength was finally put to work.',
    changes: [
      { title: 'Conversion-optimized creative.', body: 'Eye-catching before-and-after visuals built to stop the scroll, not stock photos of paint rollers. Every ad was designed with one job: earn the click from a homeowner who is already thinking about painting.' },
      { title: 'A compelling offer, clear in the first 5 seconds.', body: 'That is all the attention a feed gives you. The offer and who it is for sit in the first line and the first frame, so a homeowner knows instantly whether this is for them.' },
      { title: 'Trust built into the ad.', body: 'Real past projects, real results and real customer feedback shown up front. A homeowner should feel they are hiring a proven crew before they ever fill in a form.' },
      { title: 'A quality funnel with instant forms.', body: 'Meta instant forms cut friction, so more people finish them. The right qualifying questions (property type, scope of work, timing) filter out tire-kickers, so the leads that come through are ones the client wants to call back.' },
      { title: 'High-quality socials.', body: 'Homeowners check the Facebook and Instagram page before they reply, and this client already had strong ones: recent project photos, consistent branding and proof of an active business. The new ads were built to send people there and let that proof close the sale. Without it, the other four changes would have converted at a fraction of the rate.' },
    ],
    resultsTitle: 'Results: before vs after',
    resultsNote: 'Meta Ads Manager, August 1 to October 19, 2026. Both campaigns ran at a $16.50 daily budget.',
    cols: { c0: 'Metric', c1: 'Previous agency', c2: 'Backpack campaign', c3: 'Change' },
    rows: [
      ['Ad spend (USD)', '$346', '$981', ''], ['Leads', '2', '17', '8.5x', 1], ['Cost per lead', '$172.89', '$57.72', '67% lower', 1],
      ['Impressions', '7,216', '26,173', '3.6x', 1], ['Reach (people)', '3,303', '7,099', '2.1x', 1], ['CPM (cost per 1,000 impressions)', '$47.92', '$37.49', '22% lower', 1],
      ['Link clicks', '85', '308', '3.6x', 1], ['Cost per link click', '$4.07', '$3.19', '22% lower', 1], ['Clicks that became leads', '2.4%', '5.5%', '2.3x', 1],
      ['Client revenue attributed', '$0', '$15,000+', ''],
    ],
    callout: 'On $981 of spend, $15,000 in revenue is a return of roughly 15 to 1 before the cost of paint and labour.', calloutBordered: false,
    why: [
      'The budget did not change. What changed is how much of each dollar turned into a qualified conversation. Cheaper delivery (lower CPM) bought 3.6x the impressions and clicks, and a better offer plus a smarter form more than doubled the share of clicks that became leads. Those two gains compound: 3.6x the clicks at 2.3x the conversion rate is how 2 leads becomes 17.',
      'For a local painting contractor, this is the whole game. At $500 a month, one booked job covers the ad spend and the rest is margin. The leads were qualified at the form, so the owner spent time quoting real projects instead of chasing people who were never going to buy.',
    ],
    chips: [],
    ctaTitle: 'If your Meta Ads are producing clicks but not customers, this is usually why.',
    ctaBody: 'Backpack Digital Media runs this system for home service businesses across North America.',
  },
  'cs-reno': {
    descriptor: 'Montana renovation contractor · Meta Ads',
    headline: 'Same monthly budget, six times the leads',
    hero: [
      { before: '4', after: '~23', label: 'Leads per month' },
      { before: '$343', after: '$56', label: 'Cost per lead' },
      { before: '0.5%', after: '7.9%', label: 'Click to lead' },
    ],
    summary: [
      'A Montana renovation contractor was spending about $1,370 a month on Meta ads and getting four consultation requests. Backpack rebuilt the campaign and, on roughly the same monthly spend, it now produces about 23 consultation requests a month at $56 each. Cost per lead fell 84%, from $342.65 to $55.81.',
      'Nothing about the budget changed. What changed was the creative, where the click went, and what the campaign was told to optimize for.',
    ],
    client: [
      'A residential renovation contractor in a mid-sized Montana city, selling fixed-price bathroom and kitchen remodels. Jobs are high value and the sales cycle runs through a design consultation, so the only number that matters at the top of the funnel is how many consultation requests the ads produce, and what each one costs.',
      'The account came to Backpack through a partner agency, so the client is not named here.',
    ],
    beforeTitle: 'One static ad, a landing page, four leads',
    before: [
      { p: 1, t: 'The previous campaign ran through July 2026 on $50 a day. It used static image ads, sent every click to a landing page, and tracked a custom conversion on that page as the result.' },
      { p: 1, t: 'The traffic side looked healthy: 56,914 impressions, 835 link clicks, a 1.47% click-through rate and a $1.64 cost per click. The problem was everything after the click. 599 people reached the landing page and four filled in the form, a 0.7% conversion rate. At $1,370.60 spent, that is $342.65 per lead.' },
      { p: 1, t: 'Four conversions in a month also meant Meta never had enough signal to learn who converts. The campaign was paying for cheap clicks it could not turn into anything.' },
    ],
    changedIntro: 'Backpack relaunched the campaign in August 2026 on the same $50 a day. Four changes, in order of impact.',
    changes: [
      { title: 'Replaced the landing page with a Meta instant form.', body: 'Instead of leaving Facebook or Instagram, loading a page and finding the form, the prospect taps the ad and a pre-filled form opens in the app. Fewer steps, fewer drop-offs. The form carries a few qualifying questions (project type, timeline, budget range) so the consultations that come through are real.' },
      { title: 'Changed what the campaign optimizes for.', body: 'The old campaign optimized for a custom website event that fired four times a month. The new one optimizes for lead-form submissions, which gives Meta a steady stream of conversions to learn from. More signal, better targeting, lower cost per result.' },
      { title: 'Replaced static images with scroll-stopping creative and carousels.', body: 'Before-and-after project photos in carousel format, so the prospect swipes through finished work instead of glancing past one image. The headline does the selling in the first second ("The pink tub is gone." over a before-and-after of the same bathroom) and the offer, a design consultation on a fixed-price remodel, sits right under it.' },
      { title: 'A/B tested four creatives and scaled the winners.', body: 'Four concepts ran head to head. The two that produced the cheapest leads got the budget; the other two were paused.' },
    ],
    resultsTitle: 'Results',
    resultsNote: 'Figures from Meta Ads Manager, 1 July to 19 October 2026, in USD. The before campaign ran for one month; the after campaign has run for about two and a half months, so the table shows totals and the monthly rate side by side.',
    cols: { c0: '', c1: 'Before (July 2026)', c2: 'After (Aug to Oct 19, 2026)', c3: 'Change' },
    rows: [
      ['Amount spent', '$1,370.60', '$3,404.54', ''], ['Spend per month', '~$1,370', '~$1,310', 'about the same'], ['Leads', '4', '61', '15x total', 1],
      ['Leads per month', '4', '~23', '6x', 1], ['Cost per lead', '$342.65', '$55.81', 'down 84%', 1], ['Impressions', '56,914', '52,308', ''],
      ['Link clicks', '835', '772', ''], ['Click-through rate', '1.47%', '1.48%', 'flat'], ['Click to lead', '0.5%', '7.9%', '16x', 1],
      ['Cost per click', '$1.64', '$4.41', 'up'], ['CPM', '$24.08', '$65.09', 'up'],
    ],
    callout: 'The last two rows are the honest part. The new campaign pays more per click and more per thousand impressions, because Meta is now bidding for people likely to submit a form rather than anyone likely to click. It is the right trade: the campaign gets fewer, more expensive clicks and turns one in thirteen into a lead instead of one in two hundred.', calloutBordered: true,
    why: [
      'The old campaign was built to win clicks. The new one is built to win consultations. Every change points the same way: remove the steps between the ad and the form, give the algorithm a conversion it can actually see, and show finished work instead of a stock image.',
      'For a renovation contractor, the lead form is the whole game. A homeowner scrolling at 9pm will tap a pre-filled form to book a design consultation; they will not load a website and hunt for a contact page. Add two qualifying questions and the consultations that arrive are worth the drive.',
      'The same rebuild applies to any trade or home-services business with a consultation or quote at the front of the sales process:',
    ],
    chips: ['Painters', 'Electricians', 'Roofers', 'Landscapers', 'Flooring', 'HVAC'],
    ctaTitle: 'Ready to see what your ad account is leaving on the table?',
    ctaBody: 'Backpack will review your current campaigns and show you where the leads are.',
  },
};

const bys = {
  descriptor: 'BankYourSalary · Recruitment platform for northern relocation roles',
  headline: '43 relocation-ready candidates in 11 weeks, at $115 each',
  hero: [
    { after: '43', label: 'Completed registrations' },
    { after: '$115', label: 'Cost per registration' },
    { after: '~$1,900', label: 'Ad spend per month' },
  ],
  summary: [
    'A national retailer with stores across Canada\u2019s North could get applications for its remote-community roles. Finding people willing to move was the hard part: recruiters had to work through a lot of applicants to find the few who would relocate. Backpack built BankYourSalary.com from scratch: a recruitment platform that leads with the financial case for relocating, so candidates arrive already sold on the move. In its first eleven weeks of paid social, the platform delivered 43 completed candidate registrations at $115.24 each, on about $1,900 a month in ad spend, with every registration handed to the client\u2019s recruiters the same day.',
    'Backpack designed the platform, built it, runs the advertising and operates it as an ongoing service.',
  ],
  client: [],
  beforeLabel: 'The problem', beforeTitle: 'The client and the problem',
  before: [
    { p: 1, t: 'The client operates retail and food service stores in remote communities across Northern Canada. The roles pay well and come with housing and food covered, but they require moving to a community most candidates have never heard of.' },
    { p: 1, t: 'Conventional recruiting got applications. Job boards produce volume, and the client had plenty of it. The breakdown came after the apply: once a recruiter raised relocation, most candidates went quiet. Every conversation started with the hardest objection, and recruiters spent most of their time on applicants who would never move.' },
    { p: 1, t: 'Backpack had run the client\u2019s job-board advertising since 2022 and could see the pattern in the data. The problem was not reach. It was the order in which candidates learned about the job.' },
  ],
  afterTitle: 'What Backpack built',
  changedIntro: 'BankYourSalary.com is a complete recruitment product, designed, built and operated by Backpack. The client did not supply a brief for a website; it supplied a hiring problem.',
  changes: [
    { title: 'The platform.', body: 'A purpose-built site at bankyoursalary.com where candidates discover northern roles through the financial case for taking them. Built from scratch rather than on a job-board template, so the whole experience is organized around the relocation decision.' },
    { title: 'The calculator.', body: 'The centrepiece. A candidate enters their role and city and sees what they keep each month now, what they would keep in a northern community with housing and food covered, and the five-year difference. The numbers in every ad come straight from it, so what the ad promises is what the calculator shows.' },
    { title: 'The funnel.', body: 'Calculator first, registration second. A candidate only registers after seeing their own numbers, which is why the registrations are relocation-ready rather than curious.' },
    { title: 'The ads.', body: 'Meta campaigns targeted by city and role, each one a single comparison card: the role, the Vancouver take-home, the northern take-home, the five-year gap in large type, and "Free calculator. See your numbers." No stock photos of the North, no lifestyle copy. Just the arithmetic.' },
    { title: 'The operation.', body: 'Backpack runs the campaigns, maintains the platform and sends every completed registration to the client\u2019s recruiters the same day, on a per-placement fee model. The client buys hires, not impressions.' },
  ],
  insightTitle: 'Make relocation the reason to apply',
  insight: [
    'Instead of hiding the move until after the application, lead with it, and lead with the money.',
    'Nobody had put those two numbers side by side for candidates. Once you do, relocation stops being the objection and becomes the offer. The candidate who comes through this door has already decided to move; the recruiter\u2019s job is to confirm the fit, not to sell the geography.',
  ],
  compare: [
    { role: 'Retail store manager', city: '$443/mo', north: '$4,286/mo', gap: '$231,000' },
    { role: 'Food service manager', city: '$42/mo', north: '$3,414/mo', gap: '$207,000' },
  ],
  resultsTitle: 'Results',
  resultsNote: 'Meta Ads Manager, 1 August to 19 October 2026, in CAD. A registration is a completed candidate profile on the platform, tracked by the Meta pixel.',
  cols: { c0: 'Metric', c1: '', c2: 'Aug 1 to Oct 19, 2026', c3: '' }, fourCol: false,
  rows: [
    ['Ad spend', '', '$4,955.52 (about $1,900 a month)', ''], ['Completed registrations', '', '43', ''], ['Cost per registration', '', '$115.24', ''],
    ['Registrations per week', '', 'about 4', ''], ['People reached', '', '37,814', ''], ['Impressions', '', '122,386', ''],
    ['Link clicks', '', '1,948', ''], ['Click-through rate', '', '1.59%', ''], ['Cost per click', '', '$2.54', ''],
  ],
  callout: [
    'For context, a recruitment agency fee on a relocation hire typically runs 15 to 25 percent of first-year salary, several thousand dollars per hire before anyone has moved. Here the client pays about $115 to put a candidate in front of its recruiters who has already seen the numbers and chosen to apply, and a placement fee only when someone is hired.',
    'The campaign has never reached the volume where Meta\u2019s learning phase fully settles, and performance has still improved month over month as the audience data accumulates. Expansion from Toronto to Vancouver, Calgary and Edmonton began in October 2026.',
  ], calloutBordered: true,
  why: [
    'The client\u2019s problem was never a shortage of applicants. It was that every applicant learned the hard part last. BankYourSalary reverses the order: the move and the money come first, the application comes second, and only the people for whom the arithmetic works ever reach a recruiter.',
    'It also changes what the client is paying for. Job boards charge for applications, most of which go nowhere. BankYourSalary charges for placements, so Backpack\u2019s incentive and the client\u2019s are the same: hires, not traffic.',
    'The same model fits any employer whose roles come with a relocation, a remote posting or a compensation structure that looks ordinary on a job board and exceptional once you do the math:',
  ],
  chips: ['Northern and remote operations', 'Mining and resources', 'Long-term care', 'Overseas postings'],
  ctaTitle: 'Hiring for roles people have to move for?',
  ctaBody: 'Backpack will show you what your candidates would keep.',
};

raw['cs-bys'] = bys;

// Calgary John Howard Society (website case study)
const cjhs = {
  descriptor: 'Calgary John Howard Society · Website rebuild',
  headline: 'A 75-year-old nonprofit, three audiences, one website that finally serves all of them',
  wallTitle: 'The site we built.',
  hero: [
    { after: '15 days', label: 'Kickoff to first design' },
    { after: '12 weeks', label: 'Full review site, every page migrated' },
    { after: '6 weeks', label: 'Until they hired us again' },
  ],
  summary: ['The Calgary John Howard Society (cjhs.ca) needed a site that worked for donors, for families and agencies looking for a specific program, and for Calgarians trying to understand what the organization does. Backpack Digital Media restructured the site around those audiences, designed it, built it and migrated every page. Six weeks after handoff, CJHS hired us again to build their annual report.'],
  client: ['The Calgary John Howard Society is a 75-year-old nonprofit that helps reduce crime and keep Calgary communities safe, working with youth and adults involved in the justice system through housing, employment, mentorship, reintegration and restorative justice. More than a dozen programs, and a website that is the front door for every one of them.'],
  beforeLabel: 'The starting point', beforeTitle: 'Organized by the org chart',
  before: [
    { p: 1, t: 'The old site had grown the way most nonprofit sites do: a page per program, added one at a time, organized by internal program names rather than by who was looking. Content had gone stale and the navigation had filled up with sections nobody used.' },
    { p: 1, t: 'CJHS knew exactly who the site needed to serve:' },
    { b: 1, t: 'Donors and funders who need a clear Donate button, fast' },
    { b: 1, t: 'Referring agencies and families who need to find the right program without knowing what CJHS calls it' },
    { b: 1, t: 'Engaged Calgarians who want to understand the why and the how, and who may become donors' },
    { p: 1, t: 'What they needed was a partner who could turn that into a structure, a design and a finished site without pulling a small team away from their actual work.' },
  ],
  afterTitle: 'What Backpack did',
  changedIntro: '',
  changes: [
    { title: 'Restructured the site around the visitor, not the org chart.', body: 'Programs are now grouped by who they serve: Culturally Diverse, Adult, Youth and Initiatives. A referring agency or a family member finds the right program in two clicks. Dead sections were removed and the hiring, volunteering and membership pages were consolidated into one clear hub.' },
    { title: 'Designed it with the client in the room.', body: 'A real homepage design, not a wireframe, was presented to the Executive Director and the web committee 15 business days after kickoff, then refined in a shared Figma file where the team left comments directly.' },
    { title: 'Built and migrated everything.', body: 'WordPress, optimized for mobile and speed, with a prominent Donate call to action, an impact stats counter and a stories feed on the homepage. We moved every page of content ourselves rather than handing over a frame and a to-do list.' },
    { title: 'Handed it off so they could run it.', body: 'Staff were in the staging site editing their own text and images before launch, and their operations lead was walked through hosting and editing so there were no surprises after.' },
  ],
  resultsTitle: 'Results',
  resultsNote: '',
  cols: { c0: 'Milestone', c1: '', c2: 'Result', c3: '' }, fourCol: false,
  rows: [
    ['First design presented', '', '15 business days after kickoff', ''],
    ['Full review site, every page migrated', '', '12 weeks', ''],
    ['Repeat business: annual report microsite', '', 'Within 6 weeks of handoff', ''],
    ['Still live, staff publishing their own stories', '', '2 years later', ''],
  ],
  callout: [], calloutBordered: true,
  why: ['The client did the hard thinking about who the site was for. We built the structure around it and took everything else off their plate. A nonprofit team has a mission to run; reviewing and approving was all they had to do.'],
  chips: [],
  ctaTitle: 'Is your site organized around how you are structured, instead of how people look for you?',
  ctaBody: 'That is the first thing we fix. Backpack designs and builds websites for organizations that need a site that serves several audiences at once.',
};

raw['cs-cjhs'] = cjhs;

// Page address (slug) for each case study, plus the image shown on the index page.
export const caseStudyList = [
  {
    slug: 'painting',
    key: 'cs-painting',
    image: '/assets/img/case-studies/painting/feed.png',
    imageAlt: 'Goodbye, beige ad creative',
    title: '$15,000+ in booked painting jobs from under $1,000 in Meta ad spend',
    stats: [
      { before: '2', after: '17', label: 'Leads' },
      { before: '$173', after: '$58', label: 'Cost per lead' },
    ],
  },
  {
    slug: 'renovation',
    key: 'cs-reno',
    image: '/assets/img/case-studies/reno/a.png',
    imageAlt: 'The pink tub is gone ad creative',
    title: 'Same monthly budget, six times the leads',
    stats: [
      { before: '4', after: '~23', label: 'Leads per month' },
      { before: '$343', after: '$56', label: 'Cost per lead' },
    ],
  },
  {
    slug: 'bankyoursalary',
    key: 'cs-bys',
    image: '/assets/img/case-studies/bys/retail-1x1.png',
    imageAlt: 'Retail Store Manager comparison ad',
    title: '43 relocation-ready candidates in 11 weeks, at $115 each',
    descriptor: 'BankYourSalary · Recruitment platform',
    stats: [
      { after: '43', label: 'Registrations' },
      { after: '$115', label: 'Per registration' },
    ],
  },
  {
    slug: 'cjhs',
    key: 'cs-cjhs',
    image: '/assets/img/case-studies/cjhs/home.png',
    imageAlt: 'cjhs.ca homepage',
    imageWide: true, // wide screenshot: show it whole instead of as a square
    title: 'A 75-year-old nonprofit, three audiences, one website that finally serves all of them',
    stats: [
      { after: '15 days', label: 'To first design' },
      { after: '12 weeks', label: 'To full review site' },
    ],
  },
];

// Fills in defaults so every page template gets the same shape of data.
export function getCaseStudy(key) {
  const r = raw[key];
  const fourCol = r.fourCol !== false;
  return {
    ...r,
    beforeLabel: r.beforeLabel || 'Before',
    afterTitle: r.afterTitle || 'What Backpack changed',
    wallTitle: r.wallTitle || 'The ads that did it.',
    fourCol,
    insight: r.insight || [],
    compare: r.compare || [],
    calloutParas: (Array.isArray(r.callout) ? r.callout : [r.callout]).filter(Boolean),
    rows: r.rows.map((row) => ({ m: row[0], a: row[1], b: row[2], c: row[3], key: !!row[4] })),
  };
}
