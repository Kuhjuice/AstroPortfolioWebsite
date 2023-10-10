import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://kuhjuice.github.io',
  base: '/AstroPortfolioWebsite',
  integrations: [tailwind()]
});