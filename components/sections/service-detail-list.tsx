"use client"

import { ArrowUpRight, Check } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"
import { services } from "@/lib/site-content"

export function ServiceDetailList() {
  const prefersReducedMotion = useReducedMotion() ?? false

  return (
    <div className="service-detail-grid">
      {services.map(({ number, title, description, includes, icon: Icon }, index) => (
        <motion.article
          className="service-detail-card"
          key={number}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.58, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
          whileHover={prefersReducedMotion ? undefined : { y: -5 }}
        >
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
            Discuss a Project <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
        </motion.article>
      ))}
    </div>
  )
}
