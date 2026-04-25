"use client"

import { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

type ImageHoverZoomProps = {
  children: ReactNode
  className?: string
  scale?: number
}

const easing = [0.22, 1, 0.36, 1] as const

export function ImageHoverZoom({ children, className, scale = 1.05 }: ImageHoverZoomProps) {
  const shouldReduceMotion = useReducedMotion()
  const baseClassName = className ? `h-full w-full ${className}` : "h-full w-full"

  if (shouldReduceMotion) {
    return <div className={baseClassName}>{children}</div>
  }

  return (
    <motion.div
      className={baseClassName}
      initial={{ scale: 1 }}
      whileHover={{ scale }}
      transition={{ duration: 0.45, ease: easing }}
    >
      {children}
    </motion.div>
  )
}
