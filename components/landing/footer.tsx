"use client"

import Link from "next/link"
import { Github, Linkedin, MessageCircle, ArrowUp } from "lucide-react"

const footerLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
]

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/gustavo-dias-de-oliveira-615073299/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/GustavoDiasdeOliveira",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://wa.me/5513991895950?text=Olá%20Gustavo%2C%20vi%20seu%20site%20e%20gostaria%20de%20um%20orçamento!",
    icon: MessageCircle,
    label: "WhatsApp",
  },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Logo & Tagline */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <Link href="#inicio" className="inline-flex items-center gap-1 text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              <img src="./logoGDHeader.png" alt="GD Logo" className="h-8 w-auto" />
            </Link>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed text-pretty">
              Transformando ideias em resultados digitais
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Links Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Contato</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:gustavodiasdeoliveira72@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  gustavodiasdeoliveira72@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+5513991895950" className="hover:text-primary transition-colors">
                  (13) 99189-5950
                </a>
              </li>
              <li>Praia Grande – SP</li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-2 sm:col-span-1 text-center sm:text-left">
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Redes Sociais</h4>
            <div className="flex justify-center sm:justify-start gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-full glass hover:bg-primary/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-border">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © 2026 Gustavo Dias de Oliveira — Feito com 💻 e ☕
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            aria-label="Voltar ao topo"
          >
            Voltar ao topo
            <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
