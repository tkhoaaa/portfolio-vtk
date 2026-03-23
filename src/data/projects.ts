export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  tech: string[]
  category: "web" | "mobile" | "open-source" | "app"
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "1",
    title: "HUTECH ADMISSION",
    description: "A comprehensive web application for HUTECH University admission, featuring registration, scholarship application, result lookup, and a dedicated admin dashboard.",
    longDescription: "A comprehensive analytics dashboard for businesses with real-time data visualization, customizable widgets, and advanced reporting capabilities. Built with performance in mind, handling millions of data points efficiently.",
    image: "/hutechadmission.png",
    tech: ["React", "TailwindCSS", "Node.js", "MySQL", "JWT"],
    category: "web",
    demoUrl: "https://do-an-tuyen-sinh.vercel.app/",
    githubUrl: "https://github.com/tkhoaaa/DoAnTuyenSinh",
    featured: true,
  },
  {
    id: "2",
    title: "KMESS – Cross-Platform Social Networking Application",
    description: "KMess is a full-featured cross-platform social media application developed with Flutter, Dart, Firebase, and WebRTC. It includes multi-method authentication, real-time chat, voice/video calling, stories, post management, notifications, and admin moderation features, following Clean Architecture for scalability and maintainability.",
    image: "/app-kmess.png",
    tech: ["Fluetter", "Dart", "Firebase", "Cloudinary", "WebRTC"],
    category: "app",
    demoUrl: "https://github.com/tkhoaaa/DuAN_KMESSApp",
    githubUrl: "https://github.com/tkhoaaa/DuAN_KMESSApp",
  },
]

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "open-source", label: "Open Source" },
] as const
