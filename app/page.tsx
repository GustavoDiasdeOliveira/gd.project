import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Stats } from "@/components/landing/stats"
import { Services } from "@/components/landing/services"
import { Process } from "@/components/landing/process"
import { Projects } from "@/components/landing/projects"
import { Technologies } from "@/components/landing/technologies"
import { About } from "@/components/landing/about"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"
import { ScrollProgress } from "@/components/landing/scroll-progress"

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Projects />
      <Technologies />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
