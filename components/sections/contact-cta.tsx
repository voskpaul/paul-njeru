import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import { contactDetails } from "@/lib/site-content"

export function ContactCta() {
  return (
    <section className="contact-cta-section" aria-labelledby="contact-cta-title">
      <div className="container">
        <div className="contact-cta-card">
          <div className="contact-cta-glow" aria-hidden="true" />
          <div className="contact-cta-copy">
            <p className="section-eyebrow section-eyebrow--light">Have a project in mind?</p>
            <h2 id="contact-cta-title">Let&apos;s make your next idea <span>matter.</span></h2>
            <p>Tell me what you&apos;re building, what challenge you&apos;re facing, or what you want your website to achieve.</p>
          </div>
          <div className="contact-cta-actions">
            <Link className="button button--light" href="/contact">
              Start a project <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <a className="contact-cta-whatsapp" href={contactDetails.phoneLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" size={17} />
              Chat on WhatsApp
            </a>
          </div>
          <span className="contact-cta-mark" aria-hidden="true">PN</span>
        </div>
      </div>
    </section>
  )
}
