import { useState } from 'react'
import { motion } from 'framer-motion'
import { ReactFlow, Node, Edge, Background, Controls } from 'reactflow'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs'
import 'reactflow/dist/style.css'

// Architecture Diagram - Clean vertical layout
const architectureNodes: Node[] = [
  // Row 1: MCP Manager (top)
  {
    id: 'manager',
    type: 'default',
    position: { x: 400, y: 0 },
    data: { label: 'MCP Manager\n(Desktop App)' },
    style: {
      background: '#12121a',
      border: '2px solid #00d4aa',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 180,
    },
  },
  // Row 2: MCP Tools + SDK Core
  {
    id: 'mcp-tools',
    type: 'default',
    position: { x: 200, y: 120 },
    data: { label: 'MCP Tools\n(Dynamic Server)' },
    style: {
      background: '#12121a',
      border: '2px solid #0ea5e9',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 160,
    },
  },
  {
    id: 'sdk',
    type: 'default',
    position: { x: 600, y: 120 },
    data: { label: '@tscodex/mcp-sdk\n(Core SDK)' },
    style: {
      background: '#12121a',
      border: '2px solid #00d4aa',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 160,
    },
  },
  // Row 3: SDK-based Servers
  {
    id: 'server1',
    type: 'default',
    position: { x: 400, y: 240 },
    data: { label: 'mcp-images' },
    style: {
      background: '#12121a',
      border: '2px solid #0ea5e9',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '12px 16px',
      textAlign: 'center',
      minWidth: 120,
    },
  },
  {
    id: 'server2',
    type: 'default',
    position: { x: 560, y: 240 },
    data: { label: 'mcp-git' },
    style: {
      background: '#12121a',
      border: '2px solid #0ea5e9',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '12px 16px',
      textAlign: 'center',
      minWidth: 120,
    },
  },
  {
    id: 'server3',
    type: 'default',
    position: { x: 720, y: 240 },
    data: { label: 'mcp-db' },
    style: {
      background: '#12121a',
      border: '2px solid #0ea5e9',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '12px 16px',
      textAlign: 'center',
      minWidth: 120,
    },
  },
  // Row 4: Workspaces
  {
    id: 'workspace1',
    type: 'default',
    position: { x: 250, y: 380 },
    data: { label: 'Workspace 1\n(All Servers)' },
    style: {
      background: '#12121a',
      border: '2px solid #8b5cf6',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 140,
    },
  },
  {
    id: 'workspace2',
    type: 'default',
    position: { x: 550, y: 380 },
    data: { label: 'Workspace 2\n(Only mcp-images)' },
    style: {
      background: '#12121a',
      border: '2px solid #8b5cf6',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 140,
    },
  },
  // Row 5: Bridge
  {
    id: 'bridge',
    type: 'default',
    position: { x: 400, y: 520 },
    data: { label: 'Cursor Bridge\n(Extension)' },
    style: {
      background: '#12121a',
      border: '2px solid #f59e0b',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 160,
    },
  },
  // Row 6: Clients
  {
    id: 'cursor1',
    type: 'default',
    position: { x: 200, y: 660 },
    data: { label: 'Cursor 1' },
    style: {
      background: '#12121a',
      border: '2px solid #00d4aa',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '12px 16px',
      textAlign: 'center',
      minWidth: 120,
    },
  },
  {
    id: 'cursor2',
    type: 'default',
    position: { x: 400, y: 660 },
    data: { label: 'Cursor 2' },
    style: {
      background: '#12121a',
      border: '2px solid #00d4aa',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '12px 16px',
      textAlign: 'center',
      minWidth: 120,
    },
  },
  {
    id: 'custom-http',
    type: 'default',
    position: { x: 600, y: 660 },
    data: { label: 'Custom HTTP\n(Any Client)' },
    style: {
      background: '#12121a',
      border: '2px solid #00d4aa',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '12px 16px',
      textAlign: 'center',
      minWidth: 120,
    },
  },
]

