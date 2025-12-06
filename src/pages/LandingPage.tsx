import { useSEO } from '@/hooks/useSEO'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { WhatIsMCP } from '@/components/WhatIsMCP'
import { AppShowcase } from '@/components/AppShowcase'
import { Architecture } from '@/components/Architecture'
import { Workspaces } from '@/components/Workspaces'
import { Features } from '@/components/Features'
import { Security } from '@/components/Security'
import { SDKPackages } from '@/components/SDKPackages'
import { Installation } from '@/components/Installation'
import { Footer } from '@/components/Footer'

function LandingPage() {
  useSEO({
    title: 'TSCodex - LLM Development Tools | MCP Manager Desktop Application',
    description: 'MCP Manager - standalone desktop application for managing MCP (Model Context Protocol) servers. Centralized hub for configuring, running, and monitoring MCP servers with granular security controls and AI integration.',
    keywords: 'MCP, Model Context Protocol, LLM, AI, Cursor, VS Code, MCP Manager, MCP Server, AI Development Tools, Desktop Application, Electron, Workspace Management, Secrets Management, AI Agent, Dynamic Tools, MCP SDK',
    ogTitle: 'TSCodex - LLM Development Tools | MCP Manager',
    ogDescription: 'MCP Manager - standalone desktop application for managing MCP servers. Tools for working with Large Language Models.',
    ogImage: 'https://tscodex.com/og-image.png',
    ogUrl: 'https://tscodex.com',
    ogSiteName: 'TSCodex',
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image',
    twitterTitle: 'TSCodex - LLM Development Tools | MCP Manager',
    twitterDescription: 'MCP Manager - standalone desktop application for managing MCP servers',
    twitterImage: 'https://tscodex.com/og-image.png',
    twitterCreator: '@unbywyd',
    canonical: 'https://tscodex.com',
    author: 'Artyom Gorlovetskiy (unbywyd)',
    robots: 'index, follow',
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhatIsMCP />
      <AppShowcase />
      <Architecture />
      <Workspaces />
      <Features />
      <Security />
      <SDKPackages />
      <Installation />
      <Footer />
    </div>
  )
}

export default LandingPage

