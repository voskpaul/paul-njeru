import { reasons } from "@/lib/site-content"
import { SectionHeading } from "@/components/sections/section-heading"

export function WhyMe() {
  return (
    <section className="section section-why" aria-labelledby="why-title">
      <div className="container why-layout">
        <div className="why-intro">
          <SectionHeading
            eyebrow="A considered approach"
            title={<span id="why-title">Good design matters.<br />Good engineering makes it work<span className="heading-period">.</span></span>}
            description="The best digital experiences feel clear to use, considered in detail, and reliable behind the scenes."
          />
          <div className="why-note">
            <span className="why-note-mark">PN</span>
            <p>Thoughtful from the first conversation to the final detail.</p>
          </div>
        </div>
        <div className="reasons-list">
          {reasons.map(({ number, title, description, icon: Icon }) => (
            <article className="reason-row" key={number}>
              <span className="reason-number">{number}</span>
              <span className="reason-icon"><Icon aria-hidden="true" size={19} strokeWidth={1.7} /></span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
