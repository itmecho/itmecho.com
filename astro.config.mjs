// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Pixelify Sans",
      cssVariable: "--font-pixelated",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Figtree",
      cssVariable: "--font-sans",
      weights: [300, 400, 500, 600, 700],
    },
  ],
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
    },
  },
  integrations: [mdx()],
});

