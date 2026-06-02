import type { Plugin } from "vite";
import fs from "node:fs";
import path from "node:path";
import ignore from "ignore";

const VIRTUAL_MODULE_ID = "virtual:public-files";
const RESOLVED_ID = "\0virtual:public-files";

// ─── public/ scanning ────────────────────────────────────────────────────────

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

function scanPublicDir(
  dirPath: string,
  urlPath: string,
): { folder: PublicFolder; files: PublicFile[] } {
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
      const { folder: sub, files: subFiles } = scanPublicDir(
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

// ─── src/ scanning ───────────────────────────────────────────────────────────

type SrcFile = {
  kind: "file";
  name: string;
  path: string;
  ext: string;
};

type SrcFolder = {
  kind: "folder";
  name: string;
  path: string;
  children: (SrcFile | SrcFolder)[];
};

function loadIgnore(rootDir: string) {
  const ignoreManager = ignore();
  const gitignorePath = path.join(rootDir, ".gitignore");
  if (fs.existsSync(gitignorePath)) {
    ignoreManager.add(fs.readFileSync(gitignorePath, "utf-8"));
  }

  return ignoreManager;
}

function scanSrcDir(
  dirPath: string,
  urlPath: string,
  rootDir: string,
  ignoreManager: ReturnType<typeof ignore>,
): { folder: SrcFolder; files: SrcFile[] } {
  const folder: SrcFolder = {
    kind: "folder",
    name: path.basename(dirPath),
    path: urlPath || "/",
    children: [],
  };
  const allFiles: SrcFile[] = [];

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const absPath = path.join(dirPath, entry.name);
    const relPath = path.relative(rootDir, absPath).replace(/\\/g, "/");

    if (ignoreManager.ignores(relPath)) {
      continue;
    }

    const entryUrlPath = `${urlPath}/${entry.name}`;

    if (entry.isDirectory()) {
      const { folder: sub, files: subFiles } = scanSrcDir(
        absPath,
        entryUrlPath,
        rootDir,
        ignoreManager,
      );
      folder.children.push(sub);
      allFiles.push(...subFiles);
    } else {
      const ext = path.extname(entry.name).slice(1).toLowerCase();
      const file: SrcFile = {
        kind: "file",
        name: entry.name,
        path: entryUrlPath,
        ext,
      };
      folder.children.push(file);
      allFiles.push(file);
    }
  }

  return { folder, files: allFiles };
}

// ─── Plugin ──────────────────────────────────────────────────────────────────

interface PluginOptions {
  publicDir: string;
  srcDir: string;
  rootDir: string;
}

export function publicFilesPlugin({ publicDir, srcDir, rootDir }: PluginOptions): Plugin {
  return {
    name: "public-files",
    resolveId(id) {
      if (id === VIRTUAL_MODULE_ID) return RESOLVED_ID;
    },
    load(id) {
      if (id !== RESOLVED_ID) {
        return;
      }

      const { folder: publicTree, files: publicFiles } = scanPublicDir(publicDir, "");
      const ignoreManager = loadIgnore(rootDir);
      const { folder: srcTree, files: srcFiles } = scanSrcDir(srcDir, "", rootDir, ignoreManager);

      return [
        `export const tree = ${JSON.stringify(publicTree)};`,
        `export const flatFiles = ${JSON.stringify(publicFiles)};`,
        `export const srcTree = ${JSON.stringify(srcTree)};`,
        `export const srcFlatFiles = ${JSON.stringify(srcFiles)};`,
      ].join("\n");
    },
    configureServer(server) {
      server.watcher.add(publicDir);
      server.watcher.add(srcDir);
      server.watcher.on("all", (_event, file) => {
        if (file.startsWith(publicDir) || file.startsWith(srcDir)) {
          const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
          if (mod) {
            server.moduleGraph.invalidateModule(mod);
          }
        }
      });
    },
  };
}
