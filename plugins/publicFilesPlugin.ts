import type { Plugin } from "vite";
import fs from "node:fs";
import path from "node:path";

const VIRTUAL_MODULE_ID = "virtual:public-files";
const RESOLVED_ID = "\0virtual:public-files";

const IMAGE_EXTS = new Set(["png", "jpg", "jpeg", "gif", "webp", "bmp", "ico", "svg", "avif"]);
const VIDEO_EXTS = new Set(["mp4", "webm", "ogv", "mov"]);
const AUDIO_EXTS = new Set(["mp3", "wav", "ogg", "aac", "m4a", "flac"]);

type MediaType = "image" | "video" | "audio" | "other";

function getMediaType(ext: string): MediaType {
  if (IMAGE_EXTS.has(ext)) {
    return "image";
  }

  if (VIDEO_EXTS.has(ext)) {
    return "video";
  }

  if (AUDIO_EXTS.has(ext)) {
    return "audio";
  }

  return "other";
}

type PublicFile = {
  kind: "file";
  name: string;
  path: string;
  ext: string;
  mediaType: MediaType;
};

type PublicFolder = {
  kind: "folder";
  name: string;
  path: string;
  children: (PublicFile | PublicFolder)[];
};

function scanDir(dirPath: string, urlPath: string): { folder: PublicFolder; files: PublicFile[] } {
  const folder: PublicFolder = {
    kind: "folder",
    name: path.basename(dirPath),
    path: urlPath || "/",
    children: [],
  };
  const allFiles: PublicFile[] = [];

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const entryUrlPath = `${urlPath}/${entry.name}`;

    if (entry.isDirectory()) {
      const { folder: sub, files: subFiles } = scanDir(
        path.join(dirPath, entry.name),
        entryUrlPath,
      );
      folder.children.push(sub);
      allFiles.push(...subFiles);
    } else {
      const ext = path.extname(entry.name).slice(1).toLowerCase();
      const file: PublicFile = {
        kind: "file",
        name: entry.name,
        path: entryUrlPath,
        ext,
        mediaType: getMediaType(ext),
      };
      folder.children.push(file);
      allFiles.push(file);
    }
  }

  return { folder, files: allFiles };
}

export function publicFilesPlugin(publicDir: string): Plugin {
  return {
    name: "public-files",
    resolveId(id) {
      if (id === VIRTUAL_MODULE_ID) return RESOLVED_ID;
    },
    load(id) {
      if (id !== RESOLVED_ID) {
        return;
      }

      const { folder, files } = scanDir(publicDir, "");
      return [
        `export const tree = ${JSON.stringify(folder)};`,
        `export const flatFiles = ${JSON.stringify(files)};`,
      ].join("\n");
    },
    configureServer(server) {
      server.watcher.add(publicDir);
      server.watcher.on("all", (_event, file) => {
        if (file.startsWith(publicDir)) {
          const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
          if (mod) {
            server.moduleGraph.invalidateModule(mod);
          }
        }
      });
    },
  };
}
