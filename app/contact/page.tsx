import type { Metadata } from "next"
import { ArrowUpRight, Briefcase, Code2, Mail, MapPin, MessageCircle } from "lucide-react"
import { ContactForm } from "@/components/ui/contact-form"
import { contactDetails } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a website, product, or redesign in mind? Contact Paul Njeru to discuss your project.",
  openGraph: {
    title: "Contact Paul Njeru",
    description: "Tell Paul about your website, design, or software project.",
  },
}

export default function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero--dark contact-page-hero" aria-labelledby="contact-page-title">
        <div className="page-hero-grid container">
          <div>
            <p className="page-eyebrow"><span /> Start a conversation</p>
            <h1 id="contact-page-title">Have a project<br /><em>in mind?</em></h1>
            <p className="page-hero-description">
              Tell me what you&apos;re building, what challenges you&apos;re facing, or what you want your website to achieve. Let&apos;s discuss how I can help.
            </p>
          </div>
          <div className="contact-hero-note">
            <span className="contact-hero-note-icon"><MessageCircle aria-hidden="true" size={20} /></span>
            <p>The easiest way to get started</p>
            <a href={contactDetails.phoneLink} target="_blank" rel="noopener noreferrer">
              Chat with me on WhatsApp <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="section section-contact-content" aria-label="Contact details and project enquiry form">
        <div className="container contact-content-grid">
          <aside className="contact-details-column" aria-labelledby="contact-details-title">
            <div className="contact-details-intro">
              <p className="section-eyebrow">Get in touch</p>
              <h2 id="contact-details-title">Good things start with a conversation.</h2>
              <p>Share a little about what you have in mind. I&apos;ll get back to you using the contact details you provide.</p>
            </div>
            <div className="contact-detail-list">
              <a className="contact-detail-card" href={contactDetails.phoneLink} target="_blank" rel="noopener noreferrer">
                <span className="contact-detail-icon"><MessageCircle aria-hidden="true" size={18} /></span>
                <span><small>WhatsApp</small><strong>{contactDetails.phoneDisplay}</strong></span>
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
              <a className="contact-detail-card" href={`mailto:${contactDetails.email}`}>
                <span className="contact-detail-icon"><Mail aria-hidden="true" size={18} /></span>
                <span><small>Email</small><strong>{contactDetails.email}</strong></span>
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
              <a className="contact-detail-card" href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer">
                <span className="contact-detail-icon"><Briefcase aria-hidden="true" size={18} /></span>
                <span><small>LinkedIn</small><strong>Connect with me</strong></span>
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
              <a className="contact-detail-card" href={contactDetails.github} target="_blank" rel="noopener noreferrer">
                <span className="contact-detail-icon"><Code2 aria-hidden="true" size={18} /></span>
                <span><small>GitHub</small><strong>See what I&apos;m building</strong></span>
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
            <p className="contact-location"><MapPin aria-hidden="true" size={15} /> Based in Nairobi, Kenya</p>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
