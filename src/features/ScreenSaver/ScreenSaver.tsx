import { useEffect, useCallback, useRef, useState } from "react";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

import { isScreensaverActiveAtom } from "@/stores/screensaver.atom";

import styles from "./ScreenSaver.module.scss";

const ORIGINAL_TITLE = document.title;
const HINT_VISIBLE_MS = 3000;

export function ScreenSaver() {
  const { t } = useTranslation("content");
  const [, setActive] = useAtom(isScreensaverActiveAtom);
  const [hintVisible, setHintVisible] = useState(true);
  const hintTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const dismiss = useCallback(() => {
    setActive(false);
  }, [setActive]);

  const showHint = useCallback(() => {
    setHintVisible(true);
    clearTimeout(hintTimerRef.current);
    hintTimerRef.current = setTimeout(() => setHintVisible(false), HINT_VISIBLE_MS);
  }, []);

  useEffect(() => {
    document.title = "Screensaver";

    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      dismiss();
    };

    const handleMouseMove = () => showHint();

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.title = ORIGINAL_TITLE;
      clearTimeout(hintTimerRef.current);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dismiss, showHint]);

  return (
    <div className={styles.overlay} onClick={dismiss}>
      <video
        className={styles.video}
        src="/video/screensaver.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <span className={clsx(styles.hint, !hintVisible && styles.hidden)}>
        {t("screensaver.dismissHint")}
      </span>
    </div>
  );
}
