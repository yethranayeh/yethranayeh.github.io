import { WindowContent } from "react95";

import styles from "./ImageViewer.module.scss";

interface ImageViewerProps {
  src: string;
  lunge?: boolean;
  fullscreen?: boolean;
}

export function ImageViewer({ src, lunge, fullscreen }: ImageViewerProps) {
  const wrapperClass = [styles.wrapper, fullscreen && styles.fullscreenWrapper]
    .filter(Boolean)
    .join(" ");

  const imgClass = [
    styles.image,
    fullscreen && styles.cover,
    lunge && styles.lunge,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <WindowContent className={wrapperClass}>
      <img src={src} className={imgClass} alt="" />
    </WindowContent>
  );
}
