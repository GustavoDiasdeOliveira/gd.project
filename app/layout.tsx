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
  title: 'Gustavo Dias | Web Designer & Automações com IA',
  description: 'Transformo ideias em resultados digitais. Landing pages de alta conversão, automações inteligentes com n8n e inteligência de mercado para pequenas e médias empresas.',
  keywords: ['web designer', 'landing page', 'automação', 'n8n', 'IA', 'inteligência artificial', 'freelancer', 'Praia Grande', 'São Paulo'],
  authors: [{ name: 'Gustavo Dias de Oliveira' }],
  creator: 'Gustavo Dias de Oliveira',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://gustavodiasdeoliveira.com',
    title: 'Gustavo Dias | Web Designer & Automações com IA',
    description: 'Transformo ideias em resultados digitais. Landing pages de alta conversão, automações inteligentes com n8n e inteligência de mercado.',
    siteName: 'Gustavo Dias de Oliveira',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gustavo Dias | Web Designer & Automações com IA',
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
