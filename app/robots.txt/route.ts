export async function GET(request: Request) {
  const origin = new URL(request.url).origin
  const robots = `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`

  return new Response(robots, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
