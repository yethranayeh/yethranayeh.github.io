import type { SelectVariants } from "react95/dist/Select/Select.types";

import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "react95";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import styles from "./LanguageSelect.module.scss";

export function LanguageSelect({ variant }: { variant?: SelectVariants }) {
	const { i18n } = useTranslation();
	const biggerThanSm = useMediaQuery("sm");

	const languages = useRef(i18n.languages).current;
	const selectedLanguage = languages.indexOf(i18n.language);

	const languageOptions = languages.map((lang, index) => ({
		label: `${biggerThanSm ? "🌐 " : ""}${lang.toUpperCase()}`,
		value: index
	}));

	return (
		<Select
			variant={variant}
			defaultValue={selectedLanguage}
			options={languageOptions}
			menuMaxHeight={90}
			onChange={(selected) => i18n.changeLanguage(languages[selected.value])}
			className={styles.container}
		/>
	);
}
