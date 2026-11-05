"use client"

import { Code2, Layers3, Palette, Wrench } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import {
  siCss,
  siExpress,
  siFigma,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons"
import { technologyGroups } from "@/lib/site-content"
import { SectionHeading } from "@/components/sections/section-heading"

type BrandIcon = { path: string }

const groupIcons = [Code2, Layers3, Wrench, Palette]
const brandIcons: Record<string, BrandIcon> = {
  "React.js": siReact,
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  HTML5: siHtml5,
  CSS3: siCss,
  "Tailwind CSS": siTailwindcss,
  "Node.js": siNodedotjs,
  "Express.js": siExpress,
  Python: siPython,
  Git: siGit,
  GitHub: siGithub,
  Vercel: siVercel,
  Figma: siFigma,
}

export function TechStack() {
  const prefersReducedMotion = useReducedMotion() ?? false

  return (
    <section className="section section-tech" aria-labelledby="tech-title">
      <div className="container">
        <SectionHeading
          eyebrow="The toolkit"
          title={<span id="tech-title">Tools I use to bring ideas to life<span className="heading-period">.</span></span>}
          description="A practical toolkit for shaping ideas, building responsive interfaces, and connecting products to the wider web."
        />
        <div className="tech-grid">
          {technologyGroups.map((group, index) => {
            const Icon = groupIcons[index]
            return (
              <motion.article
                className="tech-group"
                key={group.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.52, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
              >
                <div className="tech-group-title">
                  <span className="tech-icon"><Icon aria-hidden="true" size={18} strokeWidth={1.7} /></span>
                  <h3>{group.title}</h3>
                </div>
                <ul className="tech-list">
                  {group.items.map((item) => {
                    const brandIcon = brandIcons[item]
                    return (
                      <li className="tech-badge" key={item}>
                        <span className="tech-badge-icon" aria-hidden="true">
                          {brandIcon ? (
                            <svg viewBox="0 0 24 24" focusable="false"><path d={brandIcon.path} /></svg>
                          ) : (
                            <Code2 size={14} strokeWidth={1.8} />
                          )}
                        </span>
                        <span>{item}</span>
                      </li>
                    )
                  })}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
