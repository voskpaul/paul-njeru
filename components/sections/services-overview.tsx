"use client"

import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"
import { services } from "@/lib/site-content"
import { SectionHeading } from "@/components/sections/section-heading"

export function ServicesOverview() {
  const prefersReducedMotion = useReducedMotion() ?? false

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
          {services.map(({ number, title, description, icon: Icon }, index) => (
            <motion.article
              className="service-card"
              key={number}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.58, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
              whileHover={prefersReducedMotion ? undefined : { y: -5 }}
            >
              <div className="service-card-top">
                <span className="service-number">{number}</span>
                <span className="service-icon"><Icon aria-hidden="true" size={20} strokeWidth={1.7} /></span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <Link href="/contact" className="service-link">
                Discuss a Project <ArrowUpRight aria-hidden="true" size={15} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
