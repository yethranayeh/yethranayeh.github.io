import { AudioButton } from "@/components/AudioButton";

import { useTranslation } from "react-i18next";

import styles from "./HelpBubble.module.scss";

interface HelpBubbleProps {
  text: string;
  onDismiss: () => void;
}

export function HelpBubble({ text, onDismiss }: HelpBubbleProps) {
  const { t } = useTranslation("content");

  return (
    <div className={styles.bubble}>
      <p className={styles.text}>{text}</p>

      <div className={styles.actions}>
        <AudioButton className={styles.dismissButton} onClick={onDismiss}>
          {t("windowHelp.dismiss")}
        </AudioButton>
      </div>
    </div>
  );
}
