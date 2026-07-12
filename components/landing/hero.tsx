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
      link.href = '/Gustavo_CV_2026.pdf';
      link.download = 'Gustavo_CV_2026.pdf';
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold leading-[1.15] text-balance">
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
            <div className="orbit-wrapper">
              <div className="orbit-ring">
                <div className="orbit-badge b1">
                  <img src="./icons/n8n-color.png" alt="n8n" className="w-5 h-5 object-contain" />
                  n8n
                </div>
                <div className="orbit-badge b2">
                  <img src="./icons/ia.png" alt="IA" className="w-5 h-5 object-contain" />
                  IA
                </div>
                <div className="orbit-badge b3">
                  <img src="./icons/ai-agent.png" alt="AI Agent" className="w-5 h-5 object-contain" />
                  AI Agent
                </div>
                <div className="orbit-badge b4">
                  <img src="./icons/power-bi.png" alt="Power BI" className="w-5 h-5 object-contain" />
                  Power BI
                </div>
                <div className="orbit-badge b5">
                  <span className="text-base">🧑‍💻</span>
                  Web Designer
                </div>
              </div>
              <div className="center-circle">
                <img src="./foto.png" alt="Gustavo Dias" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
