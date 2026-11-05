import { Code2, Layers3, Palette, Wrench } from "lucide-react"
import { technologyGroups } from "@/lib/site-content"
import { SectionHeading } from "@/components/sections/section-heading"

const groupIcons = [Code2, Layers3, Wrench, Palette]

export function TechStack() {
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
              <article className="tech-group" key={group.title}>
                <div className="tech-group-title">
                  <span className="tech-icon"><Icon aria-hidden="true" size={18} strokeWidth={1.7} /></span>
                  <h3>{group.title}</h3>
                </div>
                <ul className="tech-list">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
