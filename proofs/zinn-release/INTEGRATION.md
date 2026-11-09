# Production integration evidence

Verified locally on 2026-11-09. The portfolio Terminal now invokes released **CLI 0.44.0 / core 0.33.0**, **schema 4**, adaptation `portfolio-zinn-browser.1`, through the pinned **BashKit 0.20.3** commands adapter. This refresh follows the PORT-12/PORT-13 integration committed as `a3064fe`. The [Terminal guide](../../src/features/TerminalWindow/README.md) records the executable capabilities and browser extensions.

## Released artifacts and adaptation

[baseline.json](./baseline.json) pins both public npm artifacts and their SRI/SHA-1/SHA-256 digests. [release-verification.json](./release-verification.json) records an independent registry download and digest check. Source integrity covers **137 upstream files**. The named `cli-0.44.0.patch` applies without fuzz, exposes the released bootstrap for invocation and clears per-run diagnostic state. No command or core implementation is patched.

Core 0.33.0 uses schema 4, a filesystem path resolver and `openResolvedDatabase`. The adapters supply the read-only virtual filesystem and the resolved SQLite WASM entrypoint. The local Buffer adapter adds base64url support for the released `zt1` task-list cursors. Continuation output is compared field by field after decoding its nondeterministic task UUID, and an actual returned cursor continues to a different task in worker and production-browser checks. Malformed and future-version cursors retain native errors/statuses.

Native failure logs and local telemetry are host filesystem services. Their optional callbacks are inert in the browser and never inspect the board or visitor files. The full released help, ordinary output and diagnostics remain available. Execution stays limited to the established project/task subset and Visitor identity. New host capabilities, including task blame execution, are not enabled by displaying their released help. Zod is aligned to the release's exact **4.6.7** dependency so the worker does not contain duplicate versions.

## Reproducible checks

All checks passed with the final release pins:

```sh
npm run zinn:release-audit
npm run test:zinn-shell-bridge
npm run test:zinn-release
npm run test:terminal
npm run test:zinn-clean
npm run lint
npm run build
npm run build:zinn-proof
node tools/zinn-release/measure-production.mjs
```

- **236 bridge checks**, including **176 native/released comparisons** and **54 explicit color/width cases**, pass in Node and Chromium 157. [Browser bridge result](../zinn-shell-bridge/browser-commands-0.20.3.json).
- **206 native/runtime comparisons** pass in Node and Chromium 157. **169** check read-only help/invalid-input behavior and unchanged snapshots. Released help, aliases, canonical operations, parser errors, streams/statuses, presentation, identity and snapshot reload are covered. [Browser runtime result](./browser-verification.json).
- **47 terminal tests** pass, including real released core/worker/shell execution, storage failures, cross-tab conflicts, cancellation serialization, client retry/timeout handling, live width, exact streams and existing editor/workspace regressions.
- Clean installation runs ordinary `npm ci` and the production build in a temporary source copy, verifies packaged identity/provenance/notices, passes both native conformance suites and rejects deliberate upstream-source drift. It uses no sibling checkout or generated runtime from this working tree.

Lint has no source warnings. Existing dependency, Node localStorage, console-script and large-chunk advisories remain. Native comparisons use disposable stores, never the owner tracker database.

## Storage checkpoint and release transition

The new namespace and format marker are `portfolio-zinn-cli-0.44.0-core-0.33.0-browser.1`, independently of SQLite schema 4. It starts a fresh PLAY board with the five named columns and three Visitor-created sample tasks. Both the old custom playground and the 0.43.0/core 0.32.0 generation stay intact. Their backups are refused rather than migrated or relabeled.

Focused tests cover persistence, confirmed reset, binary export/import, invalid formats, owner images, old/future schemas, corrupt bytes, foreign-key failures, required PLAY shape, failed-write rollback, revision conflicts and session-only fallback. Help/version and extension help avoid SQLite and Zinn storage initialization. Reset preserves visitor files and portfolio preference stores.

The actual production browser had an existing 0.43.0 board at **revision 18**. Its raw stored-image SHA-256 was `0680b540c42213360a8dff3e2efdfee74e2510346f95f23bc6480284cdd3b093` before and after the entire upgrade verification. Help/version left the new Zinn database absent. The first board command created the fresh generation and displayed the separate update notice. The optional test fixture fingerprints opaque existing snapshots read-only, without interpreting old SQLite images.

## Actual production browser

Chromium **157** on macOS exercised the actual portfolio Terminal at `http://127.0.0.1:5192/`. [Production browser JSON](./production-browser.json) records storage fingerprints, commands and plain transcripts. The optional [production-check.html](./production-check.html) embeds that same production page. Copy it and production-check.js into dist after building to reproduce the fixture; the normal build does not ship them.

Observed in the production Terminal:

- Released root help and exact version `0.44.0`, with no new Zinn storage initialized.
- Task creation through `task new`, using a visitor description file written earlier in the same script. Edit, move to Review, archive/unarchive, and `task show` preserved the expected title, priority, description and UUID.
- An actual returned base64url cursor continued the list. Missing-task JSON went exclusively to the redirected error file, stdout stayed zero bytes, and `$?` was 1. Visitor identity includes `actor_client: zinn-cli/0.44.0`.
- Binary export, unconfirmed reset status 1, corrupt import status 1, confirmed reset, and import restoring the same task UUID. Visitor text files survived reset and reload.
- Forced color survived redirection. Default and NO_COLOR output contained no escape bytes, with grep statuses **0, 1, 1** respectively. The accessible transcript stayed plain.
- Narrow/restore viewport actions retained usable output and a caret. The input probe passed mid-line editing, Ctrl+C, Ctrl+L, history draft/caret restoration, repeated path Tab, bounded multiline paste, synthetic composition and focus exit.
- Reloading the **final production bundle** retained the new board, task UUID, Review column, priority, description and visitor files. A second real cursor continuation and Visitor identity check passed after that reload.

[Input probe screenshot](./production-input-0.44.0.png), [narrow viewport screenshot](./production-narrow-0.44.0.png), and [final production screenshot](./production-terminal-0.44.0.png) record this refresh. The earlier JPEGs remain historical 0.43.0 acceptance artifacts. Native IME, physical mobile, Safari and Firefox remain unverified. Automatic TTY detection stays deferred to PORT-18.

## Packaged footprint and local state

[production-build.json](./production-build.json) records exact final hashes, raw/gzip sizes and packaged notices. The terminal entry is **694,349 / 202,364 bytes** raw/gzip. The worker is **953,331 / 263,785 bytes**. BashKit, Ghostty and SQLite WASM assets are unchanged. The production dependency closure excludes the removed custom CLI/core. `dist/zinn/` includes baseline.json, provenance.json and THIRD_PARTY_NOTICES.md.

The 52 legacy files listed in [legacy-cleanup.txt](./legacy-cleanup.txt) were removed in the initial integration commit `a3064fe`; the list now records that historical cleanup. This 0.44.0 refresh remains local, unstaged and uncommitted. Nothing was pushed, deployed or published.
