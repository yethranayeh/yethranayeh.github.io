import { useCallback, useEffect, useRef, useState } from "react";

import { pageKey, pageUrl, resolveUrl } from "./pages";
import type { Page } from "./pages";

import { homeUrl } from "./experiences";

export type StatusMessage = { key: string; params?: Record<string, unknown> };

type Status = "idle" | "loading";

const transferMessage = (): StatusMessage => ({
  key: "explorer.status.transferring",
  params: { host: new URL(homeUrl).host },
});

export function useNavigator(initial: Page, trail: Array<Page> = []) {
  const [entries, setEntries] = useState<Array<Page>>(() => [...trail, initial]);
  const [index, setIndex] = useState(trail.length);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<StatusMessage>({ key: "explorer.status.done" });
  const [loadId, setLoadId] = useState(0);

  const startedAt = useRef<number>(0);
  const consumed = useRef<number>(-1);

  useEffect(() => {
    startedAt.current = performance.now();
  }, []);

  const page = entries[index] ?? initial;

  const startLoad = useCallback((next: Page) => {
    startedAt.current = performance.now();
    setLoadId((id) => id + 1);
    setStatus(next.kind === "home" ? "idle" : "loading");
    setMessage(next.kind === "home" ? { key: "explorer.status.done" } : transferMessage());
  }, []);

  const navigate = useCallback(
    (next: Page) => {
      const current = entries[index];
      if (current && pageKey(current) === pageKey(next)) {
        startLoad(next);
        return;
      }
      const updated = [...entries.slice(0, index + 1), next];
      setEntries(updated);
      setIndex(updated.length - 1);
      startLoad(next);
    },
    [entries, index, startLoad],
  );

  const go = useCallback(
    (nextIndex: number) => {
      const target = entries[nextIndex];
      if (!target) return;
      setIndex(nextIndex);
      startLoad(target);
    },
    [entries, startLoad],
  );

  const back = useCallback(() => go(index - 1), [go, index]);
  const forward = useCallback(() => go(index + 1), [go, index]);
  const home = useCallback(() => navigate({ kind: "home" }), [navigate]);

  const reload = useCallback(() => {
    startedAt.current = performance.now();
    setLoadId((id) => id + 1);
    setStatus(page.kind === "home" ? "idle" : "loading");
    setMessage(page.kind === "home" ? { key: "explorer.status.done" } : transferMessage());
  }, [page]);

  const reject = useCallback(() => {
    setStatus("idle");
    setMessage({ key: "explorer.status.notFound" });
  }, []);

  /** Called by the iframe. Ignores stale loads after Back/Forward/Reload. */
  const markLoaded = useCallback(
    (id: number) => {
      if (id !== loadId || id === consumed.current) return;
      consumed.current = id;
      const secs = ((performance.now() - startedAt.current) / 1000).toFixed(2);
      setStatus("idle");
      setMessage({ key: "explorer.status.doneTime", params: { secs } });
    },
    [loadId],
  );

  const goToUrl = useCallback(
    (raw: string) => {
      const target = resolveUrl(raw);
      if (target) {
        if (pageKey(target) === pageKey(page)) {
          reload();
        } else {
          navigate(target);
        }
        return true;
      }
      reject();
      return false;
    },
    [navigate, page, reject, reload],
  );

  return {
    page,
    entries,
    index,
    status,
    message,
    loadId,
    canBack: index > 0,
    canForward: index < entries.length - 1,
    navigate,
    back,
    forward,
    home,
    reload,
    markLoaded,
    goToUrl,
    url: pageUrl(page),
  };
}

export type Navigator = ReturnType<typeof useNavigator>;
