"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import pt from "../dictionaries/pt.json"
import en from "../dictionaries/en.json"
import es from "../dictionaries/es.json"
import it from "../dictionaries/it.json"

type Language = "pt" | "en" | "es" | "it"
type Dictionaries = typeof pt

const dictionaries = {
  pt,
  en,
  es,
  it,
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && ["pt", "en", "es", "it"].includes(savedLang)) {
      setLanguage(savedLang)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string) => {
    const keys = key.split(".")
    let value: any = dictionaries[language]

    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k]
      } else {
        // Fallback to PT if key not found in current language
        let fallback: any = dictionaries["pt"]
        for (const fk of keys) {
            if (fallback && fallback[fk] !== undefined) {
                fallback = fallback[fk]
            } else {
                return key // Return the key as last resort
            }
        }
        return fallback
      }
    }

    return value
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
