// Local platform boundary. Never installs globals on the page.
export const state = {
  sqlite: null,
  bytes: undefined,
  exists: false,
  opens: 0,
  fileReads: 0,
  directoryWrites: 0,
  files: new Map(),
  directories: new Set(["/", "/visitor", "/board"]),
  stdout: "",
  stderr: "",
  status: 0,
  out: () => {},
  err: () => {},
};

export function unsupported(capability) {
  throw Object.assign(new Error(`Browser capability unavailable: ${capability}.`), {
    code: "BROWSER_UNSUPPORTED",
  });
}

export const process = {
  env: { ZINN_DIR: "/board", ZINN_HOOKS: "0", NO_COLOR: "1", TZ: "UTC" },
  argv: ["browser", "zinn"],
  execArgv: [],
  execPath: "browser",
  platform: "browser",
  versions: {},
  cwd: () => "/visitor",
  stdin: {
    isTTY: false,
    on: () => unsupported("streaming stdin"),
    once: () => unsupported("streaming stdin"),
  },
  stdout: {
    isTTY: false,
    columns: 80,
    write: (text, callback) => {
      emit("stdout", text);
      callback?.();
    },
  },
  stderr: {
    isTTY: false,
    write: (text, callback) => {
      emit("stderr", text);
      callback?.();
    },
  },
  // The released renderer exits only after flushing stderr. Retain its status without exiting a worker.
  exit: (code = 0) => {
    state.status = code;
  },
  kill: () => unsupported("process signals"),
};

function emit(channel, text) {
  state[channel] += text;
  (channel === "stdout" ? state.out : state.err)(text);
}

export const console = {
  info: (text) => emit("stdout", `${text}\n`),
  error: (text) => emit("stderr", `${text}\n`),
};

// This gate restricts execution, while the upstream help remains complete and unchanged.
export function assertCapability(command) {
  if (
    ![
      "project create",
      "project list",
      "project view",
      "task create",
      "task list",
      "task view",
      "task edit",
      "task move",
      "task search",
      "whoami",
    ].includes(command.command)
  )
    unsupported(`execution of zinn ${command.command} in this proof`);
}

export function beginInvocation(argv, context = {}) {
  state.stdout = "";
  state.stderr = "";
  state.status = 0;
  state.out = context.stdout ?? (() => {});
  state.err = context.stderr ?? (() => {});
  process.argv = ["browser", "zinn", ...argv];
  process.stdout.isTTY = context.tty === true;
  process.stdout.columns = context.columns ?? 80;
  process.env.NO_COLOR = context.color ? "" : "1";
  process.env.FORCE_COLOR = context.color ? "1" : "0";
}

export function inspect() {
  return {
    exists: state.exists,
    opens: state.opens,
    fileReads: state.fileReads,
    directoryWrites: state.directoryWrites,
    bytes: state.bytes?.length ?? 0,
  };
}
