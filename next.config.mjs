/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/myself-3YO9llTuXHkZO6H8T7l96jWIXggMFQ.jpg",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/Screenshot%20%28444%29-YHDMLqdhhsxVnKJszrTYNozgWZQ66I.png",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/Screenshot%20%28445%29-EMhUHbP1irbulK5ovOoI9bpXOArpyP.png",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/Screenshot%20%28446%29-M251iWfpqvnBah0Fg1DWlYmgzLXTsD.png",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/Screenshot%20%28447%29-k4PdjznTHrQmdA9jCaMHQZpLuNzTJ7.png",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/Screenshot%20%28448%29-QUxj7ErJB4kRgcHNSJUL3PphCzjlYo.png",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/Screenshot%20%28449%29-QQEfCx4jfcpUGNpKHiJKq604WDsXlY.png",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ]
  },
}

export default nextConfig
