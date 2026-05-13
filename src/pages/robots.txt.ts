import { toAbsoluteUrl } from "../data/seo";

export const prerender = true;

export function GET() {
  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      `Sitemap: ${toAbsoluteUrl("/sitemap.xml")}`,
      "",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
