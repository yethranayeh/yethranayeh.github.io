import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "react95";

export function LanguageSelect() {
	const { i18n } = useTranslation();

	const languages = useRef(i18n.languages).current;
	const selectedLanguage = languages.indexOf(i18n.language);

	const languageOptions = languages.map((lang, index) => ({ label: `🌐 ${lang.toUpperCase()}`, value: index }));

	return (
		<Select
			defaultValue={selectedLanguage}
			options={languageOptions}
			menuMaxHeight={160}
			width={110}
			onChange={(selected) => i18n.changeLanguage(languages[selected.value])}
		/>
	);
}
