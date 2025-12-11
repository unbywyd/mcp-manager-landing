# TSCodex Landing Page

Landing page for [tscodex.com](https://tscodex.com) - an open source project for MCP Manager and MCP tools.

## Technologies

- **React 19.1+** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Routing
- **Framer Motion** - Animations
- **React Flow** - Diagrams

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Linting

```bash
npm run lint
```

## Project Structure

```
landing/
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   └── ...         # Custom components
│   ├── pages/          # Pages
│   ├── hooks/          # React hooks
│   ├── lib/            # Utilities
│   ├── App.tsx         # Main component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static files
│   ├── _redirects      # Netlify redirects
│   ├── robots.txt      # SEO robots
│   ├── sitemap.xml     # SEO sitemap
│   └── site.webmanifest # PWA manifest
├── index.html          # HTML template
└── ...
```

## Deployment

The project builds to static files in `dist/`. Deploy to:

- **Netlify** (recommended) - Configured with `netlify.toml` and `public/_redirects`
- Vercel
- Cloudflare Pages

### Netlify Deployment

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The `_redirects` file handles SPA routing automatically

## SEO

The project includes:
- Dynamic meta tags via custom `useSEO` hook
- `robots.txt` for search engine crawlers
- `sitemap.xml` for search engine indexing
- Open Graph and Twitter Card meta tags
- Favicons in multiple sizes
- PWA manifest

## License

CC BY-NC 4.0 - Free for non-commercial use

For commercial licensing, please [contact us](https://github.com/unbywyd/tscodex-mcp-manager-app/issues).

## Developers

- [Artyom Gorlovetskiy (unbywyd)](https://unbywyd.com/)
- [WebToPro](https://webto.pro/)
