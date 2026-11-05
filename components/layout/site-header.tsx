"use client"

import { ArrowUpRight, Menu, X } from "lucide-react"
import { ProfilePhoto } from "@/components/ui/profile-photo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header" id="top">
        <div className="nav-shell">
          <Link
            className="brand-lockup"
            href="/"
            aria-label="Paul Njeru, home"
            onClick={closeMenu}
          >
            <span className="brand-photo" aria-hidden="true">
              <ProfilePhoto className="brand-photo-image" alt="" sizes="40px" />
            </span>
            <span className="brand-name">
              <span>Paul</span>
              <span>Njeru</span>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                className="nav-link"
                href={item.href}
                key={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <Link className="nav-cta" href="/contact">
              <span>Let&apos;s talk</span>
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
            <button
              className="mobile-menu-toggle"
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>

          <nav
            className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`}
            id="mobile-navigation"
            aria-label="Mobile navigation"
            aria-hidden={!menuOpen}
            inert={!menuOpen}
          >
            {navigation.map((item, index) => (
              <Link
                className="mobile-nav-link"
                href={item.href}
                key={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={closeMenu}
              >
                <span className="mobile-nav-index">0{index + 1}</span>
                <span>{item.label}</span>
                <ArrowUpRight aria-hidden="true" size={18} />
              </Link>
            ))}
            <p className="mobile-nav-note">Thoughtful digital experiences, built with care.</p>
          </nav>
        </div>
      </header>
    </>
  )
}
