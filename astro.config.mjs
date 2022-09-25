import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://okonomi.github.io',
  base: '/astro-handson',
	integrations: [mdx(), sitemap()],
  trailingSlash: 'never'
});
