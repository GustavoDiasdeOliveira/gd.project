"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Code2, Zap, BarChart3, ArrowRight, Flame } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Landing Pages que Convertem",
    description:
      "Criação de websites modernos, responsivos e de alta performance. Utilizando React e tecnologias de ponta para o seu negócio alcançar o próximo nível.",
    tools: ["Html/Css", "React", "Next.js", "JavaScript", "Figma", "Tailwind CSS", "GitHub"],
    cta: "Quero um site moderno",
    badge: null,
  },
  {
    icon: Zap,
    title: "Automações Inteligentes com n8n",
    description:
      "Automatizo processos repetitivos da sua empresa integrando WhatsApp, Google Sheets, APIs e muito mais. Economize horas de trabalho manual toda semana.",
    tools: ["n8n", "WhatsApp API", "Google Sheets", "Agentes de IA", "Webhooks"],
    cta: "Quero automatizar meu negócio",
    badge: "Mais procurado",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados Freelancer",
    description:
      "Atuação dedicada como freelancer para coleta, tratamento e análise de dados. Com experiência real de mercado (ex: Zukkin) e facilidade de aprendizado rápido, me adapto ao seu negócio para entregar varreduras automatizadas, relatórios de pricing e insights valiosos.",
    tools: ["Python", "Excel", "Web Scraping", "Análise de Concorrência", "Pricing"],
    cta: "Quero potencializar meus dados",
    badge: null,
  },
]

export function Services() {
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
    <section id="servicos" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background Orb */}
      <div className="orb orb-primary w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            O que posso fazer{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              por você
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Soluções digitais completas para fazer seu negócio crescer
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="fade-in gradient-border group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute -top-3 right-4 sm:right-6 flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-[10px] sm:text-xs font-semibold">
                  <Flame className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  {service.badge}
                </div>
              )}

              {/* Icon */}
              <div className="inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-balance">{service.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-pretty">
                {service.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {service.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-muted text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button
                asChild
                variant="ghost"
                className="gap-2 text-primary hover:text-primary hover:bg-primary/10 p-0 text-sm sm:text-base"
              >
                <a
                  href="https://wa.me/5513991895950?text=Olá%20Gustavo%2C%20tenho%20interesse%20nos%20seus%20serviços!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {service.cta}
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
