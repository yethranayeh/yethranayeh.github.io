import { useEffect, useRef } from "react";
import { Button } from "react95";
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
          <Button size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        )}

        <Button size="sm" onClick={onDismiss}>
          {t("clippy.dismiss")}
        </Button>
      </div>
    </div>
  );
}
