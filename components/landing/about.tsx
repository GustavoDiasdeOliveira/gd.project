"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Loader2 } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function About() {
  const { t } = useLanguage()
  const highlights = t("about.highlights")
  const ref = useRef<HTMLDivElement>(null)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    if (isDownloading) return;
    setIsDownloading(true);
    
    setTimeout(() => {
      const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
      const link = document.createElement('a');
      link.href = `${basePath}/Gustavo_CV_2026.pdf`;
      link.download = 'Gustavo_CV_2026.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 3000);
  }

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

    const elements = ref.current?.querySelectorAll(".fade-in, .slide-left, .slide-right")
    elements?.forEach((el: Element) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="slide-left relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square">
              {/* Decorative behind image */}
              <div className="absolute inset-4 sm:inset-6 border-2 border-primary/30 rounded-2xl sm:rounded-3xl rotate-6" />
              <div className="absolute inset-4 sm:inset-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl sm:rounded-3xl -rotate-3" />
              
              {/* Actual Image container */}
              <div className="absolute inset-0 gradient-border rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="./foto.png" 
                  alt="Gustavo Dias" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Stats floating */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 glass p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-primary/20 animate-float">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">7°/8°</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground font-medium">Semestre C.C.</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="slide-right space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                {t("about.title_part1")}{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {t("about.title_highlight")}
                </span>
              </h2>
              <div className="h-1.5 w-16 sm:w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto lg:mx-0" />
            </div>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
              <p>
                {t("about.description_1")}
              </p>
              <p>
                {t("about.description_2")}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
              {highlights.map((item: string, index: number) => (
                <div key={index} className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 sm:pt-6 flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Check className="w-4 h-4" />
                )}
                {isDownloading ? t("about.cv_downloading") : t("about.cta_cv")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
