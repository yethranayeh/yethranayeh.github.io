// @ts-nocheck
const suppressedPatterns = ["React Router", "Source map error"];

function shouldSuppress(message: any): boolean {
	return suppressedPatterns.some((pattern) => typeof message === "string" && message.includes(pattern));
}

function patchConsoleMethod(method: keyof Console) {
	const original = console[method];

	console[method] = (...args: any[]) => {
		if (!args.some(shouldSuppress)) {
			original.apply(console, args);
		}
	};
}

export function suppressConsoleMessages() {
	patchConsoleMethod("warn");
	patchConsoleMethod("error");
}
