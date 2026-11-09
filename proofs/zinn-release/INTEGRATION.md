# Production integration evidence

Verified locally on 2026-11-09. The production Terminal invokes released CLI **0.43.0 / core 0.32.0**, schema 3, adaptation `portfolio-zinn-browser.1`, through the pinned BashKit **0.20.3** commands adapter. The [Terminal guide](../../src/features/TerminalWindow/README.md) records exact executable capabilities, extensions, storage, files, presentation and cancellation limits.

## Reproducible checks

All required checks passed:

```sh
npm run test:zinn-shell-bridge
npm run test:zinn-release
npm run test:terminal
npm run test:zinn-clean
npm run lint
npm run build
node tools/zinn-release/measure-production.mjs
npm run preview -- --host 127.0.0.1 --port 5192 --strictPort
```

- Bridge: **231 checks**, including 171 native/released comparisons and 54 explicit color/width cases. Archive and unarchive extend the previous fixture coverage.
- Released runtime: **198 native/WASM comparisons**, including released help, aliases, canonical operations, invalid arguments, streams/statuses, presentation, identity difference and snapshot reload.
- Terminal: **47 passing tests**. These include the actual production shell/worker integration, storage lifecycle, callback file freshness and cwd, separate UTF-8 streams, redirection, conditionals, cancellation serialization, worker error/timeout/retry behavior, live width reads per callback, and existing editor/scroll/workspace regressions. Released-core transaction/savepoint and integer-range checks replace the old copied-core test path.
- Clean installation: a temporary source copy ran normal `npm ci`, then the production build with no prior generated runtime or sibling checkout. The check verified packaged identity/provenance/notices, ran both native conformance suites, and rejected deliberate installed-source drift. The final local build and lint also passed after the live-width callback adjustment.

The build retains existing dependency, console-script and large-chunk advisories. Lint has no source warnings. Native comparisons use disposable stores, never the tracker database.

## Storage checkpoint (PORT-12)

The worker uses namespace and format marker `portfolio-zinn-cli-0.43.0-core-0.32.0-browser.1`, separately from SQLite schema 3. Focused tests verify the exact fresh PLAY seed, normal create/edit/move/search/archive/unarchive, reload, confirmed reset, current-format binary export/import, missing/old/future markers, old/future schemas, corrupt bytes, foreign-key failures and missing PLAY shape. Invalid imports preserve committed bytes. Repeated corrupt stored-image loads remain refused until explicit recovery. Failed writes restore the active image, concurrent tabs commit one revision winner, and the old namespace stays untouched.

Unavailable IndexedDB permits a clearly identified session-only board. Help/version and extension help avoid SQLite and Zinn storage initialization. Zinn reset preserves visitor files and portfolio preference stores. The dedicated worker tests, shared workspace tests and actual browser reset/reload checks establish the checkpoint. No historical conversion or owner-database import is provided.

## Actual production browser

Chromium 156 on macOS used the actual portfolio Terminal at port 5192. The [browser JSON](./production-browser.json) records outputs and probe results. The optional [test fixture](./production-check.html) embeds that same production page, rather than implementing another terminal. After building, copy production-check.html and production-check.js to dist to reproduce the fixture on the preview server.

Observed behavior:

- Project launch displays unmodified released root help. Version is exactly `0.43.0`. Command and browser-extension help work. At a fresh origin on port 5193, help/version left only `portfolio-visitor-workspace` present, with no Zinn database.
- `zinn task list PLAY | grep PLAY` prints task rows. JSON view redirects into a file. Missing-task JSON goes to stderr independently, while `$?` is 1.
- Project create/list/view, task create/new/view/show/edit/move/search/archive/unarchive, and Visitor identity execute through released handlers. A file created earlier in the same script supplies `--description-file` from the real callback cwd under `/home/guest`.
- Export writes a binary visitor file. Unconfirmed reset returns 1. Corrupt import returns 1 and leaves the board usable. Confirmed reset followed by import restores the task UUID, title, description, priority and column. The visitor description file survives reset and reload.
- Page reload preserves the board and visitor files. Closing and reopening Terminal preserves shell cwd and transcript. Header minimize plus taskbar restore preserves the draft.
- Forced color survives redirection, while default and explicit NO_COLOR redirection contain no SGR. Shell grep exit statuses were respectively 0, 1 and 1. The accessible transcript remains plain. Only the pinned renderer's SGR styles reach Ghostty.
- Narrowing and restoring the actual production iframe changes the task separator from **73 to 78 columns**. The terminal redraw retains a usable single caret and an output-following prompt. The adapter also reads width separately for each Zinn callback, including within one shell script.
- The browser input probe passes mid-line editing, history draft/caret restoration, repeated path Tab, Ctrl+C, Ctrl+L, bounded multiline paste, synthetic composition commit/cancellation, and Escape/Shift+Tab focus exit.

Worker errors and the 30-second timeout are injected in focused client tests. They reject pending RPC and create a new worker on retry. Worker reload tests use the last committed image. Controlled cancellation tests keep an already-started invocation serialized through completion, prevent subsequent shell commands, and avoid labeling committed Zinn work as rolled back. This is not a general atomic-cancellation feature.

[Input screenshot](./production-input.jpg) records the probe. [Terminal screenshot](./production-terminal.jpg) records the final rendered portfolio. Native IME, physical mobile, Safari and Firefox remain unverified. Automatic TTY-aware color stays deferred to PORT-18.

## Packaged footprint

The [build JSON](./production-build.json) records exact hashes and these raw/gzip byte counts for the terminal entry, worker and three WASM assets. It also verifies that the runtime closure excludes the old custom CLI/core paths.

| Asset | Bytes | Gzip bytes |
| --- | ---: | ---: |
| TerminalWindow--ow_pJC7.js | 694,349 | 202,364 |
| bashkit_wasm_bg-o9TKROkJ.wasm | 7,790,288 | 3,052,113 |
| ghostty-vt-DOMeXDrv.wasm | 423,045 | 124,376 |
| sqlite3-DGXXSD5r.wasm | 859,730 | 397,951 |
| zinn.worker-C3CnG1ZI.js | 926,767 | 255,465 |

`dist/zinn/` contains baseline.json, per-file provenance.json and THIRD_PARTY_NOTICES.md with MIT/polyfill notices. The pinned source-hash checks and no-fuzz bootstrap patch remain in the normal build path.

## Review state

PORT-12 and PORT-13 are both in Review. PORT-12 records the storage-lifecycle checkpoint, and PORT-13 records the runtime integration and complete verification. All changes remain local and uncommitted. Nothing has been staged, pushed, deployed or published.

The **52 unreachable legacy files** listed in [legacy-cleanup.txt](./legacy-cleanup.txt) remain for physical cleanup. Replacement coverage uses the released code. The file list was dry-run checked and removal logic passed on dummy files in `/tmp`. No listed repository file has been removed. This cleanup item remains outstanding under the required batch-removal protocol and does not prevent use of the verified production runtime.
