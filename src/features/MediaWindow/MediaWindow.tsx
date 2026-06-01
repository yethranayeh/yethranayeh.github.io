import type { PublicFile } from "virtual:public-files";

import { lazy } from "react";
import { useAtom } from "jotai";
import { Frame } from "react95";
import { flatFiles } from "virtual:public-files";

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

const MEDIA_FILES = flatFiles.filter((f) => f.mediaType !== "other");

function getIconSrc(file: PublicFile) {
  if (file.mediaType === "image") {
    return file.path;
  }

  if (file.mediaType === "audio") {
    return "/icon/volume.ico";
  }

  return "/icon/video-file.svg";
}

export function MediaWindow() {
  const [, addWindow] = useAtom(addWindowAtom);

  return (
    <>
      <WindowURL />
      <Frame as="section" variant="field" className={styles.frame}>
        {MEDIA_FILES.map((file) => (
          <MediaItem
            key={file.path}
            name={file.name}
            iconSrc={getIconSrc(file)}
            onDoubleClick={() =>
              addWindow({
                id: `media:${file.path}`,
                titleI18nKey:
                  file.mediaType === "image"
                    ? "menu:window.imageViewer"
                    : "menu:window.videoPlayer",
                helpTextI18nKey:
                  file.mediaType === "image"
                    ? "content:windowHelp.imageViewer"
                    : "content:windowHelp.videoPlayer",
                minimized: false,
                iconSrc: "/icon/media-player.svg",
                content: file.mediaType === "image" ? ImageViewerContent : VideoPlayerContent,
                contentProps: { src: file.path },
              })
            }
          />
        ))}
      </Frame>
    </>
  );
}
