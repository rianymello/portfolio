"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Github, Globe, Brain, Code, X, Smartphone } from "lucide-react"
import { Modal } from "./ui/Modal"
import { useTranslation } from "@/contexts/TranslationContext"

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  github: string
  deploy: string
  category: "ai" | "web" | "mobile"
  emoji: string
  categories?: ("ai" | "web" | "mobile")[]
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        className="group relative bg-gray-800/50 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-green-500/20 border border-green-500/30"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-48 w-full">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-green-500 text-lg font-semibold">{t("projects.view")}</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-green-500 text-xl font-bold mb-2 font-share-tech-mono">
            {project.emoji} {t(`projects.${project.id}.title`)}
          </h3>
          <p className="text-gray-300 mb-4 line-clamp-2 leading-relaxed">{t(`projects.${project.id}.description`)}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-6 pt-6">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <div className="relative h-64 w-full">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="text-green-500 text-2xl font-bold">
            {project.emoji} {t(`projects.${project.id}.title`)}
          </h3>
          <p className="text-gray-300">{t(`projects.${project.id}.description`)}</p>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Github size={20} />
              {t("projects.github")}
            </a>
            <a
              href={project.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-lg transition-colors"
            >
              <Globe size={20} />
              {t("projects.deploy")}
            </a>
          </div>
        </div>
      </Modal>
    </>
  )
}

