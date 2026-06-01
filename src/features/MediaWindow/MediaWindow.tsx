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

const ImageViewerContent = lazy(() =>
  import("@/features/ImageViewer/ImageViewer").then((module) => ({
    default: module.ImageViewer,
  })),
);

const MEDIA_FILES = [
  {
    id: "screensaver",
    type: "video" as const,
    titleI18nKey: "content:media.screensaverVideo",
    iconSrc: "/icon/video-file.svg",
    src: "/video/screensaver.mp4",
    windowTitleI18nKey: "menu:window.videoPlayer",
    windowIconSrc: "/icon/media-player.svg",
  },
  {
    id: "portrait",
    type: "image" as const,
    titleI18nKey: "content:media.portrait",
    iconSrc: "/misc/portrait.png",
    src: "/misc/portrait.png",
    windowTitleI18nKey: "menu:window.imageViewer",
    windowIconSrc: "/icon/media-player.svg",
  },
  {
    id: "blinking",
    type: "image" as const,
    titleI18nKey: "content:media.blinking",
    iconSrc: "/misc/blinking.webp",
    src: "/misc/blinking.webp",
    windowTitleI18nKey: "menu:window.imageViewer",
    windowIconSrc: "/icon/media-player.svg",
  },
];

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
                titleI18nKey: file.windowTitleI18nKey,
                minimized: false,
                iconSrc: file.windowIconSrc,
                content: file.type === "video" ? VideoPlayerContent : ImageViewerContent,
                contentProps: { src: file.src },
              })
            }
          />
        ))}
      </Frame>
    </>
  );
}
