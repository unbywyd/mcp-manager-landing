import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { ExternalLink, Package } from 'lucide-react'

const packages = [
  {
    name: '@tscodex/mcp-sdk',
    description: 'Core SDK - TypeScript SDK for creating MCP servers and tools based on Model Context Protocol',
    npm: 'https://www.npmjs.com/package/@tscodex/mcp-sdk',
    github: 'https://github.com/unbywyd/tscodex-mcp-sdk',
  },
  {
    name: '@tscodex/mcp-images',
    description: 'MCP (Model Context Protocol) server for comprehensive image processing, stock image search, and AI image generation. Built with TypeScript and Sharp for high-performance image manipulation.',
    npm: 'https://www.npmjs.com/package/@tscodex/mcp-images',
    github: 'https://github.com/unbywyd/tscodex-mcp-images',
  },
  {
    name: '@tscodex/mcp-screenshot',
    description: 'MCP server for capturing web page screenshots using Playwright. Supports full page, viewport, and element screenshots with optional script execution for complex interactions.',
    npm: 'https://www.npmjs.com/package/@tscodex/mcp-screenshot',
    github: 'https://github.com/unbywyd/tscodex-mcp-screenshot',
  },
  {
    name: '@tscodex/mcp-pdf',
    description: 'MCP server for generating PDF documents from Markdown, HTML, and URLs using Playwright',
    npm: 'https://www.npmjs.com/package/@tscodex/mcp-pdf',
    github: 'https://github.com/unbywyd/tscodex-mcp-pdf',
  },
]

export function SDKPackages() {
  return (
    <section id="sdk-packages" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
            SDK & Packages
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Packages for creating MCP servers and integrating with the system
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Package className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl sm:text-2xl">{pkg.name}</CardTitle>
                  </div>
                  <CardDescription className="text-sm sm:text-base text-text-secondary">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={pkg.npm}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge variant="outline" className="cursor-pointer hover:bg-accent flex items-center gap-1">
                        npm
                        <ExternalLink className="w-3 h-3" />
                      </Badge>
                    </a>
                    <a
                      href={pkg.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge variant="outline" className="cursor-pointer hover:bg-accent flex items-center gap-1">
                        GitHub
                        <ExternalLink className="w-3 h-3" />
                      </Badge>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16"
        >
          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">SDK Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm sm:text-base text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Fast HTTP MCP server creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Workspace context support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Automatic header processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Integration with MCP Manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>TypeScript support</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

