import { motion } from "framer-motion"
import { Github, Facebook, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { socials } from "@/data/personal"
import { cn } from "@/lib/utils"

const iconMap = {
  github: Github,
  facebook: Facebook,
  instagram: Instagram,
  email: Mail,
}

interface SocialLink {
  platform: keyof typeof socials
  href: string
}

const socialLinks: SocialLink[] = [
  { platform: "github", href: socials.github },
  { platform: "facebook", href: socials.facebook },
  { platform: "instagram", href: socials.instagram },
  { platform: "email", href: socials.email },
]

interface SocialLinksProps {
  className?: string
  variant?: "default" | "outline" | "ghost"
}

export function SocialLinks({
  className,
  variant = "default",
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((link, index) => {
        const Icon = iconMap[link.platform]
        return (
          <motion.div
            key={link.platform}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              variant={variant}
              size="icon"
              asChild
              className="rounded-full"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${link.platform}`}
              >
                <Icon className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        )
      })}
    </div>
  )
}
