import { capabilities } from "@/lib/site-content"

function CapabilityGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="capability-group" data-copy={duplicate ? "duplicate" : "primary"}>
      <span className="capability-intro">A thoughtful mix of</span>
      <ul>
        {capabilities.map(({ label, icon: Icon }) => (
          <li key={label}>
            <Icon aria-hidden="true" size={18} strokeWidth={1.7} />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function CapabilitiesStrip() {
  return (
    <section className="capability-strip" id="capabilities" aria-label="Core capabilities">
      <div className="capability-marquee" aria-hidden="true">
        <div className="capability-track">
          <CapabilityGroup />
          <CapabilityGroup duplicate />
        </div>
      </div>
      <p className="sr-only">
        A thoughtful mix of: UI/UX design, frontend engineering, SaaS development, responsive web design, and API integrations.
      </p>
    </section>
  )
}
