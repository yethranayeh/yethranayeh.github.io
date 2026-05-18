// https://codepen.io/Jemimaabu/pen/BaOLPby
// TODO: Add easter eggs — hidden interactions (e.g. rapid clicks, secret combos) trigger surprise animations or hidden content
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAtomValue, useStore } from "jotai";
import { useTranslation } from "react-i18next";

import { addWindowAtom, windowsAtom } from "@/stores/window.atom";
import { tips } from "@/config/clippyTips";

import { ClippyBubble } from "./ClippyBubble";
import styles from "./Clippy.module.scss";

const initialRenderDelay = 1000;
const idleThresholdMs = 30_000;

type ClippyStateObj<T> = Record<T extends string ? T : string, { src: string; duration: number }>;
type TransitionState = "stationary" | "bikeIn" | "bikeOut";
type CycleState = "atom" | "dozing" | "laze" | "music" | "grinder" | "tapping" | "thinking";

const transitionState: ClippyStateObj<TransitionState> = {
  stationary: { src: "/clippy/stationary.gif", duration: 4000 },
  bikeIn: { src: "/clippy/bike_in.gif", duration: 3500 },
  bikeOut: { src: "/clippy/bike_out.gif", duration: 4000 },
};
const cycleState: ClippyStateObj<CycleState> = {
  atom: { src: "/clippy/atom.gif", duration: 4500 },
  dozing: { src: "/clippy/dozing.gif", duration: 7500 },
  laze: { src: "/clippy/laze.gif", duration: 13800 },
  music: { src: "/clippy/listening_music.gif", duration: 5400 },
  grinder: { src: "/clippy/grinder.gif", duration: 8400 },
  tapping: { src: "/clippy/tapping_screen.gif", duration: 2500 },
  thinking: { src: "/clippy/thinking.gif", duration: 1900 },
};

function getRandomClippyState() {
  const stateKeys = Object.keys(cycleState) as Array<CycleState>;
  const selectedKey = stateKeys[Math.floor(Math.random() * stateKeys.length)];
  return cycleState[selectedKey];
}

export function Clippy() {
  const { t } = useTranslation("content");
  const store = useStore();
  const openWindows = useAtomValue(windowsAtom);
  const openWindowIds = openWindows.map((w) => w.id);

  const [shouldRender, setShouldRender] = useState(false);
  const [stateCounter, setStateCounter] = useState(-1);
  const [currentState, setCurrentState] = useState<(typeof cycleState)[keyof typeof cycleState]>(
    transitionState.bikeIn,
  );
  const [isHovered, setIsHovered] = useState(false);
  const [lastShownTimes, setLastShownTimes] = useState<Map<string, number>>(new Map());
  const [activeTipId, setActiveTipId] = useState<string | null>(null);
  const [isIdle, setIsIdle] = useState(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const isTransitioning =
    currentState.src === transitionState.bikeIn.src ||
    currentState.src === transitionState.bikeOut.src;
  const isBubbleVisible = activeTipId !== null;

  const resetIdleTimer = useCallback(() => {
    setIsIdle(false);
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => setIsIdle(true), idleThresholdMs);
  }, []);

  useEffect(() => {
    resetIdleTimer();
    const events = ["mousedown", "keydown", "touchstart", "scroll"];
    events.forEach((e) => window.addEventListener(e, resetIdleTimer, { passive: true }));
    return () => {
      events.forEach((e) => window.removeEventListener(e, resetIdleTimer));
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, [resetIdleTimer]);

  const selectTip = useCallback(() => {
    const now = Date.now();
    const matchingTips = tips.filter((tip) => {
      if (tip.id === "idle" && !isIdle) {
        return false;
      }

      if (!tip.context(openWindowIds)) {
        return false;
      }

      const lastShown = lastShownTimes.get(tip.id);
      if (lastShown && now - lastShown < tip.cooldownMs) {
        return false;
      }

      return true;
    });

    if (matchingTips.length === 0) {
      return;
    }

    const priorityOrder = [
      "first-visit",
      "no-windows",
      "resume-open",
      "projects-open",
      "apps-open",
      "help-open",
      "idle",
    ];
    const sorted = matchingTips.sort(
      (a, b) => priorityOrder.indexOf(a.id) - priorityOrder.indexOf(b.id),
    );
    return sorted[0];
  }, [openWindowIds, lastShownTimes, isIdle]);

  useEffect(() => {
    if (!shouldRender || isBubbleVisible) {
      return;
    }

    const tip = selectTip();
    if (tip) {
      setActiveTipId(tip.id);
    }
  }, [shouldRender, openWindowIds, isIdle, selectTip, isBubbleVisible]);

  useLayoutEffect(() => {
    const timeout = setTimeout(() => setShouldRender(true), initialRenderDelay);
    return () => clearTimeout(timeout);
  }, []);

  useLayoutEffect(() => {
    const timeout = setTimeout(
      () => setCurrentState(transitionState.stationary),
      transitionState.bikeIn.duration,
    );
    if (!shouldRender) {
      clearTimeout(timeout);
    }
    return () => clearTimeout(timeout);
  }, [shouldRender]);

  useLayoutEffect(() => {
    const isCounterOdd = stateCounter % 2 !== 0;
    const randomState = getRandomClippyState();
    const timeout = setTimeout(() => {
      setCurrentState(isCounterOdd ? transitionState.stationary : randomState);
      setStateCounter((prev) => prev + 1);
    }, currentState.duration);

    if (!shouldRender) {
      clearTimeout(timeout);
    }
    return () => clearTimeout(timeout);
  }, [stateCounter, currentState, shouldRender]);

  const handleDismiss = useCallback(() => {
    if (activeTipId) {
      setLastShownTimes((prev) => new Map(prev).set(activeTipId, Date.now()));
    }
    setActiveTipId(null);
  }, [activeTipId]);

  const handleAction = useCallback(() => {
    const tip = tips.find((t) => t.id === activeTipId);
    if (tip?.actionWindow) {
      store.set(addWindowAtom, tip.actionWindow);
    }

    handleDismiss();
  }, [activeTipId, store, handleDismiss]);

  if (!shouldRender) return null;

  const activeTip = tips.find((t) => t.id === activeTipId);

  return (
    <div className={styles.container}>
      {isBubbleVisible && activeTip && (
        <ClippyBubble
          text={t(activeTip.i18nKey)}
          actionLabel={activeTip.actionLabelI18nKey ? t(activeTip.actionLabelI18nKey) : undefined}
          onAction={activeTip.actionWindow ? handleAction : undefined}
          onDismiss={handleDismiss}
        />
      )}

      {!isBubbleVisible && isHovered && (
        <span className={styles.tooltip}>{t("clippy.greeting")}</span>
      )}

      <img
        src={
          isBubbleVisible
            ? "/clippy/stationary.gif"
            : isHovered
              ? "/clippy/looking_down.gif"
              : currentState.src
        }
        className={styles.clippy}
        title="Clippy"
        alt="Microsoft Clippy animation"
        onMouseEnter={() => !isTransitioning && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => !isTransitioning && setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      />
    </div>
  );
}
