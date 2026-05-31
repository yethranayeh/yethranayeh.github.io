import { lazy } from "react";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { Frame } from "react95";

import { addWindowAtom } from "@/stores/window.atom";

import { MediaItem } from "./MediaItem";
import { WindowURL } from "@/components/windows/WindowURL";

import styles from "./MediaWindow.module.scss";

const VideoPlayerContent = lazy(() =>
  import("@/features/VideoPlayer/VideoPlayer").then((module) => ({
    default: module.VideoPlayer,
  })),
);

const MEDIA_FILES = [
  {
    id: "screensaver",
    titleI18nKey: "content:media.screensaverVideo",
    iconSrc: "/icon/video-file.svg",
    videoSrc: "/video/screensaver.mp4",
  },
] as const;

export function MediaWindow() {
  const { t } = useTranslation("content");
  const [, addWindow] = useAtom(addWindowAtom);

  return (
    <>
      <WindowURL />
      <Frame as="section" variant="field" className={styles.frame}>
        {MEDIA_FILES.map((file) => (
          <MediaItem
            key={file.id}
            name={t(file.titleI18nKey)}
            iconSrc={file.iconSrc}
            onDoubleClick={() =>
              addWindow({
                id: `media:${file.id}`,
                titleI18nKey: "menu:window.videoPlayer",
                minimized: false,
                iconSrc: "/icon/media-player.svg",
                content: VideoPlayerContent,
              })
            }
          />
        ))}
      </Frame>
    </>
  );
}
