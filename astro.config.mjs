// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://sinahp2.yrw.workers.dev",

  redirects: {
    "/it": {
      status: 301,
      destination: "/",
    },
  },

  i18n: {
    locales: ["it", "zh", "en", "es", "fr"],
    defaultLocale: "it",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  // If runtime image optimization is required, the output should be set to "server",
  // otherwise, image requests cannot be processed correctly.
  output: "static",

  adapter: cloudflare({
    imageService: "compile",
  }),
});
