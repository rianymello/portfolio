"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { useTranslation } from "@/contexts/TranslationContext"

const ChatBot = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: t("chat.welcome"), isUser: false },
  ])
  const [input, setInput] = useState("")
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setMessages((prev) => [...prev, { text: input, isUser: true }])
    setInput("")

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Esta funcionalidade ainda está em desenvolvimento e estará disponível em breve! Por enquanto, você pode entrar em contato através do email ou LinkedIn.",
          isUser: false,
        },
      ])
    }, 1000)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-6 bottom-6 z-50 p-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-6 h-6 text-black" />
      </button>

      {isOpen && (
        <div className="fixed right-6 bottom-24 z-50 w-full max-w-sm font-['Share_Tech_Mono']">
          <div
            ref={chatRef}
            className="relative z-10 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-green-500/30"
          >
            <div className="flex items-center justify-between p-4 border-b border-green-500/30">
              <h2 className="text-lg font-semibold text-green-500">{t("chat.title")}</h2>
              <button onClick={() => setIsOpen(false)} className="p-2 text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-black/40">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg font-['Fira_Code'] ${
                      message.isUser ? "bg-green-500 text-black" : "bg-gray-800 text-white border border-green-500/30"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-green-500/30 bg-black/40">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t("chat.placeholder")}
                  className="flex-1 p-2 bg-gray-800 border border-green-500/30 rounded-lg text-white focus:outline-none focus:border-green-500 font-['Fira_Code']"
                />
                <button
                  type="submit"
                  className="p-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBot

