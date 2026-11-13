import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { selectedProjects } from "@/lib/projects"
import { ProjectGrid } from "@/components/projects/project-grid"
import { SectionHeading } from "@/components/sections/section-heading"

export function SelectedProjects() {
  return (
    <section className="section section-projects" id="selected-projects" aria-labelledby="selected-projects-title">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="A few things I&apos;ve made"
            title={<span id="selected-projects-title">Selected projects<span className="heading-period">.</span></span>}
            description="A selection of digital products, websites, and interfaces I&apos;ve designed and developed."
          />
          <Link className="text-link section-heading-link" href="/work">
            Explore all projects <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
        <ProjectGrid projects={selectedProjects} variant="home" />
        <div className="projects-bottom-cta">
          <span>Eight distinct ideas. One thoughtful approach.</span>
          <Link className="text-link" href="/work">See all work <ArrowRight aria-hidden="true" size={16} /></Link>
        </div>
      </div>
    </section>
  )
}
