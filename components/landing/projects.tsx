"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight, Eye } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

const projects = [
  {
    title: "AI Agent WhatsApp — Rancho da Praia",
    type: "Automação & IA",
    category: "Automações",
    description: "Agente \"Fabi\", com atendimento comercial, qualificação de leads e reservas via WhatsApp, self-hosted em container Docker. Integração de pipeline no RD Station CRM, agendamentos no Google Calendar/Calendly e banco de dados Supabase.",
    tags: ["n8n", "Evolution API (Docker)", "RD Station CRM", "Calendly", "Google Calendar", "Supabase", "Redis", "Gmail"],
    liveUrl: null,
    githubUrl: null,
    gradient: "from-[#0066FF] to-[#00C2FF]",
    status: "Em produção",
    image: null,
  },
  {
    title: "AI Agent — Assistente de Nutrição \"Thiago\"",
    type: "Automação & IA",
    category: "Automações",
    description: "Cadastro e gestão de alunos + sub-workflow que gera plano alimentar personalizado de 7 dias com LLM (OpenAI/Gemini), salva o documento formatado em Google Docs e envia automaticamente por e-mail.",
    tags: ["n8n", "Google Sheets", "Google Docs", "Gmail", "OpenAI / Gemini"],
    liveUrl: null,
    githubUrl: null,
    gradient: "from-primary to-secondary",
    image: null,
  },
  {
    title: "Site + AI Agent — Clínica Vita Saúde (\"Sofia\")",
    type: "Web + IA",
    category: "Automações",
    description: "Landing page responsiva com agente de IA embarcado (chat widget) que responde dúvidas e realiza agendamentos em tempo real via automação n8n.",
    tags: ["HTML/CSS/JS", "n8n", "Supabase", "Google Calendar API"],
    liveUrl: null,
    githubUrl: null,
    gradient: "from-[#0066FF] to-[#00C2FF]",
    image: "./vita-saude-thumb.jpg",
  },
  {
    title: "Dashboard de Ativos TI — Mar Brasil",
    type: "BI & Automação",
    category: "Automações",
    description: "Sistema de monitoramento de inventário de TI integrando MaaS360 e Auvo 2.0 com dashboard Power BI automatizado via n8n para apoio à tomada de decisão.",
    tags: ["n8n", "Power BI", "MaaS360", "Auvo 2.0", "Suporte TI"],
    liveUrl: null,
    githubUrl: null,
    gradient: "from-primary via-secondary to-orange-400",
    status: "Em produção",
    image: null,
  },
  {
    title: "Landing Page — Ciber Prime",
    type: "Landing Page",
    category: "Landing Page",
    description: "Landing Page responsiva corporativa. Transformamos ideias em soluções digitais: sites, automação e inteligência de mercado para escalar negócios.",
    tags: ["Empresarial", "Lead Gen", "HTML/CSS/JS"],
    liveUrl: "https://gustavodiasdeoliveira.github.io/ciberprime/",
    githubUrl: "https://github.com/GustavoDiasdeOliveira/ciberprime",
    gradient: "from-primary to-secondary",
    image: "./ciberprime-thumb.png",
  },
  {
    title: "Landing Page — Fabiana Rocco (Psicopedagoga)",
    type: "Landing Page",
    category: "Landing Page",
    description: "Site institucional freelance para captação de clientes, desenvolvido do briefing à publicação. Foco em usabilidade, conversão e design limpo.",
    tags: ["HTML", "CSS", "JavaScript", "Design Responsivo"],
    liveUrl: null,
    githubUrl: null,
    gradient: "from-secondary to-orange-400",
    image: null,
  },
  {
    title: "ZBOT — Chatbot Interno (Zukkin)",
    type: "IM & Automação",
    category: "Apps",
    description: "Automação de suporte via chatbot web construído do zero para onboarding e dúvidas de novos estagiários do time virtual sobre varredura de dados e processos internos.",
    tags: ["HTML", "CSS", "JavaScript", "n8n", "Inteligência de Mercado"],
    liveUrl: "https://gustavodiasdeoliveira.github.io/ZBot/varredura.html",
    githubUrl: "https://github.com/GustavoDiasdeOliveira/ZBot",
    gradient: "from-orange-400 to-primary",
    image: null,
  },
  {
    title: "Orça+",
    type: "SaaS & IA",
    category: "Apps",
    description: "Sistema Financeiro que faz o controle de custos e as movimentações de entrada e saída de transações.",
    tags: ["Lovable", "Empresarial", "Automação com IA"],
    liveUrl: "https://gustavofinancesapp.lovable.app/",
    githubUrl: null,
    gradient: "from-orange-400 to-primary",
    image: null,
  }
]

export function Projects() {
  const { t } = useLanguage()
  const categories = [t("projects.all"), t("projects.landing"), t("projects.automation"), t("projects.apps")]
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [visibleCount, setVisibleCount] = useState(2)
  const ref = useRef<HTMLDivElement>(null)

  const filteredProjects = projects.filter(
    (project) => activeCategory === categories[0] || project.category === (activeCategory === categories[1] ? "Landing Page" : activeCategory === categories[2] ? "Automações" : activeCategory === categories[3] ? "Apps" : "")
  )

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
  }, [visibleCount, activeCategory])  

  return (
    <section id="projetos" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background Orb */}
      <div className="orb orb-secondary w-[400px] h-[400px] -bottom-40 -right-40 opacity-15" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            {t("projects.title_part1")}{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("projects.title_highlight")}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4 mb-8">
            {t("projects.subtitle")}
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 fade-in">
            {categories.map((category: string) => (
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
          {filteredProjects.slice(0, visibleCount).map((project: any, index: number) => (
            <div
              key={`${project.title}-${index}`}
              className={`fade-in gradient-border group rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${project.status === 'Em desenvolvimento' ? 'opacity-80 hover:opacity-100' : ''}`}
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
                {/* Status Badge */}
                {project.status === 'Em desenvolvimento' && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border-dashed border border-white/50 bg-black/30 text-white text-[10px] sm:text-xs font-semibold">
                    Em breve
                  </div>
                )}

                {/* Project Image or Name */}
                {project.image ? (
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  </div>
                ) : (
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center text-balance z-10">
                    {project.title}
                  </h3>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 z-20 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 sm:gap-4">
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
                  {project.category === "Automações" ? (
                    <span className="px-3.5 py-1.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm text-white text-xs font-medium shadow-md">
                      Fluxo de Automação
                    </span>
                  ) : (
                    <>
                      {project.liveUrl && project.status !== 'Em desenvolvimento' && (
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
                      {project.status === 'Em desenvolvimento' && (
                        <span
                          className="p-2.5 sm:p-3 rounded-full bg-white/20 text-white text-xs font-medium cursor-not-allowed"
                        >
                          Em breve
                        </span>
                      )}
                      {project.githubUrl && project.status !== 'Em desenvolvimento' && (
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
                    </>
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
                  {project.tags.map((tag: string, i: number) => (
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
              {t("projects.more_projects")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
