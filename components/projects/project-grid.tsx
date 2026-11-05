import type { PortfolioProject } from "@/lib/projects"
import { ProjectCard } from "@/components/projects/project-card"

export function ProjectGrid({
  projects,
  variant = "work",
}: {
  projects: PortfolioProject[]
  variant?: "home" | "work"
}) {
  return (
    <div className={`project-grid project-grid--${variant}`}>
      {projects.map((project, index) => (
        <ProjectCard
          project={project}
          index={index}
          featured={index === 0}
          key={project.id}
        />
      ))}
    </div>
  )
}
