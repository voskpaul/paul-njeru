import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import Link from "next/link"
import { ContactCta } from "@/components/sections/contact-cta"
import { SectionHeading } from "@/components/sections/section-heading"
import { services } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design and development, UI/UX implementation, SaaS interfaces, and ongoing website improvements from Paul Njeru.",
  openGraph: {
    title: "Services | Paul Njeru",
    description: "Thoughtful design and modern web development for businesses and product teams.",
  },
}

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero--dark" aria-labelledby="services-page-title">
        <div className="page-hero-grid container">
          <div>
            <p className="page-eyebrow"><span /> Services</p>
            <h1 id="services-page-title">What I can help<br /><em>you build.</em></h1>
            <p className="page-hero-description">
              From the first design concept to a fully developed website, I help turn ideas into effective digital experiences.
            </p>
            <Link className="page-scroll-link" href="#service-list">Explore the services <ArrowRight aria-hidden="true" size={15} /></Link>
          </div>
          <div className="page-hero-note">
            <span className="page-hero-note-index">DESIGN × DEVELOPMENT</span>
            <p>Flexible support for businesses, startups, agencies, and ambitious ideas.</p>
            <span className="page-hero-note-rule" />
            <span className="page-hero-note-small">Clear scope. Thoughtful execution.</span>
          </div>
        </div>
      </section>
      <section className="section section-service-list" id="service-list" aria-labelledby="service-list-title">
        <div className="container">
          <SectionHeading
            eyebrow="Ways to work together"
            title={<span id="service-list-title">A good fit for your next step<span className="heading-period">.</span></span>}
            description="Choose a focused deliverable or bring me in to help shape the experience from the beginning."
          />
          <div className="service-detail-grid">
            {services.map(({ number, title, description, includes, icon: Icon }) => (
              <article className="service-detail-card reveal-on-scroll" key={number}>
                <div className="service-detail-top">
                  <span className="service-number">{number}</span>
                  <span className="service-icon"><Icon aria-hidden="true" size={21} strokeWidth={1.7} /></span>
                </div>
                <h2>{title}</h2>
                <p className="service-detail-description">{description}</p>
                <ul className="service-includes">
                  {includes.map((item) => (
                    <li key={item}><Check aria-hidden="true" size={15} />{item}</li>
                  ))}
                </ul>
                <Link className="service-link" href="/contact">
                  Discuss a project <ArrowUpRight aria-hidden="true" size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  )
}
