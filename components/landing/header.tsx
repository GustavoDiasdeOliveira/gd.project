"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun, Languages, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/context/LanguageContext"

const languages = [
  { code: "pt", label: "Brasil", flag: "https://flagcdn.com/w40/br.png" },
  { code: "en", label: "EUA", flag: "https://flagcdn.com/w40/us.png" },
  { code: "es", label: "Espanhol", flag: "https://flagcdn.com/w40/es.png" },
  { code: "it", label: "Italiano", flag: "https://flagcdn.com/w40/it.png" },
] as const

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("inicio")
  const { language, setLanguage, t } = useLanguage()
  
  const currentLang = languages.find(l => l.code === language) || languages[0]

  const navLinks = [
    { href: "#inicio", label: t("header.home") },
    { href: "#servicos", label: t("header.services") },
    { href: "#projetos", label: t("header.projects") },
    { href: "#sobre", label: t("header.about") },
    { href: "#contato", label: t("header.contact") },
  ]

  useEffect(() => {
    // Check saved theme preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    // Intersection Observer for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section: Element) => observer.observe(section))

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-strong shadow-lg border-b border-[var(--glass-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-1 text-2xl font-bold">
            <img src="./logoGDHeader.png" alt="GD Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 p-2 rounded-full hover:bg-muted transition-colors text-sm font-medium">
                  <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-3.5 object-cover rounded-sm" />
                  <span className="hidden xl:inline">{currentLang.label}</span>
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass-strong border-[var(--glass-border)]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <img src={lang.flag} alt={lang.label} className="w-5 h-3.5 object-cover rounded-sm" />
                    <span>{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
            >
              <a
                href={`https://wa.me/5513991895950?text=${encodeURIComponent(t("whatsapp.message"))}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("header.cta")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 rounded-full hover:bg-muted transition-colors">
                  <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-3.5 object-cover rounded-sm" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass-strong border-[var(--glass-border)]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <img src={lang.flag} alt={lang.label} className="w-5 h-3.5 object-cover rounded-sm" />
                    <span>{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-14 sm:top-16 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="glass-strong mx-3 sm:mx-4 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
          <div className="flex flex-col gap-2 sm:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`text-base sm:text-lg font-medium py-1.5 sm:py-2 transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 sm:mt-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
            >
              <a
                href={`https://wa.me/5513991895950?text=${encodeURIComponent(t("whatsapp.message"))}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                {t("header.cta")}
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
