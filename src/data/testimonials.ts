export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CTO",
    company: "TechStartup Inc",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    quote: "Working with this developer was an absolute pleasure. They delivered exceptional work on time and went above and beyond to ensure everything was perfect. The attention to detail and code quality was outstanding.",
  },
  {
    id: "2",
    name: "Michael Park",
    role: "Product Manager",
    company: "Enterprise Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    quote: "One of the best developers I've worked with. They not only write clean code but also understand business requirements and propose smart solutions. Highly recommend for any frontend project.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Design Lead",
    company: "Creative Agency",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    quote: "Their ability to translate designs into pixel-perfect implementations is remarkable. They perfectly understood our design vision and brought it to life with smooth animations.",
  },
  {
    id: "4",
    name: "David Kim",
    role: "Founder",
    company: "StartupHub",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote: "Incredible developer who truly cares about the end user experience. The dashboard they built for us increased user engagement by 60% and received overwhelmingly positive feedback.",
  },
]
