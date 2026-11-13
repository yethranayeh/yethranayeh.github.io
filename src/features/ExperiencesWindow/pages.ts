import { experiences, experienceHref, experienceSrc, homeUrl } from "./experiences";

/**
 * A page is an address the browser can show. Everything the chrome does —
 * history, back/forward, the status bar, the address field — works on these,
 * never on slugs directly.
 */
export type Page = { kind: "home" } | { kind: "experience"; slug: string };

/** What the viewport renders for a page. */
export type PageContent = { type: "home" } | { type: "frame"; src: string; title: string };

export const homePage: Page = { kind: "home" };

export const pageKey = (page: Page) => (page.kind === "home" ? "home" : page.slug);

export const pageUrl = (page: Page) => (page.kind === "home" ? homeUrl : experienceHref(page.slug));

/** Empty for the home page — callers use the translated title there. */
export const pageTitle = (page: Page) =>
  page.kind === "home"
    ? ""
    : (experiences.find((item) => item.slug === page.slug)?.title ?? "Untitled");

/**
 * Every address this browser knows. Adding a page type later means adding an
 * entry and a `PageContent` case — the chrome never changes.
 */
const routes: Array<{ url: string; page: Page }> = [
  { url: homeUrl, page: homePage },
  ...experiences.map((item) => ({
    url: experienceHref(item.slug),
    page: { kind: "experience", slug: item.slug } as Page,
  })),
];

export function resolveUrl(raw: string): Page | null {
  const url = raw.trim();
  return routes.find((route) => route.url === url)?.page ?? null;
}

export function pageContent(page: Page): PageContent {
  if (page.kind === "home") {
    return { type: "home" };
  }
  return { type: "frame", src: experienceSrc(page.slug), title: pageTitle(page) };
}
