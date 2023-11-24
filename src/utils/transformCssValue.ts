export function transformCssValue(val?: string | number): string | undefined {
	if (typeof val === "number") {
		return `${val}px`;
	}

	if (typeof val === "string") {
		return val;
	}
	return undefined;
}
