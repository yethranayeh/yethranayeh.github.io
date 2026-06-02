/**
 * Window-specific help content.
 * Maps window IDs to i18n keys for the help bubble shown when clicking the ? button.
 */
export const windowHelp: Record<string, { i18nKey: string }> = {
  computer: { i18nKey: "content:windowHelp.computer" },
  projects: { i18nKey: "content:windowHelp.projects" },
  resume: { i18nKey: "content:windowHelp.resume" },
  apps: { i18nKey: "content:windowHelp.apps" },
  media: { i18nKey: "content:windowHelp.media" },
  VigenereCipher: { i18nKey: "content:windowHelp.vigenereCipher" },
};

export const WINDOW_HELP_DEFAULT_KEY = "content:windowHelp.generic";

export function getWindowHelpTextKey(windowId: string): string {
  return windowHelp[windowId]?.i18nKey ?? WINDOW_HELP_DEFAULT_KEY;
}
