"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, MessageCircle, Download, ArrowRight, Loader2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

export function Hero() {
  const { t } = useLanguage()
  const typingTexts = t("hero.typing")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    if (isDownloading) return;
    setIsDownloading(true);
    
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = './Gustavo_Dias_CV.pdf';
      link.download = 'Gustavo_Dias_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 3000);
  }

  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
        }
      }
    }, isDeleting ? 30 : 80)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex, typingTexts])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="orb orb-primary w-[500px] h-[500px] -top-40 -right-40 opacity-30" />
      <div className="orb orb-secondary w-[400px] h-[400px] bottom-20 -left-40 opacity-20" />
      
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
                           linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[7,22,38,51,64,12,45,73,86,33,55,18,91,29,68].map((pos: number, i: number) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${pos}%`,
              animationDelay: `${(i * 1.7) % 15}s`,
              animationDuration: `${15 + (i * 0.7) % 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">{t("hero.badge")}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.15] text-balance">
                {t("hero.title_part1")}{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {t("hero.title_highlight")}
                </span>
              </h1>

              {/* Typing Effect */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-base sm:text-lg md:text-xl text-muted-foreground">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span className="typing-cursor min-h-[1.5em]">{displayText}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 text-pretty">
              {t("hero.description")}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white gap-2"
              >
                <Link href="#projetos">
                  {t("hero.cta_projects")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 border-primary/30 hover:bg-primary/10"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                {isDownloading ? t("hero.cv_downloading") : t("hero.cta_cv")}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
              <span className="text-sm text-muted-foreground">{t("hero.social")}</span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/gustavo-dias-de-oliveira-615073299/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full glass hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/GustavoDiasdeOliveira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full glass hover:bg-primary/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/5513991895950?text=${encodeURIComponent(t("whatsapp.message"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full glass hover:bg-primary/20 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative flex justify-center order-first lg:order-last">
            {/* Photo Frame with Spinning Border */}
            <div className="relative">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden spinning-border">
                <div className="absolute inset-1 rounded-full overflow-hidden bg-gradient-to-br from-card to-muted">
                  <img src="./foto.png" alt="Gustavo Dias" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass border border-primary/30 animate-bounce">
                <span className="font-semibold text-xs sm:text-sm">n8n</span>
              </div>
              <div className="absolute top-1/4 -left-4 sm:-left-8 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass border border-secondary/30 animate-bounce" style={{ animationDelay: '0.5s' }}>
                <span className="font-semibold text-xs sm:text-sm">React</span>
              </div>
              <div className="absolute bottom-1/4 -right-4 sm:-right-8 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass border border-primary/30 animate-bounce" style={{ animationDelay: '1s' }}>
                <span className="font-semibold text-xs sm:text-sm">IA</span>
              </div>
              <div className="absolute -bottom-2 left-1/4 sm:-bottom-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass border border-secondary/30 animate-bounce" style={{ animationDelay: '1.5s' }}>
                <span className="font-semibold text-xs sm:text-sm">AI Agent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
