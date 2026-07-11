import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Gustavo Dias | Inteligência de Mercado, Automações IA & Web Designer',
  description: 'Especialista em Inteligência de Mercado, Automações com IA (n8n) e Web Design. Análise de concorrência, agentes de IA no WhatsApp e landing pages de alta conversão.',
  keywords: ['inteligência de mercado', 'pricing', 'análise de concorrência', 'automação n8n', 'agente de IA', 'web designer', 'landing page', 'freelancer', 'Praia Grande', 'São Paulo'],
  authors: [{ name: 'Gustavo Dias de Oliveira' }],
  creator: 'Gustavo Dias de Oliveira',
  icons: {
    icon: './logoGDHeader.png',
    shortcut: './logoGDHeader.png',
    apple: './logoGDHeader.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://gustavodiasdeoliveira.com',
    title: 'Gustavo Dias | Inteligência de Mercado, Automações IA & Web Designer',
    description: 'Especialista em Inteligência de Mercado, Automações com IA (n8n) e Web Design. Análise de concorrência, agentes de IA no WhatsApp e landing pages de alta conversão.',
    siteName: 'Gustavo Dias',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gustavo Dias | Inteligência de Mercado, Automações IA & Web Designer',
    description: 'Especialista em Inteligência de Mercado, Automações com IA (n8n) e Web Design.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

import { LanguageProvider } from "@/context/LanguageContext"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark bg-background">
      <body className={`${poppins.className} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
