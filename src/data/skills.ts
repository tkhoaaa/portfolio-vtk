import { Code2, Palette, Wrench, Database } from "lucide-react"

export interface Skill {
  name: string
  icon: string
  description: string
  category: "frontend" | "backend" | "tools" | "design"
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "react", description: "Building interactive UIs with hooks and modern patterns", category: "frontend" },
  { name: "TypeScript", icon: "typescript", description: "Type-safe code for scalable applications", category: "frontend" },
  { name: "Next.js", icon: "nextjs", description: "Server-side rendering and static generation", category: "frontend" },
  { name: "Vue.js", icon: "vue", description: "Progressive JavaScript framework", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", description: "Utility-first CSS framework", category: "frontend" },
  { name: "Framer Motion", icon: "framer", description: "Smooth animations and gestures", category: "frontend" },
  { name: "Redux", icon: "redux", description: "Predictable state management", category: "frontend" },
  { name: "HTML/CSS", icon: "html", description: "Semantic markup and modern CSS", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "nodejs", description: "JavaScript runtime for server-side", category: "backend" },
  { name: "Express", icon: "express", description: "Minimal Node.js web framework", category: "backend" },
  { name: "PostgreSQL", icon: "postgresql", description: "Relational database system", category: "backend" },
  { name: "MongoDB", icon: "mongodb", description: "NoSQL document database", category: "backend" },
  { name: "GraphQL", icon: "graphql", description: "Query language for APIs", category: "backend" },
  { name: "REST APIs", icon: "api", description: "RESTful service architecture", category: "backend" },

  // Tools
  { name: "Git", icon: "git", description: "Version control system", category: "tools" },
  { name: "Docker", icon: "docker", description: "Container platform", category: "tools" },
  { name: "Figma", icon: "figma", description: "UI/UX design tool", category: "tools" },
  { name: "VS Code", icon: "vscode", description: "Code editor", category: "tools" },
  { name: "Webpack", icon: "webpack", description: "Module bundler", category: "tools" },
  { name: "Jest", icon: "jest", description: "Testing framework", category: "tools" },
]

export const skillCategories = [
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "backend", label: "Backend", icon: Database },
  { id: "tools", label: "Tools", icon: Wrench },
  { id: "design", label: "Design", icon: Palette },
]

export const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Completed", value: 30, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "Happy Clients", value: 15, suffix: "+" },
]
