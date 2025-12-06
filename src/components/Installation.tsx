import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Download, AlertTriangle, ExternalLink } from 'lucide-react'

export function Installation() {
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
            Installation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {[
            {
              platform: 'Windows',
              icon: Download,
              steps: [
                'Go to the releases page',
                'Download the latest .exe installer',
                'Run the installer and follow the instructions',
                'MCP Manager will automatically be added to the Start menu',
              ],
              link: 'https://github.com/unbywyd/tscodex-mcp-manager-app/releases',
            },
            {
              platform: 'macOS',
              icon: AlertTriangle,
              steps: [
                'Application created for Windows',
                'macOS version requires code signing',
                'Developers can build from source',
                'For collaboration — contact me',
              ],
              link: 'https://github.com/unbywyd/tscodex-mcp-manager-app',
              warning: true,
            },
            {
              platform: 'Linux',
              icon: Download,
              steps: [
                'Go to the releases page',
                'Download .AppImage or .deb package',
                'For AppImage: chmod +x && ./MCP-Manager.AppImage',
                'For deb: sudo dpkg -i mcp-manager.deb',
              ],
              link: 'https://github.com/unbywyd/tscodex-mcp-manager-app/releases',
            },
          ].map((platform, index) => {
            const Icon = platform.icon
            return (
              <motion.div
                key={platform.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full bg-surface border-border ${platform.warning ? 'border-yellow-500/50' : ''}`}>
                  <CardHeader>
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 ${
                      platform.warning 
                        ? 'bg-yellow-500/20' 
                        : 'bg-gradient-accent'
                    }`}>
                      <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${
                        platform.warning ? 'text-yellow-400' : 'text-white'
                      }`} />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl">{platform.platform}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3 mb-4">
                      {platform.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-2 text-sm sm:text-base text-text-secondary">
                          <span className="text-primary mt-1 font-bold">{stepIndex + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge variant="outline" className="cursor-pointer hover:bg-accent flex items-center gap-1">
                        Download
                        <ExternalLink className="w-3 h-3" />
                      </Badge>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* macOS Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-yellow-500/10 border-yellow-500/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <CardTitle className="text-xl sm:text-2xl text-yellow-400">macOS Users</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm sm:text-base text-text-secondary leading-relaxed mb-4">
                Application created for Windows. macOS version requires code signing for distribution.
                Developers can build and sign the application from source independently.
              </CardDescription>
              <div className="space-y-2 text-sm sm:text-base text-text-secondary">
                <p>
                  <strong>Resources:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    Source code:{' '}
                    <a
                      href="https://github.com/unbywyd/tscodex-mcp-manager-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      GitHub Repository
                    </a>
                  </li>
                  <li>
                    Build instructions:{' '}
                    <a
                      href="https://github.com/unbywyd/tscodex-mcp-manager-app#development"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Development Guide
                    </a>
                  </li>
                </ul>
                <p className="mt-4">
                  <strong>Collaboration:</strong> If you want to help with the macOS version or have the ability to sign the application,
                  please contact me through{' '}
                  <a
                    href="https://github.com/unbywyd/tscodex-mcp-manager-app/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub Issues
                  </a>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

