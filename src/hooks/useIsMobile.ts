import { useMediaQuery } from "./useMediaQuery";

/** Returns `true` when the viewport is narrower than the `md` breakpoint (768 px). */
export function useIsMobile() {
  return !useMediaQuery("md");
}
