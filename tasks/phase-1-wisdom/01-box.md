# Task 01: Polymorphic Box Component

> Status: Complete | Deps: None | Source: `@react95/core@9` packages/core/components/Frame/

## Motivation

Currently two custom styled-components in `src/components/Styled/`:

- `Flex` - flex layout with direction, wrap, justify, align, gap, `sx`
- `Text` - typography with variant, bold, underline, color

Both are thin wrappers (~20 lines each). `Flex` has dead props (`rowGap`/`columnGap` declared but never wired). `Text` uses `!important` for the `light` override. Consolidating into one polymorphic primitive reduces our coupling surface to styled-components and eliminates the dead code.

The component is named `Box` to avoid a namespace collision with `Frame` — react95@4 exports its own `Frame` component that is used in 6 files across the codebase.

## What to build

`src/components/Box/Box.tsx` - single polymorphic box replacing both Flex and Text.

### API shape

```tsx
<Box as="div" display="flex" gap={8} alignItems="center">
  <Box as="span" fontWeight="bold" color="white">
    Hello
  </Box>
</Box>
```

### Props

| Category   | Props                                                                                                                |
| ---------- | -------------------------------------------------------------------------------------------------------------------- |
| Element    | `as` (ElementType, default `div`), `className` (merged via clsx)                                                     |
| Layout     | `display`, `flexDirection`, `flexWrap`, `flexGrow`, `flexShrink`, `justifyContent`, `alignItems`, `alignSelf`, `gap` |
| Spacing    | `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl`, `m`, `mx`, `my`, `mt`, `mr`, `mb`, `ml` (string \| number)                  |
| Sizing     | `width`/`w`, `height`/`h`, `minWidth`, `maxWidth`, `minHeight`, `maxHeight`                                          |
| Typography | `fontWeight`, `fontSize`, `textAlign`, `color`, `bg`                                                                 |
| Position   | `position`, `top`, `right`, `bottom`, `left`, `zIndex`                                                               |
| Border     | `border`, `borderRadius`                                                                                             |
| Other      | `ref` forwarding, `...rest` spread for all HTML attributes                                                           |

### TypeScript

- Generic `Polymorphic<TAs extends ElementType, Props>` type
- `BoxProps<TAs>` interface with `forwardRef`
- Keep old `FlexProps`/`TextProps` in `src/types/styled-components.d.ts` until Task 05
- Import clsx (already a dependency)

### Files

Create:

```
src/components/Box/
  Box.tsx
  index.ts
```

Delete (in Task 05, not here):

```
src/components/Styled/Flex.ts
src/components/Styled/Text.ts
src/components/Styled/index.ts (remove re-exports)
src/types/styled-components.d.ts (remove FlexProps/TextProps)
```

## Acceptance criteria

- [ ] `Box` renders as correct HTML element based on `as` prop
- [ ] `className` merges via clsx (no overwrites)
- [ ] Layout/spacing props map to correct CSS
- [ ] Numeric spacing values become px (`gap={8}` => `gap: 8px`)
- [ ] `ref` forwards correctly
- [ ] TypeScript infers correct element type from `as` prop
- [ ] `...rest` passes through to DOM element
- [ ] No visual diff from existing `Flex`/`Text` behavior
- [ ] `"use memo"` directive at top of function body (React Compiler annotation mode)
