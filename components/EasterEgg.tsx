"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"
import PixelCard from "./ui/PixelCard"

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
]

const EasterEgg: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [keySequence, setKeySequence] = useState<string[]>([])
  const [showHint, setShowHint] = useState(false)
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [isFullyRevealed, setIsFullyRevealed] = useState(false)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const newSequence = [...keySequence, event.key]
      if (newSequence.length > KONAMI_CODE.length) {
        newSequence.shift()
      }
      setKeySequence(newSequence)

      if (JSON.stringify(newSequence) === JSON.stringify(KONAMI_CODE)) {
        revealEasterEgg()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [keySequence])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true)
    }, 30000)

    return () => clearTimeout(timer)
  }, [])

  const revealEasterEgg = () => {
    setIsVisible(true)
    setTerminalLines([])
    setIsFullyRevealed(false)

    const lines = [
      "> INITIALIZING SECRET PROTOCOL...",
      "> ACCESSING HIDDEN DATABASE...",
      "> DECRYPTING PERSONAL DATA...",
      "> LOADING interests.json...",
      "> ACCESS GRANTED",
    ]

    lines.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLines((prev) => [...prev, line])
        if (index === lines.length - 1) {
          setTimeout(() => setIsFullyRevealed(true), 500)
        }
      }, index * 800)
    })
  }

  if (!isVisible) {
    return (
      <div
        className="fixed bottom-4 right-4 text-green-500/20 hover:text-green-500/40 transition-colors cursor-help group"
        title="Há segredos a serem descobertos..."
      >
        {showHint && (
          <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap">
            <div className="bg-black/90 text-green-500 p-2 rounded text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="animate-pulse">{">"}</span> _
            </div>
          </div>
        )}
        <Terminal size={24} className="animate-pulse" />
      </div>
    )
  }

  const interests = [
    {
      title: "Música",
      description: "Apaixonada por composição musical e produção de áudio digital.",
    },
    {
      title: "Fotografia",
      description: "Explorando a arte da fotografia digital e analógica.",
    },
    {
      title: "Jogos Retrô",
      description: "Colecionadora e entusiasta de jogos clássicos e pixel art.",
    },
    {
      title: "Astronomia",
      description: "Fascinada pela exploração espacial e observação de estrelas.",
    },
  ]

  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-2xl">
        <div className="text-green-500 font-mono mb-4 text-sm space-y-2">
          {terminalLines.map((line, index) => (
            <div
              key={index}
              className="typewriter-text"
              style={{
                animation: `typing 2s steps(${line.length}, end)`,
              }}
            >
              {line}
            </div>
          ))}
        </div>

        {isFullyRevealed && (
          <div className="animate-fadeIn">
            <PixelCard>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-green-500">Interesses Além do Código</h2>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="text-gray-500 hover:text-white transition-colors px-2 py-1 rounded hover:bg-green-500/10"
                  >
                    [X]
                  </button>
                </div>
                <div className="grid gap-4">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="bg-green-500/10 p-4 rounded-lg border border-green-500/20 transform transition-all duration-300 hover:scale-[1.02] hover:border-green-500/40"
                      style={{
                        animationDelay: `${index * 200}ms`,
                      }}
                    >
                      <h3 className="text-green-500 font-bold mb-2">{interest.title}</h3>
                      <p className="text-gray-300">{interest.description}</p>
                    </div>
                  ))}
                </div>
                <div className="text-gray-500 text-sm mt-4">
                  {`// Pressione [X] para fechar ou use o Konami Code (↑↑↓↓←→←→BA) para reabrir`}
                </div>
              </div>
            </PixelCard>
          </div>
        )}
      </div>
    </div>
  )
}

export default EasterEgg

