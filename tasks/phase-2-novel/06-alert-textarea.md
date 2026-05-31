# Task 06: Novel Components (Alert, TextArea)

> Status: Pending | Deps: Phase 1 complete

## Motivation

The new `@react95/core@9` has components that do NOT exist in our `react95@4`:

- **Alert** — Win95 message dialog (info/warning/error with icon + text + buttons)
- **TextArea** — multi-line text input (we only have single-line `TextInput`)

We also already have unused components in react95@4 that we could optionally wire up if needed (`Checkbox`, `Tooltip`, `Select`, `Slider`, `TreeView`, `NumberInput`, `DatePicker`, `Table`, `ColorInput`, `Counter`, `Monitor`). But those aren't in scope — they "exist" already if we need them.

`Clock` is skipped — `CurrentTime.tsx` already handles taskbar time display with minute-syncing logic.

## Components to build

### 1. Alert

Win95-style dialog box. Source inspiration: `packages/core/components/Alert/` from `@react95/core@9`

```tsx
<Alert
  type="warning" // 'info' | 'warning' | 'error'
  title="Shut Down Windows"
  message="Are you sure you want to restart your computer?"
  buttons={[
    { text: "OK", onClick: handleOk, primary: true },
    { text: "Cancel", onClick: handleCancel },
  ]}
/>
```

Could replace the ad-hoc dialog pieces in `ShutdownDialogContent.tsx` and `HelpDialogContent.tsx`.

### 2. TextArea

Multi-line text input with Win95 border styling. Source inspiration: `packages/core/components/TextArea/` from `@react95/core@9`

```tsx
<TextArea value={text} onChange={setText} rows={5} placeholder="Type here..." />
```

Potential use: the VigenereCipher tool for longer cipher text display.

## Implementation notes

- Use `Box` (from Task 01) as the base primitive
- Use CSS custom properties from `tokens.scss` (Task 02)
- Style with box-shadow layering approach (not pseudo-elements)
- Follow existing patterns: forwardRef, displayName, "use memo" directive
- Each component gets its own directory with co-located .module.scss

### Files

```
src/components/Alert/
  Alert.tsx
  Alert.module.scss
  index.ts

src/components/TextArea/
  TextArea.tsx
  TextArea.module.scss
  index.ts
```

## Acceptance criteria

- [ ] Alert renders with type-specific icon and visual
- [ ] Alert buttons support primary/secondary styling
- [ ] TextArea matches Win95 input styling (borders, padding)
- [ ] TextArea supports rows, placeholder, value, onChange
- [ ] All components match Win95 aesthetic
- [ ] TypeScript types exported for each component
- [ ] `npm run build` and `npm run lint` pass
