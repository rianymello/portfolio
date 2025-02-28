import RainingLetters from "../components/RainingLetters"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"
import Achievements from "../components/Achievements"
import LoadingScreen from "../components/LoadingScreen"
import Footer from "../components/Footer"
import SocialLinks from "../components/SocialLinks"
import ChatBot from "../components/ChatBot"
import LanguageToggle from "../components/LanguageToggle"

// Importando o TranslationProvider
import { TranslationProvider } from "@/contexts/TranslationContext"

export default function Home() {
  return (
    // Envolvendo o conteúdo com o TranslationProvider
    <TranslationProvider>
      <div className="bg-black text-gray-100 min-h-screen relative">
        <LoadingScreen />
        <LanguageToggle />
        <SocialLinks />
        <section id="home" className="h-screen">
          <RainingLetters />
        </section>
        <div className="w-full flex justify-center">
          <hr className="w-[70%] border-green-500" />
        </div>
        <main className="container mx-auto px-4 py-16 w-[70%] relative z-10 space-y-32">
          <AboutMe />
          <Projects />
          <Achievements />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </TranslationProvider>
  )
}
