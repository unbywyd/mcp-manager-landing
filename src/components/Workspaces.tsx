import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Folder, Network } from 'lucide-react'

export function Workspaces() {
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
            Workspaces & Proxying
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-surface border-border h-full">
              <CardHeader>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                  <Folder className="w-6 h-6 sm:w-7 sm:h-7 text-red-400" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Each project in Cursor requires its own workspace. MCP servers must work with a specific project,
                  but one server cannot know about different projects simultaneously.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-surface border-border h-full">
              <CardHeader>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  MCP Manager creates workspace proxies for each project. One server → multiple workspace proxies.
                  SDK receives headers from the current workspace and allows one server to work with different workspaces.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6 sm:mb-8 text-center">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: '1',
                title: 'Automatic Registration',
                description: 'Cursor Bridge automatically registers workspace in MCP Manager. Project path is passed automatically.',
              },
              {
                step: '2',
                title: 'Workspace Proxying',
                description: 'MCP Manager creates proxies for each workspace. Each proxy passes its PROJECT_ROOT to the server.',
              },
              {
                step: '3',
                title: 'Synchronization',
                description: 'Cursor Bridge synchronizes Cursor with MCP Manager. Automatic registration of proxy MCP servers in mcp.json.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="bg-surface border-border h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold">
                        {item.step}
                      </div>
                      <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

