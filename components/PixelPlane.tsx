"use client"

import type React from "react"
import { useEffect, useState } from "react"

interface PixelPlaneProps {
  title: string
  onAnimationComplete?: () => void
}

const PixelPlane: React.FC<PixelPlaneProps> = ({ title, onAnimationComplete }) => {
  const [position, setPosition] = useState(-100)
  const [showTitle, setShowTitle] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true)
      onAnimationComplete?.()
    }, 1000)

    const animation = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 20) {
          clearInterval(animation)
          return 20
        }
        return prev + 5
      })
    }, 50)

    return () => {
      clearTimeout(timer)
      clearInterval(animation)
    }
  }, [onAnimationComplete])

  return (
    <div className="relative flex items-center mb-8">
      <h2
        className={`text-4xl font-bold text-green-500 transition-opacity duration-500 ${
          showTitle ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translateX(${position}%)`,
          transition: "transform 0.05s linear",
        }}
      >
        {title}
      </h2>
    </div>
  )
}

export default PixelPlane

