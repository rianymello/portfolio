"use client"

import React, { useState, useRef, useEffect } from "react"
import { Plus, Minus, Download } from "lucide-react"
import { TextScramble } from "./TextScramble"
import { useTranslation } from "@/contexts/TranslationContext"
import Image from "next/image"

interface Interest {
  title: string
  description: string
}

const InterestItem: React.FC<{ interest: Interest; index: number }> = ({ interest, index }) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isRevealed, setIsRevealed] = useState(false)

  React.useEffect(() => {
    if (elementRef.current && !isRevealed) {
      const scramble = new TextScramble(elementRef.current)
      scramble.setText(interest.title).then(() => {
        setIsRevealed(true)
      })
    }
  }, [interest.title, isRevealed])

  return (
    <div
      className="bg-gray-800/50 p-4 rounded-lg border border-green-500/30 transform transition-all duration-500"
      style={{
        animationDelay: `${index * 200}ms`,
      }}
    >
      <h3 ref={elementRef} className="text-green-500 text-xl font-bold mb-2">
        {interest.title}
      </h3>
      <p className={`text-gray-300 transition-opacity duration-500 ${isRevealed ? "opacity-100" : "opacity-0"}`}>
        {interest.description}
      </p>
    </div>
  )
}

const AboutMe: React.FC = () => {
  const { t } = useTranslation()
  const [showInterests, setShowInterests] = useState(false)
  const interestsRef = useRef<HTMLDivElement>(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const hasAnimated = localStorage.getItem("profileAnimationPlayed") === "true"
    hasAnimatedRef.current = hasAnimated
  }, [])

  const interests: Interest[] = [
    {
      title: t("interests.dance.title"),
      description: t("interests.dance.desc"),
    },
    {
      title: t("interests.gaming.title"),
      description: t("interests.gaming.desc"),
    },
    {
      title: t("interests.painting.title"),
      description: t("interests.painting.desc"),
    },
    {
      title: t("interests.geek.title"),
      description: t("interests.geek.desc"),
    },
  ]

  return (
    <section id="about" className="mb-16 font-['Share_Tech_Mono']">
      <h2 className="text-4xl font-bold text-green-500 mb-8">{t("about.title")}</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="relative w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecr%C3%A3%202025-02-24%20123324-wLUJ1YEM4RENOp8cHxmqjyxzPk7iHT.png"
              alt="Riany Mello"
              fill
              className="rounded-full border-4 border-green-500 shadow-lg shadow-green-500/20 object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-lg mb-4 leading-relaxed">{t("about.p1")}</p>
          <p className="text-lg mb-4 leading-relaxed">{t("about.p2")}</p>
          <p className="text-lg mb-6 leading-relaxed">{t("about.p3")}</p>

          <a
             href="/Resume(1).pdf"
             download="Resume_Riany.pdf"  
             className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors mb-4"
           >
            <Download className="w-5 h-5" />
            <span>{t("about.button.cv")}</span>
          </a>

          <div className="mt-4">
            {!showInterests ? (
              <button
                onClick={() => setShowInterests(true)}
                className="group flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
              >
                <Plus className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" />
                <span className="text-sm font-mono">{t("about.button.interests")}</span>
              </button>
            ) : (
              <button
                onClick={() => setShowInterests(false)}
                className="group flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
              >
                <Minus className="w-6 h-6 transition-transform duration-300" />
                <span className="text-sm font-mono">{t("about.button.hide")}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {showInterests && (
        <div ref={interestsRef} className="mt-12 space-y-6 animate-fadeIn">
          <h3 className="text-2xl font-bold text-green-500 mb-6 font-['Share_Tech_Mono']">
            {t("about.interests.title")} <span className="animate-pulse">_</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <InterestItem key={index} interest={interest} index={index} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default AboutMe

