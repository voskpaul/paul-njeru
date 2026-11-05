import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const floatingTech = ["React", "Next.js", "TypeScript", "UI/UX"]

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grain" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-overline">
            <span className="hero-overline-line" aria-hidden="true" />
            Software engineer · Frontend developer
          </p>
          <div className="availability-pill">
            <span className="availability-dot" aria-hidden="true" />
            Available for selected projects
          </div>
          <h1 id="hero-title">
            I design and build websites that <span>help businesses grow.</span>
          </h1>
          <p className="hero-specialty">
            UI/UX design <span aria-hidden="true">·</span> React <span aria-hidden="true">·</span> Next.js <span aria-hidden="true">·</span> Responsive web development
          </p>
          <p className="hero-description">
            I&apos;m Paul Njeru, a software engineer and frontend developer creating thoughtful digital experiences, high-performing websites, and modern web applications.
          </p>
          <div className="hero-actions">
            <Link className="button button--gradient" href="#selected-projects">
              View My Work
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <Link className="button button--ghost" href="/contact">
              Start a Project
              <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <a className="hero-scroll" href="#capabilities">
            <span className="hero-scroll-icon"><ArrowDown aria-hidden="true" size={14} /></span>
            Scroll to explore
          </a>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-orbit hero-orbit--one" />
          <div className="hero-orbit hero-orbit--two" />
          <div className="hero-code-card">
            <span className="code-card-label">A little structure</span>
            <code><span>const</span> idea = <b>&quot;make it useful&quot;</b>;</code>
            <code><span>build</span>(idea, <b>withCare</b>);</code>
          </div>
          <div className="hero-browser">
            <div className="browser-topbar">
              <div className="browser-controls"><i /><i /><i /></div>
              <div className="browser-address">paulnjeru / digital studio</div>
              <span className="browser-topbar-icon"><ArrowUpRight size={13} /></span>
            </div>
            <div className="browser-page">
              <div className="browser-site-nav">
                <span className="browser-site-logo">north / form</span>
                <span>Studio</span>
                <span>Journal</span>
                <span className="browser-site-contact">Let&apos;s talk <ArrowUpRight size={11} /></span>
              </div>
              <div className="browser-content">
                <div className="browser-copy">
                  <span className="browser-kicker">INDEPENDENT CREATIVE STUDIO</span>
                  <p className="browser-headline">Make room for <em>what&apos;s next.</em></p>
                  <span className="browser-description">Digital experiences with clarity, character, and purpose.</span>
                  <span className="browser-link">Explore the studio <ArrowRight size={11} /></span>
                </div>
                <div className="browser-image">
                  <div className="browser-image-glow" />
                  <div className="browser-image-frame">
                    <span className="browser-image-caption">FORM / 02</span>
                    <div className="browser-image-orb" />
                    <div className="browser-image-line browser-image-line--one" />
                    <div className="browser-image-line browser-image-line--two" />
                  </div>
                </div>
              </div>
              <div className="browser-bottom-line">
                <span>DESIGN THAT MOVES WITH YOU</span>
                <span>NAIROBI · WORLDWIDE</span>
              </div>
            </div>
          </div>
          {floatingTech.map((label, index) => (
            <span className={`floating-tech floating-tech--${index + 1}`} key={label}>
              <span className="floating-tech-dot" />
              {label}
            </span>
          ))}
          <span className="hero-art-index">01 <i /> DIGITAL EXPERIENCES</span>
        </div>
      </div>
    </section>
  )
}
