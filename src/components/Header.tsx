import { Button } from './ui/button'
import { ExternalLink } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              TSCodex
            </h1>
          </div>

          {/* Navigation Buttons */}
          <nav className="flex items-center gap-2 sm:gap-4">
            <a
              href="https://github.com/unbywyd/tscodex-mcp-manager-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
              >
                <span className="hidden sm:inline">MCP Manager</span>
                <span className="sm:hidden">Manager</span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </Button>
            </a>
            <a
              href="https://github.com/unbywyd/tscodex-msp-manager-bridge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                size="sm"
                className="text-xs sm:text-sm"
              >
                <span className="hidden sm:inline">Cursor Bridge</span>
                <span className="sm:hidden">Bridge</span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

