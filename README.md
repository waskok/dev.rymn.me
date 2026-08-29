# dev.rymn.me

Portfolio web development powiązane z głównym hubem [rymn.me](https://rymn.me).

## Tech Stack

- **Framework:** React 19 + TypeScript (Vite)
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** lucide-react

## Local Development

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev` (port `5181`)

## Build for Production (FTP deployment)

```
npm run build
```

This type-checks the project and outputs a fully static site into `dist/`.
Vite is configured with `base: './'` so every asset reference is relative —
the contents of `dist/` can be uploaded as-is via FTP to the root of
`dev.rymn.me`.
