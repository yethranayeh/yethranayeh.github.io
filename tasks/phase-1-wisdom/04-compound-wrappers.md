# Task 04: Compound Component Wrappers

> Status: Pending | Deps: 01 | Source: `@react95/core@9` Modal + TitleBar pattern

## Motivation

Currently windows and tabs are assembled by hand at every call site. The new react95 uses `Object.assign` to attach sub-components as static properties:

```tsx
// New react95 pattern
<Modal>
  <Modal.Content>...</Modal.Content>
</Modal>

// vs our current pattern (scattered across multiple files)
<DraggableWindow title={t('menu:window.resume')} ...>
  <WindowContent>...</WindowContent>
</DraggableWindow>
```

This creates a discoverable, co-located API and reduces import surface area.

## What to build

### 1. `AppWindow` — compound window wrapper

Bundles Window, WindowHeader, minimize/close buttons, and WindowContent.

```tsx
// Target API:
<AppWindow title={t('menu:window.resume')} icon={resumeIcon} onMinimize={...} onClose={...}>
  <AppWindow.Content>
    resume content here
  </AppWindow.Content>
</AppWindow>

// Or with URL bar and resize:
<AppWindow title="..." icon={...} showUrl url="..." resizable>
  <AppWindow.Content>...</AppWindow.Content>
</AppWindow>
```

**Sub-components:**

- `AppWindow.Content` — wraps `WindowContent`
- `AppWindow.Url` — wraps `WindowURL`

**Props:**

- `title` — window title text
- `icon` — window icon (optional)
- `onMinimize`, `onClose` — button callbacks
- `showUrl`, `url` — optional URL bar
- `resizable` — optional resize handle
- All `DraggableWindowProps` forwarded

### 2. `AppTabs` — compound tabs wrapper

Bundles Tabs, Tab, TabBody.

```tsx
// Target API:
<AppTabs defaultTab="sarmal" onChange={handleTabChange}>
  <AppTabs.Tab title="sarmal">sarmal project content</AppTabs.Tab>
  <AppTabs.Tab title="shades" disabled>
    shades project content
  </AppTabs.Tab>
</AppTabs>
```

**Sub-components:**

- `AppTabs.Tab` — wraps `Tab` + `TabBody` into single component

**Notes:**

- Preserve controlled mode (current pattern with `value`/`onChange`)
- Keep multi-row support (we use `rows` prop in ProjectsWindow)
- Use `Object.assign` for compound pattern

### Implementation via Object.assign

```tsx
// src/components/windows/AppWindow.tsx
const AppWindowRenderer = forwardRef<HTMLDivElement, AppWindowProps>(
  ({ children, title, icon, onMinimize, onClose, ...rest }, ref) => {
    return (
      <DraggableWindow ref={ref} title={title} {...rest}>
        <MinimizeButton onClick={onMinimize} />
        <CloseButton onClick={onClose} />
        {children}
      </DraggableWindow>
    );
  },
);

export const AppWindow = Object.assign(AppWindowRenderer, {
  Content: AppWindowContent,
  Url: WindowURL,
});
```

### Files

Create:

```
src/components/windows/AppWindow.tsx
src/components/AppTabs.tsx
```

Modify (in Task 05):

```
src/layout/components/WindowsOutlet.tsx  - Use AppWindow
src/features/ProjectsWindow/ProjectsWindow.tsx - Use AppTabs
src/features/ResumeWindow.tsx           - Use AppWindow
src/features/AppsWindow/VigenereCipher/VigenereCipher.tsx - Use AppWindow
src/components/windows/NotFoundWindow.tsx - Use AppWindow
src/layout/components/Navbar/StartMenu/HelpDialogContent.tsx - Use AppWindow
src/layout/components/Navbar/StartMenu/ShutdownDialogContent.tsx - Use AppWindow
```

## Acceptance criteria

- [ ] `AppWindow` renders same visual as current manual assembly
- [ ] `AppWindow.Content` wraps `WindowContent` correctly
- [ ] `AppWindow.Url` renders `WindowURL` inside header
- [ ] `AppTabs.Tab` bundles Tab + TabBody
- [ ] Controlled mode still works (value/onChange pass through)
- [ ] Multi-row tabs still work (rows prop passes through)
- [ ] TypeScript autocomplete shows `.Content`, `.Tab`, etc.
- [ ] No duplicate imports needed (import AppWindow, use AppWindow.Content)
