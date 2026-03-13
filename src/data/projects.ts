export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  tech: string[]
  category: "web" | "mobile" | "open-source"
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "1",
    title: "SaaS Dashboard Pro",
    description: "A comprehensive analytics dashboard for businesses with real-time data visualization and reporting.",
    longDescription: "A comprehensive analytics dashboard for businesses with real-time data visualization, customizable widgets, and advanced reporting capabilities. Built with performance in mind, handling millions of data points efficiently.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tech: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    category: "web",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration, inventory management, and admin panel.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    tech: ["Next.js", "Stripe", "Tailwind CSS", "Prisma", "Redis"],
    category: "web",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "TaskFlow App",
    description: "Project management application with kanban boards, time tracking, and team collaboration.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    tech: ["React", "Firebase", "Framer Motion", "TypeScript"],
    category: "web",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
    tech: ["React Native", "TypeScript", "Redux", "Node.js"],
    category: "mobile",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "5",
    title: "Open Source UI Kit",
    description: "A customizable component library for React applications with 50+ components.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
    tech: ["React", "TypeScript", "Storybook", "Rollup"],
    category: "open-source",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "6",
    title: "Real-time Chat App",
    description: "End-to-end encrypted messaging platform with voice and video calls.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c2b36?w=800&h=500&fit=crop",
    tech: ["React", "Socket.io", "WebRTC", "Express", "MongoDB"],
    category: "web",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "7",
    title: "Portfolio Generator",
    description: "CLI tool to generate beautiful portfolio websites from markdown files.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tech: ["Node.js", "TypeScript", "Handlebars", "Markdown"],
    category: "open-source",
    githubUrl: "https://github.com",
  },

]

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "open-source", label: "Open Source" },
] as const
