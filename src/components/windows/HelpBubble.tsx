import { Button } from "react95";
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
        <Button className={styles.dismissButton} onClick={onDismiss}>
          {t("windowHelp.dismiss")}
        </Button>
      </div>
    </div>
  );
}
