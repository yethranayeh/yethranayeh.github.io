# Task 05: Migrate Existing Components to New Primitives

> Status: Pending | Deps: 01, 02, 03, 04

## Motivation

After Tasks 01-04 have created the new primitives (Box, tokens, SVGs, compound wrappers), we need to migrate all existing components to use them and remove the old abstractions.

## What to do

### Step 1: Replace Flex/Text with Box

Find all imports of `Flex` and `Text` from `src/components/Styled/` and convert to `Box`.

**Mapping:**

```
<Flex justify="center" align="center" gap={8}>  ->  <Box display="flex" justifyContent="center" alignItems="center" gap={8}>
<Text bold>                                     ->  <Box as="span" fontWeight="bold">
<Text variant="title">                          ->  <Box as="h2" fontSize="1.2rem" fontWeight="bold">
```

Files to update (20 Flex imports, 11 Text imports):

```
src/components/DesktopIcon.tsx
src/components/Branding.tsx
src/layout/components/DesktopOutlet.tsx
src/layout/components/LoadingScreen.tsx
src/layout/components/WindowsOutlet.tsx
src/layout/components/Navbar/Navbar.tsx (direct Flex import path)
src/layout/components/Navbar/MobileOverflowMenu.tsx
src/layout/components/Navbar/LanguageSelect.tsx
src/layout/components/Navbar/WindowTabs.tsx
src/layout/components/Navbar/StartMenu/HelpDialogContent.tsx
src/layout/components/Navbar/StartMenu/ShutdownDialogContent.tsx
src/layout/components/Navbar/StartMenu/ListItem/ListItemContent.tsx
src/features/ResumeWindow.tsx
src/features/LoginPage/LoginPage.tsx
src/features/LoginPage/User.tsx
src/features/ProjectsWindow/Projects/ProjectLayout.tsx
src/features/AppsWindow/AppsWindow.tsx
src/features/AppsWindow/App.tsx
src/features/AppsWindow/VigenereCipher/VigenereCipher.tsx
src/components/windows/DraggableWindow.tsx
src/components/windows/WindowURL.tsx
src/app/routes/components/ErrorPage.tsx
```

Then delete:

```
src/components/Styled/Flex.ts
src/components/Styled/Text.ts
src/components/Styled/index.ts  (or remove re-exports if other exports exist)
src/types/styled-components.d.ts (remove FlexProps/TextProps interfaces)
```

### Step 2: Apply design tokens in .module.scss

Replace hardcoded colors with CSS custom properties from `tokens.scss`:

```
src/layout/components/Clippy.module.scss       - #fefbcc -> var(--color-tooltip-bg)
src/components/windows/Window.module.scss       - hardcoded sizes -> token spacing
src/components/windows/CloseButton.module.scss  - remove icon CSS (replaced by SVG)
```

### Step 3: Use compound wrappers

Replace manual window/tabs assembly:

| Before                                              | After                   |
| --------------------------------------------------- | ----------------------- |
| `WindowsOutlet` constructs DraggableWindow manually | Use `AppWindow`         |
| `ProjectsWindow` assembles Tabs+Tab+TabBody         | Use `AppTabs`           |
| Individual windows assemble WindowContent           | Use `AppWindow.Content` |

### Step 4: Remove unused CSS

After SVG icon migration, remove:

- `CloseButton.module.scss` pseudo-element icon styles (keep non-icon styles)
- Any CSS that was only for icon drawing

### Step 5: TypeScript audit

- Run `npm run build` (includes tsc --noEmit)
- Fix all type errors
- Remove any types that are no longer referenced

### Step 6: Visual regression check

- `npm run dev` and manually check:
  - All 3 desktop app windows (Resume, Projects, Apps)
  - Login page layout
  - Navbar with dropdowns
  - Clippy bubble tooltip
  - Shutdown dialog
  - Help dialog
  - All 3 languages (en/de/tr)
  - Mobile responsive layout

## Acceptance criteria

- [ ] `npm run build` passes (tsc + vite build)
- [ ] `npm run lint` passes
- [ ] Zero imports of `Flex` or `Text` from `src/components/Styled/`
- [ ] All .module.scss files use CSS custom properties (no hardcoded colors)
- [ ] All windows use `AppWindow` compound pattern
- [ ] All tabs use `AppTabs` compound pattern
- [ ] CloseButton/MinimizeButton use SVG icons (no CSS pseudo-elements)
- [ ] No visual diffs in any component at any language
- [ ] Mobile layout still works
