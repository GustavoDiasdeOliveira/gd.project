"use client"

import { useEffect, useRef } from "react"
import { Award, ExternalLink, Calendar } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function Certificates() {
  const { t } = useLanguage()
  const items = t("certificates.items")
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
    <section id="certificados" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="orb orb-secondary w-[350px] h-[350px] bottom-1/3 -right-40 opacity-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            {t("certificates.title_part1")}{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("certificates.title_highlight")}
            </span>
          </h2>
          <div className="h-1.5 w-16 sm:w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {items.map((item: any, index: number) => (
            <div
              key={index}
              className="fade-in gradient-border group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                {item.year}
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">{item.title}</h3>
              <p className="text-sm sm:text-base text-primary font-medium mb-3 sm:mb-4">{item.issuer}</p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
