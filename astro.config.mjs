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
      name: "PT Sans",
      cssVariable: "--font-sans",
    },
  ],

  integrations: [mdx()],
});