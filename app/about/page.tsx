import type { Metadata } from "next"
import { ArrowUpRight, Code2, MapPin, PenTool, Sparkles } from "lucide-react"
import Link from "next/link"
import { ProfilePhoto } from "@/components/ui/profile-photo"
import { ContactCta } from "@/components/sections/contact-cta"
import { TechStack } from "@/components/sections/tech-stack"

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Paul Njeru, a software engineer and frontend developer based in Nairobi, Kenya, focused on thoughtful digital experiences.",
  openGraph: {
    title: "About Paul Njeru",
    description: "A software engineer and frontend developer based in Nairobi, Kenya.",
  },
}

const aboutParagraphs = [
  "I'm Paul Njeru, a software engineer and frontend developer based in Nairobi, Kenya.",
  "I enjoy creating digital products that combine thoughtful design, clean code, and practical functionality.",
  "My work spans business websites, responsive user interfaces, interactive web applications, and AI-powered SaaS product experiences.",
  "I approach each project with a focus on understanding the problem, designing an intuitive solution, and developing an experience that works beautifully across devices.",
  "I'm continuously learning, experimenting with modern technologies, and building products that challenge me to grow as an engineer.",
]

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--dark" aria-labelledby="about-page-title">
        <div className="page-hero-grid container">
          <div>
            <p className="page-eyebrow"><span /> A little about me</p>
            <h1 id="about-page-title">Design-minded.<br /><em>Engineering-led.</em></h1>
            <p className="page-hero-description">
              I bring design thinking and modern web technology together to make digital experiences that feel clear, useful, and human.
            </p>
            <div className="about-location"><MapPin aria-hidden="true" size={15} /> Nairobi, Kenya</div>
          </div>
          <div className="about-page-art">
            <ProfilePhoto
              className="about-page-photo"
              alt="Paul Njeru standing indoors beside a staircase, shown in a full-length portrait"
              sizes="(max-width: 850px) 90vw, 33vw"
            />
            <div className="about-page-art-shade" aria-hidden="true" />
            <div className="about-page-art-orb" aria-hidden="true" />
            <div className="about-page-art-panel" aria-hidden="true">
              <span className="about-art-index">PAUL NJERU · DIGITAL PRACTICE</span>
              <span className="about-page-monogram">PN<span>.</span></span>
              <div className="about-page-art-bottom">
                <span><PenTool aria-hidden="true" size={15} /> Design</span>
                <span><Code2 aria-hidden="true" size={15} /> Engineering</span>
                <span><Sparkles aria-hidden="true" size={15} /> Product</span>
              </div>
            </div>
            <span className="about-page-art-caption">Ideas made tangible</span>
          </div>
        </div>
      </section>
      <section className="section section-about-story" aria-labelledby="about-story-title">
        <div className="container about-story-grid">
          <div className="about-story-aside">
            <p className="section-eyebrow">The person behind the pixels</p>
            <h2 id="about-story-title">Curious by nature.<br />Thoughtful by design.</h2>
            <Link className="text-link" href="/contact">Start a conversation <ArrowUpRight aria-hidden="true" size={16} /></Link>
          </div>
          <div className="about-story-copy">
            {aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>
      <section className="about-principles" aria-label="Working principles">
        <div className="container about-principles-grid">
          <article><span>01</span><h3>Understand first</h3><p>Start with the people, needs, and business context behind the brief.</p></article>
          <article><span>02</span><h3>Design with intent</h3><p>Make every screen, interaction, and detail serve a clear purpose.</p></article>
          <article><span>03</span><h3>Build with care</h3><p>Turn the design into a responsive, dependable experience across devices.</p></article>
        </div>
      </section>
      <TechStack />
      <ContactCta />
    </>
  )
}
