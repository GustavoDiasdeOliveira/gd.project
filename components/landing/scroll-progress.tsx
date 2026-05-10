"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/context/LanguageContext"

export function ScrollProgress() {
  const { t } = useLanguage()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrollTop = window.scrollY
      const scrollProgress = (scrollTop / documentHeight) * 100
      setProgress(scrollProgress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={t("scroll_progress.aria_label")}
    />
  )
}
