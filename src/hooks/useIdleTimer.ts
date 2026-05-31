import { useEffect, useRef, useCallback } from "react";

const EVENTS: Array<keyof WindowEventMap> = [
  "mousemove",
  "keydown",
  "mousedown",
  "touchstart",
  "scroll",
];

export function useIdleTimer(timeoutMs: number, onIdle: () => void) {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const enabledRef = useRef(true);
  const onIdleRef = useRef(onIdle);

  useEffect(() => {
    onIdleRef.current = onIdle;
  });

  const reset = useCallback(() => {
    if (!enabledRef.current) {
      return;
    }

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => onIdleRef.current(), timeoutMs);
  }, [timeoutMs]);

  useEffect(() => {
    timerRef.current = setTimeout(() => onIdleRef.current(), timeoutMs);

    const handlers = EVENTS.map((event) => {
      const handler = () => reset();
      window.addEventListener(event, handler, { passive: true });
      return { event, handler };
    });

    return () => {
      enabledRef.current = false;
      clearTimeout(timerRef.current);

      for (const { event, handler } of handlers) {
        window.removeEventListener(event, handler);
      }
    };
  }, [timeoutMs, reset]);

  return { reset };
}
