# BashKit shell bridge capabilities

Overall verdict: **unsupported** for the required InvocationResult contract on installed BashKit 0.18.2. Shell routing and plain successful stdout work. The callback cannot transport independent stdout, stderr and arbitrary status, and provides no documented per-invocation stdout destination/TTY context. A passing research command confirms these measured limitations, not integration readiness. PORT-13 still waits for an agreed and verified remedy.

## Reproduce

Historical reproduction: use commit d030c8f and that commit's package-lock.json in a separate checkout, then install with npm ci and run the commands below. The current checkout uses BashKit 0.20.3 and test:zinn-shell-bridge now runs check-shell-commands.mjs. This version-pinned 0.18.2 runner intentionally rejects 0.20.3. The recorded measurements below remain unchanged:

```sh
npm run test:zinn-shell-bridge
npm run test:zinn-release
npm run test:terminal
npm run lint
npm run build
```

The first command runs real BashKit WASM in Node, verifies expected successes and failures, reuses prepare() with all released-source drift checks, and bundles/initializes the released runtime with in-memory SQLite WASM. It regenerates this report and ignored [results.json](./results.json), including full output, callback fields, metrics and hashes. Unexpected behavior fails assertions. No browser check is required for this negative result. No browser suitability is claimed.

Measured with v26.13.0, BashKit 0.18.2, CLI 0.43.0, core 0.32.0, and SQLite WASM 3.51.2-build8. BashKit WASM SHA-256: `53fb1dba9d23806d2f58e61b3694f482a0fb0c7949c5e6556b077921486821ce`. Declaration SHA-256: `94d0fedfd6fef3182907fc4c0853a16899cebc286ba9306dc9f95ed178e6101b`. No dependencies, installed package sources, production imports or existing proof behavior are changed.

On 2026-11-05 the bridge's 33 rows reproduced 25 passes and 8 unsupported cases. Companion verification passed all 196 released-runtime conformance comparisons, all 42 terminal tests, lint and the production TypeScript/Vite build. The build emitted advisories about chunk size, the console script, dependency annotations and baseline-browser-mapping. Node emitted its localStorage experimental warning. No dependency update was made.

## Declared API versus measurements

The installed [index.d.ts](../../node_modules/@everruns/bashkit-wasm/index.d.ts) and [README](../../node_modules/@everruns/bashkit-wasm/README.md) declare CustomBuiltin as string or Promise<string>. A thrown/rejected Error becomes stderr and status 1. BuiltinRequest declares name, argv (without command name), stdin, env, cwd and fs. There is no declared stderr writer, status setter, terminal width or stdout destination/TTY field. Bash.execute returns ExecResult.exitCode, while runtime.invoke returns InvocationResult.status. The matrix preserves those distinct names.

Measurements additionally show a command-name prefix and trailing newline added to rejection text. That exact formatting is an observation pinned by the fixture, not a promised callback contract. Direct, piped and redirected callbacks supplied identical context with the same exported TERM/COLUMNS. COLUMNS is an explicit environment value, not measured terminal width. Environment color overrides cannot establish automatic destination detection. Bash.analyze sees script syntax, not documented per-invocation TTY metadata. executeWithOutput is an execution-output observer, not a callback stderr/status injection mechanism.

## Matrix

Each pass is scoped to its stated desired result. Shell-semantic rows use the representable stdout/status-0 and rejection/status-1 baselines. They do not prove arbitrary InvocationResult transport. Files are inside each Bash instance's isolated in-memory VFS. Direct callback is invoked as a terminal candidate, but even that row cannot establish tty=true from the API. The three TTY rows require destination-aware context and therefore fail the required criterion.

H, V, I and BRIDGED-I are exact strings expanded below. String newlines are JSON-escaped. For desired runtime results, status is compared with observed exitCode. Metrics.opens is cumulative in this runtime and remains zero throughout. The redirection rows for actual Zinn validate shell routing after the callback limitation, not faithful diagnostic transport.

