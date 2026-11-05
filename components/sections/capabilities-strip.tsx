import { capabilities } from "@/lib/site-content"

export function CapabilitiesStrip() {
  return (
    <section className="capability-strip" id="capabilities" aria-label="Core capabilities">
      <div className="container capability-row">
        <p className="capability-intro">A thoughtful mix of</p>
        <ul>
          {capabilities.map(({ label, icon: Icon }) => (
            <li key={label}>
              <Icon aria-hidden="true" size={17} strokeWidth={1.7} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
