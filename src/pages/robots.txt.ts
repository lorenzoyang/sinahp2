export const prerender = true;

export function GET() {
  // Allow crawling so search engines can read the noindex on every demo page.
  return new Response("User-agent: *\nAllow: /\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
