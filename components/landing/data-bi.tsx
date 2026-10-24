"use client"

import { BarChart3, Database, Workflow } from "lucide-react"

export function DataBI() {
  return (
    <section id="dados-bi" className="relative overflow-hidden bg-[linear-gradient(120deg,rgba(255,107,26,0.07),transparent_38%,rgba(17,141,255,0.08))] py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="orb orb-primary w-[360px] h-[360px] -top-24 -right-24 opacity-10" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F2C811] mb-3">Dados que orientam decisões</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Dados &amp; <span className="bg-[linear-gradient(90deg,#F2C811,#118DFF)] bg-clip-text text-transparent">BI</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground text-pretty">
            Transformo dados tratados em indicadores claros e decisões melhores, conectando Power BI, SQL e automação com n8n.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          <div className="gradient-border rounded-2xl p-5 sm:p-6">
            <BarChart3 className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2">Power BI</h3>
            <p className="text-sm text-muted-foreground">Power Query, modelagem, DAX, KPIs e dashboards executivos.</p>
          </div>
          <div className="gradient-border rounded-2xl p-5 sm:p-6">
            <Database className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2">SQL</h3>
            <p className="text-sm text-muted-foreground">Consultas, organização e análise de dados para bases mais confiáveis.</p>
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
