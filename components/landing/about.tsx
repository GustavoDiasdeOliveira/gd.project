"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, Check } from "lucide-react"
import Image from "next/image"

const highlights = [
  "Estudante de Ciência da Computação (UNIP)",
  "Certificado Santander Front-end – Ada Tech (2024)",
  "Imersão N8N Automação – Hashtag (2026)",
  "Praia Grande – SP | Atendimento remoto nacional",
]

export function About() {
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

    const elements = ref.current?.querySelectorAll(".fade-in, .slide-left, .slide-right")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background Orb */}
      <div className="orb orb-primary w-[350px] h-[350px] top-1/3 -left-40 opacity-15" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left - Photo */}
          <div className="slide-left flex justify-center">
            <div className="relative">
              {/* Photo Frame with Spinning Border */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden spinning-border">
                <div className="absolute inset-1 rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-card to-muted">
                  <Image src="./foto.png" alt="Gustavo Dias" fill className="object-cover" quality={100} unoptimized />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-primary/30 rounded-xl sm:rounded-2xl" />
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl sm:rounded-2xl" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="slide-right space-y-4 sm:space-y-6 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Quem é o{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Gustavo?
              </span>
            </h2>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
              <p>
                Sou estudante de Ciência da Computação na UNIP (7°/8° semestre), apaixonado 
                por tecnologia e em constante aprendizado. Atualmente estagiário de TI na 
                Mar Brasil, com experiência anterior em Inteligência de Mercado na Zukkin.
              </p>
              <p>
                Acredito que tecnologia deve ser acessível. Por isso ofereço soluções modernas 
                a preços justos para pequenas e médias empresas que querem crescer no digital.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 sm:pt-6 flex justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
              >
                <a href="./Gustavo_Dias_CV.pdf" download>
                  <Download className="w-4 h-4" />
                  Baixar currículo completo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
