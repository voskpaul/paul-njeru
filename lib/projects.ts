export type ProjectVisualKind =
  | "restaurant"
  | "real-estate"
  | "hospitality"
  | "dashboard"
  | "ux-booster"
  | "creator"
  | "algorithm"
  | "commerce"

export type ProjectLink = {
  label: string
  href: string
}

export type PortfolioProject = {
  id: string
  name: string
  category: string
  description: string
  href: string
  visual: ProjectVisualKind
  tech: string[]
  image?: string
  imageFallback?: string
  imageAlt?: string
  previewLabel?: string
  statusLabel: string
  additionalLinks?: ProjectLink[]
}

export const projects: PortfolioProject[] = [
  {
    id: "saffron-stone",
    name: "Saffron & Stone",
    category: "Restaurant website design & development",
    description:
      "A premium restaurant website concept designed to give hospitality businesses a polished digital presence. The experience focuses on elegant presentation, menu discovery, reservations, and customer enquiries.",
    href: "https://saffron-stone-jyq0fho8b-voskpauls-projects.vercel.app/",
    visual: "restaurant",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive UI"],
    image: "/projects/saffron-stone.png",
    imageAlt:
      "Captured visual showcase for the Saffron & Stone restaurant website concept, with a warm dining room hero and editorial serif headline",
    previewLabel: "Captured visual showcase",
    statusLabel: "Concept website",
    additionalLinks: [
      {
        label: "Open visual showcase",
        href: "https://saffron-stone-screenshot-studio.lovable.app/",
      },
    ],
  },
  {
    id: "havenstone-properties",
    name: "Havenstone Properties",
    category: "Real estate website design & development",
    description:
      "A modern real estate website concept designed to help property businesses showcase listings, communicate trust, and make it easier for prospective buyers and renters to enquire about properties.",
    href: "https://havenstone-qdbggg5sa-voskpauls-projects.vercel.app/",
    visual: "real-estate",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    statusLabel: "Website concept",
  },
  {
    id: "embu-luxe-stays",
    name: "Embu Luxe Stays",
    category: "Hospitality website / accommodation platform",
    description:
      "A hospitality website concept focused on presenting accommodation, showcasing amenities, and making it easy for visitors to explore a stay experience and enquire.",
    href: "https://embu-luxe-stays-4pia094v0-voskpauls-projects.vercel.app/",
    visual: "hospitality",
    tech: [],
    statusLabel: "Website concept",
  },
  {
    id: "ux-booster",
    name: "UXBooster",
    category: "UX productivity dashboard / web application",
    description:
      "A UX-focused product dashboard project, linked directly to its deployed dashboard route.",
    href: "https://uxbooster-pdtv1kj33-voskpauls-projects.vercel.app/dashboard",
    visual: "ux-booster",
    tech: [],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28444%29-YHDMLqdhhsxVnKJszrTYNozgWZQ66I.png",
    imageFallback: "/projects/uxbooster-dashboard.png",
    imageAlt: "UXBooster analytics dashboard screenshot showing a dark workspace with navigation, summary metrics, a user activity chart, and traffic sources",
    previewLabel: "Screenshot provided by Paul",
    statusLabel: "Access-protected deployment",
  },
  {
    id: "vizify",
    name: "Vizify",
    category: "Web application / SaaS interface",
    description:
      "A modern web application interface concept demonstrating frontend product development, interface design, and interactive user experiences.",
    href: "https://v0-vizify-6rbh0akhy-voskpauls-projects.vercel.app/",
    visual: "dashboard",
    tech: [],
    statusLabel: "Product interface concept",
    additionalLinks: [
      {
        label: "Open alternative deployment",
        href: "https://v0-vizify-dn9hk02td-voskpauls-projects.vercel.app/",
      },
    ],
  },
  {
    id: "clipwizard",
    name: "Lumora AI / ClipWizard",
    category: "AI video creation / SaaS product",
    description:
      "An AI video creation product concept exploring modern SaaS interfaces and creative workflows for generating and editing video content.",
    href: "https://v0-clipwizard-app-requirements-efh3ooyzv-voskpauls-projects.vercel.app/",
    visual: "creator",
    tech: [],
    statusLabel: "SaaS product concept",
  },
  {
    id: "algorithm-visualizer",
    name: "Algorithm Visualizer",
    category: "Interactive frontend application",
    description:
      "An interactive educational application that demonstrates how algorithms work through visual animations and step-by-step execution, with sorting and searching examples and hands-on controls.",
    href: "https://algorithm-visualizer-ruby.vercel.app/",
    visual: "algorithm",
    tech: ["React", "JavaScript", "CSS", "Frontend engineering"],
    image: "/projects/algorithm-visualizer.png",
    imageAlt:
      "Live capture of the Algorithm Visualizer interface with algorithm selection and step controls",
    previewLabel: "Live project capture",
    statusLabel: "Interactive demo",
  },
  {
    id: "audiophile",
    name: "Audiophile",
    category: "E-commerce website / frontend development",
    description:
      "A modern e-commerce frontend concept focused on product presentation, intuitive navigation, and a polished shopping experience.",
    href: "https://audiophile-seven.vercel.app/",
    visual: "commerce",
    tech: [],
    statusLabel: "Frontend concept",
  },
]

export const selectedProjectIds = [
  "saffron-stone",
  "havenstone-properties",
  "clipwizard",
  "vizify",
]

export const selectedProjects = selectedProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is PortfolioProject => project !== undefined)
