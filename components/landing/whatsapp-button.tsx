"use client"

import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function WhatsAppButton() {
  const { t } = useLanguage()
  const encodedMessage = encodeURIComponent(t("whatsapp.message"))
  
  return (
    <a
      href={`https://wa.me/5513991895950?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform pulse-green"
      aria-label={t("whatsapp.aria_label")}
    >
      <MessageCircle className="w-6 h-6" fill="currentColor" />
    </a>
  )
}
