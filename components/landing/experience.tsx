"use client"

import { useEffect, useRef } from "react"
import { Briefcase, Calendar, ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function Experience() {
  const { t } = useLanguage()
  const items = t("experience.items")
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
    <section id="experiencia" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="orb orb-primary w-[350px] h-[350px] top-1/3 -left-40 opacity-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            {t("experience.title_part1")}{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("experience.title_highlight")}
            </span>
          </h2>
          <div className="h-1.5 w-16 sm:w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-8 sm:space-y-12">
            {items.map((item: any, index: number) => (
              <div
                key={index}
                className="fade-in relative pl-12 sm:pl-16 md:pl-20"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute left-2 sm:left-4 md:left-5 top-1 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center ring-4 ring-background z-10">
                  <Briefcase className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white" />
                </div>

                <div className="gradient-border p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{item.role}</h3>
                      <p className="text-sm sm:text-base text-primary font-semibold">{item.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      {item.period}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty mb-4 sm:mb-5">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.tags.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
