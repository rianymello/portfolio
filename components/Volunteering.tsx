"use client"  // Adicionando a diretiva "use client" para garantir que o componente seja renderizado no lado do cliente

import type React from "react"
import { Calendar, Heart } from "lucide-react"
import { useTranslation } from "@/contexts/TranslationContext"

interface VolunteerWork {
  organization: string
  role: string
  period: string
  description: string
  impact: string
}

const VolunteerItem: React.FC<{ work: VolunteerWork }> = ({ work }) => {
  return (
    <div className="relative bg-gray-800/50 rounded-lg border border-green-500/30 overflow-hidden">
      <div className="flex flex-col h-full p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-green-500/10 p-3 rounded-lg">
            <Heart className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <h3 className="text-green-500 text-xl font-bold font-share-tech-mono">{work.organization}</h3>
            <h4 className="text-gray-300 text-lg">{work.role}</h4>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400 mb-4">
          <Calendar size={16} />
          <span className="text-sm">{work.period}</span>
        </div>
        <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{work.description}</p>
        <div className="bg-green-500/10 p-4 rounded-lg mt-auto">
          <h5 className="text-green-500 font-semibold mb-2 font-share-tech-mono">Impact</h5>
          <p className="text-gray-300 leading-relaxed">{work.impact}</p>
        </div>
      </div>
    </div>
  )
}

const Volunteering: React.FC = () => {
  const { t } = useTranslation()

  const volunteerWork: VolunteerWork[] = [
    {
      organization: t("volunteering.hope.org"),
      role: t("volunteering.hope.role"),
      period: t("volunteering.hope.period"),
      description: t("volunteering.hope.desc"),
      impact: t("volunteering.hope.impact"),
    },
    {
      organization: t("volunteering.paz.org"),
      role: t("volunteering.paz.role"),
      period: t("volunteering.paz.period"),
      description: t("volunteering.paz.desc"),
      impact: t("volunteering.paz.impact"),
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {volunteerWork.map((work, index) => (
        <VolunteerItem key={index} work={work} />
      ))}
    </div>
  )
}

export default Volunteering
