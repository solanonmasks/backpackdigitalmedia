// ✏️ Site-wide details. Change them here and every page updates.

export const contact = {
  email: 'contact@backpackdigitalmedia.com',
  addressLine1: 'Unit 209 - 5729 West Boulevard',
  addressLine2: 'Vancouver, BC',
  hoursDays: 'Monday to Friday',
  hoursTime: '8:30am to 5:30pm',
};

// Where the contact form sends its data.
// Leave this empty ('') and the form opens the visitor's email app with
// everything filled in (same as the design prototype).
// To use a real form service (for example Formspree, Basin or Web3Forms),
// paste the URL they give you here. The service must accept a POST with
// form data and send it to contact@backpackdigitalmedia.com.
export const FORM_ENDPOINT = '';

// Main navigation links (used in the top nav).
export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About Us' },
  { href: '/digital-marketing/', label: 'Digital Marketing' },
  { href: '/recruitment-marketing/', label: 'Recruitment Marketing' },
  { href: '/case-studies/', label: 'Case Studies' },
];

// Footer links.
export const footerLinks = [...navLinks, { href: '/contact/', label: 'Contact' }];
