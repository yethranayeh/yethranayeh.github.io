import { MenuList, Separator } from "react95";
import { useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import useSound from "use-sound";
import ClickAwayListener from "react-click-away-listener";

import { setBodyLoadingState } from "@/utils/setBodyLoadingState";
import { AuthContext } from "@/context/AuthContext";
import { isLoggedOutKey } from "@/config/storage";
import { soundAtom } from "@/stores/soundAtom";
import { helpWindow, shutdownWindow } from "@/config/windowRegistry";
import { addWindowAtom } from "@/stores/window.atom";
import { startMenuIcons } from "@/config/startMenu";

import { ListItem } from "./ListItem/ListItem";

import styles from "./StartMenu.module.scss";

const iconMap = startMenuIcons;

export function StartMenu({ onClose }: { onClose: () => void }) {
  const { t, i18n } = useTranslation("menu");
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [sound] = useAtom(soundAtom);
  const [playLogoff] = useSound("/audio/logoff.mp3", { volume: 0.25, soundEnabled: sound.enabled });

  const [_, addWindow] = useAtom(addWindowAtom);

  const onClickHelp = useCallback(() => addWindow(helpWindow), [addWindow]);

  const onClickLogout = useCallback(() => {
    playLogoff();
    navigate("/");
    setIsLoggedIn(false);
    setBodyLoadingState("true");
    localStorage.setItem(isLoggedOutKey, "true");
  }, [playLogoff, navigate, setIsLoggedIn]);

  const onClickShutdown = useCallback(() => addWindow(shutdownWindow), [addWindow]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (i18n.language !== "en") {
        // TODO: alternative hotkey handling for other languages
        return;
      }
      // TODO: refactor to reduce code duplication
      switch (event.key.toLowerCase()) {
        case "Escape":
          onClose();
          break;
        case "h":
          onClose();
          onClickHelp();
          break;
        case "l":
          onClose();
          onClickLogout();
          break;
        case "u":
          onClose();
          onClickShutdown();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onClickHelp, onClickLogout, onClickShutdown, i18n.language]);

  return (
    <ClickAwayListener onClickAway={onClose}>
      <MenuList className={styles.list} onClick={onClose}>
        <ListItem
          onClick={onClickHelp}
          iconSrc={iconMap.help}
          iconSize={24}
          hotkeyLetterIndex={i18n.language === "en" ? 0 : undefined}
        >
          {t("nav.help")}
        </ListItem>

        {/* TODO: Add meta information (the stack used to build this, libraries etc.) */}
        {/* TODO: Add "volume-3" & "volume-x" pixelart icons to toggle app-wide sound on or off */}

        <Separator />

        <ListItem
          onClick={onClickLogout}
          iconSrc={iconMap.logout}
          hotkeyLetterIndex={i18n.language === "en" ? 0 : undefined}
        >
          {t("nav.logout")}
        </ListItem>

        <ListItem
          onClick={onClickShutdown}
          iconSrc={iconMap.shutdown}
          hotkeyLetterIndex={i18n.language === "en" ? 2 : undefined}
        >
          {t("nav.shutdown")}
        </ListItem>
      </MenuList>
    </ClickAwayListener>
  );
}
