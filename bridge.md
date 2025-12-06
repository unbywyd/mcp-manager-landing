# MCP Server Manager

> **VS Code/Cursor Extension for managing MCP (Model Context Protocol) servers built with @tscodex/mcp-sdk**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![VS Code Version](https://img.shields.io/badge/VS%20Code-%3E%3D1.74.0-blue)](https://code.visualstudio.com/)
[![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-green)](https://nodejs.org/)

---

## 🎯 Overview

**MCP Server Manager** is a powerful VS Code/Cursor extension that simplifies the management of MCP (Model Context Protocol) servers built with `@tscodex/mcp-sdk`. It provides a comprehensive, user-friendly interface for installing, configuring, and managing MCP servers with seamless integration into your development workflow.

### Key Features

- ✅ **Easy Server Management** - Add, start, stop, and restart MCP servers with a few clicks
- ✅ **Smart Package Installation** - Automatic npm package installation with intelligent fallback to manual installation
- ✅ **Compatibility Verification** - Automatic SDK compatibility checking via `--meta` flag
- ✅ **Visual Configuration Editor** - Intuitive UI for server configuration based on JSON Schema
- ✅ **Cursor Integration** - Seamless integration with Cursor's MCP system, automatic session and project root passing
- ✅ **Package Updates** - Easy package version updates with automatic server restart
- ✅ **Real-time Status Monitoring** - Track server health and status in real-time
- ✅ **Multiple Installation Types** - Support for global, npx, and local server installations
- ✅ **Global & Workspace Scopes** - Configure servers and secrets globally or per-workspace for maximum flexibility
- ✅ **Secure Secret Management** - Separate storage for global and workspace secrets with secure encryption
- ✅ **Automatic Project Root Sync** - All MCP servers automatically receive and sync the current project root path
- ✅ **Custom User Authorization** - Built-in authentication system for authorizing users with server-specific auth keys
- ✅ **Auto-start on Workspace Open** - Automatically start configured servers when opening a workspace

---

## ✨ What is MCP?

MCP (Model Context Protocol) is a protocol that enables AI assistants to securely access external data sources and tools. This extension helps you manage MCP servers that extend the capabilities of AI assistants like Cursor.

**Why use this extension?**
- 🎯 **Simplified Management** - No need to manually edit configuration files
- 🔒 **Secure** - Built-in secret management with separate global/workspace storage
- 🚀 **Fast Setup** - Add and configure servers in seconds
- 🔄 **Auto-sync** - Automatic integration with Cursor's MCP system and project root synchronization
- 📊 **Visual Interface** - Easy-to-use UI for all operations
- 🌐 **Flexible Configuration** - Global and workspace-specific settings for maximum flexibility
- 👤 **User Authorization** - Built-in authentication system for secure server access

---

## 📦 Installation

1. Open VS Code/Cursor
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "MCP Server Manager"
4. Click Install

**Requirements:**
- Node.js >= 18.0.0
- npm installed and available in PATH
- MCP servers must be built with `@tscodex/mcp-sdk` and support `--meta` flag

---

## 🚀 Quick Start

### Adding a Server

1. Open the "MCP Servers" panel in Explorer
2. Click the "+" button or run command "Add MCP Server"
3. Enter npm package name (e.g., `@tscodex/mcp-images`)
4. Extension will automatically:
   - Check if package exists
   - Offer to install package (if not installed)
   - Verify compatibility via `--meta` flag
   - Fetch server metadata
   - Add server to the list

### Starting/Stopping a Server

- **Start**: Right-click server → "Start Server" or command "Start Server"
- **Stop**: Right-click server → "Stop Server" or command "Stop Server"
- **Restart**: Right-click server → "Restart Server" or command "Restart Server"

### Configuring a Server

1. Right-click server → "Configure Server"
2. Webview opens with configuration form based on JSON Schema
3. Choose configuration scope:
   - **Global** - Applies to all workspaces
   - **Workspace** - Applies only to current workspace (overrides global)
4. Edit JSON configuration
5. Click "Save"
6. Server automatically restarts (if it was running)

**Configuration Scoping:**
- Workspace configuration overrides global configuration
- Missing values in workspace config fall back to global config
- This allows you to have default settings globally and override them per-project

---

## ⚙️ Configuration

### Extension Settings

#### `mcp.autoStart`

Automatically start servers when workspace opens.

- **Default**: `true`
- **Type**: `boolean`

#### `mcp.autoInstall`

Attempt to automatically install packages when adding servers. If `false`, only manual installation option will be shown.

- **Default**: `true`
- **Type**: `boolean`

#### `mcp.npmRegistry`

NPM registry URL for package search.

- **Default**: `https://registry.npmjs.org`
- **Type**: `string`

#### `mcp.installTimeout`

Timeout for npm install operations in milliseconds.

- **Default**: `300000` (5 minutes)
- **Type**: `number`

#### `mcp.logLevel`

Logging level.

- **Default**: `info`
- **Possible values**: `debug`, `info`, `error`
- **Type**: `string`

#### `mcp.autoRegisterInCursor`

Automatically register MCP servers in Cursor when they start. If disabled, use the Sync command to register manually.

- **Default**: `true`
- **Type**: `boolean`

#### `mcp.configStorageLocation`

Where to store MCP server configurations.

- **Default**: `globalState`
- **Possible values**: `globalState`, `workspaceState`, `file`, `workspaceFile`
- **Type**: `string`

#### `mcp.configFilePath`

Custom file path for storing configuration (only used when `configStorageLocation` is `file`). Can be absolute or relative to workspace/home.

- **Default**: `""`
- **Type**: `string`

---

## 📖 Usage Guide

### Updating a Server

1. Right-click server → "Update Server Package"
2. Extension will automatically:
   - Stop server (if running)
   - Update npm package
   - Fetch new metadata
   - Update configuration
   - Restart server (if auto-start was enabled)

### Removing a Server

1. Right-click server → "Remove Server"
2. Confirm removal
3. Server will be stopped and removed from list

### Managing Secrets

Secrets can be stored at two levels:

1. **Global Secrets** - Available to all workspaces
2. **Workspace Secrets** - Specific to current workspace (overrides global)

To manage secrets:
1. Right-click server → "Configure Server"
2. Go to "Secrets" tab
3. Choose scope (Global or Workspace)
4. Add/edit secrets
5. Secrets are securely stored and automatically passed to servers as environment variables

**Secret Priority:** Workspace secrets override global secrets with the same key.

### Project Root Synchronization

All MCP servers automatically receive the current project root path via the `MCP_PROJECT_ROOT` environment variable. This path is automatically synchronized when:
- Workspace folder changes
- Project root is updated
- Server is restarted

The extension monitors workspace changes and updates all running servers in real-time, ensuring they always have access to the correct project context.

### User Authorization

The extension supports custom user authorization for MCP servers:

1. **Automatic Session Detection** - Automatically detects Cursor user sessions
2. **Server Auth Keys** - Each server can have its own authentication key
3. **User Profile Management** - Store user profiles with email and authentication tokens
4. **Automatic Token Passing** - Auth tokens are automatically passed to servers via `MCP_AUTH_TOKEN` environment variable

To configure authorization:
1. Right-click server → "Configure Server"
2. Go to "Connection" tab
3. View or manage server auth keys
4. Auth keys are automatically used when starting servers

### Syncing with Cursor

The extension automatically syncs running servers with Cursor's MCP configuration. You can also manually sync:

1. Right-click server → "Sync with Cursor MCP"
2. Server will be registered/unregistered in Cursor's `mcp.json`

---

## 🔍 Logging

All logs are available in Output Channel "MCP Manager". To open:

1. View → Output
2. Select "MCP Manager" from dropdown

---

## 🐛 Troubleshooting

### Package Installation Fails

If automatic installation doesn't work (e.g., requires sudo/admin), Extension will offer to copy command for manual installation. Run the command in terminal and try again.

### Server Won't Start

1. Check logs in Output Channel "MCP Manager"
2. Verify package is installed globally: `npm list -g <package-name>`
3. Check server supports `--meta` flag: `node <executable-path> --meta`
4. Ensure port is available (Extension automatically finds free port)

### Server Not Compatible

Ensure MCP server is built with `@tscodex/mcp-sdk` and supports `--meta` flag for metadata retrieval.

---

## 🛠️ Development

### Building

```bash
npm install
npm run compile
npm run build:webview
```

### Running in Development Mode

1. Press F5 in VS Code
2. New Extension Development Host window opens
3. Use extension in that window

### Project Structure

```
extension/
├── src/
│   ├── extension.ts              # Main extension entry point
│   ├── managers/                 # Core managers
│   │   ├── ConfigManager.ts     # Configuration management
│   │   ├── ServerManager.ts     # Server lifecycle
│   │   ├── PackageManager.ts    # Package installation
│   │   └── ...
│   ├── providers/               # UI providers
│   │   ├── TreeDataProvider.ts  # Tree view
│   │   └── WebviewProvider.ts   # Configuration webview
│   └── utils/                   # Utilities
├── webview/                     # React webview UI
│   └── src/
│       ├── App.tsx
│       └── components/
└── out/                         # Compiled output
```

---

## 📄 License

MIT © [unbywyd](https://github.com/unbywyd)

---

## 🔗 Links

### Repository
- [GitHub Repository](https://github.com/unbywyd/tscodex-mcp-manager)

### NPM Packages
- [@tscodex/mcp-sdk](https://www.npmjs.com/package/@tscodex/mcp-sdk) - Core SDK for building MCP servers
- [@tscodex/mcp-server-example](https://www.npmjs.com/package/@tscodex/mcp-server-example) - Example MCP server implementation
- [@tscodex/mcp-images](https://www.npmjs.com/package/@tscodex/mcp-images) - Image processing MCP server

### Documentation
- [MCP Protocol Specification](https://modelcontextprotocol.io)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Version**: 0.1.0  
**Status**: Active Development
