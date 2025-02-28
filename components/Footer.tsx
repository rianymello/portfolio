"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "@/contexts/TranslationContext"

const Footer = () => {
  const { t } = useTranslation()
  const [isGlowing, setIsGlowing] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlowing(true)
      setTimeout(() => setIsGlowing(false), 1000)
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="w-full py-8 mt-32 border-t border-green-500/30">
      <div className="container mx-auto px-4 w-[70%]">
        <div
          className={`text-center text-green-500/60 font-['Share_Tech_Mono'] transition-all duration-1000 ${
            isGlowing ? "text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]" : ""
          }`}
        >
          <p className="mb-2">{t("footer.made")}</p>
          <p className="text-sm">
            © {new Date().getFullYear()} - {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

