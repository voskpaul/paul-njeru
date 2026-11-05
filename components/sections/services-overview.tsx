import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { services } from "@/lib/site-content"
import { SectionHeading } from "@/components/sections/section-heading"

export function ServicesOverview() {
  return (
    <section className="section section-services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="Ways we can work together"
            title={<span id="services-title">What I can help<br className="desktop-break" /> you build<span className="heading-period">.</span></span>}
            description="From the first design concept to a fully developed website, I help turn ideas into effective digital experiences."
          />
          <Link className="text-link section-heading-link" href="/services">
            Explore services <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
        <div className="services-grid services-grid--home">
          {services.map(({ number, title, description, icon: Icon }) => (
            <article className="service-card reveal-on-scroll" key={number}>
              <div className="service-card-top">
                <span className="service-number">{number}</span>
                <span className="service-icon"><Icon aria-hidden="true" size={20} strokeWidth={1.7} /></span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <Link href="/contact" className="service-link">
                Discuss a project <ArrowUpRight aria-hidden="true" size={15} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
