"use client"

import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion, type Variants } from "motion/react"
import Link from "next/link"

const floatingTech = ["React", "Next.js", "TypeScript", "UI/UX"]

const copyVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
}

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: "easeOut" } },
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion() ?? false

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grain" aria-hidden="true" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          variants={copyVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.p className="hero-overline" variants={lineVariants}>
            <span className="hero-overline-line" aria-hidden="true" />
            SOFTWARE ENGINEER · FRONTEND DEVELOPER · UI/UX DESIGNER
          </motion.p>
          <motion.div className="availability-pill" variants={lineVariants}>
            <span className="availability-dot" aria-hidden="true" />
            Available for selected projects
          </motion.div>
          <motion.h1 className="hero-title" id="hero-title" variants={lineVariants}>
            I design and build digital experiences that <span>help businesses grow.</span>
          </motion.h1>
          <motion.p className="hero-description" variants={lineVariants}>
            I&apos;m Paul Njeru, a frontend developer and software engineer creating modern websites, intuitive interfaces, and powerful web applications for businesses and startups.
          </motion.p>
          <motion.p className="hero-specialty" variants={lineVariants}>
            UI/UX Design <span aria-hidden="true">·</span> React <span aria-hidden="true">·</span> Next.js <span aria-hidden="true">·</span> TypeScript <span aria-hidden="true">·</span> Responsive Development
          </motion.p>
          <motion.div className="hero-actions" variants={lineVariants}>
            <Link className="button button--gradient" href="#selected-projects">
              Explore My Work
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <Link className="button button--ghost" href="/contact">
              Start a Project
              <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </motion.div>
          <motion.a className="hero-scroll" href="#capabilities" variants={lineVariants}>
            <span className="hero-scroll-icon"><ArrowDown aria-hidden="true" size={14} /></span>
            Scroll to explore
          </motion.a>
        </motion.div>

        <motion.div
          className="hero-art"
          aria-hidden="true"
          initial={prefersReducedMotion ? false : { opacity: 0, x: 28, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.9, delay: 0.12, ease: "easeOut" }}
        >
          <motion.div
            className="hero-orbit hero-orbit--one"
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="hero-orbit hero-orbit--two"
            animate={prefersReducedMotion ? undefined : { rotate: -360 }}
            transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
          />
          <motion.span
            className="hero-spark hero-spark--one"
            animate={prefersReducedMotion ? undefined : { scale: [0.7, 1.2, 0.7], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="hero-spark hero-spark--two"
            animate={prefersReducedMotion ? undefined : { scale: [1, 0.6, 1], opacity: [1, 0.45, 1] }}
            transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="hero-code-card"
            animate={prefersReducedMotion ? undefined : { y: [0, -9, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="code-card-label">A little structure</span>
            <code><span>const</span> idea = <b>&quot;make it useful&quot;</b>;</code>
            <code><span>build</span>(idea, <b>withCare</b>);</code>
          </motion.div>
          <motion.div
            className="hero-browser"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18, rotateY: -7 }}
            animate={prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: 1, y: [0, -9, 0], rotateY: [-5, -3.5, -5] }}
            transition={prefersReducedMotion
              ? { duration: 0 }
              : {
                  opacity: { duration: 0.7, delay: 0.16 },
                  y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                }}
          >
            <div className="browser-topbar">
              <div className="browser-controls"><i /><i /><i /></div>
              <div className="browser-address">paulnjeru / digital studio</div>
              <span className="browser-topbar-icon"><ArrowUpRight size={13} /></span>
            </div>
            <div className="browser-page">
              <div className="browser-site-nav">
                <span className="browser-site-logo">north / form</span>
                <span>Studio</span>
                <span>Journal</span>
                <span className="browser-site-contact">Let&apos;s talk <ArrowUpRight size={11} /></span>
              </div>
              <div className="browser-content">
                <div className="browser-copy">
                  <span className="browser-kicker">INDEPENDENT CREATIVE STUDIO</span>
                  <p className="browser-headline">Make room for <em>what&apos;s next.</em></p>
                  <span className="browser-description">Digital experiences with clarity, character, and purpose.</span>
                  <span className="browser-link">Explore the studio <ArrowRight size={11} /></span>
                </div>
                <div className="browser-image">
                  <div className="browser-image-glow" />
                  <div className="browser-image-frame">
                    <span className="browser-image-caption">FORM / 02</span>
                    <div className="browser-image-orb" />
                    <div className="browser-image-line browser-image-line--one" />
                    <div className="browser-image-line browser-image-line--two" />
                  </div>
                </div>
              </div>
              <div className="browser-bottom-line">
                <span>DESIGN THAT MOVES WITH YOU</span>
                <span>NAIROBI · WORLDWIDE</span>
              </div>
            </div>
            <motion.span
              className="hero-browser-scan"
              animate={prefersReducedMotion ? undefined : { y: [0, 265, 310], opacity: [0, 0.9, 0] }}
              transition={{ duration: 6.4, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
            />
          </motion.div>
          {floatingTech.map((label, index) => (
            <motion.span
              className={`floating-tech floating-tech--${index + 1}`}
              key={label}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12, scale: 0.92 }}
              animate={prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 1, y: [0, -6, 0], scale: 1 }}
              transition={prefersReducedMotion
                ? { duration: 0 }
                : { opacity: { delay: 0.42 + index * 0.1 }, y: { duration: 4.2 + index * 0.35, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 } }}
            >
              <span className="floating-tech-dot" />
              {label}
            </motion.span>
          ))}
          <span className="hero-art-index">01 <i /> DIGITAL EXPERIENCES</span>
        </motion.div>
      </div>
    </section>
  )
}
