# Task 03: SVG Icons for Window Controls

> Status: Pending | Deps: None | Source: `@react95/core@9` packages/core/components/TitleBar/\*.svg

## Motivation

Currently, `CloseButton` and `MinimizeButton` draw their icons using CSS pseudo-elements:

- `CloseButton.module.scss` - uses `::before`/`::after` rotated 45 degrees for X
- `MinimizeButton` - uses CSS-drawn minus sign

This approach is a CSS hack — a 16x16 `<span>` rotated 45° with two pseudo-element bars faking an X. If the button ever changes size those 3px bars don't scale relative to the container. SVGs scale cleanly, use `currentColor`, and are trivially debuggable (two `<line>` elements instead of a rotation math puzzle).

The new react95 uses proper SVG icons (`close.svg`, `minimize.svg`, `maximize.svg`, `restore.svg`, `help.svg`) that are pixel-perfect Win95 recreations. We'll create all 5 so they're available on-shelf — close and minimize are wired immediately; maximize, restore, and help are ready if/when those buttons materialize.

## What to build

Replace CSS-drawn icons in `CloseButton` and `MinimizeButton` with SVG components.

### SVG source

The new react95 has 5 title bar button SVGs at:

```
https://github.com/React95/React95/tree/master/packages/core/components/TitleBar/
  close.svg
  minimize.svg
  maximize.svg
  restore.svg
  help.svg
```

These are simple shapes (MIT licensed). We should **redraw them** rather than copy-paste to avoid licensing ambiguity and ensure they match our exact button dimensions.

### SVGs to create

```
src/assets/icons/
  window-close.svg     - 10x10 cross
  window-minimize.svg  - 10x2 horizontal bar
  window-maximize.svg  - 10x10 hollow square (on-shelf, not wired yet)
  window-restore.svg   - 10x10 overlapping squares (on-shelf, not wired yet)
  window-help.svg      - 10x10 question mark (on-shelf, not wired yet)
```

### Component changes

**CloseButton** (`src/components/windows/CloseButton.tsx`):

- Remove CSS pseudo-element approach
- Add inline SVG as children of the Button
- Remove or simplify `CloseButton.module.scss`

**MinimizeButton** (`src/components/windows/MinimizeButton.tsx`):

- Remove CSS-drawn minus
- Add inline SVG as children of the Button

### Icon component approach

Create `src/components/WindowIcon.tsx`:

```tsx
// Renders an SVG icon for window title bar buttons
// Source SVGs live in src/assets/icons/
// To add new icons, place SVG in that directory and import here

type WindowIconProps = {
  type: "close" | "minimize" | "maximize" | "restore" | "help";
  size?: number; // default 10
};

export const WindowIcon = ({ type, size = 10 }: WindowIconProps) => {
  // Inline SVG rendered via vite-plugin-svgr (?react suffix)
};
```

Include JSDoc documenting where to source additional icons from the new react95 repo.

### Files

Create:

```
src/assets/icons/window-close.svg
src/assets/icons/window-minimize.svg
src/assets/icons/window-maximize.svg
src/assets/icons/window-restore.svg
src/assets/icons/window-help.svg
src/components/WindowIcon.tsx
```

Modify:

```
src/components/windows/CloseButton.tsx   - Replace CSS with WindowIcon
src/components/windows/MinimizeButton.tsx - Replace CSS with WindowIcon
src/components/windows/CloseButton.module.scss - Simplify/remove icon styles
src/components/windows/WindowButton.tsx  - May need icon size prop
```

## Acceptance criteria

- [ ] Close button renders an X (not CSS pseudo-elements)
- [ ] Minimize button renders a minus bar (not CSS pseudo-elements)
- [ ] Icons are centered and proportioned like the originals
- [ ] Icons inherit color from button context (use `currentColor`)
- [ ] Hover/active states on button still work (pressed inset effect)
- [ ] WindowIcon has JSDoc with link to react95 SVG source
- [ ] Remove unused CSS from CloseButton.module.scss
- [ ] Mobile sizing still works (icons scale with button)
