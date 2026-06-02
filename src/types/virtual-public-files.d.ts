declare module "virtual:public-files" {
  // ─── public/ ───────────────────────────────────────────────────────────────

  export type MediaType = "image" | "video" | "audio" | "other";

  export type PublicFile = {
    kind: "file";
    name: string;
    path: string;
    ext: string;
    mediaType: MediaType;
  };

  export type PublicFolder = {
    kind: "folder";
    name: string;
    path: string;
    children: Array<PublicFile | PublicFolder>;
  };

  export type PublicEntry = PublicFile | PublicFolder;

  export const tree: PublicFolder;
  export const flatFiles: PublicFile[];

  // ─── src/ ──────────────────────────────────────────────────────────────────

  export type SrcFile = {
    kind: "file";
    name: string;
    path: string;
    ext: string;
  };

  export type SrcFolder = {
    kind: "folder";
    name: string;
    path: string;
    children: Array<SrcFile | SrcFolder>;
  };

  export type SrcEntry = SrcFile | SrcFolder;

  export const srcTree: SrcFolder;
  export const srcFlatFiles: SrcFile[];
}
