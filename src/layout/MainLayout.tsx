import { Outlet } from "react-router-dom";
import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { useAtom } from "jotai";

import { getRandomIntRange } from "@/utils/getRandomIntRange";
import { setBodyLoadingState } from "@/utils/setBodyLoadingState";
import { useAssetPreload } from "@/hooks/useAssetPreload";
import { useIdleTimer } from "@/hooks/useIdleTimer";
import { startMenuIcons } from "@/config/startMenu";
import { preloadLightWindowContent } from "@/config/windowContent";
import { isScreensaverActiveAtom } from "@/stores/screensaver.atom";

import { Navbar } from "./components/Navbar";
import { LoadingScreen } from "./components/LoadingScreen";
import { Clippy } from "./components/Clippy";
import { WindowsOutlet } from "./components/WindowsOutlet";
import DesktopOutlet from "./components/DesktopOutlet";
import { Loader } from "@/components/Loader";

import { AuthContext } from "@/context/AuthContext";
import { isLoggedOutKey } from "@/config/storage";

import styles from "./MainLayout.module.scss";

const isDevMode = import.meta.env.DEV;

const LoginPage = lazy(() =>
  import("@/features/LoginPage/LoginPage").then((module) => ({ default: module.LoginPage })),
);
const ScreenSaver = lazy(() =>
  import("@/features/ScreenSaver/ScreenSaver").then((module) => ({
    default: module.ScreenSaver,
  })),
);

const isLoggedInStorageVal = localStorage.getItem(isLoggedOutKey) !== "true";

type ConnectionHint = { saveData?: boolean; effectiveType?: string };

function connectionHint() {
  return (navigator as Navigator & { connection?: ConnectionHint }).connection;
}

const loadingTimeMultiplier = isLoggedInStorageVal ? 1 : 0.6;
const loadingTime = isDevMode
  ? 0
  : getRandomIntRange(2500 * loadingTimeMultiplier, 4000 * loadingTimeMultiplier);

// TODO: refactor loading screen handling
export default function MainLayout() {
  const [loading, setLoading] = useState(!isDevMode);
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInStorageVal);
  const [isScreensaverActive, setScreensaverActive] = useAtom(isScreensaverActiveAtom);

  useAssetPreload(Object.values(startMenuIcons));

  useIdleTimer(30_000, () => {
    setScreensaverActive(true);
  });

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setScreensaverActive(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [setScreensaverActive]);

  // Warm the light window chunks while the loading screen holds the visitor.
  // Everything else on the open path is render work, which no prefetch can move.
  useEffect(() => {
    if (!isLoggedIn) return;

    const connection = connectionHint();
    if (connection?.saveData) return;

    const isSlowLink =
      connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g";
    if (isSlowLink) {
      const events = ["pointerdown", "keydown"] as const;
      const warm = () => {
        events.forEach((event) => window.removeEventListener(event, warm));
        void preloadLightWindowContent();
      };
      events.forEach((event) =>
        window.addEventListener(event, warm, { once: true, passive: true }),
      );
      return () => events.forEach((event) => window.removeEventListener(event, warm));
    }

    void preloadLightWindowContent();
  }, [isLoggedIn]);

  const authContextValue = useMemo(
    () => ({ isLoggedIn, setIsLoggedIn }),
    [isLoggedIn, setIsLoggedIn],
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      if (isLoggedIn) setBodyLoadingState("false");
    }, loadingTime);

    return () => clearTimeout(timeout);
  }, [isLoggedIn]);

  if (loading) {
    return (
      <div className={styles.container}>
        <LoadingScreen />
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <AuthContext.Provider value={authContextValue}>
        <Suspense fallback={null}>
          <LoginPage />
        </Suspense>
      </AuthContext.Provider>
    );
  }

  return (
    <div className={[styles.container, styles.fadeIn].join(" ")}>
      <AuthContext.Provider value={authContextValue}>
        <Navbar />
      </AuthContext.Provider>

      <main className={styles.main}>
        <DesktopOutlet />

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>

        <WindowsOutlet />
        <Clippy />
      </main>

      {!isDevMode && isScreensaverActive && (
        <Suspense fallback={null}>
          <ScreenSaver />
        </Suspense>
      )}
    </div>
  );
}
