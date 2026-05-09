"use client"

import { useEffect, useRef, useState } from "react"
import { Monitor, Zap, GraduationCap, Coffee } from "lucide-react"

const stats = [
  { icon: Monitor, value: 12, suffix: "+", label: "Projetos Criados" },
  { icon: Zap, value: 3, suffix: "+", label: "Automações prontas" },
  { icon: GraduationCap, value: 2, suffix: "", label: "Certificados Tech" },
  { icon: Coffee, value: null, suffix: "∞", label: "E apenas começando" },
]

function useCountUp(end: number | null, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!start || end === null) return
    
    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, start])
  
  return count
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({
  stat,
  isVisible,
  delay,
}: {
  stat: (typeof stats)[0]
  isVisible: boolean
  delay: number
}) {
  const count = useCountUp(stat.value, 2000, isVisible)
  const Icon = stat.icon

  return (
    <div
      className="gradient-border group p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center transition-transform duration-300 hover:-translate-y-2"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-3 sm:mb-4">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary" />
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 sm:mb-2">
        {stat.value !== null ? count : ""}{stat.suffix}
      </div>
      <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-balance">{stat.label}</p>
    </div>
  )
}
