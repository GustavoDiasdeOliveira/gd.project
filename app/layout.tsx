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
  title: 'Gustavo Dias | Frontend & Automações com IA',
  description: 'Transformo ideias em resultados digitais. Landing pages de alta conversão, automações inteligentes com n8n e análise de dados para pequenas e médias empresas.',
  keywords: ['frontend', 'react', 'landing page', 'automação', 'n8n', 'IA', 'inteligência artificial', 'freelancer', 'Praia Grande', 'São Paulo'],
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
    title: 'Gustavo Dias | Frontend & Automações com IA',
    description: 'Transformo ideias em resultados digitais. Landing pages de alta conversão, automações inteligentes com n8n e análise de dados.',
    siteName: 'Gustavo Dias de Oliveira',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gustavo Dias | Frontend & Automações com IA',
    description: 'Transformo ideias em resultados digitais.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark bg-background">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
