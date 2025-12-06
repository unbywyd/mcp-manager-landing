import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Server, Settings, Key, Brain, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Server,
    title: 'Process Management',
    description: 'Start, stop, restart MCP servers. Real-time status monitoring. Automatic recovery on errors.',
  },
  {
    icon: Settings,
    title: 'Visual Configuration Interface',
    description: 'Display tools, resources, prompts. JSON Schema configuration through UI. Intuitive management.',
  },
  {
    icon: Key,
    title: 'Secrets & Authorization',
    description: '3 levels of override: Global → Workspace → Server. Storage in OS Keychain. Secrets never in plain text.',
  },
  {
    icon: Brain,
    title: 'AI Agent Integration',
    description: 'OpenAI-compatible API proxy. Token usage statistics. Rate limiting and model restrictions.',
  },
  {
    icon: Zap,
    title: 'Dynamic Tool Creation',
    description: 'MCP Tools — dynamic server. Create tools/resources without code. AI-assisted generation via prompts.',
  },
]

export function WhatIsMCP() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
            What is MCP Manager?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Standalone desktop application for managing MCP (Model Context Protocol) servers.
            MCP Manager provides a centralized hub for configuring, running, and monitoring
            MCP servers with granular security controls and AI integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-background border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

