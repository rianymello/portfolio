import type React from "react"

interface PixelCardProps {
  children: React.ReactNode
  className?: string
}

const PixelCard: React.FC<PixelCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-green-500/10 transform translate-x-1 translate-y-1" />
      <div className="relative bg-gray-800/50 p-6 hover:bg-gray-800/70 transition-colors border border-green-500/30 h-full">
        {children}
      </div>
      <div className="absolute w-2 h-2 bg-green-500 -top-1 -left-1" />
      <div className="absolute w-2 h-2 bg-green-500 -top-1 -right-1" />
      <div className="absolute w-2 h-2 bg-green-500 -bottom-1 -left-1" />
      <div className="absolute w-2 h-2 bg-green-500 -bottom-1 -right-1" />
    </div>
  )
}

export default PixelCard

