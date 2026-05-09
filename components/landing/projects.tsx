"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight, Eye } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Vita Saúde",
    type: "Automação com IA + Frontend",
    category: "Automações",
    description: "Clínica médica premium com assistente virtual (Sofia) integrada via n8n para agendamentos e suporte humanizado.",
    tags: ["n8n", "IA", "Frontend", "Automação"],
    liveUrl: "/vita-saude/index.html",
    githubUrl: null,
    gradient: "from-[#0066FF] to-[#00C2FF]",
    image: "/vita-saude-thumb.jpg",
  },
  {
    title: "Ciber Prime",
    type: "Landing Page Corporativa",
    category: "Landing Page",
    description:
      "Especialista em Desenvolvimento de Software, Criação de sites, landing pages e inteligência de mercado. Levando o negócio ao próximo nível digital.",
    tags: ["HTML", "CSS", "JavaScript", "Responsivo"],
    liveUrl: "https://gustavodiasdeoliveira.github.io/ciberprime/",
    githubUrl: "https://github.com/GustavoDiasdeOliveira/ciberprime",
    gradient: "from-primary to-secondary",
    image: "/ciberprime-thumb.png",
  },
  {
    title: "Fiesta Finança",
    type: "App de Controle Financeiro",
    category: "Apps",
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
    category: "Automações",
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
    category: "Apps",
    description:
      "Cronograma de estudos interativo com checklist, progresso salvo, dark mode, filtros e exportação CSV.",
    tags: ["JavaScript", "LocalStorage", "Produtividade"],
    liveUrl: "https://gustavodiasdeoliveira.github.io/gerenciadorConcursoPublico/",
    githubUrl: "https://github.com/GustavoDiasdeOliveira/gerenciadorConcursoPublico",
    gradient: "from-primary via-secondary to-orange-400",
  },
]

const categories = ["Todos os projetos", "Landing Page", "Automações", "Apps"]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos os projetos")
  const [visibleCount, setVisibleCount] = useState(2)
  const ref = useRef<HTMLDivElement>(null)

  const filteredProjects = projects.filter(
    (project) => activeCategory === "Todos os projetos" || project.category === activeCategory
  )

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
  }, [visibleCount, activeCategory])  

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
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4 mb-8">
            Veja alguns trabalhos reais
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => {
                  setActiveCategory(category)
                  setVisibleCount(2)
                }}
                className={`rounded-full transition-all duration-300 ${
                  activeCategory === category 
                    ? "shadow-md hover:shadow-lg" 
                    : "border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 min-h-[400px]">
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="fade-in gradient-border group rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Thumbnail */}
              <div
                className={`relative h-40 sm:h-48 md:h-56 bg-gradient-to-br ${project.gradient} p-4 sm:p-6 flex items-center justify-center`}
              >
                {/* Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full glass text-[10px] sm:text-xs font-semibold">
                  {project.type}
                </div>

                {/* Project Image or Name */}
                {project.image ? (
                  <div className="absolute inset-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  </div>
                ) : (
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center text-balance z-10">
                    {project.title}
                  </h3>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 sm:gap-4">
                  {project.image && (
                    <a
                      href={project.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      aria-label="Visualizar imagem"
                    >
                      <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </a>
                  )}
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
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-12 fade-in">
              <p className="text-muted-foreground text-lg">Nenhum projeto encontrado nesta categoria.</p>
            </div>
          )}
        </div>

        {/* View All Button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-8 sm:mt-10 md:mt-12 fade-in">
            <Button
              onClick={() => setVisibleCount(filteredProjects.length)}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2 border-primary/30 hover:bg-primary/10 cursor-pointer"
            >
              Ver mais projetos
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
