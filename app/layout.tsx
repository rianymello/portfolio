import type React from "react"
import { TranslationProvider } from "@/contexts/TranslationContext"
import { Space_Grotesk, Share_Tech_Mono } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-share-tech-mono",
})

export const metadata: Metadata = {
  title: "Riany Mello - Portfolio",
  description: "Personal portfolio showcasing my work and experience in web development and AI.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${shareTechMono.variable}`}>
      <body className="font-space-grotesk">
        <TranslationProvider>{children}</TranslationProvider>
      </body>
    </html>
  )
}



import './globals.css'