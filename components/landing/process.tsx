"use client"

import { useEffect, useRef } from "react"
import { MessageSquare, FileText, Settings, Rocket } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function Process() {
  const { t } = useLanguage()
  const stepsData = t("process.steps")
  const steps = [
    { icon: MessageSquare, number: "01", ...stepsData[0] },
    { icon: FileText, number: "02", ...stepsData[1] },
    { icon: Settings, number: "03", ...stepsData[2] },
    { icon: Rocket, number: "04", ...stepsData[3] },
  ]
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
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            {t("process.title_part1")}{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("process.title_highlight")}
            </span>
          </h2>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary -translate-y-1/2 rounded-full" />

          <div className="grid grid-cols-4 gap-4 lg:gap-6 xl:gap-8 relative">
            {steps.map((step: any, index: number) => (
              <div
                key={index}
                className="fade-in relative"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step Card */}
                <div className="gradient-border p-4 lg:p-6 rounded-xl lg:rounded-2xl text-center hover:-translate-y-2 transition-transform">
                  {/* Number Badge */}
                  <div className="absolute -top-3 lg:-top-4 left-1/2 -translate-x-1/2 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xs lg:text-sm">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="inline-flex p-3 lg:p-4 rounded-lg lg:rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-3 lg:mb-4 mt-3 lg:mt-4">
                    <step.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base lg:text-lg font-bold mb-1.5 lg:mb-2 text-balance">{step.title}</h3>
                  <p className="text-xs lg:text-sm text-muted-foreground text-pretty">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full" />

          <div className="space-y-8">
            {steps.map((step: any, index: number) => (
              <div
                key={index}
                className="fade-in relative pl-16"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Number Badge */}
                <div className="absolute left-2 top-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                  {step.number}
                </div>

                {/* Step Card */}
                <div className="gradient-border p-6 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
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
