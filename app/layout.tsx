import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import "./globals.css"

const siteTitle = "Paul Njeru | Frontend Developer, UI/UX Designer & Software Engineer"
const siteDescription =
  "Paul Njeru is a software engineer and frontend developer based in Nairobi, Kenya, designing and building responsive websites, modern web applications, and SaaS experiences."

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Paul Njeru",
  },
  description: siteDescription,
  applicationName: "Paul Njeru Portfolio",
  creator: "Paul Njeru",
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Paul Njeru",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#101321",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === "production" ? <Analytics /> : null}
      </body>
    </html>
  )
}
