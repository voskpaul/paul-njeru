import {
  Code2,
  LayoutDashboard,
  MessageCircle,
  MonitorSmartphone,
  PenTool,
  Plug,
  Wrench,
  type LucideIcon,
} from "lucide-react"

export const capabilities = [
  { label: "UI/UX design", icon: PenTool },
  { label: "Frontend engineering", icon: Code2 },
  { label: "SaaS development", icon: LayoutDashboard },
  { label: "Responsive web design", icon: MonitorSmartphone },
  { label: "API integrations", icon: Plug },
]

export type Service = {
  number: string
  title: string
  description: string
  includes: string[]
  icon: LucideIcon
}

export const services: Service[] = [
  {
    number: "01",
    title: "Business website design & development",
    description:
      "Professional, responsive websites that help businesses establish credibility, showcase their services, and attract customers.",
    includes: [
      "Business and company websites",
      "Landing pages and professional services",
      "Restaurant and hospitality websites",
      "Real estate websites",
    ],
    icon: MonitorSmartphone,
  },
  {
    number: "02",
    title: "UI/UX design & Figma-to-React implementation",
    description:
      "Clean, intuitive interfaces designed around real users and transformed into responsive, functional web experiences.",
    includes: [
      "UI/UX design and website redesigns",
      "Figma-to-React implementation",
      "Responsive interfaces and design systems",
      "Reusable component development",
    ],
    icon: PenTool,
  },
  {
    number: "03",
    title: "SaaS dashboards & web applications",
    description:
      "Modern web applications and dashboards built with scalable frontend architecture and thoughtful user experiences.",
    includes: [
      "SaaS dashboards and admin panels",
      "Data interfaces and interactive applications",
      "Authentication interfaces",
      "API integrations",
    ],
    icon: LayoutDashboard,
  },
  {
    number: "04",
    title: "Website improvements & maintenance",
    description:
      "Improve the quality, performance, usability, and reliability of your existing website.",
    includes: [
      "Website redesigns and UI improvements",
      "Bug fixes and mobile responsiveness",
      "Performance improvements",
      "Ongoing website maintenance",
    ],
    icon: Wrench,
  },
]

export const reasons = [
  {
    number: "01",
    title: "Design meets development",
    description:
      "I understand both the visual and technical sides of web development, helping ensure that beautiful designs become functional products.",
    icon: PenTool,
  },
  {
    number: "02",
    title: "Responsive by default",
    description:
      "I build experiences that adapt smoothly across desktops, tablets, and mobile devices.",
    icon: MonitorSmartphone,
  },
  {
    number: "03",
    title: "Modern technology",
    description:
      "I work with modern technologies including React, Next.js, TypeScript, and Tailwind CSS to develop maintainable web experiences.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Clear communication",
    description:
      "I value clear project requirements, realistic timelines, consistent updates, and collaborative problem-solving.",
    icon: MessageCircle,
  },
]

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business, audience, objectives, requirements, and project scope.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Plan the user experience and create a clear, attractive interface that supports your goals.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build a responsive, functional website or application using modern development technologies.",
  },
  {
    number: "04",
    title: "Test & launch",
    description:
      "Test the experience across devices, fix issues, optimize the final result, and prepare for launch.",
  },
]

export const technologyGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend & integrations",
    items: ["Node.js", "Express.js", "Python", "REST APIs"],
  },
  {
    title: "Development tools",
    items: ["Git", "GitHub", "VS Code", "Vercel"],
  },
  {
    title: "Design",
    items: ["Figma", "Responsive design", "UI/UX design"],
  },
]

export const contactDetails = {
  phoneDisplay: "0115 346 990",
  phoneLink: "https://wa.me/254115346990?text=Hello%20Paul%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  email: "paulriemii@gmail.com",
  linkedin: "https://www.linkedin.com/in/paul-njeru-123972270/",
  github: "https://github.com/voskpaul",
}
