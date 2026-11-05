import { Hero } from "@/components/sections/hero"
import { CapabilitiesStrip } from "@/components/sections/capabilities-strip"
import { SelectedProjects } from "@/components/sections/selected-projects"
import { ServicesOverview } from "@/components/sections/services-overview"
import { WhyMe } from "@/components/sections/why-me"
import { ProcessSection } from "@/components/sections/process-section"
import { TechStack } from "@/components/sections/tech-stack"
import { AboutPreview } from "@/components/sections/about-preview"
import { ContactCta } from "@/components/sections/contact-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilitiesStrip />
      <SelectedProjects />
      <ServicesOverview />
      <WhyMe />
      <ProcessSection />
      <TechStack />
      <AboutPreview />
      <ContactCta />
    </>
  )
}