| Case | Input script | Desired | Observed | Documented API used | Verdict |
| --- | --- | --- | --- | --- | --- |
| baseline-return | `"ok"` | `{"stdout":"OUT\n","stderr":"","exitCode":0,"files":{}}` | `{"stdout":"OUT\n","stderr":"","exitCode":0,"files":{}}` | Bash.execute, CustomBuiltin string/rejection | pass |
| baseline-reject | `"bad"` | `{"stdout":"","stderr":"bad: ERR\n","exitCode":1,"files":{}}` | `{"stdout":"","stderr":"bad: ERR\n","exitCode":1,"files":{}}` | Bash.execute, CustomBuiltin string/rejection | pass |
| immediate-success | `"ok; printf \"status=%s\\n\" \"$?\""` | `{"stdout":"OUT\nstatus=0\n","stderr":"","exitCode":0,"files":{}}` | `{"stdout":"OUT\nstatus=0\n","stderr":"","exitCode":0,"files":{}}` | Bash.execute, CustomBuiltin string/rejection | pass |
| immediate-failure | `"bad; printf \"status=%s\\n\" \"$?\""` | `{"stdout":"status=1\n","stderr":"bad: ERR\n","exitCode":0,"files":{}}` | `{"stdout":"status=1\n","stderr":"bad: ERR\n","exitCode":0,"files":{}}` | Bash.execute, CustomBuiltin string/rejection | pass |
| and-success | `"ok && echo YES"` | `{"stdout":"OUT\nYES\n","stderr":"","exitCode":0,"files":{}}` | `{"stdout":"OUT\nYES\n","stderr":"","exitCode":0,"files":{}}` | Bash.execute, CustomBuiltin string/rejection | pass |
| and-failure | `"bad && echo NEVER"` | `{"stdout":"","stderr":"bad: ERR\n","exitCode":1,"files":{}}` | `{"stdout":"","stderr":"bad: ERR\n","exitCode":1,"files":{}}` | Bash.execute, CustomBuiltin string/rejection | pass |
| or-success | `"ok \|\| echo NEVER"` | `{"stdout":"OUT\n","stderr":"","exitCode":0,"files":{}}` | `{"stdout":"OUT\n","stderr":"","exitCode":0,"files":{}}` | Bash.execute, CustomBuiltin string/rejection | pass |
| or-failure | `"bad \|\| echo RECOVERED"` | `{"stdout":"RECOVERED\n","stderr":"bad: ERR\n","exitCode":0,"files":{}}` | `{"stdout":"RECOVERED\n","stderr":"bad: ERR\n","exitCode":0,"files":{}}` | Bash.execute, CustomBuiltin string/rejection | pass |
| stdout-pipe | `"ok \| cat"` | `{"stdout":"OUT\n","stderr":"","exitCode":0,"files":{}}` | `{"stdout":"OUT\n","stderr":"","exitCode":0,"files":{}}` | Bash.execute, CustomBuiltin string/rejection | pass |
| pipe-failure | `"bad \| cat"` | `{"stdout":"","stderr":"bad: ERR\n","exitCode":0,"files":{}}` | `{"stdout":"","stderr":"bad: ERR\n","exitCode":0,"files":{}}` | Bash.execute, CustomBuiltin string/rejection, default pipeline status is last command | pass |
| pipefail | `"set -o pipefail; bad \| cat"` | `{"stdout":"","stderr":"bad: ERR\n","exitCode":1,"files":{}}` | `{"stdout":"","stderr":"bad: ERR\n","exitCode":1,"files":{}}` | Bash.execute, CustomBuiltin string/rejection | pass |
| stdout-file | `"ok > /tmp/out"` | `{"stdout":"","stderr":"","exitCode":0,"files":{"/tmp/out":"OUT\n"}}` | `{"stdout":"","stderr":"","exitCode":0,"files":{"/tmp/out":"OUT\n"}}` | Bash.execute, CustomBuiltin string/rejection, VFS readFile | pass |
| stderr-file | `"bad 2> /tmp/err"` | `{"stdout":"","stderr":"","exitCode":1,"files":{"/tmp/err":"bad: ERR\n"}}` | `{"stdout":"","stderr":"","exitCode":1,"files":{"/tmp/err":"bad: ERR\n"}}` | Bash.execute, CustomBuiltin string/rejection, VFS readFile | pass |
| combined-file | `"bad > /tmp/both 2>&1"` | `{"stdout":"","stderr":"","exitCode":1,"files":{"/tmp/both":"bad: ERR\n"}}` | `{"stdout":"","stderr":"","exitCode":1,"files":{"/tmp/both":"bad: ERR\n"}}` | Bash.execute, CustomBuiltin string/rejection, VFS readFile | pass |
| combined-sequence | `"{ ok; bad; } > /tmp/group 2>&1"` | `{"stdout":"","stderr":"","exitCode":1,"files":{"/tmp/group":"OUT\nbad: ERR\n"}}` | `{"stdout":"","stderr":"","exitCode":1,"files":{"/tmp/group":"OUT\nbad: ERR\n"}}` | Bash.execute, CustomBuiltin string/rejection, VFS readFile | pass |
| async-sequence | `"later first; bad; later second"` | `{"stdout":"first\nsecond\n","stderr":"bad: ERR\n","exitCode":0,"files":{}}` | `{"stdout":"first\nsecond\n","stderr":"bad: ERR\n","exitCode":0,"files":{}}` | Bash.execute, CustomBuiltin string/rejection | pass |
| next-call-isolation | `"later third"` | `{"stdout":"third\n","stderr":"","exitCode":0,"files":{}}` | `{"stdout":"third\n","stderr":"","exitCode":0,"files":{}}` | Bash.execute, CustomBuiltin string/rejection | pass |
| transport-t0 | `"target t0"` | `{"stdout":"O0\n","stderr":"","status":0}` | `{"stdout":"O0\n","stderr":"","exitCode":0}` | CustomBuiltin string or Error rejection only | pass |
| transport-t0err | `"target t0err"` | `{"stdout":"O0\n","stderr":"E0","status":0}` | `{"stdout":"","stderr":"target: E0\n","exitCode":1}` | CustomBuiltin string or Error rejection only | unsupported |
| transport-t2 | `"target t2"` | `{"stdout":"O2\n","stderr":"E2","status":2}` | `{"stdout":"","stderr":"target: E2\n","exitCode":1}` | CustomBuiltin string or Error rejection only | unsupported |
| transport-t7 | `"target t7"` | `{"stdout":"O7\n","stderr":"E7","status":7}` | `{"stdout":"","stderr":"target: E7\n","exitCode":1}` | CustomBuiltin string or Error rejection only | unsupported |
| transport-status7-immediate | `"target t7; printf \"status=%s\\n\" \"$?\""` | `{"stdout":"O7\nstatus=7\n","stderr":"E7","exitCode":0}` | `{"stdout":"status=1\n","stderr":"target: E7\n","exitCode":0}` | Bash.execute, CustomBuiltin string/rejection | unsupported |
| tty-direct | `"context arg"` | `{"tty":true,"columns":80,"color":true}` | `{"stdout":"CONTEXT\n","stderr":"","exitCode":0,"files":{},"request":{"keys":["argv","cwd","env","fs","name","stdin"],"name":"context","argv":["arg"],"stdin":null,"env":{"COLUMNS":"80","TERM":"xterm-256color"},"cwd":"/tmp","fsMethods":"FileSystem methods (see results.json)"}}` | BuiltinRequest, BashOptions.env/cwd | unsupported |
| tty-pipe | `"context arg \| cat"` | `{"tty":false,"columns":80,"color":false}` | `{"stdout":"CONTEXT\n","stderr":"","exitCode":0,"files":{},"request":{"keys":["argv","cwd","env","fs","name","stdin"],"name":"context","argv":["arg"],"stdin":null,"env":{"COLUMNS":"80","TERM":"xterm-256color"},"cwd":"/tmp","fsMethods":"FileSystem methods (see results.json)"}}` | BuiltinRequest, BashOptions.env/cwd | unsupported |
| tty-redirect | `"context arg > /tmp/context"` | `{"tty":false,"columns":80,"color":false}` | `{"stdout":"","stderr":"","exitCode":0,"files":{"/tmp/context":"CONTEXT\n"},"request":{"keys":["argv","cwd","env","fs","name","stdin"],"name":"context","argv":["arg"],"stdin":null,"env":{"COLUMNS":"80","TERM":"xterm-256color"},"cwd":"/tmp","fsMethods":"FileSystem methods (see results.json)"}}` | BuiltinRequest, BashOptions.env/cwd | unsupported |
| stdin-context | `"printf INPUT \| context arg"` | `{"stdout":"CONTEXT\n","stderr":"","exitCode":0,"files":{}}` | `{"stdout":"CONTEXT\n","stderr":"","exitCode":0,"files":{}}` | BuiltinRequest.stdin | pass |
| zinn-help | `"zinn --help"` | `{"stdout":"<H>","stderr":"","status":0,"metrics":{"exists":false,"opens":0,"fileReads":0,"directoryWrites":0,"bytes":0}}` | `{"stdout":"<H>","stderr":"","exitCode":0,"metrics":{"exists":false,"opens":0,"fileReads":0,"directoryWrites":0,"bytes":0}}` | runtime.invoke(argv, explicit plain context), CustomBuiltin | pass |
| zinn-version | `"zinn --version"` | `{"stdout":"<V>","stderr":"","status":0,"metrics":{"exists":false,"opens":0,"fileReads":0,"directoryWrites":0,"bytes":0}}` | `{"stdout":"<V>","stderr":"","exitCode":0,"metrics":{"exists":false,"opens":0,"fileReads":0,"directoryWrites":0,"bytes":0}}` | runtime.invoke(argv, explicit plain context), CustomBuiltin | pass |
| zinn-invalid | `"zinn --definitely-invalid"` | `{"stdout":"","stderr":"<I>","status":1,"metrics":{"exists":false,"opens":0,"fileReads":0,"directoryWrites":0,"bytes":0}}` | `{"stdout":"","stderr":"<BRIDGED-I>","exitCode":1,"metrics":{"exists":false,"opens":0,"fileReads":0,"directoryWrites":0,"bytes":0}}` | runtime.invoke(argv, explicit plain context), CustomBuiltin | unsupported |
| zinn-help-pipe | `"zinn --help \| cat"` | `{"stdout":"<H>","stderr":"","exitCode":0,"files":{}}` | `{"stdout":"<H>","stderr":"","exitCode":0,"files":{}}` | runtime.invoke, explicit plain context, Bash.execute | pass |
| zinn-version-file | `"zinn --version > /tmp/version"` | `{"stdout":"","stderr":"","exitCode":0,"files":{"/tmp/version":"<V>"}}` | `{"stdout":"","stderr":"","exitCode":0,"files":{"/tmp/version":"<V>"}}` | runtime.invoke, VFS readFile | pass |
| zinn-invalid-stderr-file | `"zinn --definitely-invalid 2> /tmp/zinn-error"` | `{"stdout":"","stderr":"","exitCode":1,"files":{"/tmp/zinn-error":"<BRIDGED-I>"}}` | `{"stdout":"","stderr":"","exitCode":1,"files":{"/tmp/zinn-error":"<BRIDGED-I>"}}` | runtime.invoke, VFS readFile (already degraded diagnostic) | pass |
| async-runtime-isolation | `"Promise.all([shellA.execute('zinn --version'), shellB.execute('zinn --help')])"` | `[{"stdout":"<V>","stderr":"","exitCode":0},{"stdout":"<H>","stderr":"","exitCode":0}]` | `[{"stdout":"<V>","stderr":"","exitCode":0},{"stdout":"<H>","stderr":"","exitCode":0}]` | Bash.execute on separate instances, runtime.invoke queue | pass |

