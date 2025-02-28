"use client"

import type React from "react"

import { useEffect, useRef } from "react"

const PixelBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const pixelSize = 4
    let columns: number
    let rows: number

    const updateDimensions = () => {
      canvas.width = document.documentElement.scrollWidth
      canvas.height = document.documentElement.scrollHeight
      columns = Math.ceil(canvas.width / pixelSize)
      rows = Math.ceil(canvas.height / pixelSize)
    }

    const drawPixel = (x: number, y: number, alpha: number) => {
      ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`
      ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < 10; i++) {
        const x = Math.floor(Math.random() * columns)
        const y = Math.floor(Math.random() * rows)
        const alpha = Math.random() * 0.2
        drawPixel(x, y, alpha)
      }

      requestAnimationFrame(animate)
    }

    updateDimensions()
    animate()

    const handleResize = () => {
      updateDimensions()
    }

    const handleScroll = () => {
      canvas.style.top = `${window.scrollY}px`
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ position: "fixed", top: 0, left: 0 }}
    />
  )
}

export default PixelBackground

