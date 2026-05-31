# Task 07: Tailwind v4 Migration

> Status: Pending (future) | Deps: Phase 1+2 complete

## Motivation

After the wisdom refactors and novel component additions, the codebase will be in a clean state with:

- A polymorphic `Frame` base primitive
- CSS custom property design tokens
- SVG icon system
- Compound component patterns
- No `styled-components` in our own code (only react95's internal usage remains)

At that point, migrating from react95's styled-components to Tailwind v4 becomes a natural next step.

## Pre-work

Before starting, evaluate:

1. Can we replace react95 components one-by-one with Tailwind equivalents?
2. Do we fork react95 or build fresh components?
3. Which styled-components dependency can be removed first?

## Rough scope

1. Add Tailwind v4 to the project (Vite plugin + `@theme` config)
2. Port CSS custom properties to `@theme` tokens
3. Rebuild each react95 component as Tailwind utility classes
4. Remove react95 and styled-components dependencies
5. Remove `ThemeProvider` wrapper

## Detail TBD

This task file is intentionally sparse. It will be fleshed out when Phase 1+2 are complete and we have a clear picture of what's left to migrate.
