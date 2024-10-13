import type { InitOptions } from "i18next";

import { Language } from "./languages";

import general_tr from "./tr/general.json";
import content_tr from "./tr/content.json";
import menu_tr from "./tr/menu.json";

import general_en from "./en/general.json";
import content_en from "./en/content.json";
import menu_en from "./en/menu.json";

const namespaces = ["general", "menu", "content"] as const;

export const defaultNS = namespaces[0];

type I18nResources = Record<Language, Record<(typeof namespaces)[number], any>>;
export const resources: I18nResources = {
	tr: {
		general: general_tr,
		content: content_tr,
		menu: menu_tr
	},
	en: {
		general: general_en,
		content: content_en,
		menu: menu_en
	}
} as const;

export const i18n_options: InitOptions = {
	lng: Language.TURKISH,
	fallbackLng: Object.values(Language),
	debug: import.meta.env.DEV,
	resources,
	ns: namespaces,
	defaultNS
};
