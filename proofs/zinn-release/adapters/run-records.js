// Native failure logs and local telemetry are host filesystem services.
// Their optional callbacks return no result and never inspect the browser board or visitor files.
export function writeFailureLog() {}
export function writeRunRecord() {}
export function noteMatchedRun() {}
export function noteUnmatchedRun() {}
export function noteParseArgsThrew() {}
