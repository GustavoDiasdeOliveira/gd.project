"use client"

import { BarChart3, Database, Workflow } from "lucide-react"

export function DataBI() {
  return (
    <section id="dados-bi" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="orb orb-primary w-[360px] h-[360px] -top-24 -right-24 opacity-10" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Em desenvolvimento ativo</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Dados &amp; <span className="bg-primary bg-clip-text text-transparent">BI</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground text-pretty">
            Estou desenvolvendo minhas habilidades em Power BI e SQL para transformar dados tratados em indicadores claros e decisões melhores — sem perder o foco em automação com n8n.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          <div className="gradient-border rounded-2xl p-5 sm:p-6">
            <BarChart3 className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2">Power BI</h3>
            <p className="text-sm text-muted-foreground">Power Query, modelagem, DAX básico, KPIs e dashboards.</p>
          </div>
          <div className="gradient-border rounded-2xl p-5 sm:p-6">
            <Database className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2">SQL</h3>
            <p className="text-sm text-muted-foreground">Em desenvolvimento, com foco em consultas, organização e análise de dados.</p>
          </div>
          <div className="gradient-border rounded-2xl p-5 sm:p-6">
            <Workflow className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2">Dados + Automação</h3>
            <p className="text-sm text-muted-foreground">n8n coleta e integra dados; Power BI transforma informação em indicadores.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
