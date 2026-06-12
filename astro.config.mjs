// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

const hiddenSitemapPaths = new Set(["/reservation-success/"]);

/**
 * @param {string} url
 */
function isSitemapVisible(url) {
  const { pathname } = new URL(url);
  const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;

  if (hiddenSitemapPaths.has(normalizedPath)) {
    return false;
  }

  return !/^\/(?:zh|en|es|fr)\/reservation-success\/$/.test(normalizedPath);
}

// https://astro.build/config
export default defineConfig({
  site: "https://sinahp.com",

  redirects: {
    "/it": {
      status: 301,
      destination: "/",
    },
    "/sitemap.xml": {
      status: 301,
      destination: "/sitemap-index.xml",
    },
  },

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

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "it",
        locales: {
          it: "it",
          zh: "zh-CN",
          en: "en",
          es: "es",
          fr: "fr",
        },
      },
      serialize(item) {
        if (!isSitemapVisible(item.url)) {
          return undefined;
        }

        const defaultLink = item.links?.find((link) => link.lang === "it");

        if (
          defaultLink &&
          !item.links?.some((link) => link.lang === "x-default")
        ) {
          item.links = [
            ...(item.links ?? []),
            { lang: "x-default", url: defaultLink.url },
          ];
        }

        return item;
      },
    }),
  ],

  // If runtime image optimization is required, the output should be set to "server",
  // otherwise, image requests cannot be processed correctly.
  output: "static",

  adapter: cloudflare({
    imageService: "compile",
  }),
});
