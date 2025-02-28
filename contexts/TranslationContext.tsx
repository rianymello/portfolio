"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "pt" | "en"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // About Section
    "about.title": "About Me",
    "about.p1":
      "My name is Riany Mello and I'm passionate about technology and innovation. I started programming at 14 self-taught, and currently study Management and Programming of Computer Systems at ETAP Professional School.",
    "about.p2":
      "I have a great interest in Artificial Intelligence, an area in which I deepen my personal studies. I'm the founder of STEM for Women, an initiative that promotes female participation in technology through free education, and a mentor at Technovation Girls, helping young women develop innovative solutions.",
    "about.p3":
      "I study facial recognition, exploring libraries like OpenCV and Dlib, and write scientific outreach articles to make technology more accessible.",
    "about.button.cv": "Download CV",
    "about.button.interests": "Discover More Interests",
    "about.button.hide": "Hide Interests",
    "about.interests.title": "Interests.exe",

    // Interests
    "interests.dance.title": "Dance",
    "interests.dance.desc":
      "Passionate about the feeling of freedom that dance provides, through different styles and rhythms.",
    "interests.gaming.title": "Gaming",
    "interests.gaming.desc":
      "I'm a casual gamer! I like to get lost in good games, enjoying immersion without rush, whether to relax or explore new worlds.",
    "interests.painting.title": "Painting",
    "interests.painting.desc":
      "I love swapping the computer for paints and bringing watercolor to the table, because that's when colors come to life in a way digital never could.",
    "interests.geek.title": "Geek & Pop Culture",
    "interests.geek.desc":
      "I'm a fan of fantastic universes like Harry Potter and Percy Jackson, and especially the musical Hamilton.",

    // Projects Section
    "projects.title": "Projects",
    "projects.view": "View Details",
    "projects.github": "GitHub",
    "projects.deploy": "View Deploy",

    // Projects
    "projects.1.title": "AI-Powered Health Assistant",
    "projects.1.description":
      "A detailed health monitoring system that uses artificial intelligence to provide personalized health recommendations. This project was developed to help users track their health metrics and receive customized advice.",

    "projects.2.title": "Smart Learning Platform",
    "projects.2.description":
      "An adaptive learning platform that personalizes content based on student performance. Implementation of complex algorithms for learning path optimization and performance analysis.",

    "projects.3.title": "Eco-Track",
    "projects.3.description":
      "A comprehensive environmental monitoring system. Focus on real-time data collection and visualization for environmental impact assessment.",

    "projects.4.title": "Community Connect",
    "projects.4.description":
      "A social platform for community engagement and local initiatives. Using modern technologies to bring communities together and facilitate local action.",

    // Awards Section
    "awards.title": "Awards",
    "awards.achievement": "Achievement",
    "awards.uber.title": "Regional Finalist in Coding Category",
    "awards.uber.org": "Uber Global Hackathon",
    "awards.uber.desc":
      "At Uber Global Hackathon we developed an innovative application. Using a Python algorithm, we optimized routes and were among the 11.52% of classified teams, guaranteeing our place in the regional round.",
    "awards.uber.achievement":
      "Qualified for the Middle East, Africa, and Russia regional finals, representing significant achievement in a highly competitive global competition.",

    "awards.ai.title": "Brazilian Artificial Intelligence Olympiad",
    "awards.ai.org": "Celeritas",
    "awards.ai.desc":
      "Developed and tested a machine learning model using logistic regression to predict safety in proposed cities, based on specific data previously provided.",
    "awards.ai.achievement":
      "Successfully qualified for the second stage of the competition, demonstrating strong capabilities in AI and machine learning.",

    // Volunteering Section
    "volunteering.title": "Volunteering",
    "volunteering.impact": "Impact",
    "volunteering.hope.org": "Code of Hope",
    "volunteering.hope.role": "Founder and Web Developer",
    "volunteering.hope.period": "Jan 2023 - Present",
    "volunteering.hope.desc":
      "Founded and lead Code of Hope, a volunteer project that creates websites for non-profit organizations. Our goal is to help these organizations improve their online presence and reach more people.",
    "volunteering.hope.impact":
      "Successfully developed and deployed multiple websites using Next.js, JavaScript, and Tailwind CSS, helping non-profits improve their digital presence and accessibility.",

    "volunteering.paz.org": "ONG Palavras de Paz",
    "volunteering.paz.role": "Front-end Developer",
    "volunteering.paz.period": "Aug 2023 - Jan 2024",
    "volunteering.paz.desc":
      "Developed and maintained the organization's website, implementing volunteer management systems and activity tracking functionality using React.js, Next.js, and TypeScript.",
    "volunteering.paz.impact":
      "Created a robust platform enabling volunteers to register, manage activities, and submit reports, while collaborating with cross-functional teams to ensure optimal user experience.",

    // Chat
    "chat.title": "Chat",
    "chat.placeholder": "Type your message...",
    "chat.welcome": "Hello! How can I help you today?",
    "chat.response": "Thank you for your message! I'll respond soon.",

    // Footer
    "footer.made": "Made with 💚 by Riany Mello",
    "footer.rights": "All rights reserved",

    // Email
    "email.copied": "Email copied!",

    // Project Categories
    "projects.category.all": "All",
    "projects.category.ai": "AI & Computer Vision",
    "projects.category.web": "Web Development",
    "projects.category.mobile": "Mobile Apps",

    // AI Projects
    "projects.facial-recognition.title": "Facial Recognition for Attendance",
    "projects.facial-recognition.description": "Attendance control system based on facial recognition.",

    "projects.hackbrasa.title": "HackBRASA",
    "projects.hackbrasa.description":
      "AI application for financial management with OCR, extracting data from scanned documents.",

    "projects.smartroutes.title": "SmartRoutes",
    "projects.smartroutes.description":
      "Traffic simulation using the Nagel-Schreckenberg model, focusing on AI for flow optimization and management.",

    "projects.ml-curso.title": "ML-Course",
    "projects.ml-curso.description": "Repository with machine learning studies and implementations.",

    // Web Projects
    "projects.first-steps.title": "First Steps App",
    "projects.first-steps.description": "Introductory web app for programming and development.",

    "projects.club-first.title": "Club First",
    "projects.club-first.description": "Website focused on communities and events.",

    "projects.lista-c.title": "Lista C",
    "projects.lista-c.description": "Web-based list organization and management tool.",

    "projects.ecological-footprint.title": "Ecological Footprint",
    "projects.ecological-footprint.description": "Platform for calculating ecological footprint and sustainability.",

    "projects.palavras-de-paz.title": "Palavras de Paz",
    "projects.palavras-de-paz.description": "Project focused on peace messages and inspiration.",

    "projects.code-of-hope.title": "Code of Hope",
    "projects.code-of-hope.description": "Educational initiative for technology inclusion.",

    // Frontend Projects
    "projects.ignite-feed.title": "Ignite Feed",
    "projects.ignite-feed.description": "Interactive application inspired by Rocketseat's Ignite course.",

    "projects.old-portfolio.title": "Portifa (Old Portfolio)",
    "projects.old-portfolio.description": "Previous version of the portfolio.",

    // Mobile Projects
    "projects.smartroutes-mobile.title": "SmartRoutes",
    "projects.smartroutes-mobile.description":
      "Mobile app for real-time route optimization and traffic management using AI algorithms.",
    "projects.hackbrasa-mobile.title": "HackBRASA",
    "projects.hackbrasa-mobile.description":
      "Mobile financial management app with AI-powered OCR for document scanning and data extraction.",
  },
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    // About Section
    "about.title": "Sobre Mim",
    "about.p1":
      "Meu nome é Riany Mello e sou apaixonada por tecnologia e inovação. Comecei a programar aos 14 anos de forma autodidata e, atualmente, estudo Gestão e Programação de Sistemas Informáticos na ETAP Escola Profissional.",
    "about.p2":
      "Tenho um grande interesse em Inteligência Artificial, área na qual me aprofundo em meus estudos pessoais. Sou fundadora do STEM for Women, iniciativa que promove a participação feminina na tecnologia por meio de educação gratuita, e mentora no Technovation Girls, ajudando jovens mulheres a desenvolver soluções inovadoras.",
    "about.p3":
      "Estudo reconhecimento facial, explorando bibliotecas como OpenCV e Dlib, e escrevo artigos de divulgação científica para tornar a tecnologia mais acessível.",
    "about.button.cv": "Baixar Currículo",
    "about.button.interests": "Descobrir mais interesses",
    "about.button.hide": "Ocultar interesses",
    "about.interests.title": "Interesses.exe",

    // Interests
    "interests.dance.title": "Dança",
    "interests.dance.desc":
      "Apaixonada pela sensação de liberdade que a dança proporciona, através de diferentes estilos e ritmos.",
    "interests.gaming.title": "Jogos",
    "interests.gaming.desc":
      "Sou uma gamer casual! Gosto de me perder em bons jogos, aproveitando a imersão sem pressa, seja para relaxar ou explorar novos mundos.",
    "interests.painting.title": "Pintura",
    "interests.painting.desc":
      "Adoro trocar o computador pelas tintas e trazer a aquarela para a mesa, porque é nesse momento que as cores ganham vida de um jeito que o digital nunca conseguiria.",
    "interests.geek.title": "Cultura Geek e Pop",
    "interests.geek.desc":
      "Sou fã de universos fantásticos como Harry Potter e Percy Jackson, e principalmente do musical Hamilton.",

    // Projects Section
    "projects.title": "Projetos",
    "projects.view": "Ver Detalhes",
    "projects.github": "GitHub",
    "projects.deploy": "Ver Deploy",

    // Projects
    "projects.1.title": "Assistente de Saúde com IA",
    "projects.1.description":
      "Um sistema detalhado de monitoramento de saúde que usa inteligência artificial para fornecer recomendações personalizadas. Este projeto foi desenvolvido para ajudar usuários a acompanhar suas métricas de saúde e receber conselhos personalizados.",

    "projects.2.title": "Plataforma de Aprendizagem Inteligente",
    "projects.2.description":
      "Uma plataforma de aprendizagem adaptativa que personaliza o conteúdo com base no desempenho do aluno. Implementação de algoritmos complexos para otimização de percurso de aprendizagem e análise de desempenho.",

    "projects.3.title": "Eco-Track",
    "projects.3.description":
      "Um sistema abrangente de monitoramento ambiental. Foco na coleta e visualização de dados em tempo real para avaliação de impacto ambiental.",

    "projects.4.title": "Community Connect",
    "projects.4.description":
      "Uma plataforma social para engajamento comunitário e iniciativas locais. Usando tecnologias modernas para unir comunidades e facilitar ações locais.",

    // Awards Section
    "awards.title": "Prêmios",
    "awards.achievement": "Conquista",
    "awards.uber.title": "Finalista Regional na Categoria Programação",
    "awards.uber.org": "Uber Global Hackathon",
    "awards.uber.desc":
      "No Uber Global Hackathon desenvolvemos uma aplicação inovadora. Usando um algoritmo em Python, otimizamos rotas e ficamos entre os 11,52% das equipes classificadas, garantindo nossa vaga na etapa regional.",
    "awards.uber.achievement":
      "Classificado para as finais regionais do Oriente Médio, África e Rússia, representando uma conquista significativa em uma competição global altamente competitiva.",

    "awards.ai.title": "Olimpíada Brasileira de Inteligência Artificial",
    "awards.ai.org": "Celeritas",
    "awards.ai.desc":
      "Desenvolvi e testei um modelo de machine learning usando regressão logística para prever a segurança em cidades propostas, com base em dados específicos previamente fornecidos.",
    "awards.ai.achievement":
      "Classificado com sucesso para a segunda etapa da competição, demonstrando fortes capacidades em IA e machine learning.",

    // Volunteering Section
    "volunteering.title": "Voluntariado",
    "volunteering.impact": "Impacto",
    "volunteering.hope.org": "Code of Hope",
    "volunteering.hope.role": "Fundadora e Desenvolvedora Web",
    "volunteering.hope.period": "Jan 2023 - Presente",
    "volunteering.hope.desc":
      "Fundei e lidero o Code of Hope, um projeto voluntário que cria websites para organizações sem fins lucrativos. Nosso objetivo é ajudar essas organizações a melhorar sua presença online e alcançar mais pessoas.",
    "volunteering.hope.impact":
      "Desenvolvi e implantei com sucesso vários websites usando Next.js, JavaScript e Tailwind CSS, ajudando ONGs a melhorar sua presença digital e acessibilidade.",

    "volunteering.paz.org": "ONG Palavras de Paz",
    "volunteering.paz.role": "Desenvolvedora Front-end",
    "volunteering.paz.period": "Ago 2023 - Jan 2024",
    "volunteering.paz.desc":
      "Desenvolvi e mantive o website da organização, implementando sistemas de gestão de voluntários e funcionalidade de acompanhamento de atividades usando React.js, Next.js e TypeScript.",
    "volunteering.paz.impact":
      "Criei uma plataforma robusta permitindo que voluntários se registrem, gerenciem atividades e enviem relatórios, colaborando com equipes multifuncionais para garantir uma ótima experiência do usuário.",

    // Chat
    "chat.title": "Chat",
    "chat.placeholder": "Digite sua mensagem...",
    "chat.welcome": "Olá! Como posso ajudar você hoje?",
    "chat.response": "Obrigado por sua mensagem! Responderei em breve.",

    // Footer
    "footer.made": "Feito com 💚 por Riany Mello",
    "footer.rights": "Todos os direitos reservados",

    // Email
    "email.copied": "Email copiado!",

    // Project Categories
    "projects.category.all": "Todos",
    "projects.category.ai": "IA & Visão Computacional",
    "projects.category.web": "Desenvolvimento Web",
    "projects.category.mobile": "Aplicativos Móveis",

    // AI Projects
    "projects.facial-recognition.title": "Reconhecimento Facial para Presença",
    "projects.facial-recognition.description": "Sistema de controle de presença baseado em reconhecimento facial.",

    "projects.hackbrasa.title": "HackBRASA",
    "projects.hackbrasa.description":
      "Aplicação de IA para gestão financeira com OCR, extraindo dados de documentos escaneados.",

    "projects.smartroutes.title": "SmartRoutes",
    "projects.smartroutes.description":
      "Simulação de tráfego usando o modelo de Nagel-Schreckenberg, com foco em IA para otimização e gestão de fluxo.",

    "projects.ml-curso.title": "ML-Curso",
    "projects.ml-curso.description": "Repositório com estudos e implementações de aprendizado de máquina.",

    // Web Projects
    "projects.first-steps.title": "First Steps App",
    "projects.first-steps.description": "Web app introdutório para programação ou desenvolvimento.",

    "projects.club-first.title": "Club First",
    "projects.club-first.description": "Site voltado para comunidades ou eventos.",

    "projects.lista-c.title": "Lista C",
    "projects.lista-c.description": "Ferramenta de organização e gerenciamento de listas em formato web.",

    "projects.ecological-footprint.title": "Ecological Footprint",
    "projects.ecological-footprint.description": "Plataforma para cálculo de pegada ecológica e sustentabilidade.",

    "projects.palavras-de-paz.title": "Palavras de Paz",
    "projects.palavras-de-paz.description": "Projeto voltado para mensagens de paz e inspiração.",

    "projects.code-of-hope.title": "Code of Hope",
    "projects.code-of-hope.description": "Iniciativa educacional para inclusão na tecnologia.",

    // Frontend Projects
    "projects.ignite-feed.title": "Ignite Feed",
    "projects.ignite-feed.description": "Aplicação interativa inspirada no curso Ignite da Rocketseat.",

    "projects.old-portfolio.title": "Portifa (Antigo Portfólio)",
    "projects.old-portfolio.description": "Versão anterior do portfólio.",

    // Mobile Projects
    "projects.smartroutes-mobile.title": "SmartRoutes",
    "projects.smartroutes-mobile.description":
      "Aplicativo móvel para otimização de rotas e gerenciamento de tráfego em tempo real usando algoritmos de IA.",
    "projects.hackbrasa-mobile.title": "HackBRASA",
    "projects.hackbrasa-mobile.description":
      "Aplicativo móvel de gestão financeira com OCR potencializado por IA para digitalização e extração de dados de documentos.",
  },
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string) => {
    return translations[language][key] || key
  }

  return <TranslationContext.Provider value={{ language, setLanguage, t }}>{children}</TranslationContext.Provider>
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}

