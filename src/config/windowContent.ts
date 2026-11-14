import type { ComponentType } from "react";

import { lazy } from "react";

/**
 * Single source of truth for window content imports.
 *
 * Every entry returns a module shaped for `lazy()`, so mounting a window and
 * warming one resolve through the same import. The module system caches the
 * underlying `import()`, which makes preloading idempotent: calling a thunk
 * twice never downloads twice.
 *
 * The exports below are dynamic imports on purpose. This module is imported
 * statically by the window registry, so it must not pull any feature module
 * into the entry chunk.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyComponent = ComponentType<any>;

export const windowContent = {
  resume: () => import("@/features/ResumeWindow").then((m) => ({ default: m.ResumeWindow })),
  projects: () =>
    import("@/features/ProjectsWindow/ProjectsWindow").then((m) => ({
      default: m.ProjectsWindow,
    })),
  apps: () => import("@/features/AppsWindow/AppsWindow").then((m) => ({ default: m.AppsWindow })),
  media: () =>
    import("@/features/MediaWindow/MediaWindow").then((m) => ({ default: m.MediaWindow })),
  computer: () =>
    import("@/features/ComputerWindow/ComputerWindow").then((m) => ({
      default: m.ComputerWindow,
    })),
  terminal: () =>
    import("@/features/TerminalWindow/TerminalWindow").then((m) => ({
      default: m.TerminalWindow,
    })),
  experiences: () =>
    import("@/features/ExperiencesWindow/ExperiencesWindow").then((m) => ({
      default: m.ExperiencesWindow,
    })),

  helpDialog: () =>
    import("@/layout/components/Navbar/StartMenu/HelpDialogContent").then((m) => ({
      default: m.default,
    })),
  shutdownDialog: () =>
    import("@/layout/components/Navbar/StartMenu/ShutdownDialogContent").then((m) => ({
      default: m.default,
    })),
  vigenereCipher: () =>
    import("@/features/AppsWindow/VigenereCipher/VigenereCipher").then((m) => ({
      default: m.VigenereCipher,
    })),

  projectZinn: () =>
    import("@/features/ProjectsWindow/Projects/Zinn").then((m) => ({ default: m.Zinn })),
  projectPlayerType: () =>
    import("@/features/ProjectsWindow/Projects/PlayerType").then((m) => ({
      default: m.PlayerType,
    })),
  projectSarmal: () =>
    import("@/features/ProjectsWindow/Projects/Sarmal").then((m) => ({ default: m.Sarmal })),
  projectShadesOfSpace: () =>
    import("@/features/ProjectsWindow/Projects/DailySpacePalette").then((m) => ({
      default: m.DailySpacePalette,
    })),

  videoPlayer: () =>
    import("@/features/VideoPlayer/VideoPlayer").then((m) => ({ default: m.VideoPlayer })),
  imageViewer: () =>
    import("@/features/ImageViewer/ImageViewer").then((m) => ({ default: m.ImageViewer })),
} satisfies Record<string, () => Promise<{ default: AnyComponent }>>;

export type WindowContentKey = keyof typeof windowContent;

/**
 * Windows that are cheap enough to fetch without guessing which one comes
 * next. Terminal is excluded on purpose: its chunk plus wasm is two orders of
 * magnitude larger than everything here combined.
 */
export const lightWindowContent = [
  "projects",
  "resume",
  "apps",
  "media",
  "computer",
  "experiences",
  "projectZinn",
  "projectPlayerType",
  "projectSarmal",
  "projectShadesOfSpace",
  "videoPlayer",
  "imageViewer",
] as const satisfies ReadonlyArray<WindowContentKey>;

/**
 * Starts the fetch for one window without mounting it. Safe to call during
 * render, on hover, on idle or repeatedly; repeat calls hit the module cache.
 */
export function preloadWindowContent(key: WindowContentKey) {
  return windowContent[key]();
}

/**
 * Warms the whole light set. Individual failures are ignored so one bad chunk
 * cannot stop the rest, and nothing here blocks rendering.
 */
export function preloadLightWindowContent() {
  return Promise.allSettled(lightWindowContent.map((key) => windowContent[key]()));
}

export const ResumeContent = lazy(windowContent.resume);
export const ProjectsContent = lazy(windowContent.projects);
export const AppsContent = lazy(windowContent.apps);
export const MediaContent = lazy(windowContent.media);
export const ComputerContent = lazy(windowContent.computer);
export const TerminalContent = lazy(windowContent.terminal);
export const ExperiencesContent = lazy(windowContent.experiences);

export const HelpDialogContent = lazy(windowContent.helpDialog);
export const ShutdownDialogContent = lazy(windowContent.shutdownDialog);
export const VigenereCipherContent = lazy(windowContent.vigenereCipher);

export const ZinnContent = lazy(windowContent.projectZinn);
export const PlayerTypeContent = lazy(windowContent.projectPlayerType);
export const SarmalContent = lazy(windowContent.projectSarmal);
export const ShadesOfSpaceContent = lazy(windowContent.projectShadesOfSpace);

export const VideoPlayerContent = lazy(windowContent.videoPlayer);
export const ImageViewerContent = lazy(windowContent.imageViewer);
