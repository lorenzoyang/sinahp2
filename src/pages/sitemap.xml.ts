import { defaultLocale, htmlLang, locales, type Locale } from "../data/routing";
import {
  getIndexableUrlGroups,
  toAbsoluteUrl,
  type HreflangLink,
  type IndexableUrlGroup,
} from "../data/seo";

export const prerender = true;

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function getAlternateLinks(group: IndexableUrlGroup): HreflangLink[] {
  const links = locales.map((locale) => ({
    hreflang: htmlLang[locale],
    href: toAbsoluteUrl(group.paths[locale]),
  }));

  return [
    ...links,
    {
      hreflang: "x-default",
      href: toAbsoluteUrl(group.paths[defaultLocale]),
    },
  ];
}

function renderUrl(group: IndexableUrlGroup, locale: Locale) {
  const loc = toAbsoluteUrl(group.paths[locale]);
  const alternates = getAlternateLinks(group)
    .map(
      (link) =>
        `    <xhtml:link rel="alternate" hreflang="${escapeXml(
          link.hreflang,
        )}" href="${escapeXml(link.href)}" />`,
    )
    .join("\n");

  return [
    "  <url>",
    `    <loc>${escapeXml(loc)}</loc>`,
    alternates,
    "  </url>",
  ].join("\n");
}

export function GET() {
  const urlGroups = getIndexableUrlGroups();
  const urls = urlGroups
    .flatMap((group) => locales.map((locale) => renderUrl(group, locale)))
    .join("\n");
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls,
    "</urlset>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
