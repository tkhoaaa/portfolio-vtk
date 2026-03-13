"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Database,
  Wrench,
  Palette,
  Box,
  FileCode,
  Layers,
  Terminal,
  Globe,
  Cloud,
  GitBranch,
} from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { skills, skillCategories } from "@/data/skills"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ElementType> = {
  react: Code2,
  typescript: FileCode,
  nextjs: Box,
  vue: Globe,
  tailwind: Layers,
  framer: Terminal,
  redux: Box,
  html: FileCode,
  nodejs: Terminal,
  express: Globe,
  postgresql: Database,
  mongodb: Database,
  graphql: Code2,
  api: Globe,
  git: GitBranch,
  docker: Cloud,
  figma: Palette,
  vscode: Terminal,
  webpack: Box,
  jest: Wrench,
}

const categoryColors: Record<string, string> = {
  frontend: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  backend: "from-green-500/20 to-emerald-500/20 border-green-500/30",
  tools: "from-orange-500/20 to-amber-500/20 border-orange-500/30",
  design: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
}

const categoryIconColors: Record<string, string> = {
  frontend: "text-blue-500",
  backend: "text-green-500",
  tools: "text-orange-500",
  design: "text-purple-500",
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full border bg-card",
                    categoryColors[category.id]
                  )}
                >
                  <Icon className={cn("w-4 h-4", categoryIconColors[category.id])} />
                  <span className="text-sm font-medium">{category.label}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code2
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={cn(
                  "group p-5 rounded-2xl border bg-card transition-all duration-300 hover:shadow-lg cursor-pointer",
                  categoryColors[skill.category]
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "p-3 rounded-xl bg-background/50",
                      categoryIconColors[skill.category]
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
