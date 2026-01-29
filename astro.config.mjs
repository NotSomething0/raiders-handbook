import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://NotSomething0.github.io',
  base: '/raiders-handbook',
  vite: {
    plugins: [tailwindcss()]
  }
});