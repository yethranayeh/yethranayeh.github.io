# Terminal

Open Terminal from the desktop or Start menu. It starts as a general browser shell. Zinn is available through the `zinn` command, and **Try Zinn in Terminal** in the project window launches that command.

```sh
pwd
mkdir notes
cd notes
printf 'one\ntwo\n' > demo.txt
cat demo.txt | grep two
zinn task create "Build something nice" --priority high
zinn task move PLAY-4 "In Progress"
zinn task list | grep PLAY
```

BashKit provides Bash syntax, virtual files, variables, functions, pipes, and redirection. A single shell instance preserves its working directory and state between commands. Files and shell state belong to the current page session. This does not provide a native OS shell or arbitrary installed executables.

`help` lists shell and installed commands. Arrow keys recall history, Tab completes common command names, Ctrl+L clears the screen, and Ctrl+C cancels at a command boundary. The visible native input supports paste, IME, and mobile keyboards. File contains **Upload file**, **View transcript**, and **Save transcript**. Edit contains **Copy transcript** and **Clear screen**. There is no permanent transcript panel or app-specific toolbar.

## Rendering

`ghostty-web` provides Ghostty's VT parser compiled to WASM and its canvas renderer. Geometry changes rebuild the display and replay the bounded text transcript. Each display uses a fresh WASM instance to avoid a verified resize/dispose state-reuse bug in ghostty-web 0.4. The downloaded WASM bytes are cached.

`ghostty-compat.ts` normalizes the public renderer's viewport offset to whole rows. The pinned renderer otherwise compares fractional offsets while indexing with rounded offsets, which skips or repeats text at certain scroll positions. Smooth scroll animation is disabled to avoid a separate stale-target animation bug when new output arrives.

## Zinn and files

The `zinn` shell command calls shared Zinn operations against SQLite WASM in a dedicated worker. It preserves core validation, transactions, activity records, and FTS5 search. The pinned source, MIT license, platform adaptations, and file hashes are recorded in `src/vendor/zinn/core/`. The visitor's `PLAY` project starts with five columns and three sample tasks. There is no connection to a personal Zinn store or owner database.

```sh
zinn export backup.sqlite
download backup.sqlite
# File > Upload file copies an existing backup into /home/guest.
zinn import /home/guest/backup.sqlite
```

Exports are binary SQLite files in the shell's virtual filesystem. `download` saves a virtual file to the visitor's computer. Upload refuses to overwrite an existing file. Import checks the playground marker, schema version, integrity, foreign keys, and board shape before replacing the board. Backups are limited to 5 MB and must come from this playground. They are not a general native Zinn import format. `zinn reset --yes` restores the sample board.

SQLite images persist in IndexedDB. Each command reloads newer stored revisions. Writes compare revisions inside an IndexedDB transaction to avoid overwriting another tab's changes. Failed commands or persistent writes restore the previous image. Older supported local schemas use upstream migrations, and import/reset remain available if saved data cannot be loaded. If storage is unavailable, Zinn reports that its board is session-only.

Browser storage belongs to the origin and browser profile and can be cleared or evicted. Download a backup to keep a copy. Shell files remain in memory until the page reloads. The existing static GitHub Pages deployment requires no server or cross-origin isolation headers. There is no offline service worker. BashKit's 7 MB WASM asset (about 2.6 MB gzip) loads on the first shell command.

## Verification

```sh
npm run test:terminal
npm run lint
npm run build
```

Tests cover actual BashKit session and filesystem behavior, pipes and failures, the Zinn binary backup bridge, Ghostty instance isolation and fractional-row rendering, SQLite transactions and FTS, worker import/export and recovery, and IndexedDB revision conflicts. Browser checks exercise the menu, transcript dialog, shell commands, scrolling, minimize/reopen, and viewport changes.
