import * as path from "path";

export const rootPath = (relativePath = ""): string =>
  path.resolve(__dirname, "../../../../", relativePath);

export const packagePath = (relativePath = ""): string =>
  path.resolve(__dirname, "../../", relativePath);

export const sourcePath = (relativePath = ""): string =>
  path.resolve(__dirname, "../../src", relativePath);
