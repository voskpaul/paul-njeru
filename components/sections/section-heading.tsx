"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: "left" | "center"
  theme?: "light" | "dark"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion() ?? false

  return (
    <motion.div
      className={`section-heading section-heading--${align} section-heading--${theme}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.64, ease: "easeOut" }}
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </motion.div>
  )
}
