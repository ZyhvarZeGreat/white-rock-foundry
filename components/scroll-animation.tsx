"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out"

interface ScrollAnimationProps {
  children: ReactNode
  type?: AnimationType
  delay?: number
  threshold?: number
  className?: string
}

export function ScrollAnimation({
  children,
  type = "fade-up",
  delay = 0,
  threshold = 0.1,
  className,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (ref.current) {
                ref.current.style.opacity = "1"
                ref.current.style.transform = "translate(0, 0) scale(1)"
              }
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, threshold])

  const getInitialStyles = () => {
    switch (type) {
      case "fade-up":
        return { opacity: 0, transform: "translate(0, 40px)" }
      case "fade-down":
        return { opacity: 0, transform: "translate(0, -40px)" }
      case "fade-left":
        return { opacity: 0, transform: "translate(40px, 0)" }
      case "fade-right":
        return { opacity: 0, transform: "translate(-40px, 0)" }
      case "zoom-in":
        return { opacity: 0, transform: "scale(0.95)" }
      case "zoom-out":
        return { opacity: 0, transform: "scale(1.05)" }
      default:
        return { opacity: 0, transform: "translate(0, 40px)" }
    }
  }

  return (
    <div ref={ref} className={cn("transition-all duration-700 ease-out", className)} style={getInitialStyles()}>
      {children}
    </div>
  )
}
