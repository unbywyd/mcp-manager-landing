import { Button } from './ui/button'
import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,170,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="h-8 sm:h-14 md:h-20"></div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 sm:mb-6">
              TSCodex
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-4 text-text-secondary font-normal">
                LLM Development Tools
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto"
          >
            Tools for working with Large Language Models
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-text-secondary/80 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            MCP Manager — standalone desktop application for managing MCP servers.
            Centralized hub for configuring, running, and monitoring MCP servers
            with granular security controls and AI integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            <a
              href="https://github.com/unbywyd/tscodex-mcp-manager-app/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 flex items-center gap-3 hover:scale-105 transition-transform"
              >
                <img
                  src="/mcp-manager.png"
                  alt="MCP Manager"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
                <span className="flex flex-col items-start">
                  <span className="text-sm sm:text-base font-semibold">MCP Manager</span>
                  <span className="text-xs sm:text-sm opacity-80">Desktop App</span>
                </span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
              </Button>
            </a>
            <a
              href="https://github.com/unbywyd/tscodex-msp-manager-bridge/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 flex items-center gap-3 hover:scale-105 transition-transform bg-white text-gray-900 hover:bg-gray-100 border-0"
              >
                <img
                  src="/bridge-icon.png"
                  alt="Cursor Bridge Extension"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
                <span className="flex flex-col items-start">
                  <span className="text-sm sm:text-base font-semibold">Cursor Bridge</span>
                  <span className="text-xs sm:text-sm opacity-80">VS Code Extension</span>
                </span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
              </Button>
            </a>
          </motion.div>

          {/* App Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 sm:mt-12 md:mt-16"
          >
            <div className="relative max-w-5xl mx-auto rounded-lg border border-border overflow-hidden shadow-2xl bg-surface">
              <img
                src="/app.png"
                alt="MCP Manager Application Interface"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

