import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hkim07.github.io',
  integrations: [react(), sitemap()],
  build: {
    format: 'directory',
  },
  vite: {
    ssr: {
      external: ['sharp']
    }
  }
});
