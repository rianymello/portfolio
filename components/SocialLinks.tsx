"use client"

import { Github, Linkedin, Mail, Check } from "lucide-react"
import { useState, useEffect } from "react"
import { useTranslation } from "@/contexts/TranslationContext"
import "animate.css"

const SocialLinks = () => {
  const { t } = useTranslation()
  const [showCopied, setShowCopied] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mello.riany@gmail.com")
    setShowCopied(true)
    setTimeout(() => setShowCopied(false), 2000)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      setIsVisible(scrollPosition >= windowHeight * 0.2)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 ${
        isVisible ? "animate__animated animate__flipInX" : "animate__animated animate__flipOutX"
      }`}
    >
      <a
        href="https://github.com/rianymello"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-black/80 border border-green-500/30 rounded-lg hover:bg-green-500/20 transition-colors group"
      >
        <Github className="w-6 h-6 text-green-500 group-hover:text-green-400" />
      </a>
      <a
        href="https://www.linkedin.com/in/rianymello/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-black/80 border border-green-500/30 rounded-lg hover:bg-green-500/20 transition-colors group"
      >
        <Linkedin className="w-6 h-6 text-green-500 group-hover:text-green-400" />
      </a>
      <button
        onClick={handleCopyEmail}
        className="p-3 bg-black/80 border border-green-500/30 rounded-lg hover:bg-green-500/20 transition-colors group relative"
      >
        {showCopied ? (
          <Check className="w-6 h-6 text-green-500 group-hover:text-green-400" />
        ) : (
          <Mail className="w-6 h-6 text-green-500 group-hover:text-green-400" />
        )}
        {showCopied && (
          <span className="absolute left-full ml-2 bg-black/80 text-green-500 px-2 py-1 rounded text-sm whitespace-nowrap">
            {t("email.copied")}
          </span>
        )}
      </button>
    </div>
  )
}

export default SocialLinks

