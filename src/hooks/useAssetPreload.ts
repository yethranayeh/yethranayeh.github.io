import { useEffect } from "react";

export function useAssetPreload(imageSrcs: string[]) {
  useEffect(() => {
    imageSrcs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [imageSrcs]);
}
