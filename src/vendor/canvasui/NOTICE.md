# Canvas UI — vendored engine source

Verbatim copy. Do not edit, reformat, or "improve" anything in this folder.

- Upstream: https://github.com/DavidHDev/canvas-ui
- Commit: `a0be3b7e1f42d0d1bafde470b6794b39f6729502` (2026-11-08)
- License: MIT + Commons Clause v1.0 (see upstream `LICENSE.md`) — free to use
  inside an application or website; the Commons Clause only forbids selling or
  redistributing the components themselves. This folder is not redistributed as
  a component library.
- Copyright (c) 2026 David Haz.

## What is here

The vanilla TS engines (`*Vanilla.ts`) plus the three shared modules they
import. Framework wrappers were left behind because this app drives the engines
directly.

| File | Upstream path |
| --- | --- |
| `canvas-viewport.ts` | `src/lib/canvas-viewport.ts` |
| `html-in-canvas.ts` | `src/lib/html-in-canvas.ts` |
| `rect-cache.ts` | `src/lib/rect-cache.ts` |
| `Glitch/GlitchVanilla.ts` | `src/lib/Glitch/GlitchVanilla.ts` |
| `VHS/VHSVanilla.ts` | `src/lib/VHS/VHSVanilla.ts` |
| `GlyphRain/GlyphRainVanilla.ts` | `src/lib/GlyphRain/GlyphRainVanilla.ts` |
| `Liquid/LiquidVanilla.ts` | `src/lib/Liquid/LiquidVanilla.ts` |
| `Shatter/ShatterVanilla.ts` | `src/lib/Shatter/ShatterVanilla.ts` |
| `DecryptReveal/DecryptRevealVanilla.ts` | `src/lib/DecryptReveal/DecryptRevealVanilla.ts` |
| `Asciify/AsciifyVanilla.ts` | `src/lib/Asciify/AsciifyVanilla.ts` |
| `AsciiSweep/AsciiSweepVanilla.ts` | `src/lib/AsciiSweep/AsciiSweepVanilla.ts` |

Relative imports resolve exactly as upstream because the folder layout is
preserved. `src/vendor/` is excluded from oxfmt and oxlint, so the files stay
byte-identical to upstream; use `cmp` against a canvas-ui checkout to audit.

All eight engines are vendored. The timeline in
`src/features/Malware/stages.ts` currently mounts Glitch, VHS, DecryptReveal and
Shatter; the rest are kept so changing the sequence never needs a re-copy.

Every public API here is upstream's: `createGlitch`, `createVHS`,
`createGlyphRain`, `createLiquid`, `createShatter`, `createDecryptReveal`,
`createAsciify`, `createAsciiSweep`, each taking
`{ source, content, output }` plus that component's own options object.

## Refresh

```bash
SRC=/path/to/canvas-ui/src/lib
cp "$SRC"/{canvas-viewport,html-in-canvas,rect-cache}.ts src/vendor/canvasui/
for c in Glitch VHS GlyphRain Liquid Shatter DecryptReveal Asciify AsciiSweep; do
  mkdir -p src/vendor/canvasui/$c
  cp "$SRC/$c/${c}Vanilla.ts" src/vendor/canvasui/$c/
done
```
