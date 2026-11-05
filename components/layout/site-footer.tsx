import { ArrowUpRight, Briefcase, Code2, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import { contactDetails } from "@/lib/site-content"

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Link className="footer-wordmark" href="/" aria-label="Paul Njeru, home">
              PAUL NJERU<span>.</span>
            </Link>
            <p>Designing and building digital experiences that help businesses grow.</p>
            <span className="footer-location">
              <span className="status-dot" aria-hidden="true" />
              Nairobi, Kenya · Open to selected projects
            </span>
          </div>

          <div className="footer-links-block">
            <p className="footer-label">Explore</p>
            <nav className="footer-nav" aria-label="Footer navigation">
              {footerLinks.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-links-block footer-contact-block">
            <p className="footer-label">Say hello</p>
            <a href={`mailto:${contactDetails.email}`}>
              <Mail aria-hidden="true" size={16} />
              {contactDetails.email}
            </a>
            <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer">
              <Briefcase aria-hidden="true" size={16} />
              LinkedIn
              <ArrowUpRight aria-hidden="true" size={14} />
            </a>
            <a href={contactDetails.github} target="_blank" rel="noopener noreferrer">
              <Code2 aria-hidden="true" size={16} />
              GitHub
              <ArrowUpRight aria-hidden="true" size={14} />
            </a>
            <a href={contactDetails.phoneLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" size={16} />
              WhatsApp
              <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Paul Njeru. All rights reserved.</p>
          <a className="back-to-top" href="#top">
            Back to top
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