const architectureEdges: Edge[] = [
  // Manager -> MCP Tools & SDK
  {
    id: 'e-manager-tools',
    source: 'manager',
    target: 'mcp-tools',
    animated: true,
    style: { stroke: '#0ea5e9' },
    label: 'Has',
    labelStyle: { fill: '#ffffff', fontSize: 11 },
    labelBgStyle: { fill: '#12121a' },
  },
  {
    id: 'e-manager-sdk',
    source: 'manager',
    target: 'sdk',
    animated: true,
    style: { stroke: '#00d4aa' },
    label: 'Manages',
    labelStyle: { fill: '#ffffff', fontSize: 11 },
    labelBgStyle: { fill: '#12121a' },
  },
  // SDK -> Servers (Based on)
  {
    id: 'e-sdk-server1',
    source: 'sdk',
    target: 'server1',
    style: { stroke: '#00d4aa' },
  },
  {
    id: 'e-sdk-server2',
    source: 'sdk',
    target: 'server2',
    style: { stroke: '#00d4aa' },
  },
  {
    id: 'e-sdk-server3',
    source: 'sdk',
    target: 'server3',
    style: { stroke: '#00d4aa' },
  },
  // Workspace 1 -> MCP Tools (Always)
  {
    id: 'e-ws1-tools',
    source: 'workspace1',
    target: 'mcp-tools',
    animated: true,
    style: { stroke: '#8b5cf6' },
    label: 'Always',
    labelStyle: { fill: '#ffffff', fontSize: 11 },
    labelBgStyle: { fill: '#12121a' },
  },
  // Workspace 1 -> All Servers (Proxy)
  {
    id: 'e-ws1-server1',
    source: 'workspace1',
    target: 'server1',
    animated: true,
    style: { stroke: '#8b5cf6' },
  },
  {
    id: 'e-ws1-server2',
    source: 'workspace1',
    target: 'server2',
    animated: true,
    style: { stroke: '#8b5cf6' },
  },
  {
    id: 'e-ws1-server3',
    source: 'workspace1',
    target: 'server3',
    animated: true,
    style: { stroke: '#8b5cf6' },
  },
  // Workspace 2 -> MCP Tools (Always)
  {
    id: 'e-ws2-tools',
    source: 'workspace2',
    target: 'mcp-tools',
    animated: true,
    style: { stroke: '#8b5cf6' },
    label: 'Always',
    labelStyle: { fill: '#ffffff', fontSize: 11 },
    labelBgStyle: { fill: '#12121a' },
  },
  // Workspace 2 -> Only Server 1 (Proxy)
  {
    id: 'e-ws2-server1',
    source: 'workspace2',
    target: 'server1',
    animated: true,
    style: { stroke: '#8b5cf6' },
    label: 'Proxy',
    labelStyle: { fill: '#ffffff', fontSize: 11 },
    labelBgStyle: { fill: '#12121a' },
  },
  // Workspaces -> Bridge
  {
    id: 'e-ws1-bridge',
    source: 'workspace1',
    target: 'bridge',
    animated: true,
    style: { stroke: '#f59e0b' },
  },
  {
    id: 'e-ws2-bridge',
    source: 'workspace2',
    target: 'bridge',
    animated: true,
    style: { stroke: '#f59e0b' },
  },
  // Bridge -> Cursors
  {
    id: 'e-bridge-cursor1',
    source: 'bridge',
    target: 'cursor1',
    animated: true,
    style: { stroke: '#00d4aa' },
    label: 'WS1',
    labelStyle: { fill: '#ffffff', fontSize: 11 },
    labelBgStyle: { fill: '#12121a' },
  },
  {
    id: 'e-bridge-cursor2',
    source: 'bridge',
    target: 'cursor2',
    animated: true,
    style: { stroke: '#00d4aa' },
    label: 'WS2',
    labelStyle: { fill: '#ffffff', fontSize: 11 },
    labelBgStyle: { fill: '#12121a' },
  },
  // Workspace -> Custom HTTP (direct, no bridge needed)
  {
    id: 'e-ws1-http',
    source: 'workspace1',
    target: 'custom-http',
    animated: true,
    style: { stroke: '#00d4aa', strokeDasharray: '5,5' },
    label: 'HTTP API',
    labelStyle: { fill: '#ffffff', fontSize: 11 },
    labelBgStyle: { fill: '#12121a' },
  },
]

