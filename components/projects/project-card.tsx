import { ArrowRight, ArrowUpRight } from "lucide-react"
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
  return (
    <article className={`project-card reveal-on-scroll${featured ? " project-card--featured" : ""}`}>
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
    </article>
  )
}
