import type { PublicFolder, PublicEntry } from "virtual:public-files";

import { lazy, useState } from "react";
import { useAtom } from "jotai";
import { Button, ScrollView } from "react95";
import { tree } from "virtual:public-files";

import { addWindowAtom } from "@/stores/window.atom";
import { Flex } from "@/components/Styled";
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

function findFolder(root: PublicFolder, targetPath: string): PublicFolder {
  if (!targetPath || targetPath === "/") {
    return root;
  }

  const parts = targetPath.split("/").filter(Boolean);
  let current = root;
  for (const part of parts) {
    const next = current.children.find(
      (c): c is PublicFolder => c.kind === "folder" && c.name === part,
    );

    if (!next) {
      return root;
    }
    current = next;
  }

  return current;
}

function getIconSrc(entry: PublicEntry) {
  if (entry.kind === "folder") {
    return "/icon/folder.ico";
  }

  if (entry.mediaType === "image") {
    return entry.path;
  }

  if (entry.mediaType === "audio") {
    return "/icon/volume.ico";
  }
  return "/icon/video-file.svg";
}

function isVisible(entry: PublicEntry) {
  return entry.kind === "folder" || entry.mediaType !== "other";
}

export function MediaWindow() {
  const [, addWindow] = useAtom(addWindowAtom);
  const [currentPath, setCurrentPath] = useState("/");
  const currentFolder = findFolder(tree, currentPath);

  const navigateUp = () => {
    const parts = currentPath.split("/").filter(Boolean);
    parts.pop();
    setCurrentPath(parts.length ? "/" + parts.join("/") : "/");
  };

  return (
    <Flex direction="column" className={styles.wrapper}>
      <Flex as="header" align="center" gap={4} className={styles.toolbar}>
        <Button size="sm" disabled={currentPath === "/"} onClick={navigateUp}>
          ↑
        </Button>
        <WindowURL className={styles.urlBar} />
      </Flex>
      <ScrollView className={styles.scroll}>
        <div className={styles.grid}>
          {currentFolder.children.filter(isVisible).map((entry) => (
            <MediaItem
              key={entry.path}
              name={entry.name}
              iconSrc={getIconSrc(entry)}
              onDoubleClick={() => {
                if (entry.kind === "folder") {
                  setCurrentPath(entry.path);
                  return;
                }
                addWindow({
                  id: `media:${entry.path}`,
                  titleI18nKey:
                    entry.mediaType === "image"
                      ? "menu:window.imageViewer"
                      : "menu:window.videoPlayer",
                  helpTextI18nKey:
                    entry.mediaType === "image"
                      ? "content:windowHelp.imageViewer"
                      : "content:windowHelp.videoPlayer",
                  minimized: false,
                  iconSrc: "/icon/media-player.svg",
                  content: entry.mediaType === "image" ? ImageViewerContent : VideoPlayerContent,
                  contentProps: { src: entry.path },
                });
              }}
            />
          ))}
        </div>
      </ScrollView>
    </Flex>
  );
}
