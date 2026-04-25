"use client"

import { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

type RevealOnScrollProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  once?: boolean
  amount?: number
}

const easing = [0.22, 1, 0.36, 1] as const

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  duration = 0.65,
  y = 24,
  once = true,
  amount = 0.25,
}: RevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: easing }}
    >
      {children}
    </motion.div>
  )
}
