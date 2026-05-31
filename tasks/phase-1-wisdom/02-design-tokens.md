# Task 02: Design Token System

> Status: Done | Deps: None | Source: `@react95/core@9` themes/contract.css.ts

## Motivation

Currently, `.module.scss` files use hardcoded values:

- `src/layout/components/Clippy.module.scss`: `#fefbcc`, `#0a0a0a`, `rgba(0,0,0,0.35)`
- `src/components/windows/Window.module.scss`: pixel values for sizing

The new react95 uses a CSS contract (design tokens) so all values come from a single source. We should do the same with CSS custom properties.

## What to build

`src/styles/tokens.scss` - SCSS variables and CSS custom properties mapped from react95 `original` theme.

### Source mapping

Pull values from `react95/dist/themes/original` which exports:

```ts
// Color tokens (the ones we use)
(material, materialText, materialTextDisabled, materialTextInvert);
(headerBackground, headerText, headerNotActiveBackground, headerNotActiveText);
(borderDarkest, borderDark, borderLight, borderLightest);
(canvas, canvasText);
(flatDark, flatLight);
checkmark;
tooltip;
```

### Output format

```scss
// src/styles/tokens.scss
// CSS custom properties for runtime use
:root,
[data-theme="original"] {
  --color-material: #c0c0c0;
  --color-material-text: #000000;
  --color-header-bg: #000080;
  --color-header-text: #ffffff;
  --color-border-darkest: #000000;
  --color-border-dark: #808080;
  --color-border-light: #dfdfdf;
  --color-border-lightest: #ffffff;
  --color-tooltip-bg: #fefbcc;
  // ... etc

  // Spacing scale (from react95's blockSizes / internal scale)
  --space-1: 1px;
  --space-2: 2px;
  --space-4: 4px;
  --space-6: 8px;
  --space-12: 16px;
  --space-16: 24px;
  --space-20: 32px;

  // Shadows
  --shadow-out:
    inset 1px 1px 0px 1px var(--color-border-lightest), inset 0 0 0 1px var(--color-border-dark),
    1px 1px 0 0px var(--color-border-darkest);
  --shadow-in:
    inset 1px 1px 0px 1px var(--color-border-dark), inset 0 0 0 1px var(--color-border-light),
    1px 1px 0 0px var(--color-border-lightest);

  // Font
  --font-family: "ms_sans_serif", sans-serif;
  --font-size-base: 1rem;
}
```

Also provide SCSS variable aliases for `@import` use in other .scss files.

### Files

Create:

```
src/styles/tokens.scss
```

Modify:

```
src/styles/globals.scss         - Import tokens
src/styles/variables.module.scss - Import tokens (for CSS Modules usage)
```

### Usage in .module.scss files

```scss
// Before
.tooltip {
  background: #fefbcc;
  border: 2px solid #0a0a0a;
}

// After
.tooltip {
  background: var(--color-tooltip-bg);
  border: 2px solid var(--color-border-darkest);
}
```

## Guidelines

- SCSS variables (compile-time) for values needed in SCSS functions/mixins
- CSS custom properties (runtime) for values used in .module.scss classes
- Only extract tokens currently in use - no speculative tokens
- Colors must match react95 `original` theme exactly (verify with color picker)
- Use `:root` scope so tokens are globally available
- Keep `styleReset` from react95 - tokens are additive, not replacement

## Acceptance criteria

- [x] All token values match react95 `original` theme exactly
- [x] CSS custom properties defined on `:root`
- [x] SCSS variable equivalents available for @import
- [x] Existing components render identically (tokens are opt-in)
- [x] `src/styles/globals.scss` imports tokens
- [x] No circular imports
