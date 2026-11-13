import manifest from "@/config/experiences.json";

export type Experience = {
  slug: string;
  title: string;
  credit: string | null;
  tags: Array<string>;
};

export const homeUrl = manifest.homeUrl;

export const baseUrl = manifest.baseUrl;

export const experiences: Array<Experience> = manifest.items;

export const experienceHref = (slug: string) => `${manifest.baseUrl}${slug}.html`;

export const experienceSrc = (slug: string) => `/experiences/${slug}/index.html`;

export const experienceBySlug = (slug: string) => experiences.find((item) => item.slug === slug);
