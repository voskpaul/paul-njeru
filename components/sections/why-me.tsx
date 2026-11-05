"use client"

import { motion, useReducedMotion } from "motion/react"
import { reasons } from "@/lib/site-content"
import { SectionHeading } from "@/components/sections/section-heading"

export function WhyMe() {
  const prefersReducedMotion = useReducedMotion() ?? false

  return (
    <section className="section section-why" aria-labelledby="why-title">
      <div className="container why-layout">
        <div className="why-intro">
          <SectionHeading
            eyebrow="A considered approach"
            title={<span id="why-title">Good design matters.<br />Good engineering makes it work<span className="heading-period">.</span></span>}
            description="The best digital experiences feel clear to use, considered in detail, and reliable behind the scenes."
          />
          <div className="why-note">
            <span className="why-note-mark">PN</span>
            <p>Thoughtful from the first conversation to the final detail.</p>
          </div>
        </div>
        <div className="reasons-list">
          {reasons.map(({ number, title, description, icon: Icon }, index) => (
            <motion.article
              className="reason-row"
              key={number}
              initial={prefersReducedMotion ? false : { opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.54, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
            >
              <span className="reason-number">{number}</span>
              <span className="reason-icon"><Icon aria-hidden="true" size={19} strokeWidth={1.7} /></span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
