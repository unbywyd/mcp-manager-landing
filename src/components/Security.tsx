import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Key, Lock, Shield, Network, CheckCircle2 } from 'lucide-react'

const securityLayers = [
  {
    icon: Key,
    title: 'Secrets in OS Keychain',
    description: 'Never stored in plain text. Uses native OS security: Windows Credential Store / macOS Keychain / Linux Keyring',
  },
  {
    icon: Network,
    title: 'HTTP API localhost only',
    description: 'API available only on 127.0.0.1. Not accessible from outside. Protection against external attacks.',
  },
  {
    icon: Lock,
    title: 'AI Keys Proxied',
    description: 'Keys are not passed to servers directly. Uses proxy with tokens. Full access control.',
  },
  {
    icon: Shield,
    title: 'Granular Permissions',
    description: 'Permissions for each server separately. Access control to environment, context, secrets, AI. Minimum necessary rights.',
  },
  {
    icon: CheckCircle2,
    title: 'Secure IPC',
    description: 'Secure interaction between UI and host. Protection against inter-process attacks. Validation of all requests.',
  },
]

export function Security() {
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
            Security
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Multi-layered security system to protect your data and secrets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {securityLayers.map((layer, index) => {
            const Icon = layer.icon
            return (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-surface border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl">{layer.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {layer.description}
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

