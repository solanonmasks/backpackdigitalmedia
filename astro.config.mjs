// Astro settings. See https://docs.astro.build/en/reference/configuration-reference/
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.backpackdigitalmedia.com',
  // Old addresses that now point somewhere else.
  redirects: {
    // The homepage video card used to link here; branding is now part of video.
    '/services/branding/': { status: 301, destination: '/services/video/' },
  },
});
