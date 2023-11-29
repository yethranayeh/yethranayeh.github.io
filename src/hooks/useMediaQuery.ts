// https://usehooks-ts.com/react-hook/use-media-query (Modified)
import { useEffect, useState } from "react";

import vars from "@/styles/variables.module.scss";
console.log("🚀 ~ file: useMediaQuery.ts:5 ~ vars:", vars);

const breakpoint = {
	sm: vars.mediaSm,
	md: vars.mediaMd,
	lg: vars.mediaLg,
	xl: vars.mediaXl
} as const;

type BreakPointKey = keyof typeof breakpoint;

export function useMediaQuery(queryKey: BreakPointKey): boolean {
	const mediaToMatch = `(min-width: ${breakpoint[queryKey]}px)`;
	const getMatches = (): boolean => window.matchMedia(mediaToMatch).matches;

	const [matches, setMatches] = useState<boolean>(getMatches());

	function handleChange() {
		setMatches(getMatches());
	}

	useEffect(() => {
		const matchMedia = window.matchMedia(mediaToMatch);

		// Triggered at the first client-side load and if query changes
		handleChange();

		// Listen matchMedia
		matchMedia.addEventListener("change", handleChange);

		return () => {
			matchMedia.removeEventListener("change", handleChange);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [queryKey]);

	return matches;
}
