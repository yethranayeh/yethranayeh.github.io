# BashKit 0.20.3 commands adapter

**Current refresh, 2026-11-09:** CLI 0.44.0 / core 0.33.0, schema 4, passed **236 commands checks** in Node and Chromium 157, including **176 native comparisons** and **54 explicit color/width cases**. The runtime verifies 137 upstream files. [Current browser JSON](./browser-commands-0.20.3.json) records this run. [Production integration evidence](../zinn-release/INTEGRATION.md) records the completed Terminal cutover and release refresh. The original adoption report below describes the 0.43.0 baseline; its packaged release and composition JSON remain historical. The current browser-commands JSON supersedes its original 229-check result.

Verified on 2026-11-05 with Node v26.13.0, SQLite WASM 3.51.2-build8 and Chromium 156. **Exact stream/status transport and the explicit plain-default policy pass. Automatic destination/TTY detection remains unavailable, deferred to PORT-18 and non-gating for this policy.** Production released-Zinn integration remains PORT-13.

## Artifact and API

The manifest and lockfile pin `@everruns/bashkit-wasm` exactly to `0.20.3`. The public [tarball](https://registry.npmjs.org/@everruns/bashkit-wasm/-/bashkit-wasm-0.20.3.tgz) was downloaded before installation and its SHA-512 and SHA-1 were compared with `npm view @everruns/bashkit-wasm@0.20.3 dist --json`.

| Artifact | Verified digest |
| --- | --- |
| Tarball SHA-512 SRI | `sha512-Yau4chwoMe/vHsuCZU/TopP6KAKaQiAJRYG5eP3hTzlRBhkwv6AnzArPt04pxidACbZ7reo1US8AJU99+/eQCA==` |
| Tarball SHA-1 | `4d0d07405c7ca5cc0eb22eaa5bb56e5c4d0c1710` |
| Tarball SHA-256 | `d8e632cfb873efbfca0a67b4fc5b6069693fc6aad95ccd31f0611d78c012c472` |
| Installed WASM SHA-256 | `a07727cfe0d1a2d1d549f9c5f821595bed9274abf82cb741db878306c920ddd8` |
| Installed index.d.ts SHA-256 | `4b2cba164ba3d4aedca8832f1f9324ae3b25b12fb65fe0234b86b54a9eb18b26` |

The tarball's declarations were read before adoption. `CommandContext` supplies argv, environment, cwd, filesystem, stdin and separate stdout/stderr writers accepting `Uint8Array` and returning `Promise<void>`. `CommandCallback` resolves to a number or `{exitCode}`. The separate `CustomBuiltin` still returns a string or Promise of a string and rejects into stderr/status 1. The [official streaming reference](https://bashkit.sh/docs/streaming/) describes these separate APIs. Registry signatures and provenance attestations were not independently validated.

The adoption commands were:

```sh
npm view @everruns/bashkit-wasm@0.20.3 dist --json
npm pack https://registry.npmjs.org/@everruns/bashkit-wasm/-/bashkit-wasm-0.20.3.tgz --pack-destination /private/tmp --ignore-scripts --json
npm install --save-exact @everruns/bashkit-wasm@0.20.3 --min-release-age=0 --ignore-scripts --no-audit --no-fund
```

The explicit tarball URL and install flag permit this specific release through the repository's release-age filter. The repository npm configuration was preserved. The tarball digests above were independently computed from the downloaded bytes before installation.

## Reusable boundary

[commands-adapter.js](./commands-adapter.js) exports `zinnCommand(invoke, {columns})` for registration as `new Bash({commands: {zinn: ...}})`. It awaits the released invocation, encodes both text channels as UTF-8, awaits each channel's writer, then returns the actual status without rewriting diagnostics or adding newlines. It forwards `ctx.argv` unchanged. Tests verify that BashKit excludes the leading command name, preserves quoted/Unicode/literal arguments, and awaits invocation and writer Promises. Invocation errors are rethrown unchanged.

The runtime is still prepared with `prepare()`, dynamically imported from `generated/browser-cli.js` and initialized with SQLite WASM. Its existing invocation queue owns per-call state. Overlapping calls use separate Bash instances sharing that runtime queue. Concurrent execute calls on one Bash instance are not claimed.

The Zinn baseline remains CLI **0.43.0**, core **0.32.0**, schema **3**, adaptation `portfolio-zinn-browser.1`. All 124 upstream source-integrity checks and the existing patch process remain in place. Native comparisons use fresh temporary HOME/store directories and static fixture text. The browser uses a disposable in-memory board in a dedicated worker. Help/version and invalid syntax leave board, file-read and directory-write metrics at zero before the first operation. No owner tracker data is used as fixture data.

Production `terminal-shell.ts`, its parser, custom builtins, worker route, Ghostty editor, storage namespace and visitor drive remain unchanged. No archive/unarchive expansion or generic visitor-file projection is included.

## Stream and status results

`npm run test:zinn-shell-bridge` now runs [check-shell-commands.mjs](../../tools/zinn-release/check-shell-commands.mjs) with real installed WASM. The shared [commands-suite.js](./commands-suite.js) runs **229 passing checks** in both Node and a browser worker. Of these, **169 compare against the unchanged native released CLI**: 89 help/version/invalid cases, 26 representative operations and 54 explicit color/width cases. The other 60 checks cover transport, shell routing, async behavior and isolation.

| Input / capability | Expected and observed |
| --- | --- |
| `target t0` | stdout `O0\n`, stderr empty, status 0 |
| `target t0err` | stdout `O0\n`, stderr `E0` without a newline, status 0 |
| `target t2` | stdout `O2\n`, stderr `E2`, status 2 |
| `target t7` | stdout `O7\n`, stderr `E7`, status 7 |
| Unicode and trailing newlines | `İstanbul 🦀 日本語\n\n` and an independent unterminated diagnostic survive byte for byte |
| Larger UTF-8 output | Repeated multibyte text and NUL cross the pipe buffer boundary and survive file redirection as exact bytes |
| Immediate `$?` | 0, 2 and 7 remain available immediately after their callbacks |
| `&&` / `||` | The command's actual status selects the branch |
| Pipe / pipefail | Default pipeline uses the last command status, pipefail retains 7 |
| `>`, `2>`, both files | Independent output and error bytes reach their selected files |
| `> file 2>&1`, `2>&1 > file`, combined pipe | Merge order and descriptor routing retain the expected bytes and status |
| Awaited sequence / next call | Calls finish in sequence with separate output buffers |
| Overlapping independent shells | The runtime queue keeps help/version output separate |
| Actual Zinn | Help/version, all command help, invalid text/JSON syntax, canonical create/list/view/edit/move/search and supported aliases preserve both channels and status |
| Legacy custom builtins | Returned text stays status 0, rejection still yields `rejected: ERR\n` and status 1 |

The synthetic 2 and 7 statuses test transport and do not claim that Zinn uses those failure codes. Captured stdout/stderr byte arrays and VFS byte reads are asserted, along with text and exitCode. Truncation must be false. Native comparisons normalize only the pre-existing nondeterministic UUID, creation/update timestamp, local timestamp display and sandbox path fields. The adapter's transport checks do not normalize output.

Full exact desired/observed rows, scripts, files, metrics, hashes and runtime identity regenerate in ignored `commands-results.json`. Ignored `commands-reference.json` supplies native expectations to the browser. This reference lives outside `generated/` so runtime preparation cannot erase it.

## Explicit presentation results

Caller-supplied widths **40, 80 and 120** match the native CLI for task list/view output. The adapter defaults to 80 until the caller supplies a value. PORT-13 will provide live terminal width. `TERM=xterm-256color` and `COLUMNS=999` are deliberately present in the shell fixture and do not affect the chosen width or enable color.

| Explicit environment | ANSI expected and observed |
| --- | --- |
| No override | Off |
| `NO_COLOR=1` or `NO_COLOR=0` | Off |
| `FORCE_COLOR=0` | Off |
| `FORCE_COLOR=1` | On |
| `FORCE_COLOR=2 NO_COLOR=1` | On |
| `FORCE_COLOR=false NO_COLOR=1` | On, matching the pinned CLI's nonempty/nonzero rule |
| Both overrides empty | Off |
| Empty FORCE_COLOR and nonempty NO_COLOR | Off |

There are 54 native comparisons across nine policies, three widths and two renderers. Native stdout uses the same caller-selected geometry with an explicit plain default, then the supplied overrides. FORCE_COLOR takes precedence over NO_COLOR. An empty override does not enable color. Another 27 checks route actual plain, NO_COLOR and forced-color task views through pipes, separate files and combined redirection at every width. Forced ANSI remains in redirected bytes by explicit request.

The released renderer uses isTTY to enable width-sensitive layout. The adapter therefore supplies `tty:true` solely as a caller-selected layout setting, while always supplying an explicit color boolean. This does not measure or assert that any output destination is a TTY.

## Deferred automatic TTY capability

**Unavailable, deferred to PORT-18, non-gating here.** The 0.20.3 declarations expose no stdout destination, isTTY or width metadata. Direct, piped and redirected probes supply the same context keys and values. No destination is inferred from TERM, COLUMNS or raw shell syntax. Accepting the plain-default policy does not change this capability verdict to supported.

The [0.18.2 report](./CAPABILITIES.md) and its 25 passing / 8 unsupported measurements remain historical evidence at commit **d030c8f**, using that commit's lockfile. The old runner retains its 0.18.2 version assertion and negative full-contract verdict. It is not a current release acceptance command and no duplicate old dependency is installed.

## Verification and browser evidence

All required commands passed:

```sh
npm run test:zinn-shell-bridge
npm run test:zinn-release
npm run test:terminal
npm run test:zinn-clean
npm run lint
npm run build
npm run build:zinn-proof
```

Results: 229 commands checks, 196 existing native/released-runtime comparisons and 42 terminal regressions. The clean check installs from the lockfile in a temporary source copy, runs both conformance suites and verifies rejection of modified upstream source. Lint has no source warnings. The existing baseline-browser-mapping, console-script, dependency-annotation, large-chunk and Node localStorage advisories remain. Production BashKit WASM is 7,790,288 bytes, gzip 3,052,113 bytes measured with Node zlib, matching Vite's rounded 3,052.11 kB.

Browser commands used:

```sh
npx vite --config tools/zinn-release/vite.config.mjs
npm run preview -- --host 127.0.0.1 --port 4187 --strictPort
```

- At `http://127.0.0.1:5190/shell-commands.html`, **Run commands conformance** passed 229 checks in a real module worker.
- After the proof build, the same button at `http://127.0.0.1:4187/zinn-proof/shell-commands.html` passed all 229 again. The packaged run originally recorded 229 checks. The browser-commands JSON now records the current refresh above.
- The existing `http://127.0.0.1:4187/zinn-proof/index.html?check` also passed all 196 native/browser comparisons, read-only guards and SQLite snapshot reload after the proof asset-path changes. [Result JSON](./browser-release-0.20.3.json).
- At `http://127.0.0.1:4187/`, production Terminal showed the initial prompt and single Ghostty caret. Editing `echo ac` with Left then `b` produced `echo abc`, which printed `abc`. Up recalled it. Tab completed `pro` to `projects `.
- From Terminal, `mkdir -p port17 && cd port17 && printf 'shared browser evidence\n' > evidence.txt` created a visitor file. Tab completed `cat evi` to `cat evidence.txt ` from the nested cwd, validating the unchanged commit-snapshot decoding boundary in the browser.
- A pasted two-line printf script stayed in the draft until Enter, then printed both lines once. The viewport changed from 1280×720 to 700×680 and back, rebuilding the display and retaining the transcript and usable caret. Minimize changed the window to `display:none`, taskbar restore returned it to `display:flex`, and close removed the window before reopening it with session/cwd retained.
- `open /home/guest/port17/evidence.txt` opened the shared file in My Computer's Notepad. A saved edit there was read back by `cat evidence.txt` in Terminal. `zinn -v` and `zinn task list` returned the existing playground identity and seeded tasks through the unchanged production route.
- At `http://127.0.0.1:4187/zinn-proof/terminal-events.html`, open Terminal inside the production iframe, then choose **Run synthetic composition probe**. Composing Enter and keyCode 229 were ignored, `日本語` committed exactly once, cancellation retained the draft and the transcript stayed unchanged. [Result JSON](./browser-composition-0.20.3.json).

The three JPEG screenshots are local review artifacts and are excluded by this directory's .gitignore. The fixtures, report and browser JSON provide the version-controlled evidence.

Browser evidence uses Chromium `156.0.0.0` on the Mac. Synthetic composition events do not establish native IME or physical-mobile behavior. Neither native IME, physical mobile, Safari nor Firefox was tested. The proof is buffered at the Zinn invocation boundary. Streaming Zinn output, cancellation, persistence integration and automatic TTY selection are not claimed. No production runtime cutover, storage generation change, deployment, publication or push is included.
