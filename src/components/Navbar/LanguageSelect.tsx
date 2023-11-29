import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "react95";

import styles from "./LanguageSelect.module.scss";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function LanguageSelect() {
	const { i18n } = useTranslation();
	const biggerThanSm = useMediaQuery("sm");

	const languages = useRef(i18n.languages).current;
	const selectedLanguage = languages.indexOf(i18n.language);

	const languageOptions = languages.map((lang, index) => ({
		label: `${biggerThanSm ? "🌐" : ""}${lang.toUpperCase()}`,
		value: index
	}));

	return (
		<Select
			defaultValue={selectedLanguage}
			options={languageOptions}
			menuMaxHeight={90}
			onChange={(selected) => i18n.changeLanguage(languages[selected.value])}
			className={styles.container}
		/>
	);
}
