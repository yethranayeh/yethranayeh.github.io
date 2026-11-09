# Portfolio Terminal

Open Terminal from the desktop or Start menu. It runs BashKit **0.20.3** with shared visitor files under `/home/guest`. Zinn invokes the released **CLI 0.44.0 / core 0.33.0**, schema 4, with adaptation `portfolio-zinn-browser.1`. The CLI's definitions, aliases, parser call sites, help, presentation and domain operations come from the pinned npm artifacts.

```sh
zinn --help
zinn --version
zinn task create --help
zinn task create PLAY --title "My first task" --priority high
zinn task list PLAY | grep PLAY
zinn task view PLAY-1 --json > task.json
zinn task move PLAY-1 Review
zinn task search "first task" PLAY
zinn task archive PLAY-4
zinn task unarchive PLAY-4
```

`zinn` shows released root help. `zinn --version` prints exactly `0.44.0`. Browser/core identity is recorded separately in integration metadata and `dist/zinn/baseline.json`. No project argument is inserted. Old `board`, `columns` and top-level `search` forms are retired. Use the released `--help` forms for command usage.

Execution supports project create/list/view, task create/list/view/edit/move/search/archive/unarchive, and whoami, including released aliases such as task new and task show. Complete released help remains available for every command. Other execution, native backup/restore, OS editors, interactive prompts, host executables, hooks and streaming stdin are unavailable.

## Browser extensions and storage

```sh
zinn export backup.sqlite
# File > Upload file can add a previously downloaded backup
zinn import /home/guest/backup.sqlite
zinn reset --yes
# Download a visitor file to keep it outside this browser
download backup.sqlite
```

Reset, export and import are browser extensions. Each accepts `-h`/`--help` without opening a board or reading a filename. Reset requires `--yes`. Export defaults to `zinn-playground.sqlite`. Import accepts binary SQLite images up to 5 MiB, exclusively from this playground generation. It checks the format marker, schema, SQLite integrity, foreign keys, and the required PLAY board with its five named columns before replacement. Native owner databases and old/future playground formats are refused. A failed import preserves the active board.

The storage namespace and `portfolio_playground` format value are `portfolio-zinn-cli-0.44.0-core-0.33.0-browser.1`. The format value is independent of SQLite schema 4. This generation starts fresh and leaves both the old custom playground and the CLI 0.43.0/core 0.32.0 generation untouched. Backups from those generations are refused rather than migrated. When an old board exists, a separate status explains the reset. The new board has project PLAY, name Your playground, columns Backlog, TODO, In Progress, Review, Done, and three Visitor-created tasks: Explore the desktop (Done), Try moving a task (In Progress), Make something of your own (Backlog).

One worker serializes commands, snapshot replacement and IndexedDB writes. Persistent success is returned after commit. Revision checks refuse stale-tab writes and failed saves restore the previous image. A subsequent command refreshes from the committed winner. Storage failure allows a clearly identified session-only board when IndexedDB cannot open. Corrupt stored images keep help/version and confirmed reset/import available. Help/version do not initialize SQLite or Zinn IndexedDB. Reset affects only the Zinn board. Visitor files, uploads and portfolio preferences have independent stores.

Each Zinn callback gets a fresh read-only file projection, including directory entries and files written earlier in that BashKit script. Paths are literal `/home/guest` paths, resolved from the callback's actual cwd. There is no `/visitor` alias in production. Valid UTF-8 text up to 1 MiB is readable through native file flags, including `--description-file`. Binary and oversized reads fail, with detailed integration notices outside shell streams. `/board` remains private to the worker.

## Streams, display and lifecycle

Ordinary Zinn execution uses the verified `BashOptions.commands` adapter. It awaits independent UTF-8 stdout/stderr writes and returns the actual released status. Pipes, separate/combined redirection and conditionals receive those streams. Integration notices use an accessible status outside the command streams, so redirected JSON and errors remain valid.

Output defaults to plain for direct, piped and redirected calls. Explicit FORCE_COLOR wins over NO_COLOR according to the pinned release policy. Live terminal columns select layout using `tty:true`, with color set independently. This is explicit geometry, not destination detection. Automatic TTY color selection remains deferred to PORT-18. Only the pinned renderer's bold, dim, gray and green SGR codes reach Ghostty. The accessible, saved and copied transcript stays plain. Other untrusted controls keep their existing filtering.

Ctrl+C stops subsequent shell commands. An already-started Zinn invocation remains serialized through its completion and persistence result. The prompt waits for it, and cancellation status states the completed result without claiming rollback. Worker errors, unreadable RPC messages and a 30-second timeout reject pending requests and terminate that worker. Retry creates a new worker and reloads the last committed image. A timeout may occur after commit, so inspect the board before repeating a mutation.

The existing editor remains in place: output-following prompt, one Ghostty caret, command/path Tab completion, history draft and caret restoration, mid-line editing, composition, bounded multiline paste, Ctrl+L, scrolling, resize, minimize/reopen, Escape/Shift+Tab focus exit, and File > View/Save transcript. Completion suggests shell commands and literal paths, not a second Zinn schema. My Computer shares the drive and edits the same files. Upload refuses overwrites.

## Build and verification

`npm ci && npm run build` prepares the pinned runtime, checks source hashes and applies the bootstrap patch without fuzz. It needs no sibling checkout or previous proof build. `dist/zinn/` includes baseline identity, generated provenance and MIT/polyfill notices. The CI Pages workflow already runs this production build.

```sh
npm run test:zinn-shell-bridge
npm run test:zinn-release
npm run test:terminal
npm run test:zinn-clean
npm run lint
npm run build
npm run preview -- --host 127.0.0.1 --port 5192 --strictPort
```

See `proofs/zinn-release/INTEGRATION.md` for verification evidence. The obsolete custom CLI/core files were removed with the initial integration.

Native disk failure logs and local telemetry are unavailable in the browser. Their optional callbacks are inert and never inspect the board or visitor files. Task-list pagination uses the released `zt1` cursor format, including base64url encoding.