const CategoryButton: React.FC<{
  icon: React.ReactNode
  label: string
  active: boolean
  onClick: () => void
}> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
      active ? "bg-green-500 text-black" : "bg-gray-800/50 text-green-500 hover:bg-gray-800 border border-green-500/30"
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
)

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "ai" | "web" | "mobile">("all")
  const { t } = useTranslation()

  const projects: Project[] = [
    // AI & Computer Vision
    {
      id: "facial-recognition",
      title: "Reconhecimento Facial para Registro de Presença",
      description: "Sistema de controle de presença baseado em reconhecimento facial.",
      technologies: ["Python", "OpenCV", "dlib", "TensorFlow"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reconhecimentofacialnovo-pG4zulqHzT62GEgrYkqutoVtM0GVWP.png",
      github: "https://github.com/username/facial-recognition",
      deploy: "https://facial-recognition.com",
      category: "ai",
      emoji: "📸",
    },
    {
      id: "hackbrasa",
      title: "HackBRASA",
      description: "Aplicação de IA para gestão financeira com OCR, extraindo dados de documentos escaneados.",
      technologies: ["Python", "Tesseract", "TensorFlow", "Flutter"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brasahack-EfNUIjncRpWkBiSillSZlq99LIFd0n.png",
      github: "https://github.com/username/hackbrasa",
      deploy: "https://hackbrasa.com",
      category: "ai",
      emoji: "🤖",
      categories: ["ai", "mobile"],
    },
    {
      id: "smartroutes",
      title: "SmartRoutes",
      description:
        "Simulação de tráfego usando o modelo de Nagel-Schreckenberg, com foco em IA para otimização e gestão de fluxo.",
      technologies: ["Python", "NumPy", "Matplotlib", "React Native"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smartroute-C8pkhBqLdHpBH7loEDdjwmm8LinSda.png",
      github: "https://github.com/username/smartroutes",
      deploy: "https://smartroutes.com",
      category: "ai",
      emoji: "🚦",
      categories: ["ai", "mobile"],
    },
    {
      id: "ml-curso",
      title: "ML-Curso",
      description: "Repositório com estudos e implementações de aprendizado de máquina.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mlcurse-rzCXNHHXjimLMmKDvJrW7e3cK2ZaXX.png",
      github: "https://github.com/username/ml-curso",
      deploy: "https://ml-curso.com",
      category: "ai",
      emoji: "🤖",
    },
    // Web Development
    {
      id: "first-steps",
      title: "First Steps App",
      description: "Web app introdutório para programação ou desenvolvimento.",
      technologies: ["React Native", "Expo", "Firebase"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/firststeps-rIeSUfa3EoasP2LkH87MTURVNHQfIs.png",
      github: "https://github.com/username/first-steps",
      deploy: "https://first-steps.com",
      category: "mobile",
      emoji: "📱",
      categories: ["mobile"],
    },
    {
      id: "club-first",
      title: "Club First",
      description: "Site voltado para comunidades ou eventos.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clubefirst-GqYEObhHUWDYAqkQQo9X7TVNcfPMPY.png",
      github: "https://github.com/username/club-first",
      deploy: "https://club-first.com",
      category: "web",
      emoji: "🎉",
    },
    {
      id: "lista-c",
      title: "Lista C",
      description: "Ferramenta de organização e gerenciamento de listas em formato web.",
      technologies: ["Vue.js", "Firebase", "Vuetify"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/listacnovo-kG4scoWVwyipLyW30t2F9ReXu47OKj.png",
      github: "https://github.com/username/lista-c",
      deploy: "https://lista-c.com",
      category: "web",
      emoji: "📝",
    },
    {
      id: "ecological-footprint",
      title: "Ecological Footprint",
      description: "Plataforma para cálculo de pegada ecológica e sustentabilidade.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pegadaecologica-jKWlzvQjb0R47KXViMSIOofogztPeS.png",
      github: "https://github.com/username/ecological-footprint",
      deploy: "https://ecological-footprint.com",
      category: "web",
      emoji: "🌱",
    },
    {
      id: "palavras-de-paz",
      title: "Palavras de Paz",
      description: "Projeto voltado para mensagens de paz e inspiração.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/palavrasdepaz-lpijOcdek3uj8rurAMZfgYdU96ozpq.png",
      github: "https://github.com/username/palavras-de-paz",
      deploy: "https://palavras-de-paz.com",
      category: "web",
      emoji: "✨",
    },
    {
      id: "code-of-hope",
      title: "Code of Hope",
      description: "Iniciativa educacional para inclusão na tecnologia.",
      technologies: ["React", "Express", "MongoDB"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/codeofhope-CPIbbzjThgShyLeVB6F1I6hEUtoBfp.png",
      github: "https://github.com/username/code-of-hope",
      deploy: "https://code-of-hope.com",
      category: "web",
      emoji: "💻",
    },
    {
      id: "ignite-feed",
      title: "Ignite Feed",
      description: "Aplicação interativa inspirada no curso Ignite da Rocketseat.",
      technologies: ["React", "TypeScript", "Styled Components"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ignitefeed-62Cs0t6zoe5jSBZSAtlcmb5cPIezZ1.png",
      github: "https://github.com/username/ignite-feed",
      deploy: "https://ignite-feed.com",
      category: "web",
      emoji: "🔥",
    },
    {
      id: "old-portfolio",
      title: "Portifa (Antigo Portfólio)",
      description: "Versão anterior do seu portfólio.",
      technologies: ["React", "SASS", "Framer Motion"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio-C3I0yuvkwykzPQp2BS2XdlnjCGkZyT.png",
      github: "https://github.com/username/old-portfolio",
      deploy: "https://old-portfolio.com",
      category: "web",
      emoji: "🎭",
    },
    // Mobile Development
  ]

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true
    if (project.categories && project.categories.includes(activeCategory)) return true
    return project.category === activeCategory
  })

  return (
    <section id="projects" className="mb-24 relative">
      <h2 className="text-4xl font-bold text-green-500 mb-8">{t("projects.title")}</h2>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 mb-8">
        <CategoryButton
          icon={<Code size={20} />}
          label={t("projects.category.all")}
          active={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
        />
        <CategoryButton
          icon={<Brain size={20} />}
          label={t("projects.category.ai")}
          active={activeCategory === "ai"}
          onClick={() => setActiveCategory("ai")}
        />
        <CategoryButton
          icon={<Globe size={20} />}
          label={t("projects.category.web")}
          active={activeCategory === "web"}
          onClick={() => setActiveCategory("web")}
        />
        <CategoryButton
          icon={<Smartphone size={20} />}
          label={t("projects.category.mobile")}
          active={activeCategory === "mobile"}
          onClick={() => setActiveCategory("mobile")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects

