import { useTranslation } from "react-i18next";

import { experiences } from "./experiences";
import { homePage, pageKey } from "./pages";
import type { Page } from "./pages";
import type { Navigator } from "./useNavigator";

import styles from "./Navigator.module.scss";

interface SidebarProps {
  nav: Navigator;
}

export function Sidebar({ nav }: SidebarProps) {
  const { t } = useTranslation("content");
  const rows: Array<{ page: Page; label: string; icon: string }> = [
    { page: homePage, label: t("explorer.homePage"), icon: "/icon/internet_explorer.ico" },
    ...experiences.map((item) => ({
      page: { kind: "experience", slug: item.slug } as Page,
      label: item.title,
      icon: "/icon/internet_document.ico",
    })),
  ];

  return (
    <div className={styles.indexPane}>
      <div className={styles.indexList}>
        {rows.map((row) => (
          <button
            key={row.label}
            type="button"
            className={styles.indexRow}
            data-active={pageKey(nav.page) === pageKey(row.page) ? "" : undefined}
            onClick={() => nav.navigate(row.page)}
          >
            <img src={row.icon} width={16} height={16} alt="" />
            <span>{row.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
