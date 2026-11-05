# Released Zinn browser boundary

This is the reusable browser proof for PORT-10 and PORT-14. The portfolio terminal still uses its existing runtime. No production route, visitor drive, terminal editor or board storage has been switched.

## Pinned baseline

Public npm was rechecked on 2026-11-02. The selected pair is **@zinn-dev/cli 0.43.0** and its exact dependency **@zinn-dev/core 0.32.0**, using schema 3. Both packages require Node >=24.15.0 for native execution. The independent local adaptation identity is `portfolio-zinn-browser.1`.

[baseline.json](./baseline.json) records the public tarball URLs, SHA-512 SRI, registry SHA-1 and locally computed SHA-256. [release-verification.json](./release-verification.json) records a second download and digest verification against current registry metadata. These are registry artifacts with declared repository provenance. The registry records provide neither gitHead nor attestations. Registry signatures have not been independently verified, so this is not a claim of a verified source commit or signed build provenance.

[Source integrity](./source-integrity.json) records every retained upstream JavaScript file, package manifest and MIT license from the verified tarballs. The build checks 124 source files before applying the patch. Installed packages come from the lockfile, never from a sibling checkout. The generated per-file provenance distinguishes verbatim files from the patched bootstrap and lists the complete bundled dependency graph. [Third-party notices](./THIRD_PARTY_NOTICES.md) retain the Zinn and polyfill licenses.

## Reproduce

```sh
npm ci
npm run zinn:release-audit
npm run test:zinn-release
npm run zinn:proof
```

`zinn:proof` runs the native comparison before serving the isolated Vite page at http://127.0.0.1:5190. Use `?check` to run the browser comparison automatically. Its argument editor accepts a JSON array representing argv after shell quoting, with one string per argument. It does not contain another shell or CLI parser. The canonical demo runs project create/list/view and task create/list/view/edit/move/search on a separate disposable board.

`npm run zinn:prepare` verifies the lockfile identities and source hashes, copies the released packages, applies `patches/cli-0.43.0.patch` without fuzz, and bundles the runtime with explicit platform mappings. An unexpected Node import fails the build. Source, version or integrity drift fails before patches are applied. Generated files, tarball downloads and detailed run results are ignored. Nothing under generated/ is an editable source of truth.

`npm run build:zinn-proof` builds a standalone proof under ignored `dist/zinn-proof/`, including the native reference. This is independent of `npm run build` for the portfolio. `npx vite preview --config tools/zinn-release/vite.config.mjs --host 127.0.0.1 --port 5191` previews that proof build.

The proof commands also run the pinned BashKit 0.20.3 commands adapter checks. Open `shell-commands.html` to run the shared stream/status and plain-default suite in a dedicated browser worker. [The adapter report](../zinn-shell-bridge/COMMANDS-0.20.3.md) records reproduction, explicit color/width policy and browser evidence. Automatic TTY selection remains deferred to PORT-18. The production Terminal and released-Zinn cutover remain PORT-13 work.

## Adaptation map

| Boundary | Retained upstream behavior | Browser replacement |
| --- | --- | --- |
| Executable bootstrap | Version spellings, version text, root-help precedence, router setup, error rendering | One version-bound patch exports `invokeReleased(argv)` and adds an execution capability gate |
| Commands and routing | Every command definition, alias, input schema, option validation, help generator and router | None. Host-only execution is refused before a handler runs. All help remains available |
| Parsing | Released call sites and their Node parseArgs options | Locked `@pkgjs/parseargs` 0.11.0 backport, checked against native Node parseArgs through actual CLI invocations |
| Presentation | All released results, tables, truncation, diagnostics, suggestions and timestamp formatting | `node:util.styleText` adapter implements the four ANSI styles used by this release. Width, color and output streams are per invocation |
| Domain and database policy | Entire core, schema, migrations, open policy, SQL wrapper, transactions, FTS and operations | `#sqlite` maps to SQLite WASM with the existing low-level WASM driver. No domain code is patched |
| Files, paths and settings | Released settings resolution, schema validation, store selection and no-create-on-read behavior | Small virtual filesystem, POSIX path polyfill, virtual `/board` store and explicit UTF-8 files under `/visitor`. No host files are visible |
| Identity and hooks | Released actor resolution and hook switch | Virtual OS username `Visitor`, no Git executable, `ZINN_HOOKS=0`. No owner identity or executable shell hooks |
| Process and I/O | Released stdout/stderr rendering, failure codes and noninteractive behavior | Lexically injected process/console objects, captured strings and optional output sinks. `process.exit` records status without terminating the worker or page |
| Worker lifecycle | Fresh-process database/policy/settings behavior | Serialized invocations, released reset/close helper after each call, SQLite snapshot on close, isolated module state per worker |

`runtime.js` exports `initialize(sqlite, {snapshot?, files?})`, `invoke(argv, context)`, `snapshot()`, `inspect()` and `identity`. Context accepts stdout/stderr callbacks, `tty`, `columns` and `color`. The result has stdout, stderr, exit status and board/file metrics. The worker is the intended isolation boundary. One runtime belongs to one worker. Initialization loads a SQLite engine but opens no connection or board. Help/version and tested syntax errors perform zero board opens, directory writes or text-file reads, including when a filename follows help or another invalid argument. Snapshot hashes also remain unchanged after these invocations on an existing board.

## Verified scope and limits

