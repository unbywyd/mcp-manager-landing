import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Monitor, Server, Settings, Key } from 'lucide-react'

export function AppShowcase() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
            Visual Interface
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Intuitive desktop application with powerful management capabilities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <div className="relative max-w-6xl mx-auto rounded-lg border border-border overflow-hidden shadow-2xl bg-surface">
            <img
              src="/app.png"
              alt="MCP Manager Application Interface"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              icon: Monitor,
              title: 'Workspace Management',
              description: 'Organize servers by workspace. Global settings and workspace-specific configurations.',
            },
            {
              icon: Server,
              title: 'Server Control',
              description: 'Start, stop, and restart servers with one click. Real-time status monitoring.',
            },
            {
              icon: Settings,
              title: 'Visual Configuration',
              description: 'Configure servers through intuitive UI. JSON Schema-based forms.',
            },
            {
              icon: Key,
              title: 'Secure Secrets',
              description: 'Manage secrets at global, workspace, and server levels. OS Keychain integration.',
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full bg-surface border-border">
                  <CardHeader>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {item.description}
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

