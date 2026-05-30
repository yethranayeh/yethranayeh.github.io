import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ClickAwayListener from "react-click-away-listener";
import { MenuList, MenuListItem, Separator } from "react95";
import { useFloating } from "@floating-ui/react-dom";

import BatteryCharging from "pixelarticons/svg/battery-charging.svg?react";
import BatteryFull from "pixelarticons/svg/battery-full.svg?react";
import BatteryHalf from "pixelarticons/svg/battery-2.svg?react";
import BatteryQuarter from "pixelarticons/svg/battery-1.svg?react";
import MoreHorizontal from "pixelarticons/svg/more-horizontal.svg?react";
import PlayIcon from "pixelarticons/svg/play.svg?react";

import { Flex, Text } from "@/components/Styled";
import { ImgIcon } from "@/components/ImgIcon";
import { SVGIcon } from "@/components/SVGIcon";
import { soundAtom } from "@/stores/soundAtom";

import styles from "./MobileOverflowMenu.module.scss";

type BatteryManager = {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  onchargingchange: (() => void) | null;
  onchargingtimechange: (() => void) | null;
  ondischargingtimechange: (() => void) | null;
  onlevelchange: (() => void) | null;
};

type Battery = { charging: boolean; percent: number };

const languageDescriptionMap = {
  en: "English (US)",
  de: "Deutsch",
  tr: "Türkçe",
};

const getBatteryIcon = (charge: number) => {
  if (charge >= 75) return BatteryFull;
  if (charge >= 25) return BatteryHalf;
  return BatteryQuarter;
};

export function MobileOverflowMenu() {
  const { t, i18n } = useTranslation();
  const [sound, setSound] = useAtom(soundAtom);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [battery, setBattery] = useState<Battery | null>(null);
  const { refs, floatingStyles } = useFloating({ placement: "bottom-end" });
  const languages = i18n.languages;

  useEffect(() => {
    // @ts-expect-error Not fully supported API
    if (navigator.getBattery) {
      // @ts-expect-error Not fully supported API
      navigator.getBattery().then((bat: BatteryManager) => {
        const update = () =>
          setBattery({
            charging: bat.charging,
            percent: bat.level * 100,
          });
        update();
        bat.onlevelchange = update;
        bat.onchargingchange = update;
      });
    }
  }, []);

  return (
    <>
      <button
        ref={refs.setReference}
        className={styles.button}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <SVGIcon Icon={MoreHorizontal} />
      </button>
      {isMenuOpen && (
        <ClickAwayListener onClickAway={() => setIsMenuOpen(false)}>
          <MenuList ref={refs.setFloating} style={floatingStyles}>
            <MenuListItem
              onClick={() => {
                setSound((prev) => ({ enabled: !prev.enabled }));
                setIsMenuOpen(false);
              }}
            >
              <Flex gap={8} align="center">
                <ImgIcon src={sound.enabled ? "/icon/volume.ico" : "/icon/volume_muted.ico"} />
                <Text inheritColor>{t(sound.enabled ? "sound.on" : "sound.off")}</Text>
              </Flex>
            </MenuListItem>

            <Separator />

            {languages.map((lang) => (
              <MenuListItem
                key={lang}
                onClick={() => {
                  i18n.changeLanguage(lang);
                  setIsMenuOpen(false);
                }}
              >
                <Flex gap={8} align="center">
                  <SVGIcon
                    Icon={PlayIcon}
                    style={{
                      opacity: lang === i18n.language ? 1 : 0,
                      marginRight: -8,
                    }}
                  />
                  <Text light className={styles.languageAbbreviation}>
                    {lang}
                  </Text>
                  <Text inheritColor>
                    {languageDescriptionMap[lang as keyof typeof languageDescriptionMap]}
                  </Text>
                </Flex>
              </MenuListItem>
            ))}

            {battery && (
              <>
                <Separator />
                <MenuListItem>
                  <Flex gap={8} align="center">
                    <SVGIcon
                      Icon={battery.charging ? BatteryCharging : getBatteryIcon(battery.percent)}
                    />
                    <Text inheritColor>{Math.round(battery.percent)}%</Text>
                  </Flex>
                </MenuListItem>
              </>
            )}
          </MenuList>
        </ClickAwayListener>
      )}
    </>
  );
}