Execution is deliberately limited to project create/list/view, task create/list/view/edit/move/search and whoami. Released aliases for those handlers work, including task new and task show. The existing production playground's top-level search convenience is not introduced here. Canonical search is `zinn task search <query> [<project-key>]`.

The checked-in fixtures and native comparison exercise actual released code against disposable native storage. They cover all released command help, root and namespace help, both version flags, help precedence, aliases, missing/unknown/repeated arguments, JSON failures, equals values beginning with a dash, quoted values, literal words after `--`, multiline descriptions, virtual description files, deadlines, edit append semantics, no-op diagnostics, pagination output, missing columns/tasks, search and snapshot restoration. ANSI and table output are compared with native stdout configured to the same widths of 40, 80 and 120 columns. The browser compares against native results, not a second hand-written help reference.

Observed differences and limitations:

- UUIDs and creation/update timestamps vary across runs. The comparison normalizes these values, while checking resulting task keys, titles, descriptions, column, cleared priority and exact deadline separately. Snapshot restoration compares the same persisted UUIDs without normalization.
- Formatted dates use the browser's local timezone. The native reference uses UTC. Displayed local timestamps are normalized, while raw JSON deadlines are checked exactly. The adapters do not rewrite upstream date formatting.
- Visitor identity uses a virtual OS-user fallback, rather than native Git/OS identity. Sessions and agent markers are not inherited from the host.
- SQLite runs in memory with exported images. It has no filesystem WAL, fsync durability, native lock waiting or cross-tab coordination. Those native durability properties have not been claimed. The existing browser driver preserves integer range checks and upstream transactions.
- Only supplied virtual UTF-8 text files can be read. Streaming stdin, interactive readline prompts, OS editors, native executables, shell hooks, host file descriptors, backup/restore and migration disk services are unsupported. Other commands, including capability enumeration, are gated even where some domain operations could run. A rendered help page is not evidence that its command executes.
- Only the tested CLI subset is claimed. The parseArgs backport is not a promise of parity for every future Node feature. New upstream platform imports and parser/output changes require another conformance pass.

## Disposable storage and PORT-13 integration

The proof is memory-only and resets on reload. The reserved integration namespace is `portfolio-zinn-cli-0.43.0-core-0.32.0-browser.1`. A different CLI/core/adaptation tuple starts a fresh board. Never change a schema marker to make old bytes appear compatible, migrate owner databases, or fall back to the old namespace after a failed import.

PORT-13 can reuse this runtime and worker, with the following concrete integration work:

1. Replace the production worker's custom CLI dispatch with `invoke(argv, context)`. Pass BashKit's already parsed argv and preserve the completed Ghostty input, prompt, cursor, scrolling and completion behavior.
2. Connect snapshot load/save to a separately versioned IndexedDB store. Preserve revision/conflict checks and commit snapshots before reporting persistence success. Add lifecycle checks for empty, matching and incompatible storage. Keep visitor-drive and portfolio-preference stores separate.
3. On a format transition, leave the old namespace untouched and show: “The Zinn demo was updated, so its sample board has been reset. Your visitor files and preferences are kept.” Seed a new board through released operations. Do not read the old schema-3 snapshot as a compatible release merely because its schema number matches.
4. Decide and test the production capability set, virtual file/stdin bridge, cancellation, worker disposal, size limits and trusted ANSI output. Keep a usable plain transcript. Refresh completion from the released command metadata without changing the terminal editor.
5. Re-run this native/browser conformance suite plus test:terminal, lint and the production build before switching the runtime. Verify export/reset behavior and separate visitor-drive persistence in the integrated UI.

## Deliberate release refresh

Run `npm run zinn:release-audit` to recheck public latest tags and verify the pinned artifacts. It reports newer releases but never changes the baseline. Select a CLI release and the exact core dependency from its registry manifest. Download both public tarballs and verify their published SRI before extracting them. Record new URLs, integrity, hashes, repository declarations and any provenance limits in baseline.json and regenerate source-integrity.json from those verified artifacts.

Install the exact new CLI and required platform dependencies into package.json/package-lock.json. Rebase the named bootstrap patch against that exact version, review every platform import and ANSI style, update notices, and change the adaptation/storage identity when compatibility changes. Run prepare, native conformance, the browser suite, clean-install checks and repository checks. Review the actual output differences and refresh recorded evidence together. A dependency override alone cannot apply these patches. Publishing upstream packages, integrating the production runtime and deploying the portfolio are separate operations.

## Recorded verification

On 2026-11-02, Node v26.13.0 passed 196 comparisons between the unmodified released native CLI and the browser bundle on SQLite WASM 3.51.2-build8. Of these, 161 assert no board opens, text-file reads or directory writes, along with unchanged snapshots. A separate identity check records the expected Git-versus-visitor difference. Queue/output-sink isolation, host-capability refusal and snapshot reload are also checked.

The in-app Chromium 156 browser passed the same 196 comparisons and snapshot reload. [Browser evidence](./browser-verification.json) and the [screenshot](./browser-verification.png) record that run. Detailed native reference and comparison results are regenerated under ignored generated/ and results/ directories.

`npm run test:zinn-clean` creates a temporary source copy, runs clean `npm ci`, runs native/WASM conformance, deliberately modifies an installed upstream file and verifies that prepare refuses it. It removes the temporary copy afterward. The clean install and drift-rejection check passed. The existing 42 terminal tests, lint, production TypeScript/Vite build and standalone proof build passed. The production build retains its existing large-chunk advisory.
