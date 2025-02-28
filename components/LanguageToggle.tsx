"use client"

import { Globe } from "lucide-react"
import { useTranslation } from "@/contexts/TranslationContext"

const LanguageToggle = () => {
  const { language, setLanguage } = useTranslation()

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed right-6 top-6 z-50 flex items-center gap-2 px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors"
    >
      <Globe className="w-5 h-5" />
      <span>{language === "pt" ? "EN" : "PT"}</span>
    </button>
  )
}

export default LanguageToggle

