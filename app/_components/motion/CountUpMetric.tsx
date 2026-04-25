"use client"

import { animate, useInView, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

type CountUpMetricProps = {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}

export function CountUpMetric({
  end,
  duration = 1.7,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: CountUpMetricProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const shouldReduceMotion = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) {
      return
    }

    if (shouldReduceMotion) {
      return
    }

    const controls = animate(0, end, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(latest),
    })

    return () => {
      controls.stop()
    }
  }, [duration, end, isInView, shouldReduceMotion])

  const displayValue = shouldReduceMotion && isInView ? end : value
  const formattedValue =
    decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toLocaleString("pt-BR")

  return (
    <p ref={ref} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </p>
  )
}
