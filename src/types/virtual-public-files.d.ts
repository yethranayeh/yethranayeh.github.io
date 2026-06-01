declare module "virtual:public-files" {
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
}
