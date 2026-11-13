import { useEffect, useRef, useState } from "react";

import styles from "./Navigator.module.scss";

export type MenuItem = {
  label?: string;
  hint?: string;
  onSelect?: () => void;
  disabled?: boolean;
  separator?: boolean;
  checked?: boolean;
};

export type MenuDef = {
  label: string;
  items: Array<MenuItem>;
};

export function MenuBar({ menus }: { menus: Array<MenuDef> }) {
  const [open, setOpen] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open === null) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(null);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={styles.menuBar} ref={rootRef} role="menubar">
      {menus.map((menu, index) => (
        <div className={styles.menuRoot} key={menu.label}>
          <button
            type="button"
            role="menuitem"
            aria-haspopup="true"
            aria-expanded={open === index}
            className={styles.menuLabel}
            data-open={open === index ? "" : undefined}
            onClick={() => setOpen((current) => (current === index ? null : index))}
            onMouseEnter={() => {
              if (open !== null && open !== index) setOpen(index);
            }}
          >
            <u>{menu.label[0]}</u>
            {menu.label.slice(1)}
          </button>

          {open === index && (
            <div className={styles.menu} role="menu">
              {menu.items.map((item, itemIndex) =>
                item.separator ? (
                  <div key={`sep-${itemIndex}`} className={styles.menuSeparator} role="separator" />
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    role="menuitem"
                    className={styles.menuItem}
                    data-checked={item.checked ? "" : undefined}
                    disabled={item.disabled}
                    onClick={() => {
                      setOpen(null);
                      item.onSelect?.();
                    }}
                  >
                    <span>{item.label}</span>
                    {item.hint && <span className={styles.menuHint}>{item.hint}</span>}
                  </button>
                ),
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
