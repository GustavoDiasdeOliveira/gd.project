"use client"

import { useEffect, useRef } from "react"
import { BarChart3, Zap, Code2, GitBranch } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  Zap,
  Code2,
  GitBranch,
}

export function Skills() {
  const { t } = useLanguage()
  const categories = t("skills.categories")
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = ref.current?.querySelectorAll(".fade-in")
    elements?.forEach((el: Element) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="habilidades" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            {t("skills.title_part1")}{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("skills.title_highlight")}
            </span>
          </h2>
          <div className="h-1.5 w-16 sm:w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((cat: any, index: number) => {
            const Icon = iconMap[cat.icon] || Code2
            return (
              <div
                key={index}
                className="fade-in gradient-border group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-5">{cat.name}</h3>

                <div className="space-y-2 sm:space-y-3">
                  {cat.items.map((skill: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
