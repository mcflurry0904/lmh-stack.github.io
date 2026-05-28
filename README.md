# lmh-stack

This project uses React + Vite.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

The workflow is configured in `.github/workflows/deploy-pages.yml`.

Notes:
- Push to `main` to trigger deployment.
- Vite `base` is set to `/lmh-stack/` in `vite.config.js`.
- If your repository name changes, update the `base` path accordingly.
