"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedContainerProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function AnimatedContainer({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
  direction = "up",
}: AnimatedContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
