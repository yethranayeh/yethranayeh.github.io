import type { InitOptions } from "i18next";

import { Language } from "./languages";

import general_en from "./en/general.json";
import content_en from "./en/content.json";
import menu_en from "./en/menu.json";

import general_tr from "./tr/general.json";
import content_tr from "./tr/content.json";
import menu_tr from "./tr/menu.json";

import general_de from "./de/general.json";
import content_de from "./de/content.json";
import menu_de from "./de/menu.json";

const namespaces = ["general", "menu", "content"] as const;

export const defaultNS = namespaces[0];

type I18nResources = Record<Language, Record<(typeof namespaces)[number], any>>;
export const resources: I18nResources = {
	en: {
		general: general_en,
		content: content_en,
		menu: menu_en
	},
	de: {
		general: general_de,
		content: content_de,
		menu: menu_de
	},
	tr: {
		general: general_tr,
		content: content_tr,
		menu: menu_tr
	}
} as const;

export const i18n_options: InitOptions = {
	lng: Language.ENGLISH,
	fallbackLng: Object.values(Language),
	debug: import.meta.env.DEV,
	resources,
	ns: namespaces,
	defaultNS
};
