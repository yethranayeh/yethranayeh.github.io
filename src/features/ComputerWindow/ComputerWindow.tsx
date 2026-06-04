import type { SrcFolder, SrcEntry } from "virtual:public-files";

import { useState } from "react";
import { Button, ScrollView } from "react95";
import { srcTree } from "virtual:public-files";

import { MediaItem } from "@/features/MediaWindow/MediaItem";
import { Flex } from "@/components/Styled";
import { WindowURL } from "@/components/windows/WindowURL";

import styles from "./ComputerWindow.module.scss";

function findFolder(root: SrcFolder, targetPath: string): SrcFolder {
  if (!targetPath || targetPath === "/") return root;
  const parts = targetPath.split("/").filter(Boolean);
  let current = root;
  for (const part of parts) {
    const next = current.children.find(
      (c): c is SrcFolder => c.kind === "folder" && c.name === part,
    );
    if (!next) return root;
    current = next;
  }
  return current;
}

function getEntryIcon(entry: SrcEntry): string {
  if (entry.kind === "folder") return "/icon/folder.ico";
  switch (entry.ext) {
    case "ts":
    case "tsx":
    case "js":
    case "jsx":
      return "/icon/program.ico";
    case "scss":
    case "css":
      return "/icon/desktop.ico";
    case "json":
    case "md":
    case "txt":
      return "/icon/book.ico";
    default:
      return "/icon/program.ico";
  }
}

export function ComputerWindow() {
  const [currentPath, setCurrentPath] = useState("/");
  const currentFolder = findFolder(srcTree, currentPath);

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
          {currentFolder.children.map((entry) => (
            <MediaItem
              key={entry.path}
              name={entry.name}
              iconSrc={getEntryIcon(entry)}
              onDoubleClick={() => {
                if (entry.kind === "folder") setCurrentPath(entry.path);
              }}
            />
          ))}
        </div>
      </ScrollView>
    </Flex>
  );
}
