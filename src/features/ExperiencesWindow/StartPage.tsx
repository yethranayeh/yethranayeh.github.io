import type { MouseEvent } from "react";

import { useTranslation } from "react-i18next";

import { experiences, experienceHref } from "./experiences";

import styles from "./StartPage.module.scss";

interface StartPageProps {
  onOpen: (slug: string) => void;
}

export function StartPage({ onOpen }: StartPageProps) {
  const { t } = useTranslation("content");

  const follow = (slug: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onOpen(slug);
  };

  const featured = experiences[0];
  const blurb = (slug: string) => t(`explorer.blurbs.${slug}`);

  return (
    <article className={styles.page}>
      <div className={styles.inner}>
        <h1>{t("explorer.home.title")}</h1>
        <p className={styles.tagline}>{t("explorer.home.tagline")}</p>
        <p className={styles.small}>{t("explorer.home.updated")}</p>

        <hr />

        {featured && (
          <p className={styles.newLine}>
            <span className={styles.badge}>{t("explorer.home.new")}</span>
            <a
              href={experienceHref(featured.slug)}
              data-href={experienceHref(featured.slug)}
              onClick={follow(featured.slug)}
            >
              {featured.title}
            </a>{" "}
            — {blurb(featured.slug)}
          </p>
        )}

        <h2>{t("explorer.home.experiments")}</h2>
        <p className={styles.small}>{t("explorer.home.intro")}</p>

        <ul>
          {experiences.map((item) => (
            <li key={item.slug}>
              <a
                href={experienceHref(item.slug)}
                data-href={experienceHref(item.slug)}
                onClick={follow(item.slug)}
              >
                {item.title}
              </a>{" "}
              <span className={styles.blurb}>— {blurb(item.slug)}</span>{" "}
              {item.credit && (
                <span className={styles.credit}>
                  ({t("explorer.credit", { name: item.credit })})
                </span>
              )}
            </li>
          ))}
        </ul>

        <h2>{t("explorer.home.about")}</h2>
        <p style={{ margin: 0 }}>{t("explorer.home.aboutBody")}</p>

        <div className={styles.footer}>
          <p className={styles.small}>
            {t("explorer.home.visitor")} <span className={styles.counter}>000314</span>
          </p>
          <p className={styles.small}>{t("explorer.home.bestViewed")}</p>
          <p className={styles.address}>~alper/experiences/</p>
        </div>
      </div>
    </article>
  );
}
