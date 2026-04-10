# html-in-canvas — Tech Evaluation

**Date:** 2026-04-04
**Tech:** Experimental Chrome flag API (`layoutSubtree` / `drawElementImage()`)
**Status:** Chrome-only, behind a flag as of April 2026

---

## What this project does

A Windows 95-themed interactive portfolio built with React, react95, and Three.js. It simulates a desktop OS — login screen, draggable windows, a 3D React atom on the desktop — with project showcases and a resume presented as draggable UI windows.

---

## Relevance to this project

**Medium.**

The site is already visually distinctive and has 3D content via Three.js/R3F. The aesthetic is deliberately retro-skeuomorphic, not cinematic or glassy. Most of the value html-in-canvas offers (shader distortion, 3D projection of DOM content, god rays) would clash with the Windows 95 theme rather than enhance it. That said, there are a few spots where it genuinely fits.

---

## Specific use cases

**Login screen blur / scanline effect**
The login screen is a full-page hero moment. Applying a WebGL scanline or CRT shader over the entire login UI — while keeping the click target and focus tree intact — would deepen the retro aesthetic. Currently, CSS filters can't do this convincingly.

**Draggable window focus depth effect**
When a window is brought to the front, a subtle depth-of-field blur on background windows could reinforce the z-layering metaphor. With html-in-canvas, this stays accessible and interactive even while blurred — `css filter: blur()` on live windows breaks pointer events.

**Desktop icon hover distortion**
A small ripple or heat-shimmer shader on hovered desktop icons would be a fun, low-footprint use of the API without fighting the theme.

**3D scene HTML overlay**
R3F already renders a 3D atom. If a future iteration adds 3D scene environments (e.g., a desktop rendered in a 3D perspective), html-in-canvas could let UI windows be projected into that 3D space as actual interactive HTML quads — something Three.js's HTML overlay hacks currently approximate poorly.

---

## When to revisit

- When the flag ships in a stable Chrome release (no flag required) — likely late 2026 or 2027 based on typical Chrome feature timelines.
- If Firefox or Safari signal intent to implement — until then, any use must be a progressive enhancement with a CSS fallback.
- If the portfolio gets a redesign that leans into the 3D desktop metaphor more heavily; that's when projecting interactive HTML into a WebGL scene becomes compelling rather than just novel.
- Not worth building around now: the API surface may still change, and the aesthetic payoff for this specific theme is modest compared to the maintenance cost of a Chrome-only shader path.
