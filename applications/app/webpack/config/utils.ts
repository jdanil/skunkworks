import { resolve } from "node:path";

export const rootPath = (relativePath = ""): string =>
  resolve(import.meta.dirname, "../../../../", relativePath);

export const packagePath = (relativePath = ""): string =>
  resolve(import.meta.dirname, "../../", relativePath);

export const sourcePath = (relativePath = ""): string =>
  resolve(import.meta.dirname, "../../src", relativePath);
