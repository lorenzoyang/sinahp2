// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://sinahp.com",

  env: {
    schema: {
      PUBLIC_WEB3FORMS_ACCESS_KEY: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      // Controls whether to enable the captcha, defaulting to false.
      // It determines whether the captcha UI component is displayed,
      // whether the relevant JS script is loaded, and whether a captcha token is required and sent.
      PUBLIC_WEB3FORMS_CAPTCHA_ENABLED: envField.boolean({
        context: "client",
        access: "public",
        default: false,
      }),
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

  adapter: cloudflare({
    imageService: "compile",
  }),
});
