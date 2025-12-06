import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { 
  Server, 
  Code, 
  Lock, 
  Brain, 
  Shield, 
  Plug,
  ExternalLink 
} from 'lucide-react'

const features = [
  {
    icon: Server,
    title: 'Server Management',
    description: 'Add servers through various package managers: npm, npx, pnpx, yarn, bunx, local path',
    items: [
      'Visual display of tools, resources, prompts',
      'JSON Schema configuration through UI',
      'Start/stop/restart servers',
      'Real-time status monitoring',
    ],
    links: [
      { label: '@tscodex/mcp-images', url: 'https://github.com/unbywyd/tscodex-mcp-images' },
      { label: '@tscodex/mcp-sdk', url: 'https://www.npmjs.com/package/@tscodex/mcp-sdk' },
    ],
  },
  {
    icon: Code,
    title: 'Dynamic Tools',
    description: 'Built-in MCP Tools server allows creating custom tools, prompts, and resources without writing a separate package.',
    items: [
      'Static — returns fixed content',
      'HTTP — performs HTTP requests',
      'Function — executes JavaScript code',
      'AI-assisted generation via prompts',
    ],
  },
  {
    icon: Lock,
    title: 'Secrets Management',
    description: 'Three-level secret override system with secure storage.',
    items: [
      'Global → Workspace → Server',
      'Storage in OS Keychain',
      'Secrets never in plain text',
      'Automatic injection into servers',
    ],
  },
  {
    icon: Brain,
    title: 'AI Agent Integration',
    description: 'OpenAI-compatible API proxy for using AI in MCP servers. Keys are not passed to servers directly.',
    items: [
      'AI Agent configuration through UI',
      'Access control for each server',
      'Token usage statistics',
      'Rate limiting and model restrictions',
    ],
  },
  {
    icon: Shield,
    title: 'Permissions System',
    description: 'Highly flexible permission structure for controlling server access to data.',
    items: [
      'Environment Permissions',
      'Context Permissions',
      'Secrets Permissions',
      'AI Access Permissions',
    ],
  },
  {
    icon: Plug,
    title: 'Cursor Bridge Extension',
    description: 'VS Code/Cursor extension for automatic integration with MCP Manager.',
    items: [
      'Automatic workspace registration',
      'Synchronization with MCP Manager',
      'Registration in mcp.json',
      'Project Root passing',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/unbywyd/tscodex-msp-manager-bridge' },
    ],
    image: '/bridge-icon.png',
  },
]

export function Features() {
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
            Features
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            All MCP Manager features for efficient work with MCP servers
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
                    {feature.image ? (
                      <div className="mb-4">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                    )}
                    <CardTitle className="text-xl sm:text-2xl">{feature.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base text-text-secondary mt-2">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm sm:text-base text-text-secondary">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {feature.links && (
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                        {feature.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Badge
                              variant="outline"
                              className="cursor-pointer hover:bg-accent flex items-center gap-1"
                            >
                              {link.label}
                              <ExternalLink className="w-3 h-3" />
                            </Badge>
                          </a>
                        ))}
                      </div>
                    )}
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

