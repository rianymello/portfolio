"use client"

import { useState, useEffect } from "react"

const LoadingScreen = () => {
  const [messages, setMessages] = useState<string[]>([])
  const [showAccess, setShowAccess] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const hackingMessages = [
    "Iniciando processo de invasão...",
    "Identificando portas de acesso...",
    "Bypassando firewall...",
    "Descriptografando dados...",
    "Estabelecendo conexão segura...",
    "Injetando código malicioso...",
    "Ocultando rastros...",
    "Finalizando processo...",
  ]

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < hackingMessages.length) {
        setMessages((prev) => [...prev, hackingMessages[currentIndex]])
        currentIndex++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setShowAccess(true)
          setTimeout(() => {
            setIsComplete(true)
          }, 1500)
        }, 1000)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [])

  if (isComplete) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="w-full max-w-2xl p-8 font-mono">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="text-green-500 mb-2"
            style={{
              animation: "typing 1s steps(50, end)",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {`> ${msg}`}
          </div>
        ))}
        {showAccess && (
          <div className="mt-8 flex justify-center">
            <div className="bg-green-500/10 border border-green-500 p-4 text-green-500 animate-pulse">
              ACCESS GRANTED
            </div>
          </div>
        )}
      </div>
      <style jsx global>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
      `}</style>
    </div>
  )
}

export default LoadingScreen

