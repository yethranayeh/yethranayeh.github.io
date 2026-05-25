// https://codepen.io/jkantner/pen/oNPRMQY

import { useTranslation } from "react-i18next";

import { computer } from "@/lib/computer";

import styles from "./ButtonTurnOff.module.scss";

export function ButtonTurnOff() {
  const { t } = useTranslation("content");

  return (
    <button
      className={styles.button}
      type="button"
      title={t("login-screen.turn-off")}
      aria-label={t("login-screen.turn-off")}
      onClick={() => computer.shutdown()}
    >
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        aria-hidden="true"
      >
        <g fill="none" stroke="#fff">
          <polyline
            className={styles.part1}
            strokeWidth="3"
            points="12,7 12,17"
          />
          <circle
            className={styles.part2}
            cx="12"
            cy="12"
            r="9"
            strokeDasharray="56.549 56.549"
            strokeLinecap="square"
            strokeWidth="2"
            transform="rotate(-90,12,12)"
          />
        </g>
      </svg>
    </button>
  );
}
