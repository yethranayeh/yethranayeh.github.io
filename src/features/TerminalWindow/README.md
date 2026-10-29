# Terminal

Open Terminal from the desktop or Start menu. It starts as a general browser shell. Zinn is available through the `zinn` command, and **Try Zinn in Terminal** in the project window launches that command.

```sh
pwd
mkdir notes
cd notes
printf 'one\ntwo\n' > demo.txt
cat demo.txt | grep two
zinn -h
zinn -v
zinn task create --help
zinn task create "Build something nice" --priority high
zinn task move PLAY-4 "In Progress"
zinn task list | grep PLAY
```

BashKit provides Bash syntax, virtual files, variables, functions, pipes, and redirection. A single shell instance preserves its working directory and state between commands. Shell variables and history belong to the current page session. Visitor files persist separately in IndexedDB and are shared with My Computer at `/home/guest`. This does not provide a native OS shell or arbitrary installed executables. `touch` creates files and accepts `-c`, but file timestamps are not supported by the host filesystem adapter.

`help` lists shell and installed commands. Arrow keys recall history, Tab completes common command names, Ctrl+L clears the screen, and Ctrl+C cancels at a command boundary. The visible native input supports paste, IME, and mobile keyboards. File contains **Upload file**, **View transcript**, and **Save transcript**. Edit contains **Copy transcript** and **Clear screen**. There is no permanent transcript panel or app-specific toolbar.

Zinn accepts `-h` / `--help` on commands and `help [command]` for command-specific usage. `-v` / `--version` identifies the bundled Zinn core version and source revision. Help and version work without loading the board or its database. Options accept both `--priority high` and `--priority=high`. Unknown options, duplicate options, and missing values report errors. Use `--` before literal arguments starting with a dash, such as `zinn task create -- -h`, or an equals sign for an option value, such as `--description=--help`.

## Rendering

`ghostty-web` provides Ghostty's VT parser compiled to WASM and its canvas renderer. Geometry changes rebuild the display and replay the bounded text transcript. Each display uses a fresh WASM instance to avoid a verified resize/dispose state-reuse bug in ghostty-web 0.4. The downloaded WASM bytes are cached.

`ghostty-compat.ts` normalizes the public renderer's viewport offset to whole rows. The pinned renderer otherwise compares fractional offsets while indexing with rounded offsets, which skips or repeats text at certain scroll positions. Smooth scroll animation is disabled to avoid a separate stale-target animation bug when new output arrives.

## Zinn and files

Zinn board commands call shared Zinn operations against SQLite WASM in a dedicated worker. They preserve core validation, transactions, activity records, and FTS5 search. The pinned source, MIT license, platform adaptations, and file hashes are recorded in `src/vendor/zinn/core/`. The visitor's `PLAY` project starts with five columns and three sample tasks. There is no connection to a personal Zinn store or owner database.

```sh
zinn export backup.sqlite
download backup.sqlite
# File > Upload file copies an existing backup into /home/guest.
zinn import /home/guest/backup.sqlite
```

Exports are binary SQLite files in the shell's virtual filesystem. `download` saves a virtual file to the visitor's computer. Upload refuses to overwrite an existing file. Import checks the playground marker, schema version, integrity, foreign keys, and board shape before replacing the board. Backups are limited to 5 MB and must come from this playground. They are not a general native Zinn import format. `zinn reset --yes` restores the sample board.

SQLite images persist in IndexedDB. Each command reloads newer stored revisions. Writes compare revisions inside an IndexedDB transaction to avoid overwriting another tab's changes. Failed commands or persistent writes restore the previous image. Older supported local schemas use upstream migrations, and import/reset remain available if saved data cannot be loaded. If storage is unavailable, Zinn reports that its board is session-only.

Browser storage belongs to the origin and browser profile and can be cleared or evicted. Download a backup to keep a copy. The existing static GitHub Pages deployment requires no server or cross-origin isolation headers. There is no offline service worker. BashKit's 7 MB WASM asset (about 2.6 MB gzip) loads on the first shell command.

## Shared visitor drive

My Computer opens the visitor drive by default. Double-click a UTF-8 text file, press Enter, or tap on a touch device to open Notepad. `open <file>` in Terminal opens the same editor. Save or Ctrl/Cmd+S writes back to the drive. Clean documents refresh when files change, while stale edits are refused until the visitor reloads the file or downloads their draft. Binary files remain available through `download <file>` and the drive export. The editor supports text up to 1 MB.

`portfolio-visitor-workspace` is a separate IndexedDB database from Zinn's playground. A shared queue commits shell commands, uploads, and editor saves as complete drive snapshots. Revision checks prevent another tab's commit from being overwritten, and BroadcastChannel refreshes idle views across tabs. Persistence failures roll back the file changes. If storage cannot be opened, both interfaces clearly identify the drive as session-only.

Uploads refuse to overwrite an existing name. Files are limited to 5 MB, and the drive is limited to 20 MB and 512 entries. Paths outside `/home/guest` cannot be written. Only visitor entries are persisted and exported. There is no bridge to the owner's filesystem or native Zinn database.

My Computer's **Export files** downloads a standard ZIP containing files and folders, including binary backups. **Reset files** asks for confirmation, removes visitor files, and restores README.txt and local-server-troubleshooting.txt. The next Terminal command starts with fresh shell state at `/home/guest`. It does not reset Zinn's board, login preferences, or portfolio source. The initial troubleshooting note covers macOS port, process, and project inspection and explains that those commands run in the visitor's own native Terminal.

The **Portfolio source** view is separate and read-only. The build embeds text previews from the existing source tree, skips symlinks, and does not fetch arbitrary filesystem paths. Previews and uploads are displayed as plain text and never executed.

## Verification

```sh
npm run test:terminal
npm run lint
npm run build
```

Tests cover actual BashKit session and filesystem behavior, pipes and failures, Zinn help/version without database initialization, option parsing and mutation safety, the Zinn binary backup bridge, Ghostty instance isolation and fractional-row rendering, SQLite transactions and FTS, worker import/export and recovery, and IndexedDB revision conflicts. Browser checks exercise the menu, transcript dialog, shell commands, scrolling, minimize/reopen, and viewport changes.
