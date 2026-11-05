import { ArrowUpRight, Code2, PenTool } from "lucide-react"
import Link from "next/link"
import { SectionHeading } from "@/components/sections/section-heading"

export function AboutPreview() {
  return (
    <section className="section section-about-preview" aria-labelledby="about-preview-title">
      <div className="container about-preview-grid">
        <div className="about-art" role="img" aria-label="Abstract monogram and interface composition representing Paul Njeru's design and engineering practice">
          <div className="about-art-glow" />
          <div className="about-art-frame">
            <span className="about-art-index">NAIROBI, KE · 2026</span>
            <span className="about-art-monogram">PN<span>.</span></span>
            <div className="about-art-caption">
              <span>DESIGN<br />THINKING</span>
              <i />
              <span>FRONTEND<br />ENGINEERING</span>
            </div>
          </div>
          <span className="about-float about-float--design"><PenTool aria-hidden="true" size={15} /> Thoughtful design</span>
          <span className="about-float about-float--code"><Code2 aria-hidden="true" size={15} /> Clean code</span>
        </div>
        <div className="about-preview-copy">
          <SectionHeading
            eyebrow="A little about me"
            title={<span id="about-preview-title">Design-minded.<br />Product-focused<span className="heading-period">.</span></span>}
            description="I'm Paul Njeru, a software engineer and frontend developer based in Nairobi, Kenya. I enjoy creating digital products that combine thoughtful design, clean code, and practical functionality."
          />
          <p className="about-preview-extra">
            From business websites to interactive applications, I bring a considered approach to the problem, the experience, and the details that make it work.
          </p>
          <Link className="text-link" href="/about">
            More about me <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
