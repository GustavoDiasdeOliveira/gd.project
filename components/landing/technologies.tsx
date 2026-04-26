"use client"

import { useEffect, useRef } from "react"

const technologies = [
  { name: "HTML5", icon: "./icons/icons8-html-5-48.png" },
  { name: "CSS3", icon: "./icons/icons8-css3-48.png" },
  { name: "JavaScript", icon: "./icons/icons8-js-48.png" },
  { name: "Figma", icon: "./icons/icons8-figma-48.png" },
  { name: "n8n", icon: "./icons/n8n-color.png" },
  { name: "GitHub", icon: "./icons/icons8-github-2-50.png" },
  { name: "Google Sheets", icon: "./icons/icons8-google-sheets-48.png" },
  { name: "WhatsApp API", icon: "./icons/icons8-whatsapp-48.png" },
  { name: "Python", icon: "./icons/icons8-python-48.png" },
]

export function Technologies() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = ref.current?.querySelectorAll(".fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Ferramentas que{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              utilizo
            </span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative fade-in">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <div className="tech-carousel flex gap-3 sm:gap-4 md:gap-6 w-max">
              {/* First set */}
              {technologies.map((tech, index) => (
                <div
                  key={`a-${index}`}
                  className="gradient-border group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl hover:-translate-y-1 transition-transform cursor-default"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                    <img src={tech.icon} alt={tech.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
              {/* Second set for infinite scroll */}
              {technologies.map((tech, index) => (
                <div
                  key={`b-${index}`}
                  className="gradient-border group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl hover:-translate-y-1 transition-transform cursor-default"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                    <img src={tech.icon} alt={tech.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
