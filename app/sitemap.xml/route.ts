const publicRoutes = ["/", "/work", "/services", "/about", "/contact"]

export async function GET(request: Request) {
  const origin = new URL(request.url).origin
  const urls = publicRoutes
    .map((route) => {
      const location = route === "/" ? origin : `${origin}${route}`
      return `<url><loc>${location}</loc></url>`
    })
    .join("")

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  )
}
