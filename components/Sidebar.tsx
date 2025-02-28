import type React from "react"
import Link from "next/link"
import { Home, Folder, User, Mail } from "lucide-react"

const Sidebar: React.FC = () => {
  return (
    <nav className="fixed left-0 top-0 h-full w-16 bg-gray-900 text-green-500 flex flex-col items-center py-8">
      <Link href="#home" className="mb-8 hover:text-green-400 transition-colors">
        <Home size={24} />
      </Link>
      <Link href="#projects" className="mb-8 hover:text-green-400 transition-colors">
        <Folder size={24} />
      </Link>
      <Link href="#about" className="mb-8 hover:text-green-400 transition-colors">
        <User size={24} />
      </Link>
      <Link href="#contact" className="hover:text-green-400 transition-colors">
        <Mail size={24} />
      </Link>
    </nav>
  )
}

export default Sidebar

