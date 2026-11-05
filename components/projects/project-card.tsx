"use client"

import { ArrowRight, ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import type { PortfolioProject } from "@/lib/projects"
import { ProjectVisual } from "@/components/projects/project-visual"

export function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: PortfolioProject
  index: number
  featured?: boolean
}) {
  const prefersReducedMotion = useReducedMotion() ?? false

  return (
    <motion.article
      className={`project-card${featured ? " project-card--featured" : ""}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.68, delay: prefersReducedMotion ? 0 : Math.min(index * 0.075, 0.35), ease: "easeOut" }}
      whileHover={prefersReducedMotion ? undefined : { y: -5, transition: { duration: 0.22 } }}
    >
      <div className="project-card-media">
        <ProjectVisual project={project} />
        <span className="project-card-index">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="project-card-body">
        <div className="project-card-meta">
          <span>{project.category}</span>
          <span className="project-status"><i />{project.statusLabel}</span>
        </div>
        <div className="project-card-heading">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
        {project.tech.length > 0 ? (
          <ul className="project-tags" aria-label={`${project.name} technologies`}>
            {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        ) : null}
        <div className="project-card-actions">
          <a href={project.href} target="_blank" rel="noopener noreferrer">
            View Live Project
            <ArrowRight aria-hidden="true" size={16} />
          </a>
          {project.additionalLinks?.map((link) => (
            <a className="project-secondary-link" href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>
              {link.label}
              <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
