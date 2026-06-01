import { WindowContent } from "react95";

import styles from "./ImageViewer.module.scss";

interface ImageViewerProps {
  src: string;
}

export function ImageViewer({ src }: ImageViewerProps) {
  return (
    <WindowContent className={styles.wrapper}>
      <img src={src} className={styles.image} alt="" />
    </WindowContent>
  );
}
