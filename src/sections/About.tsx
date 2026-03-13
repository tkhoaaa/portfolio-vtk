"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { stats } from "@/data/skills"
import { personalInfo } from "@/data/personal"

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return <span ref={ref}>{count}{suffix}</span>
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <SectionHeading
          title="About Me"
          subtitle="A passionate frontend developer dedicated to building exceptional digital experiences"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-display font-semibold">
              Crafting Digital Experiences with Code & Passion
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a frontend developer with a passion for creating beautiful,
                functional, and user-centric web applications. With over 5 years
                of experience in the industry, I've had the privilege of working
                with startups and enterprises to bring their digital visions to life.
              </p>
              <p>
                My approach combines technical expertise with a deep understanding
                of user experience. I believe that great software isn't just about
                clean code—it's about solving real problems and creating meaningful
                interactions that delight users.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            {/* Location & Availability */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                {personalInfo.availability}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                📍 {personalInfo.location}
              </div>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
