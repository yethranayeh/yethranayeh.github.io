import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MenuList, MenuListItem } from "react95";
import { useFloating } from "@floating-ui/react-dom";
import ClickAwayListener from "react-click-away-listener";

import PlayIcon from "pixelarticons/svg/play.svg?react";
import { Flex, Text } from "@/components/Styled";
import { SVGIcon } from "@/components/SVGIcon";

import styles from "./LanguageSelect.module.scss";

const languageDescriptionMap = {
	en: "English (United States)",
	de: "Deutsch",
	tr: "Türkçe"
};

export function LanguageSelect() {
	const { i18n } = useTranslation();
	const { refs, floatingStyles } = useFloating({
		placement: "bottom-end"
	});
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const languages = useRef(i18n.languages).current;

	return (
		<>
			<button ref={refs.setReference} className={styles.button} onClick={() => setIsMenuOpen(!isMenuOpen)}>
				{i18n.language}
			</button>
			{isMenuOpen && (
				<ClickAwayListener onClickAway={() => setIsMenuOpen(false)}>
					<MenuList ref={refs.setFloating} style={floatingStyles}>
						{languages.map((lang, index) => (
							<MenuListItem
								key={lang}
								onClick={() => {
									i18n.changeLanguage(lang);
									setIsMenuOpen(false);
								}}>
								<Flex gap={8} align='center'>
									<SVGIcon
										Icon={PlayIcon}
										style={{
											opacity: lang === i18n.language ? 1 : 0,
											marginRight: -8
										}}
									/>
									<Text light className={styles.languageAbbreviation}>
										{lang}
									</Text>
									<Text inheritColor>{languageDescriptionMap[lang as keyof typeof languageDescriptionMap]}</Text>
								</Flex>
							</MenuListItem>
						))}
					</MenuList>
				</ClickAwayListener>
			)}
		</>
	);
}
