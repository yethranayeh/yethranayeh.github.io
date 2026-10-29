import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import ClickAwayListener from "react-click-away-listener";
import { useTranslation } from "react-i18next";
import styles from "./TerminalWindow.module.scss";

type Action = { label: string; run: () => void; disabled?: boolean; shortcut?: string };

export function TerminalMenu({
  busy,
  hasTranscript,
  onUpload,
  onSave,
  onView,
  onCopy,
  onClear,
  onClose,
  onHelp,
}: {
  busy: boolean;
  hasTranscript: boolean;
  onUpload: () => void;
  onSave: () => void;
  onView: () => void;
  onCopy: () => void;
  onClear: () => void;
  onClose: () => void;
  onHelp: () => void;
}) {
  const { t } = useTranslation("content");
  const [open, setOpen] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const menus: { label: string; items: Action[] }[] = [
    {
      label: t("terminal.file"),
      items: [
        { label: t("terminal.uploadFile"), run: onUpload, disabled: busy },
        { label: t("terminal.viewTranscript"), run: onView, disabled: !hasTranscript },
        { label: t("terminal.saveTranscript"), run: onSave, disabled: !hasTranscript },
        { label: t("terminal.close"), run: onClose },
      ],
    },
    {
      label: t("terminal.edit"),
      items: [
        { label: t("terminal.copyTranscript"), run: onCopy, disabled: !hasTranscript },
        { label: t("terminal.clearScreen"), run: onClear, disabled: busy, shortcut: "Ctrl+L" },
      ],
    },
    {
      label: t("terminal.help"),
      items: [{ label: t("terminal.commandReference"), run: onHelp, disabled: busy }],
    },
  ];

  useEffect(() => {
    if (open !== null)
      rootRef.current
        ?.querySelector<HTMLButtonElement>('[role="menu"] [role="menuitem"]:not(:disabled)')
        ?.focus();
  }, [open]);

  function focusTrigger(index: number) {
    rootRef.current?.querySelectorAll<HTMLButtonElement>('[aria-haspopup="menu"]')[index]?.focus();
  }

  function navigate(event: KeyboardEvent, index: number) {
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(null);
      focusTrigger(index);
    } else if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      const next = (index + (event.key === "ArrowRight" ? 1 : menus.length - 1)) % menus.length;
      if (open !== null) setOpen(next);
      else focusTrigger(next);
    } else if (event.key === "Tab") setOpen(null);
    else if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      if (open === null) {
        setOpen(index);
        return;
      }
      const items = Array.from(
        rootRef.current?.querySelectorAll<HTMLButtonElement>(
          '[role="menu"] [role="menuitem"]:not(:disabled)',
        ) ?? [],
      );
      if (!items.length) return;
      const current = items.indexOf(document.activeElement as HTMLButtonElement);
      const next =
        event.key === "Home"
          ? 0
          : event.key === "End"
            ? items.length - 1
            : (current + (event.key === "ArrowUp" ? items.length - 1 : 1)) % items.length;
      items[next]?.focus();
    }
  }

  return (
    <ClickAwayListener onClickAway={() => setOpen(null)}>
      <div ref={rootRef} className={styles.menuBar} role="menubar" aria-label={t("terminal.menu")}>
        {menus.map((menu, index) => (
          <div
            key={menu.label}
            className={styles.menuGroup}
            onKeyDown={(event) => navigate(event, index)}
          >
            <button
              type="button"
              className={styles.menuTrigger}
              role="menuitem"
              aria-haspopup="menu"
              aria-expanded={open === index}
              aria-controls={`terminal-menu-${index}`}
              onClick={() => setOpen(open === index ? null : index)}
            >
              {menu.label}
            </button>
            {open === index && (
              <div
                className={styles.menuPopup}
                role="menu"
                id={`terminal-menu-${index}`}
                aria-label={menu.label}
              >
                {menu.items.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    role="menuitem"
                    disabled={item.disabled}
                    onClick={() => {
                      setOpen(null);
                      item.run();
                    }}
                  >
                    <span>{item.label}</span>
                    {item.shortcut && <kbd>{item.shortcut}</kbd>}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </ClickAwayListener>
  );
}