## Minimal unsupported reproductions

The fixture's desired test runner returns these InvocationResult values separately from the BashKit callback:

```js
const desired = {
  t0err: { stdout: "O0\n", stderr: "E0", status: 0 },
  t2: { stdout: "O2\n", stderr: "E2", status: 2 },
  t7: { stdout: "O7\n", stderr: "E7", status: 7 },
};
// After initBashkit(wasmBytes), use the only declared failure channel:
const bash = new Bash({ customBuiltins: {
  target: ({ argv }) => { throw new Error(desired[argv[0]].stderr); },
} });
await bash.execute("target t7");
// stdout: "", stderr: "target: E7\n", exitCode: 1
// t2 also becomes 1. t0err becomes a failure. All lose their stdout.
```

Returning a string instead would supply only stdout/status 0 and no independent stderr. These are deliberately incomplete mechanism probes. No structured object is returned to a string API and no shell exit/false command substitutes for callback status propagation. Synthetic statuses 2 and 7 do not assert any Zinn failure code.

For missing destination context, after the same initialization:

```js
const requests = [];
const bash = new Bash({ customBuiltins: { probe: (ctx) => {
  requests.push({ keys: Object.keys(ctx), argv: ctx.argv,
    stdin: ctx.stdin, env: ctx.env, cwd: ctx.cwd });
  return "text\n";
} } });
await bash.execute("probe");
await bash.execute("probe | cat");
await bash.execute("probe > /tmp/probe");
// Same callback fields and values in all three requests. No tty/destination.
```

