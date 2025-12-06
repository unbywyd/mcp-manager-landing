import { Separator } from './ui/separator'
import { ExternalLink } from 'lucide-react'

const links = {
  products: [
    { label: 'MCP Manager', url: 'https://github.com/unbywyd/tscodex-mcp-manager-app' },
    { label: 'Cursor Bridge', url: 'https://github.com/unbywyd/tscodex-msp-manager-bridge' },
    { label: 'SDK', url: 'https://www.npmjs.com/package/@tscodex/mcp-sdk' },
  ],
  packages: [
    { label: '@tscodex/mcp-sdk', url: 'https://www.npmjs.com/package/@tscodex/mcp-sdk' },
    { label: '@tscodex/mcp-images', url: 'https://www.npmjs.com/package/@tscodex/mcp-images' },
    { label: '@tscodex/mcp-server-example', url: 'https://www.npmjs.com/package/@tscodex/mcp-server-example' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
              TSCodex
            </h3>
            <p className="text-sm sm:text-base text-text-secondary">
              Tools for working with Large Language Models
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Products</h4>
            <ul className="space-y-2">
              {links.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-text-secondary hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Packages</h4>
            <ul className="space-y-2">
              {links.packages.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-text-secondary hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* License */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">License</h4>
            <p className="text-sm sm:text-base text-text-secondary mb-2">
              CC BY-NC 4.0
            </p>
            <p className="text-xs sm:text-sm text-text-secondary/80">
              Free for non-commercial use
            </p>
            <p className="text-xs sm:text-sm text-text-secondary/80 mt-2">
              For commercial licensing,{' '}
              <a
                href="https://github.com/unbywyd/tscodex-mcp-manager-app/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                contact us
              </a>
            </p>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="text-center space-y-4">
          <p className="text-sm sm:text-base text-text-secondary">
            © TSCodex {new Date().getFullYear()}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-text-secondary">
            <span>Designed and developed by</span>
            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="https://unbywyd.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Artyom Gorlovetskiy (unbywyd)
              </a>
              <span className="text-text-secondary/50">•</span>
              <a
                href="https://webto.pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                WebToPro
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

