import type { ComponentType, ReactNode, RefObject, SVGProps } from "react";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import ArrowLeft from "pixelarticons/svg/arrow-left.svg?react";
import ArrowRight from "pixelarticons/svg/arrow-right.svg?react";
import Folder from "pixelarticons/svg/folder.svg?react";
import Home from "pixelarticons/svg/home.svg?react";
import Print from "pixelarticons/svg/print.svg?react";
import Reload from "pixelarticons/svg/reload.svg?react";

import { experiences, experienceSrc } from "./experiences";
import { MenuBar } from "./MenuBar";

import type { MenuDef } from "./MenuBar";
import type { Navigator } from "./useNavigator";

import styles from "./Navigator.module.scss";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const asIcon = (icon: unknown) => icon as IconComponent;

function ToolButton({
  icon: Icon,
  label,
  disabled,
  onClick,
}: {
  icon: IconComponent;
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button type="button" className={styles.tool} disabled={disabled} onClick={onClick}>
      <Icon aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}

function OpenLock({ label }: { label: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      role="img"
      aria-label={label}
      style={{ shapeRendering: "crispEdges" }}
    >
      <path d="M3 6V3h2V2h3v1h1v3h-1V3H5v3z" fill="#848584" />
      <rect x="2" y="6" width="8" height="5" fill="#fefe03" stroke="#0a0a0a" strokeWidth="1" />
      <rect x="5" y="8" width="2" height="2" fill="#0a0a0a" />
    </svg>
  );
}

function Throbber({ loading }: { loading: boolean }) {
  return (
    <span className={styles.throbber} data-loading={loading ? "" : undefined} aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" style={{ shapeRendering: "crispEdges" }}>
        <circle cx="12" cy="12" r="11" fill="#2f8cff" />
        <path d="M2 7h6v3H5v2H2z" fill="#2fbf4a" />
        <path d="M13 3h5v2h2v3h-4V6h-3z" fill="#2fbf4a" />
        <path d="M7 14h4v3H9v4H6v-4h1z" fill="#2fbf4a" />
        <path d="M14 15h4v2h2v4h-6z" fill="#2fbf4a" />
        <circle cx="12" cy="12" r="11" fill="none" stroke="#0b2f66" strokeWidth="1" />
        <path d="M8 4h4v1H8z" fill="#bfe0ff" />
      </svg>
      <span className={styles.throbberSweep} />
    </span>
  );
}

interface NavigatorChromeProps {
  nav: Navigator;
  children: ReactNode;
  beforeViewport?: ReactNode;
  iframeRef?: RefObject<HTMLIFrameElement>;
  onClose?: () => void;
  sidebarOpen?: boolean;
  onToggleSidebar?: () => void;
}

export function NavigatorChrome({
  nav,
  children,
  beforeViewport,
  iframeRef,
  onClose,
  sidebarOpen,
  onToggleSidebar,
}: NavigatorChromeProps) {
  const { t } = useTranslation("content");
  const [hovered, setHovered] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = nav.url;
    setHovered(null);
  }, [nav.url]);

  const onHome = () => {
    setHovered(null);
    nav.home();
  };

  const currentPage = nav.page;
  const currentCredit =
    currentPage.kind === "experience"
      ? (experiences.find((item) => item.slug === currentPage.slug)?.credit ?? null)
      : null;

  const bookmarks = experiences.map((item) => ({
    label: item.title,
    onSelect: () => nav.navigate({ kind: "experience", slug: item.slug }),
  }));

  const menus: Array<MenuDef> = [
    {
      label: t("explorer.menu.file"),
      items: [
        {
          label: t("explorer.menuItem.openSource"),
          onSelect: () => {
            if (currentPage.kind === "experience") {
              window.open(experienceSrc(currentPage.slug), "_blank", "noopener,noreferrer");
            }
          },
          disabled: currentPage.kind === "home",
        },
        { separator: true },
        { label: t("explorer.menuItem.close"), onSelect: onClose, disabled: !onClose },
      ],
    },
    {
      label: t("explorer.menu.view"),
      items: [
        {
          label: t("explorer.menuItem.sidebar"),
          checked: sidebarOpen,
          onSelect: onToggleSidebar,
          disabled: !onToggleSidebar,
        },
        { separator: true },
        { label: t("explorer.menuItem.reload"), hint: "Ctrl+R", onSelect: nav.reload },
      ],
    },
    {
      label: t("explorer.menu.go"),
      items: [
        {
          label: t("explorer.menuItem.back"),
          hint: "Alt+←",
          onSelect: nav.back,
          disabled: !nav.canBack,
        },
        {
          label: t("explorer.menuItem.forward"),
          hint: "Alt+→",
          onSelect: nav.forward,
          disabled: !nav.canForward,
        },
        { separator: true },
        { label: t("explorer.menuItem.home"), onSelect: onHome },
      ],
    },
    {
      label: t("explorer.menu.bookmarks"),
      items: [
        { label: t("explorer.menuItem.addBookmark"), disabled: true },
        { separator: true },
        ...bookmarks,
      ],
    },
  ];

  return (
    <div className={styles.chrome}>
      <MenuBar menus={menus} />

      <div className={styles.toolbar}>
        <ToolButton
          icon={asIcon(ArrowLeft)}
          label={t("explorer.tool.back")}
          disabled={!nav.canBack}
          onClick={nav.back}
        />
        <ToolButton
          icon={asIcon(ArrowRight)}
          label={t("explorer.tool.forward")}
          disabled={!nav.canForward}
          onClick={nav.forward}
        />
        <ToolButton icon={asIcon(Home)} label={t("explorer.tool.home")} onClick={onHome} />
        <ToolButton icon={asIcon(Reload)} label={t("explorer.tool.reload")} onClick={nav.reload} />
        <span className={styles.toolDivider} />
        <ToolButton
          icon={asIcon(Folder)}
          label={t("explorer.tool.open")}
          disabled={nav.page.kind === "home"}
          onClick={() => {
            if (currentPage.kind === "experience") {
              window.open(experienceSrc(currentPage.slug), "_blank", "noopener,noreferrer");
            }
          }}
        />
        <ToolButton
          icon={asIcon(Print)}
          label={t("explorer.tool.print")}
          disabled={!iframeRef || nav.page.kind === "home"}
          onClick={() => iframeRef?.current?.contentWindow?.print()}
        />
      </div>

      <div className={styles.locationRow}>
        <span className={styles.locationLabel}>{t("explorer.location")}:</span>
        <input
          ref={inputRef}
          className={styles.locationField}
          defaultValue={nav.url}
          aria-label={t("explorer.location")}
          spellCheck={false}
          onKeyDown={(event) => {
            if (event.key !== "Enter") return;
            const handled = nav.goToUrl(event.currentTarget.value);
            if (!handled) event.currentTarget.value = nav.url;
          }}
        />
        <Throbber loading={nav.status === "loading"} />
      </div>

      {beforeViewport}

      <div
        className={styles.viewport}
        onMouseOver={(event) => {
          const anchor = (event.target as HTMLElement).closest("a[data-href]");
          if (anchor) setHovered(anchor.getAttribute("data-href"));
        }}
        onMouseOut={(event) => {
          if ((event.target as HTMLElement).closest("a[data-href]")) setHovered(null);
        }}
      >
        {children}
      </div>

      <div className={styles.status}>
        <span className={`${styles.statusCell} ${styles.statusMessage}`} role="status">
          {hovered ?? t(nav.message.key, nav.message.params)}
        </span>
        <span className={`${styles.statusCell} ${styles.statusCredit}`}>
          {currentCredit ? t("explorer.credit", { name: currentCredit }) : " "}
        </span>
        <span className={`${styles.statusCell} ${styles.statusSecurity}`}>
          <OpenLock label={t("explorer.status.insecure")} />
        </span>
      </div>
    </div>
  );
}

export { Throbber };
