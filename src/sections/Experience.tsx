"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { experiences } from "@/data/experience"
import { cn } from "@/lib/utils"
import { Briefcase } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey through the years"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={cn(
        "relative grid md:grid-cols-2 gap-8 md:gap-12",
        isLeft ? "md:text-right" : "md:contents"
      )}
    >
      {/* Empty div for left side on right-aligned items */}
      {isLeft && <div className="hidden md:block" />}

      {/* Timeline Dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
          className="relative w-4 h-4 rounded-full bg-primary border-4 border-background z-10"
        >
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
        </motion.div>
      </div>

      {/* Content */}
      <div
        className={cn(
          "relative",
          !isLeft && "md:row-start-1"
        )}
      >
        {/* Mobile Timeline Dot */}
        <div className="md:hidden absolute -left-5 top-6 w-3 h-3 rounded-full bg-primary border-2 border-background" />

        <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
          {/* Period */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Briefcase className="w-4 h-4" />
            <span className="font-medium">{experience.period}</span>
          </div>

          {/* Role */}
          <h3 className="font-semibold text-lg mb-1">
            {experience.role}
          </h3>

          {/* Company */}
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <span className="font-medium">{experience.company}</span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4">
            {experience.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-2">
            {experience.highlights.map((highlight, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
