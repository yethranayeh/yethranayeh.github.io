# React95 Wisdom Refactor — Sprint Overview

> Goal: Extract architectural patterns, design tokens, and component structure
> from `@react95/core@9` (vanilla-extract) and apply them to our `react95@4`
> (styled-components) project **without forking or switching libraries**.

## Phases

| Phase | Name   | Tasks | Status     |
| ----- | ------ | ----- | ---------- |
| 1     | Wisdom | 01–05 | 🔄 In Progress |
| 2     | Novel  | 06    | ⬜ Pending |
| 3     | Future | 07    | ⬜ Pending |

---

## Phase 1: Wisdom — Improve current setup without changing libraries

| Task | File                                                                | Description                                                                                                                      | Deps  | Status |
| ---- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----- | ------ |
| 01   | [01-box.md](phase-1-wisdom/01-box.md)                               | Polymorphic `Box` component (`as`, className merge, typed props) — replaces `Flex` and `Text`                                    | None  | ✅     |
| 02   | [02-design-tokens.md](phase-1-wisdom/02-design-tokens.md)           | Extract react95 `original` theme into CSS custom properties for use in `.module.scss` files                                      | None  | ✅     |
| 03   | [03-svg-icons.md](phase-1-wisdom/03-svg-icons.md)                   | Replace CSS pseudo-element X/− icons in CloseButton/MinimizeButton with proper SVGs (all 5 title bar icons)                      | None  | ⬜     |
| 04   | [04-compound-wrappers.md](phase-1-wisdom/04-compound-wrappers.md)   | Create `AppWindow` (bundles Window+WindowHeader+buttons) and `AppTabs` (bundles Tabs+Tab+TabBody) via compound component pattern | 01    | ⬜     |
| 05   | [05-migrate-primitives.md](phase-1-wisdom/05-migrate-primitives.md) | Migrate all existing components to use Box, tokens, compound wrappers, SVGs. Remove `Flex`/`Text`                                | 01–04 | ⬜     |

### Visual preservation rule

No component visual should change. If a diff looks different, it's a bug.

---

## Phase 2: Novel — Add truly missing components from `@react95/core@9`

| Task | File                                                       | Description                                                       | Deps    | Status |
| ---- | ---------------------------------------------------------- | ----------------------------------------------------------------- | ------- | ------ |
| 06   | [06-alert-textarea.md](phase-2-novel/06-alert-textarea.md) | `Alert`, `TextArea` — build from scratch using our new primitives | Phase 1 | ⬜     |

### Not needed (already exist in react95@4, just unused in our project)

`Checkbox`, `Tooltip`, `Select`, `Slider`, `TreeView`, `NumberInput`, `DatePicker`, `Table`, `ColorInput`, `Counter`, `Monitor`

### Skipped

`Clock` — `CurrentTime.tsx` already handles taskbar time display with minute-syncing logic.
`Video`, `Cursor` — too niche.

---

## Phase 3: Future

| Task | File                                                                | Description                                                                            | Deps      | Status |
| ---- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------- | ------ |
| 07   | [07-tailwind-migration.md](phase-3-future/07-tailwind-migration.md) | Full migration to Tailwind v4 with `@theme` design tokens — detail TBD after Phase 1+2 | Phase 1+2 | ⬜     |

---

## Dependencies

```
Phase 1:  01 ──┬── 04 ── 05
          02 ──┤
          03 ──┘

Phase 2:  06 (requires Phase 1 complete)

Phase 3:  07 (requires Phase 1+2 complete)
```

Tasks without dependencies (01, 02, 03) can be worked in parallel.

---

## Status legend

- ⬜ Pending
- 🔄 In Progress
- ✅ Complete
- ❌ Blocked
