# Vendored Zinn core snapshot

This browser-targeted source snapshot comes from `yethranayeh/zinn` commit `c375ca37516ba08a9ed1cbb918153aaf9fd38b2b`, package `@zinn-dev/core` version `0.32.0-dev`. At manifest generation, `packages/core` in the sibling checkout was clean relative to that commit. The recorded Git tree is `77f3f974183b4a9233b87b60f6834c00eeff62c7`. [PROVENANCE.json](./PROVENANCE.json) lists the SHA-256 of each upstream source file and the vendored result, with its adaptation status. The upstream MIT license is in `LICENSE`.

The snapshot contains the runtime dependency closure for project, task, and column operations, SQLite wrapping, schema creation, and migrations 1–3. It excludes tests and unrelated operations. Upstream project and task operations, schemas other than `schemas/text.ts`, database helpers, search maintenance, activity recording, and migration definitions are copied verbatim.

Browser adaptations are limited to these platform seams:

- `src/db.ts` replaces filesystem-backed singleton initialization with explicit database injection. The worker supplies a `Database` created by the unchanged upstream SQLite wrapper. The app-facing `initializeFreshDatabase` calls the unchanged migration runner.
- `src/hooks.ts` disables shell hooks in the browser. Activity records and domain mutations remain in the upstream operation modules.
- `src/sqlite/browser.ts` registers a worker-owned SQLite driver for the upstream path-opening helper. The app-facing bootstrap can open that driver directly.
- `src/schemas/text.ts` imports the local browser byte-length helper instead of `node:buffer`. `src/platform/buffer.ts` implements the same UTF-8 byte-count operation with `TextEncoder`.
- `src/operations/column.ts` omits the path-based `column.inspect` preflight method. Browser board reads and writes use the upstream column methods.

Update this snapshot only by copying a reviewed upstream commit and reapplying these documented platform adaptations. Keep app worker persistence and UI code outside this directory.
