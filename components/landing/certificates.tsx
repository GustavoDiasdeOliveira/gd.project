"use client"

import { useEffect, useRef } from "react"
import { Award, ExternalLink, Calendar, Download, Eye } from "lucide-react"
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
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-16 fade-in">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <Award className="h-3.5 w-3.5" />
            Formação comprovada
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            {t("certificates.title_part1")}{" "}
            <span className="bg-primary bg-clip-text text-transparent">
              {t("certificates.title_highlight")}
            </span>
          </h2>
          <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-primary to-secondary sm:w-20" />
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Cursos e certificações que reforçam minha atuação em automação, inteligência artificial, dados e desenvolvimento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {items.map((item: any, index: number) => (
            <div
              key={index}
              className="fade-in gradient-border group flex h-full flex-col rounded-xl p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:rounded-2xl sm:p-6 md:p-8"
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

              {item.file && (
                <div className="mt-auto flex w-full flex-col gap-2 pt-5 sm:w-fit sm:flex-row">
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/${item.file}`}
                    download
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/40 px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:w-auto"
                  >
                    <Download className="h-4 w-4" />
                    Baixar certificado
                  </a>
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/${item.file}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visualizar certificado: ${item.title}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-secondary/40 px-3 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground sm:w-auto"
                  >
                    <Eye className="h-4 w-4" />
                    Visualizar
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
