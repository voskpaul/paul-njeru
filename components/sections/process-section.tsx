"use client"

import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"
import { processSteps } from "@/lib/site-content"
import { SectionHeading } from "@/components/sections/section-heading"

export function ProcessSection() {
  const prefersReducedMotion = useReducedMotion() ?? false

  return (
    <section className="section section-process" aria-labelledby="process-title">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="A clear path forward"
            title={<span id="process-title">From idea to launch<span className="heading-period">.</span></span>}
            description="A collaborative process keeps the work focused, the decisions clear, and the outcome aligned with your goals."
          />
          <span className="process-aside">The details matter.<br />So does the journey.</span>
        </div>
        <ol className="process-timeline">
          {processSteps.map((step, index) => (
            <motion.li
              className="process-step"
              key={step.number}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.55, delay: prefersReducedMotion ? 0 : index * 0.12, ease: "easeOut" }}
            >
              <span className="process-step-number">{step.number}</span>
              <motion.span
                className="process-step-node"
                aria-hidden="true"
                initial={prefersReducedMotion ? false : { scale: 0.55, opacity: 0.4 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : index * 0.12 + 0.12 }}
              />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.li>
          ))}
        </ol>
        <div className="process-cta">
          <p>Let&apos;s build something together.</p>
          <Link className="button button--dark" href="/contact">
            Tell me about your project <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
