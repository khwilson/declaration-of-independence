// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  site: 'https://khwilson.github.io',
  base: 'declaration-of-independence',
  integrations: [
    tailwind({
      // Disable the default base styles
      applyBaseStyles: false,
    })
  ],
  output: 'static'
});