// Secrets Management Diagram
const secretsNodes: Node[] = [
  {
    id: 'storage',
    type: 'default',
    position: { x: 300, y: 0 },
    data: { label: 'OS Keychain\n(Secure Storage)' },
    style: {
      background: '#12121a',
      border: '2px solid #0ea5e9',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 160,
    },
  },
  {
    id: 'global',
    type: 'default',
    position: { x: 300, y: 120 },
    data: { label: 'Global\n(Level 1)' },
    style: {
      background: '#12121a',
      border: '2px solid #0ea5e9',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 160,
    },
  },
  {
    id: 'workspace',
    type: 'default',
    position: { x: 300, y: 240 },
    data: { label: 'Workspace\n(Level 2)' },
    style: {
      background: '#12121a',
      border: '2px solid #0ea5e9',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 160,
    },
  },
  {
    id: 'server',
    type: 'default',
    position: { x: 300, y: 360 },
    data: { label: 'Server\n(Level 3)' },
    style: {
      background: '#12121a',
      border: '2px solid #0ea5e9',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 160,
    },
  },
  {
    id: 'permissions',
    type: 'default',
    position: { x: 500, y: 180 },
    data: { label: 'Permissions\n(User Config)' },
    style: {
      background: '#12121a',
      border: '2px solid #00d4aa',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 160,
    },
  },
  {
    id: 'mcp-server',
    type: 'default',
    position: { x: 500, y: 360 },
    data: { label: 'MCP Server\n(Receives)' },
    style: {
      background: '#12121a',
      border: '2px solid #00d4aa',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 160,
    },
  },
]

const secretsEdges: Edge[] = [
  {
    id: 'e1',
    source: 'storage',
    target: 'global',
    animated: true,
    style: { stroke: '#0ea5e9' },
  },
  {
    id: 'e2',
    source: 'global',
    target: 'workspace',
    animated: true,
    style: { stroke: '#0ea5e9' },
    label: '→',
  },
  {
    id: 'e3',
    source: 'workspace',
    target: 'server',
    animated: true,
    style: { stroke: '#0ea5e9' },
    label: '→',
  },
  {
    id: 'e4',
    source: 'server',
    target: 'permissions',
    animated: true,
    style: { stroke: '#00d4aa' },
    label: 'Filter',
  },
  {
    id: 'e5',
    source: 'permissions',
    target: 'mcp-server',
    animated: true,
    style: { stroke: '#00d4aa' },
  },
]

// Workspaces Diagram
const workspacesNodes: Node[] = [
  {
    id: 'mcp-server',
    type: 'default',
    position: { x: 400, y: 0 },
    data: { label: 'MCP Server\n(Running)' },
    style: {
      background: '#12121a',
      border: '2px solid #00d4aa',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 150,
    },
  },
  {
    id: 'proxy',
    type: 'default',
    position: { x: 400, y: 150 },
    data: { label: 'MCP Manager\n(Proxy Host)' },
    style: {
      background: '#12121a',
      border: '2px solid #0ea5e9',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 150,
    },
  },
  {
    id: 'workspace1',
    type: 'default',
    position: { x: 200, y: 300 },
    data: { label: 'Workspace 1\n(Custom Headers)' },
    style: {
      background: '#12121a',
      border: '2px solid #0ea5e9',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 150,
    },
  },
  {
    id: 'workspace2',
    type: 'default',
    position: { x: 400, y: 300 },
    data: { label: 'Workspace 2\n(Custom Headers)' },
    style: {
      background: '#12121a',
      border: '2px solid #0ea5e9',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 150,
    },
  },
  {
    id: 'workspace3',
    type: 'default',
    position: { x: 600, y: 300 },
    data: { label: 'Workspace 3\n(Custom Headers)' },
    style: {
      background: '#12121a',
      border: '2px solid #0ea5e9',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 150,
    },
  },
  {
    id: 'sdk',
    type: 'default',
    position: { x: 400, y: 450 },
    data: { label: '@tscodex/mcp-sdk\n(Receives Context)' },
    style: {
      background: '#12121a',
      border: '2px solid #00d4aa',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 150,
    },
  },
  {
    id: 'tools',
    type: 'default',
    position: { x: 400, y: 600 },
    data: { label: 'Tools / Utils\n(Created with Context)' },
    style: {
      background: '#12121a',
      border: '2px solid #00d4aa',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 150,
    },
  },
]

