/**
 * Window-specific help content.
 * Maps window IDs to i18n keys for the help bubble shown when clicking the ? button.
 */
export const windowHelp: Record<string, { i18nKey: string }> = {
  resume: { i18nKey: "content:windowHelp.resume" },
  projects: { i18nKey: "content:windowHelp.projects" },
  apps: { i18nKey: "content:windowHelp.apps" },
  media: { i18nKey: "content:windowHelp.media" },
  VigenereCipher: { i18nKey: "content:windowHelp.vigenereCipher" },
  "media:screensaver": { i18nKey: "content:windowHelp.videoPlayer" },
  "media:portrait": { i18nKey: "content:windowHelp.imageViewer" },
  "media:blinking": { i18nKey: "content:windowHelp.imageViewer" },
};

export const WINDOW_HELP_DEFAULT_KEY = "content:windowHelp.generic";

export function getWindowHelpTextKey(windowId: string): string {
  return windowHelp[windowId]?.i18nKey ?? WINDOW_HELP_DEFAULT_KEY;
}
