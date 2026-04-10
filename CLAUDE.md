# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (loading screen is skipped in DEV mode)
npm run build        # Type-check with tsc, then build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build locally
npm run pipeline     # Full deploy: build → git commit → push → deploy to gh-pages
npm run deploy       # Deploy dist/ to gh-pages branch via git subtree
```

There are no tests. TypeScript type checking (`tsc`) is part of the build.

## Architecture

This is a Windows 95-themed portfolio site built with React, styled using the [react95](https://github.com/react95-io/React95) component library and styled-components.

### Window Management

The core UI paradigm is a desktop with draggable windows. Windows are managed entirely through Jotai atoms in `src/stores/window.atom.ts`:

- `windowsAtom` — array of open `AppWindow` objects
- `addWindowAtom` — opens a window, or un-minimizes if already open
- `removeWindowAtom` / `toggleMinimizeWindowAtom` — close/minimize actions

Each `AppWindow` has a `content` field that is a lazy-loaded React component. Desktop icons are defined in `src/config/desktop.ts` as `desktopApps`, which lists the three main windows: Resume, Projects, and Apps.

### Layout Flow

`MainLayout` (`src/layout/MainLayout.tsx`) controls three top-level states:
1. **Loading screen** — shown on initial load (skipped in dev)
2. **Login page** — shown if `localStorage` has `isLoggedOut=true`
3. **Desktop** — Navbar + `DesktopOutlet` (icons) + `WindowsOutlet` (open windows) + Clippy

Auth state is stored in `localStorage` (key in `src/config/storage.ts`) and passed through `AuthContext`.

### Routing

Uses `createHashRouter` (hash-based, required for GitHub Pages static hosting). Routes are defined in `src/app/routes/path-definitions.tsx`. Window content is not route-driven — windows are managed via Jotai state, not URL changes.

### i18n

Three languages: English (`en`), German (`de`), Turkish (`tr`). Three namespaces: `general`, `content`, `menu`. Translation files live in `src/i18n/{lang}/{namespace}.json`. The `menu` namespace is used for window titles (e.g., `menu:window.resume`).

### Styling

- **react95** provides Windows 95 UI components; theme is `original` from `react95/dist/themes/original`
- **styled-components** for component-level styling
- **CSS Modules (SCSS)** for component-scoped styles (`.module.scss` files co-located with components)
- Global styles in `src/styles/globals.scss`; shared variables in `src/styles/variables.module.scss`
- SVGs imported as React components via `vite-plugin-svgr` using the `?react` suffix

### Path Alias

`@/` maps to `src/` (configured in `vite.config.ts` and `tsconfig.json`).

### Deployment

The site deploys to GitHub Pages via the `gh-pages` branch. The `dist/` folder is pushed using `git subtree push --prefix dist origin gh-pages`. The `pipeline` script automates the full build-commit-push-deploy cycle.
