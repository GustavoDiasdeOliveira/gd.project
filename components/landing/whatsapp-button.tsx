"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5513991895950?text=Olá%20Gustavo%2C%20vi%20seu%20site%20e%20gostaria%20de%20um%20orçamento!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform pulse-green"
      aria-label="Contato pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6" fill="currentColor" />
    </a>
  )
}
