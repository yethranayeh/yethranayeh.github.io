import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { experiences } from "./experiences";
import type { Navigator } from "./useNavigator";

import styles from "./Navigator.module.scss";

const GAP = 2;
const MORE_WIDTH = 24;
const BAR_PADDING = 6;
const SAFETY = 2;

export function LinksBar({ nav }: { nav: Navigator }) {
  const { t } = useTranslation("content");
  const barRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(experiences.length);
  const [open, setOpen] = useState(false);

  const measure = useCallback(() => {
    const bar = barRef.current;
    const row = measureRef.current;
    const label = labelRef.current;
    if (!bar || !row || !label) return;

    const items = Array.from(row.children) as Array<HTMLElement>;
    const available = bar.clientWidth - label.offsetWidth - BAR_PADDING - SAFETY;

    const fit = (budget: number) => {
      let total = 0;
      for (let index = 0; index < items.length; index += 1) {
        total += items[index].offsetWidth + GAP;
        if (total > budget) return index;
      }
      return items.length;
    };

    const all = fit(available);
    const count = all === items.length ? all : fit(available - MORE_WIDTH - GAP);
    setVisibleCount((current) => (current === count ? current : count));
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const observer = new ResizeObserver(measure);
    observer.observe(bar);
    document.fonts?.ready.then(measure).catch(() => {});

    return () => observer.disconnect();
  }, [measure]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!barRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const hidden = experiences.slice(visibleCount);

  return (
    <div className={styles.linksBar} ref={barRef}>
      <span className={styles.linksLabel} ref={labelRef}>
        {t("explorer.links")}
      </span>

      <div className={styles.linksItems}>
        {experiences.slice(0, visibleCount).map((item) => (
          <button
            key={item.slug}
            type="button"
            className={styles.linksItem}
            title={t(`explorer.blurbs.${item.slug}`)}
            data-active={
              nav.page.kind === "experience" && nav.page.slug === item.slug ? "" : undefined
            }
            onClick={() => nav.navigate({ kind: "experience", slug: item.slug })}
          >
            <img src="/icon/internet_document.ico" width={12} height={12} alt="" />
            {item.title}
          </button>
        ))}
      </div>

      {hidden.length > 0 && (
        <button
          type="button"
          className={styles.linksMore}
          aria-label={t("explorer.moreLinks", { count: hidden.length })}
          aria-expanded={open}
          data-open={open ? "" : undefined}
          onClick={() => setOpen((value) => !value)}
        >
          »
        </button>
      )}

      {open && hidden.length > 0 && (
        <div className={styles.linksMenu} role="menu">
          {hidden.map((item) => (
            <button
              key={item.slug}
              type="button"
              role="menuitem"
              className={styles.linksMenuItem}
              onClick={() => {
                setOpen(false);
                nav.navigate({ kind: "experience", slug: item.slug });
              }}
            >
              <img src="/icon/internet_document.ico" width={12} height={12} alt="" />
              {item.title}
            </button>
          ))}
        </div>
      )}

      <div className={styles.linksMeasure} ref={measureRef} aria-hidden="true">
        {experiences.map((item) => (
          <button key={item.slug} type="button" className={styles.linksItem} tabIndex={-1}>
            <img src="/icon/internet_document.ico" width={12} height={12} alt="" />
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
