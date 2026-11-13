import type { Metadata } from "next"
import { ArrowDown } from "lucide-react"
import { ContactCta } from "@/components/sections/contact-cta"
import { ProjectGrid } from "@/components/projects/project-grid"
import { SectionHeading } from "@/components/sections/section-heading"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore websites, product interfaces, and interactive applications designed and developed by Paul Njeru.",
  openGraph: {
    title: "Selected Work | Paul Njeru",
    description: "Websites, product interfaces, and interactive applications by Paul Njeru.",
  },
}

export default function WorkPage() {
  return (
    <>
      <section className="page-hero page-hero--dark" aria-labelledby="work-page-title">
        <div className="page-hero-grid container">
          <div>
            <p className="page-eyebrow"><span /> Selected work</p>
            <h1 id="work-page-title">Digital ideas,<br /><em>thoughtfully made.</em></h1>
            <p className="page-hero-description">
              Websites, product interfaces, and interactive experiences shaped around the people who use them.
            </p>
            <a className="page-scroll-link" href="#all-projects">Explore the projects <ArrowDown aria-hidden="true" size={15} /></a>
          </div>
          <div className="page-hero-note">
            <span className="page-hero-note-index">01 — 08</span>
            <p>A collection of business website concepts, SaaS interfaces, and frontend experiments.</p>
            <span className="page-hero-note-rule" />
            <span className="page-hero-note-small">Each project has its own point of view.</span>
          </div>
        </div>
      </section>
      <section className="section section-work-list" id="all-projects" aria-labelledby="all-projects-title">
        <div className="container">
          <SectionHeading
            eyebrow="Selected projects"
            title={<span id="all-projects-title">A range of digital work<span className="heading-period">.</span></span>}
            description="Captured screenshots appear where available; other visuals are clearly marked as illustrative placeholders. Follow each link to explore its supplied deployment."
          />
          <ProjectGrid projects={projects} variant="work" />
        </div>
      </section>
      <ContactCta />
    </>
  )
}
