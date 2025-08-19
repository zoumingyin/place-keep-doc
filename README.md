# VitePress Documentation Site

A modern documentation site built with VitePress, featuring:

- 📱 Responsive design
- 🌗 Light/Dark theme toggle
- 🔍 Local search functionality
- 🚀 GitHub Pages deployment ready

## Features

- Built with VitePress 1.6.4
- TypeScript support
- Automatic GitHub Pages deployment
- Modern UI with theme switching

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start development server:
```bash
pnpm docs:dev
```

3. Build for production:
```bash
pnpm docs:build
```

## Deployment

1. Push your code to GitHub
2. The site will be automatically deployed to GitHub Pages via the workflow in `.github/workflows/deploy.yml`

## Project Structure

```
.
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages deployment config
├── .vitepress/
│   ├── config.ts           # VitePress configuration
│   └── theme/              # Custom theme files
├── docs/
│   ├── guide/              # Documentation pages
│   ├── index.md            # Home page
│   └── introduction.md     # Getting started guide
└── package.json            # Project dependencies
```

## License

MIT
