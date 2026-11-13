# AGENTS.md

This file provides guidance to Claudia and other clankers

## Commands

```bash
npm run dev          # Start dev server (loading screen is skipped in DEV mode)
npm run build        # Type-check with tsc, then build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build locally
npm run lint         # Lint with oxlint
npm run lint:fix     # Lint with auto-fix
npm run format       # Format with oxfmt
npm run fix          # Format + lint:fix
```

There are no tests. TypeScript type checking (`tsc`) is part of the build.

## Deployment

The Pages workflow is `.github/workflows/pages.yml`. Pushes to `main` install
from `package-lock.json`, run lint and build, and deploy `dist/` as a Pages
artifact. Generated `dist/` files are not committed. Use `npm run build` and
`npm run preview` to check a production build locally.

For the first deployment, confirm that the repository's Pages custom domain is
`www.aktasalper.com` and HTTPS is enabled. Change the Pages source to **GitHub
Actions**, then push the workflow on `main` (or run it manually from `main`).
Check the workflow result, the custom domain, and the portfolio's routes before
considering the cutover complete. Actions publishing uses the domain in Pages
settings, not the `CNAME` file in the artifact.

To roll back, select **Deploy from a branch** in Pages settings with the
existing `gh-pages` branch at `/ (root)`. Keep that branch until the Actions
deployment has been verified.

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

### Icons

The Windows-era icon set lives outside this repo, in a sibling checkout:
`../win95-winxp_icons/icons/` — 1,189 `.ico` plus a few `.icl`/`.ani`. The
filename prefix says which OS it came from (`w95_`, `w98_`, `w2k_`, `wxp_`), so
pick the one matching the era you're faking.

Each `.ico` carries its own 16/32/48 px frames — copy the original file instead
of converting it to PNG. Icons in use live in `public/icon/` under a short
descriptive name and are referenced as `/icon/<name>.ico`.

Useful picks: `w2k_internet_explorer.ico` (the browser app),
`w2k_internet_document.ico` (a saved page / hyperlink), `w98_web_file.ico` (a
web page, globe instead of the "e"), `w2k_favorites.ico` (bookmarks folder),
`w2k_dial_up.ico` (connection dialog).

### Generated assets

`public/experiences/` is generated from the sibling `../cool-components`
checkout by `tools/sync-experiences.mjs`:

```bash
npm run experiences:sync            # copy the manifest's entries
npm run experiences:sync -- --check # verify only, non-zero on drift
npm run experiences:sync -- --prune # also delete copied folders no longer listed
```

The manifest is `src/config/experiences.json`; display copy lives in
`src/i18n/{lang}/content.json` under `explorer.blurbs`. The generated folders
are committed — CI only checks out this repo, so the sibling checkout is a
local authoring convenience, never a build dependency.

### Linting & Formatting

This project uses the [OXC](https://oxc.rs) toolchain:

- **oxlint** (`npm run lint` / `npm run lint:fix`) — native rules from the `react` plugin (eslint-plugin-react, eslint-plugin-react-hooks) plus React Compiler diagnostic rules via the JS plugin system (`eslint-plugin-react-hooks` aliased as `react-hooks-js` in `.oxlintrc.json`)
- **oxfmt** (`npm run format`) — formatting with `.oxfmtrc.json` config
- **`npm run fix`** — runs format then lint:fix

Config files:

- `.oxlintrc.json` — lint rules and JS plugin setup
- `.oxfmtrc.json` — formatter ignore patterns

#### React Compiler Lint Rules

The `react-hooks-js` JS plugin loads `eslint-plugin-react-hooks` v7 to provide React Compiler diagnostic rules. These catch patterns that would prevent React Compiler from working:

| Rule                       | Severity | What it catches                                                                                   |
| -------------------------- | -------- | ------------------------------------------------------------------------------------------------- |
| `invariant`                | error    | Code that violates React's rules                                                                  |
| `set-state-in-render`      | error    | setState calls in render body (infinite loops)                                                    |
| `purity`                   | warn     | Impure code during render                                                                         |
| `immutability`             | warn     | Mutations of props/state                                                                          |
| `globals`                  | warn     | Global variable mutations                                                                         |
| `refs`                     | warn     | Ref access during render (disabled for LanguageSelect.tsx — @floating-ui callback refs are valid) |
| `error-boundaries`         | warn     | Missing error boundaries                                                                          |
| `component-hook-factories` | warn     | Factory patterns incompatible with compiler                                                       |

### React Compiler

The project uses [React Compiler](https://react.dev/learn/react-compiler) in **annotation mode** (`compilationMode: "annotation"`). Only components with a `"use memo"` directive are compiled.

**Setup:**

- `babel-plugin-react-compiler` (Babel plugin) configured in `vite.config.ts`
- `react-compiler-runtime` (runtime shim required for React 18)
- Target: `"18"` (matches the React version in use)

**Currently compiled components** (annotation mode test set):

- `src/components/DesktopIcon.tsx`
- `src/layout/components/WindowsOutlet.tsx`
- `src/features/AppsWindow/App.tsx`

To compile additional components, add `"use memo"` at the top of the function body. To skip a component in infer mode, use `"use no memo"`.

**Phases:**

- Phase 2 (current): Annotation mode — opt-in compilation for testing
- Phase 3 (future): Switch to infer mode (`compilationMode: "infer"`) for full compilation, with `"use no memo"` escape hatches
