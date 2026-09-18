"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight, Eye } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

const projects = [
  {
    title: "Automação Assinatura de Email Corporativa — Mar Brasil",
    type: "Automação & IA",
    category: "Automações",
    description: "Sistema completo que automatiza a criação de assinaturas de email corporativas. O usuário acessa um formulário, preenche Nome, Cargo, Telefone, Email e foto empresarial. A automação n8n processa e gera a assinatura formatada automaticamente, enviando via WhatsApp pronta para uso. Economia de tempo e padronização visual garantida.",
    tags: ["n8n", "Webhooks", "Formulário Web", "Processamento de Imagem", "WhatsApp API", "Gmail", "Automação Corporativa"],
    liveUrl: null,
    githubUrl: null,
    gradient: "from-[#00D4AA] to-[#00A88C]",
    status: "Em produção",
    image: null,
    featured: true,
  },
  {
    title: "Automação Cartões de Aniversário e Boas-vindas",
    type: "Automação & Notificação",
    category: "Automações",
    description: "Workflow automatizado que dispara cartões digitais personalizados para aniversariantes e novos colaboradores. Integrado com calendários e base de dados, envia via email ou WhatsApp com mensagens customizadas. Aumenta engajamento e humaniza a comunicação interna.",
    tags: ["n8n", "Calendário de Eventos", "Geração de Imagens", "WhatsApp/Email", "Personalização", "RPA"],
    liveUrl: null,
    githubUrl: null,
    gradient: "from-[#FF6B6B] to-[#FF8E72]",
    status: "Em produção",
    image: null,
    featured: true,
  },
  {
    title: "AI Agent — Assistente Nutricionista \"Thiago\" 24/7",
    type: "IA & Automação",
    category: "Automações",
    description: "Agente conversacional de IA completo que funciona 24/7. Realiza cadastro de clientes, coleta biometria e objetivos de treino. Gera planos alimentares personalizados (7 dias) com IA (Gemini/OpenAI), documenta em Google Docs formatado e envia por email. Integrado com Google Sheets para gestão de alunos.",
    tags: ["n8n", "IA Agent", "Google Sheets", "Google Docs", "Gemini/OpenAI", "Gmail", "Webhook Chat"],
    liveUrl: null,
    githubUrl: null,
    gradient: "from-[#667EEA] to-[#764BA2]",
    status: "Em produção",
    image: null,
    featured: true,
  },
  {
    title: "Chatbot Empresarial Completo 24/7 — Rancho da Praia",
    type: "IA & WhatsApp",
    category: "Automações",
    description: "Agente \"Fabi\" inteligente em produção operando 24/7. Atendimento comercial completo: qualificação de leads, agendamento de eventos, respostas a dúvidas. Integração com RD Station CRM, Google Calendar, Calendly e Supabase. Self-hosted em Docker com Evolution API. Histórico em Redis e suporte total via WhatsApp.",
    tags: ["n8n", "Evolution API Docker", "RD Station", "Calendly", "Supabase", "Redis", "WhatsApp Business", "Production"],
    liveUrl: null,
    githubUrl: null,
    gradient: "from-[#00D4FF] to-[#0066FF]",
    status: "Em produção",
    image: null,
    featured: true,
  },
  {
    title: "Dashboard de Ativos TI & Automação — Mar Brasil",
    type: "Power BI & Automação",
    category: "Automações",
    description: "Sistema de monitoramento e controle de inventário de TI. Integra MaaS360 (MDM) e Auvo 2.0 automaticamente via n8n. Dashboard Power BI em tempo real para tomada de decisão. Fornece insights sobre ativos, contratos e manutenção preventiva.",
    tags: ["n8n", "Power BI", "MaaS360", "Auvo 2.0", "BI", "Data Pipeline", "Production"],
    liveUrl: null,
    githubUrl: null,
    gradient: "from-[#FF9500] to-[#FF6B35]",
    status: "Em produção",
    image: null,
  },
  {
    title: "Site + AI Agent — Clínica Vita Saúde (\"Sofia\")",
    type: "Web + IA",
    category: "Web",
    description: "Landing page responsiva + chatbot de IA embarcado. Widget de chat que responde dúvidas sobre serviços clínicos e realiza agendamentos em tempo real. Integração com Google Calendar e Supabase para gestão de pacientes.",
    tags: ["HTML/CSS/JS", "n8n", "Supabase", "Google Calendar", "Chat Widget", "Responsivo"],
    liveUrl: null,
    githubUrl: null,
    gradient: "from-[#06B6D4] to-[#0891B2]",
    image: "./vita-saude-thumb.jpg",
  },
  {
    title: "Landing Page — Ciber Prime",
    type: "Landing Page",
    category: "Web",
    description: "Landing page corporativa de alta conversão. Portfólio visual de soluções: sites, automação e inteligência de mercado. Design moderno, responsivo, com calls-to-action estratégicos para lead generation.",
    tags: ["HTML/CSS/JS", "Responsivo", "Design", "Lead Gen"],
    liveUrl: "https://gustavodiasdeoliveira.github.io/ciberprime/",
    githubUrl: "https://github.com/GustavoDiasdeOliveira/ciberprime",
    gradient: "from-primary to-secondary",
    image: "./ciberprime-thumb.png",
  },
  {
    title: "ZBOT — Chatbot Interno (Zukkin)",
    type: "Chatbot & IA",
    category: "Web",
    description: "Chatbot web interno construído do zero para automação de suporte e onboarding. Auxilia novos estagiários com dúvidas sobre processos, varredura de dados e rotinas da empresa. Integrado com n8n para inteligência de mercado.",
    tags: ["HTML/CSS/JS", "n8n", "Chatbot", "RPA", "Suporte Interno"],
    liveUrl: "https://gustavodiasdeoliveira.github.io/ZBot/varredura.html",
    githubUrl: "https://github.com/GustavoDiasdeOliveira/ZBot",
    gradient: "from-orange-400 to-primary",
    image: null,
  },
  {
    title: "Orça+ — Sistema de Controle Financeiro",
    type: "SaaS",
    category: "Web",
    description: "Aplicação SaaS para gestão financeira empresarial. Controle de custos, movimentações de entrada/saída de transações com dashboards analíticos. Interface intuitiva para PMEs.",
    tags: ["Lovable", "SaaS", "Fintech", "Dashboard"],
    liveUrl: "https://gustavofinancesapp.lovable.app/",
    githubUrl: null,
    gradient: "from-orange-400 to-primary",
    image: null,
  },
  {
    title: "Landing Page — Fabiana Rocco (Psicopedagoga)",
    type: "Landing Page",
    category: "Web",
    description: "Site institucional freelance para captação de clientes. Desenvolvido do briefing à publicação com foco em usabilidade, conversão e design limpo e profissional.",
    tags: ["HTML/CSS/JS", "Design", "Responsivo", "Freelance"],
    liveUrl: null,
    githubUrl: null,
    gradient: "from-secondary to-orange-400",
    image: null,
  }
]

export function Projects() {
  const { t } = useLanguage()
  const categories = [t("projects.all"), t("projects.automation"), t("projects.web")]
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [visibleCount, setVisibleCount] = useState(4) 
  const ref = useRef<HTMLDivElement>(null)

  const filteredProjects = projects.filter(
    (project) => activeCategory === categories[0] || project.category === (activeCategory === categories[1] ? "Automações" : activeCategory === categories[2] ? "Web" : "")
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
