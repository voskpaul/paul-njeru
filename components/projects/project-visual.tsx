import Image from "next/image"
import type { PortfolioProject, ProjectVisualKind } from "@/lib/projects"

const visualCopy: Record<Exclude<ProjectVisualKind, "algorithm">, { brand: string; eyebrow: string; headline: string; note: string; action: string }> = {
  restaurant: {
    brand: "SAFFRON & STONE",
    eyebrow: "CONTEMPORARY AFRICAN DINING",
    headline: "Where fire, spice and story meet.",
    note: "A table made for sharing.",
    action: "Explore the menu",
  },
  "real-estate": {
    brand: "HAVENSTONE",
    eyebrow: "A PLACE TO CALL YOURS",
    headline: "Find your place in the city.",
    note: "Spaces with room to become.",
    action: "Explore homes",
  },
  hospitality: {
    brand: "EMBU LUXE STAYS",
    eyebrow: "SLOW DOWN, STAY A WHILE",
    headline: "A quieter kind of getaway.",
    note: "Rest, reconnect, return renewed.",
    action: "Discover your stay",
  },
  dashboard: {
    brand: "VIZIFY",
    eyebrow: "YOUR WORKSPACE, IN FOCUS",
    headline: "Make sense of the moving parts.",
    note: "A considered product interface.",
    action: "Open workspace",
  },
  creator: {
    brand: "LUMORA AI / CLIPWIZARD",
    eyebrow: "YOUR CREATIVE STUDIO",
    headline: "Give your next idea a frame.",
    note: "A concept for a modern video workflow.",
    action: "Start creating",
  },
  commerce: {
    brand: "AUDIOPHILE",
    eyebrow: "SOUND, REFINED",
    headline: "Make every moment sound better.",
    note: "A focused listening experience.",
    action: "Discover headphones",
  },
}

function IllustrativeScene({ kind }: { kind: Exclude<ProjectVisualKind, "algorithm"> }) {
  if (kind === "dashboard") {
    return (
      <div className="concept-scene concept-scene--dashboard">
        <div className="dashboard-sidebar"><i /><i /><i /><i /></div>
        <div className="dashboard-main">
          <div className="dashboard-metrics"><i /><i /><i /></div>
          <div className="dashboard-chart"><span /><span /><span /><span /><span /><span /><span /></div>
          <div className="dashboard-footer"><i /><i /><i /></div>
        </div>
      </div>
    )
  }

  if (kind === "creator") {
    return (
      <div className="concept-scene concept-scene--creator">
        <div className="creator-frame"><span className="creator-play" /></div>
        <div className="creator-timeline"><i /><i /><i /></div>
        <div className="creator-timeline creator-timeline--short"><i /><i /></div>
      </div>
    )
  }

  if (kind === "commerce") {
    return (
      <div className="concept-scene concept-scene--commerce">
        <div className="headphone-illustration"><span /><i /><b /></div>
        <div className="commerce-shadow" />
      </div>
    )
  }

  if (kind === "real-estate") {
    return (
      <div className="concept-scene concept-scene--real-estate">
        <span className="building building--one" />
        <span className="building building--two" />
        <span className="building building--three" />
        <span className="scene-sun" />
        <span className="scene-ground" />
      </div>
    )
  }

  if (kind === "hospitality") {
    return (
      <div className="concept-scene concept-scene--hospitality">
        <span className="stay-hill stay-hill--back" />
        <span className="stay-hill stay-hill--front" />
        <span className="stay-house"><i /><b /></span>
        <span className="stay-moon" />
      </div>
    )
  }

  return (
    <div className="concept-scene concept-scene--restaurant">
      <span className="restaurant-arch restaurant-arch--one" />
      <span className="restaurant-arch restaurant-arch--two" />
      <span className="restaurant-table" />
      <span className="restaurant-vase" />
      <span className="restaurant-window" />
    </div>
  )
}

export function ProjectVisual({ project }: { project: PortfolioProject }) {
  if (project.image) {
    return (
      <div className={`project-visual project-visual--image project-visual--${project.visual}`}>
        <Image
          src={project.image}
          alt={project.imageAlt ?? `${project.name} website preview`}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 60vw"
        />
        <span className="project-visual-label">{project.previewLabel}</span>
      </div>
    )
  }

  const copy = visualCopy[project.visual as Exclude<ProjectVisualKind, "algorithm">]

  return (
    <div
      className={`project-visual project-visual--illustration project-visual--${project.visual}`}
      role="img"
      aria-label={`Illustrative concept preview for ${project.name}`}
    >
      <div className="concept-browser" aria-hidden="true">
        <div className="concept-browser-bar">
          <span className="concept-browser-dots"><i /><i /><i /></span>
          <span className="concept-browser-address">{project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}.site</span>
          <span className="concept-browser-more">•••</span>
        </div>
        <div className="concept-page">
          <div className="concept-nav">
            <span className="concept-brand">{copy.brand}</span>
            <span className="concept-nav-items">ABOUT&nbsp;&nbsp; SERVICES&nbsp;&nbsp; CONTACT</span>
            <span className="concept-nav-dot" />
          </div>
          <div className="concept-content">
            <div className="concept-copy">
              <span className="concept-eyebrow">{copy.eyebrow}</span>
              <strong>{copy.headline}</strong>
              <span className="concept-note">{copy.note}</span>
              <span className="concept-action">{copy.action}<i>↗</i></span>
            </div>
            <IllustrativeScene kind={project.visual as Exclude<ProjectVisualKind, "algorithm">} />
          </div>
          <div className="concept-bottomline"><span>BUILT AROUND THE EXPERIENCE</span><span>01 / 03</span></div>
        </div>
      </div>
      <span className="project-visual-label">Illustrative concept preview</span>
    </div>
  )
}
