import { useEffect, useRef } from "react";
import { AudioButton } from "@/components/AudioButton";

import { useTranslation } from "react-i18next";

import styles from "./ClippyBubble.module.scss";

interface ClippyBubbleProps {
  text: string;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss: () => void;
  autoDismissMs?: number;
}

export function ClippyBubble({
  text,
  actionLabel,
  onAction,
  onDismiss,
  autoDismissMs = 8000,
}: ClippyBubbleProps) {
  const { t } = useTranslation("content");
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timerRef.current = setTimeout(onDismiss, autoDismissMs);
    return () => clearTimeout(timerRef.current);
  }, [autoDismissMs, onDismiss]);

  const handleInteraction = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  return (
    <div
      className={styles.bubble}
      onMouseEnter={handleInteraction}
      onMouseLeave={handleInteraction}
    >
      <p className={styles.text}>{text}</p>

      <div className={styles.actions}>
        {actionLabel && onAction && (
          <AudioButton size="sm" onClick={onAction}>
            {actionLabel}
          </AudioButton>
        )}

        <AudioButton size="sm" onClick={onDismiss}>
          {t("clippy.dismiss")}
        </AudioButton>
      </div>
    </div>
  );
}
