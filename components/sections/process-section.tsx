import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { processSteps } from "@/lib/site-content"
import { SectionHeading } from "@/components/sections/section-heading"

export function ProcessSection() {
  return (
    <section className="section section-process" aria-labelledby="process-title">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="A clear path forward"
            title={<span id="process-title">From idea to launch<span className="heading-period">.</span></span>}
            description="A collaborative process keeps the work focused, the decisions clear, and the outcome aligned with your goals."
          />
          <span className="process-aside">The details matter.<br />So does the journey.</span>
        </div>
        <ol className="process-timeline">
          {processSteps.map((step) => (
            <li className="process-step reveal-on-scroll" key={step.number}>
              <span className="process-step-number">{step.number}</span>
              <span className="process-step-node" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="process-cta">
          <p>Let&apos;s build something together.</p>
          <Link className="button button--dark" href="/contact">
            Tell me about your project <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