const workspacesEdges: Edge[] = [
  {
    id: 'e1',
    source: 'mcp-server',
    target: 'proxy',
    animated: true,
    style: { stroke: '#0ea5e9' },
  },
  {
    id: 'e2',
    source: 'proxy',
    target: 'workspace1',
    animated: true,
    style: { stroke: '#0ea5e9' },
  },
  {
    id: 'e3',
    source: 'proxy',
    target: 'workspace2',
    animated: true,
    style: { stroke: '#0ea5e9' },
  },
  {
    id: 'e4',
    source: 'proxy',
    target: 'workspace3',
    animated: true,
    style: { stroke: '#0ea5e9' },
  },
  {
    id: 'e5',
    source: 'workspace1',
    target: 'sdk',
    animated: true,
    style: { stroke: '#00d4aa' },
    label: 'Headers + Path + ID',
  },
  {
    id: 'e6',
    source: 'workspace2',
    target: 'sdk',
    animated: true,
    style: { stroke: '#00d4aa' },
    label: 'Headers + Path + ID',
  },
  {
    id: 'e7',
    source: 'workspace3',
    target: 'sdk',
    animated: true,
    style: { stroke: '#00d4aa' },
    label: 'Headers + Path + ID',
  },
  {
    id: 'e8',
    source: 'sdk',
    target: 'tools',
    animated: true,
    style: { stroke: '#00d4aa' },
    label: 'Context Info',
  },
]

// Authorization Diagram
const authNodes: Node[] = [
  {
    id: 'user',
    type: 'default',
    position: { x: 400, y: 0 },
    data: { label: 'User\n(Name + Email)' },
    style: {
      background: '#12121a',
      border: '2px solid #00d4aa',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 150,
    },
  },
  {
    id: 'manager',
    type: 'default',
    position: { x: 400, y: 150 },
    data: { label: 'MCP Manager\n(Creates Token)' },
    style: {
      background: '#12121a',
      border: '2px solid #00d4aa',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 150,
    },
  },
  {
    id: 'server1',
    type: 'default',
    position: { x: 200, y: 300 },
    data: { label: 'MCP Server 1\n(Validates Token)' },
    style: {
      background: '#12121a',
      border: '2px solid #0ea5e9',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 150,
    },
  },
  {
    id: 'server2',
    type: 'default',
    position: { x: 400, y: 300 },
    data: { label: 'MCP Server 2\n(Validates Token)' },
    style: {
      background: '#12121a',
      border: '2px solid #0ea5e9',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 150,
    },
  },
  {
    id: 'server3',
    type: 'default',
    position: { x: 600, y: 300 },
    data: { label: 'MCP Server 3\n(Validates Token)' },
    style: {
      background: '#12121a',
      border: '2px solid #0ea5e9',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 150,
    },
  },
  {
    id: 'session1',
    type: 'default',
    position: { x: 200, y: 450 },
    data: { label: 'Session Created\n(Authorized)' },
    style: {
      background: '#12121a',
      border: '2px solid #00d4aa',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 150,
    },
  },
  {
    id: 'session2',
    type: 'default',
    position: { x: 400, y: 450 },
    data: { label: 'Session Created\n(Authorized)' },
    style: {
      background: '#12121a',
      border: '2px solid #00d4aa',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 150,
    },
  },
  {
    id: 'session3',
    type: 'default',
    position: { x: 600, y: 450 },
    data: { label: 'Session Created\n(Authorized)' },
    style: {
      background: '#12121a',
      border: '2px solid #00d4aa',
      borderRadius: '8px',
      color: '#ffffff',
      padding: '16px',
      textAlign: 'center',
      minWidth: 150,
    },
  },
]

