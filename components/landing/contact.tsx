"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "E-mail",
    value: "gustavodiasdeoliveira72@gmail.com",
    href: "mailto:gustavodiasdeoliveira72@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(13) 99189-5950",
    href: "tel:+5513991895950",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Praia Grande – SP (atendimento remoto)",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/gustavo-dias-de-oliveira",
    href: "https://www.linkedin.com/in/gustavo-dias-de-oliveira-615073299/",
  },
]

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await fetch("https://formsubmit.co/gustavodiasdeoliveira72@gmail.com", {
        method: "POST",
        body: formData,
      })
      setIsSubmitted(true)
      form.reset()
    } catch {
      // Form submission handled by FormSubmit
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setIsSubmitted(false), 5000)
    }
  }

  return (
    <section id="contato" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background Orbs */}
      <div className="orb orb-secondary w-[300px] h-[300px] top-20 -right-20 opacity-15" />
      <div className="orb orb-primary w-[250px] h-[250px] bottom-20 -left-20 opacity-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Vamos trabalhar{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              juntos?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Me conta seu projeto e eu te respondo em até 24h
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Left - Contact Info */}
          <div className="slide-left space-y-3 sm:space-y-4 md:space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="gradient-border p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl flex items-center gap-3 sm:gap-4 hover:-translate-y-1 transition-transform"
              >
                <div className="flex-shrink-0 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm sm:text-base font-medium hover:text-primary transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base font-medium truncate">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right - Form */}
          <div className="slide-right">
            <form
              onSubmit={handleSubmit}
              className="gradient-border p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl space-y-4 sm:space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />

              {/* Name / Company */}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  Nome / Empresa <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm sm:text-base"
                  placeholder="Seu nome ou empresa"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  E-mail <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm sm:text-base"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="service" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  Tipo de serviço
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm sm:text-base"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="automacao-n8n">Automação n8n</option>
                  <option value="inteligencia-mercado">Inteligência de Mercado</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  Descrição do projeto
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none text-sm sm:text-base"
                  placeholder="Conte um pouco sobre seu projeto..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                size="lg"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Mensagem enviada!
                  </>
                ) : (
                  <>
                    Enviar mensagem
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>

              {/* Success Message */}
              {isSubmitted && (
                <p className="text-center text-sm text-green-500 animate-in fade-in">
                  Obrigado! Entrarei em contato em breve.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
