"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Ciber Prime",
    type: "Landing Page Corporativa",
    description:
      "Landing page responsiva para empresa de tecnologia focada em soluções digitais, automação e web design.",
    tags: ["HTML", "CSS", "JavaScript", "Responsivo"],
    liveUrl: "https://gustavodiasdeoliveira.github.io/ciberprime/",
    githubUrl: "https://github.com/GustavoDiasdeOliveira/ciberprime",
    gradient: "from-primary to-secondary",
  },
  {
    title: "Fiesta Finança",
    type: "App de Controle Financeiro",
    description:
      "Aplicação web para controle de finanças pessoais com interface intuitiva e armazenamento local.",
    tags: ["JavaScript", "LocalStorage", "UI/UX"],
    liveUrl: "https://gustavodiasdeoliveira.github.io/Portfolio",
    githubUrl: null,
    gradient: "from-secondary to-orange-400",
  },
  {
    title: "ZBOT",
    type: "Chatbot Corporativo",
    description:
      "Mini chatbot desenvolvido para a empresa Zukkin para tirar dúvidas de novos estagiários de forma automatizada.",
    tags: ["Automação", "IA", "n8n"],
    liveUrl: "https://gustavodiasdeoliveira.github.io/Portfolio",
    githubUrl: null,
    gradient: "from-orange-400 to-primary",
  },
  {
    title: "Gerenciador de Concursos",
    type: "SaaS / Productivity App",
    description:
      "Cronograma de estudos interativo com checklist, progresso salvo, dark mode, filtros e exportação CSV.",
    tags: ["JavaScript", "LocalStorage", "Produtividade"],
    liveUrl: "https://gustavodiasdeoliveira.github.io/gerenciadorConcursoPublico/",
    githubUrl: "https://github.com/GustavoDiasdeOliveira/gerenciadorConcursoPublico",
    gradient: "from-primary via-secondary to-orange-400",
  },
]

export function Projects() {
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
    <section id="projetos" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background Orb */}
      <div className="orb orb-secondary w-[400px] h-[400px] -bottom-40 -right-40 opacity-15" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Projetos que já{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              desenvolvi
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Veja alguns trabalhos reais
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="fade-in gradient-border group rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Thumbnail */}
              <div
                className={`relative h-40 sm:h-48 md:h-56 bg-gradient-to-br ${project.gradient} p-4 sm:p-6 flex items-center justify-center`}
              >
                {/* Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full glass text-[10px] sm:text-xs font-semibold">
                  {project.type}
                </div>

                {/* Project Name */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center text-balance">
                  {project.title}
                </h3>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 sm:gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      aria-label="Ver projeto"
                    >
                      <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      aria-label="Ver código"
                    >
                      <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-pretty">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag, i) => (
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

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12 fade-in">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto gap-2 border-primary/30 hover:bg-primary/10"
          >
            <a
              href="https://gustavodiasdeoliveira.github.io/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver todos os projetos
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