const authEdges: Edge[] = [
  {
    id: 'e1',
    source: 'user',
    target: 'manager',
    animated: true,
    style: { stroke: '#00d4aa' },
    label: 'Name + Email',
  },
  {
    id: 'e2',
    source: 'manager',
    target: 'server1',
    animated: true,
    style: { stroke: '#0ea5e9' },
    label: 'Token',
  },
  {
    id: 'e3',
    source: 'manager',
    target: 'server2',
    animated: true,
    style: { stroke: '#0ea5e9' },
    label: 'Token',
  },
  {
    id: 'e4',
    source: 'manager',
    target: 'server3',
    animated: true,
    style: { stroke: '#0ea5e9' },
    label: 'Token',
  },
  {
    id: 'e5',
    source: 'server1',
    target: 'session1',
    animated: true,
    style: { stroke: '#00d4aa' },
    label: 'Validated',
  },
  {
    id: 'e6',
    source: 'server2',
    target: 'session2',
    animated: true,
    style: { stroke: '#00d4aa' },
    label: 'Validated',
  },
  {
    id: 'e7',
    source: 'server3',
    target: 'session3',
    animated: true,
    style: { stroke: '#00d4aa' },
    label: 'Validated',
  },
]

export function Architecture() {
  const [activeTab, setActiveTab] = useState('architecture')

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
            Architecture
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Visualization of system component interactions through React Flow
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 mb-6 sm:mb-8">
              <TabsTrigger value="architecture">System Architecture</TabsTrigger>
              <TabsTrigger value="workspaces">Workspaces</TabsTrigger>
              <TabsTrigger value="secrets">Secrets Management</TabsTrigger>
              <TabsTrigger value="authorization">Authorization Flow</TabsTrigger>
            </TabsList>

            <TabsContent value="architecture">
              <div className="w-full max-w-[1150px] mx-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg border border-border bg-surface overflow-hidden">
                <ReactFlow
                  nodes={architectureNodes}
                  edges={architectureEdges}
                  fitView
                  className="bg-surface"
                  panOnScroll={false}
                  preventScrolling={false}
                >
                  <Background color="#1e1e2e" gap={16} />
                  <Controls className="bg-surface border-border" />
                </ReactFlow>
              </div>
            </TabsContent>

            <TabsContent value="workspaces">
              <div className="w-full max-w-[1150px] mx-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg border border-border bg-surface overflow-hidden">
                <ReactFlow
                  nodes={workspacesNodes}
                  edges={workspacesEdges}
                  fitView
                  className="bg-surface"
                  panOnScroll={false}
                  preventScrolling={false}
                >
                  <Background color="#1e1e2e" gap={16} />
                  <Controls className="bg-surface border-border" />
                </ReactFlow>
              </div>
            </TabsContent>

            <TabsContent value="secrets">
              <div className="w-full max-w-[1150px] mx-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg border border-border bg-surface overflow-hidden">
                <ReactFlow
                  nodes={secretsNodes}
                  edges={secretsEdges}
                  fitView
                  className="bg-surface"
                  panOnScroll={false}
                  preventScrolling={false}
                >
                  <Background color="#1e1e2e" gap={16} />
                  <Controls className="bg-surface border-border" />
                </ReactFlow>
              </div>
            </TabsContent>

            <TabsContent value="authorization">
              <div className="w-full max-w-[1150px] mx-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg border border-border bg-surface overflow-hidden">
                <ReactFlow
                  nodes={authNodes}
                  edges={authEdges}
                  fitView
                  className="bg-surface"
                  panOnScroll={false}
                  preventScrolling={false}
                >
                  <Background color="#1e1e2e" gap={16} />
                  <Controls className="bg-surface border-border" />
                </ReactFlow>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Architecture Components Description */}
        {activeTab === 'architecture' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 sm:mt-16"
          >
            <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
              <div className="p-6 sm:p-8 rounded-lg bg-surface border border-border">
                <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4">
                  System Architecture Overview
                </h3>
                <div className="space-y-4 text-sm sm:text-base text-text-secondary">
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">1.</span>
                    <div>
                      <p className="font-semibold text-text-primary mb-1">MCP Manager - Central Hub</p>
                      <p>Desktop application that manages all MCP servers and workspaces. Contains built-in dynamic server (MCP Tools) and manages SDK-based servers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">2.</span>
                    <div>
                      <p className="font-semibold text-text-primary mb-1">Servers in Manager</p>
                      <p>Manager has two types of servers: <strong>MCP Tools</strong> (dynamic server for creating tools without code) and <strong>SDK Servers</strong> (e.g., @tscodex/mcp-images based on @tscodex/mcp-sdk).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">3.</span>
                    <div>
                      <p className="font-semibold text-text-primary mb-1">Workspace Creation</p>
                      <p>Workspaces can be created by <strong>Manager</strong> or automatically by <strong>Cursor Bridge</strong> when opening a project. Workspaces proxy requests to servers with project-specific context (path, headers, workspace ID).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">4.</span>
                    <div>
                      <p className="font-semibold text-text-primary mb-1">Cursor Synchronization</p>
                      <p>Cursor Bridge Extension automatically creates workspaces when opening projects in Cursor. It synchronizes with Manager and updates mcp.json configuration for seamless integration.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: 'MCP Manager',
                    description: 'Central desktop application. Manages servers, workspaces, secrets, permissions, and AI agent.',
                  },
                  {
                    title: 'MCP Tools',
                    description: 'Built-in dynamic server. Create tools, prompts, and resources without writing code. AI-assisted generation.',
                  },
                  {
                    title: 'SDK Servers',
                    description: 'HTTP MCP servers based on @tscodex/mcp-sdk. Fast server creation. Workspace context support.',
                  },
                  {
                    title: 'Workspaces',
                    description: 'Created by Manager for each project. Proxy requests with project-specific context (path, headers, ID).',
                  },
                  {
                    title: 'Cursor Bridge',
                    description: 'VS Code/Cursor extension. Auto-syncs with Manager workspaces. Updates mcp.json automatically.',
                  },
                  {
                    title: '@tscodex/mcp-sdk',
                    description: 'Core SDK for building MCP servers. Not required for Manager, but used by SDK-based servers.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 sm:p-6 rounded-lg bg-surface border border-border"
                  >
                    <h4 className="text-lg font-semibold text-text-primary mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Workspaces Description */}
        {activeTab === 'workspaces' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 sm:mt-16"
          >
            <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
              <div className="p-6 sm:p-8 rounded-lg bg-surface border border-border">
                <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4">
                  How Workspaces & Proxying Works
                </h3>
                <div className="space-y-4 text-sm sm:text-base text-text-secondary">
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">1.</span>
                    <div>
                      <p className="font-semibold text-text-primary mb-1">Single Server, Multiple Workspaces</p>
                      <p>One MCP server runs, but MCP Manager creates proxy workspaces for each project. Each workspace is isolated and can have different configurations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">2.</span>
                    <div>
                      <p className="font-semibold text-text-primary mb-1">Custom Headers per Workspace</p>
                      <p>Each workspace can define custom headers that are sent to the MCP server. This allows project-specific configuration and context.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">3.</span>
                    <div>
                      <p className="font-semibold text-text-primary mb-1">Context Information</p>
                      <p>SDK receives from each workspace: <strong>Custom Headers</strong>, <strong>Workspace Path</strong> (project root directory), and <strong>Workspace ID</strong>. This context is available to all tools and utilities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">4.</span>
                    <div>
                      <p className="font-semibold text-text-primary mb-1">Tool Creation with Context</p>
                      <p>When creating tools, prompts, or resources, SDK provides access to workspace context. Tools can use project path, workspace ID, and custom headers for project-specific operations.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: 'Proxy Architecture',
                    description: 'One server instance, multiple workspace proxies. Each workspace is isolated with its own configuration and context.',
                  },
                  {
                    title: 'Custom Headers',
                    description: 'Workspace-level custom headers allow project-specific configuration. Headers are automatically passed to SDK and available in tools.',
                  },
                  {
                    title: 'Context Access',
                    description: 'SDK provides workspace path, workspace ID, and custom headers to all tools and utilities. Perfect for project-specific operations.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 sm:p-6 rounded-lg bg-surface border border-border"
                  >
                    <h4 className="text-lg font-semibold text-text-primary mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Secrets Management Description */}
        {activeTab === 'secrets' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 sm:mt-16"
          >
            <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
              <div className="p-6 sm:p-8 rounded-lg bg-surface border border-border">
                <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4">
                  How Secrets Management Works
                </h3>
                <div className="space-y-4 text-sm sm:text-base text-text-secondary">
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">1.</span>
                    <div>
                      <p className="font-semibold text-text-primary mb-1">Secure Storage</p>
                      <p>All secrets are stored in OS Keychain (Windows Credential Manager, macOS Keychain, Linux Secret Service). Secrets are never stored in plain text.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">2.</span>
                    <div>
                      <p className="font-semibold text-text-primary mb-1">Three-Level Override System</p>
                      <p>Secrets follow a hierarchy: <strong>Global → Workspace → Server</strong>. Each level can override the previous one, allowing flexible configuration per project and server.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">3.</span>
                    <div>
                      <p className="font-semibold text-text-primary mb-1">Permissions Configuration</p>
                      <p>User configures which secret keys are allowed for each MCP server. This provides granular control over what data each server can access.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">4.</span>
                    <div>
                      <p className="font-semibold text-text-primary mb-1">Filtered Access</p>
                      <p>Before secrets are passed to MCP server, they are filtered through permissions. Only keys explicitly allowed by the user are passed to the server via environment variables.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: 'OS Keychain Storage',
                    description: 'Secrets stored securely in OS-native keychain. Windows Credential Manager, macOS Keychain, or Linux Secret Service. Never in plain text.',
                  },
                  {
                    title: 'Level Override',
                    description: 'Global secrets apply to all workspaces. Workspace secrets override global. Server secrets override both. Maximum flexibility.',
                  },
                  {
                    title: 'Permission-Based Access',
                    description: 'User explicitly allows which secret keys each server can access. No server receives secrets without explicit permission.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 sm:p-6 rounded-lg bg-surface border border-border"
                  >
                    <h4 className="text-lg font-semibold text-text-primary mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Authorization Flow Description */}
        {activeTab === 'authorization' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 sm:mt-16"
          >
            <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
              <div className="p-6 sm:p-8 rounded-lg bg-surface border border-border">
                <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4">
                  How Authorization Works
                </h3>
                <div className="space-y-4 text-sm sm:text-base text-text-secondary">
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">1.</span>
                    <div>
                      <p className="font-semibold text-text-primary mb-1">User Registration</p>
                      <p>User enters name and email in MCP Manager. This information is stored securely.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">2.</span>
                    <div>
                      <p className="font-semibold text-text-primary mb-1">Token Generation</p>
                      <p>MCP Manager creates an authentication token for the user. This token is unique and can be configured per server.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">3.</span>
                    <div>
                      <p className="font-semibold text-text-primary mb-1">Token Distribution</p>
                      <p>The token is passed to each MCP server via the <code className="px-1.5 py-0.5 bg-background rounded text-primary">MCP_AUTH_TOKEN</code> environment variable.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">4.</span>
                    <div>
                      <p className="font-semibold text-text-primary mb-1">Server Validation</p>
                      <p>Each MCP server validates the token according to its own requirements. Servers can implement custom validation logic.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">5.</span>
                    <div>
                      <p className="font-semibold text-text-primary mb-1">Session Creation</p>
                      <p>If the token is valid, the server creates a session and authorizes the user for further MCP operations.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: 'Per-Server Tokens',
                    description: 'Each MCP server can have its own authentication key. Tokens are server-specific and validated independently.',
                  },
                  {
                    title: 'Flexible Validation',
                    description: 'Servers implement their own validation logic. They can check token format, expiration, permissions, etc.',
                  },
                  {
                    title: 'Secure Storage',
                    description: 'User credentials and tokens are stored securely in OS Keychain. Never exposed in plain text.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 sm:p-6 rounded-lg bg-surface border border-border"
                  >
                    <h4 className="text-lg font-semibold text-text-primary mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