The released-runtime reproduction is the zinn custom builtin in [check-shell-bridge.mjs](../../tools/zinn-release/check-shell-bridge.mjs). It awaits invoke(argv, {tty:false, columns:80, color:false}), returns stdout only for a clean success, and rejects Error(stderr) otherwise. Help and version match direct invoke byte for byte and open no board. The invalid invocation has direct status 1 and observed exitCode 1, but gains the zinn prefix/newline through rejection, so it fails exact diagnostic transport. The forced plain context is explicit fixture configuration and does not pass the automatic TTY requirement.

## Exact released output references

```json
{
  "H": "ZINN - A kanban workflow in the terminal. Experimental.\n\nUsage: zinn <command>\n\nOptions:\n  -h, --help  Show help\n  -v, --version  Show version\n  --json      Print command output as JSON\n  --allow-legacy-read  Read a database without a schema version, best effort and read-only\n\nCommands:\n  project {create|list|view|edit|delete}\n  project column {create|list|edit|order|delete}\n  task {create|list|search|view|edit|move|order|archive|unarchive|delete}\n  task relation {create|list|delete}\n  task comment {create|list|view|edit|delete}\n  task label {add|remove}\n  label {create|list|view|edit|delete}\n  activity {list|view}\n  backup\n  restore\n  migrate\n  reindex\n  info\n  whoami\n  capabilities\n\nRun zinn <namespace> --help or zinn <command> --help for more information.\n--help shows help for the command words before it and runs nothing. The rest of the line is ignored.\n-- ends the options; every word after it is positional, even if it starts with a dash.\nA value that begins with a dash must be joined to its flag with =, as in --description='- item'.\n",
  "V": "0.43.0\n",
  "I": "Unrecognized command \"--definitely-invalid\" for \"zinn\". Run `zinn --help` for a list of available commands\n",
  "BRIDGED-I": "zinn: Unrecognized command \"--definitely-invalid\" for \"zinn\". Run `zinn --help` for a list of available commands\n\n"
}
```

## Bounded next research

Evaluate a separately versioned BashKit API or upstream change that accepts {stdout, stderr, exitCode} from a custom builtin and exposes effective per-command output destinations, isTTY and width. Re-run this matrix, then require an isolated browser check before any supported verdict. Adoption, package patching and a shell replacement require separate work. An always-plain stdout-only fallback could retain help/version but would still fail diagnostics, arbitrary statuses and automatic TTY detection. It is not accepted as satisfying this contract.

Async calls are awaited in sequence on one interpreter. Overlapping calls use two independent Bash instances and the existing runtime queue, verifying per-call output isolation. Concurrent execute on one instance, streaming, cancellation, persistence and production integration are not claimed. The fixture invokes only help, version and invalid syntax in the released runtime, without project/task mutations or visitor-file projection.
