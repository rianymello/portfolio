"use client"  

import type React from "react"
import { Trophy } from "lucide-react"
import { Calendar } from "lucide-react"
import { useTranslation } from "@/contexts/TranslationContext"

interface Award {
  title: string
  organization: string
  year: string
  description: string
  achievement: string
}

const AwardItem: React.FC<{ award: Award }> = ({ award }) => {
  return (
    <div className="relative bg-gray-800/50 rounded-lg border border-green-500/30 overflow-hidden">
      <div className="flex flex-col h-full p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-green-500/10 p-3 rounded-lg">
            <Trophy className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <h3 className="text-green-500 text-xl font-bold font-share-tech-mono">{award.title}</h3>
            <h4 className="text-gray-300 text-lg">{award.organization}</h4>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400 mb-4">
          <Calendar size={16} />
          <span className="text-sm">{award.year}</span>
        </div>
        <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{award.description}</p>
        <div className="bg-green-500/10 p-4 rounded-lg mt-auto">
          <h5 className="text-green-500 font-semibold mb-2 font-share-tech-mono">Achievement</h5>
          <p className="text-gray-300 leading-relaxed">{award.achievement}</p>
        </div>
      </div>
    </div>
  )
}

const Awards: React.FC = () => {
  const { t } = useTranslation()

  const awards: Award[] = [
    {
      title: t("awards.uber.title"),
      organization: t("awards.uber.org"),
      year: "2023",
      description: t("awards.uber.desc"),
      achievement: t("awards.uber.achievement"),
    },
    {
      title: t("awards.ai.title"),
      organization: t("awards.ai.org"),
      year: "2022",
      description: t("awards.ai.desc"),
      achievement: t("awards.ai.achievement"),
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {awards.map((award, index) => (
        <AwardItem key={index} award={award} />
      ))}
    </div>
  )
}

export default Awards

