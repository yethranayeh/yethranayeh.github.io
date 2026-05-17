import { useEffect } from "react";

export function useAssetPreload() {
  useEffect(() => {
    const iconSrcs = ["/icon/book.ico", "/icon/key_win.ico", "/icon/shut_down_with_computer.ico"];

    iconSrcs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    import("@/layout/components/Navbar/StartMenu/HelpDialogContent");
    import("@/layout/components/Navbar/StartMenu/ShutdownDialogContent");
  }, []);
}
