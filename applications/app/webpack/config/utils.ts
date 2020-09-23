import { resolve } from "path";

// export const rootPath = (relativePath = ""): string =>
//   resolve(__dirname, "../../../../", relativePath);

export const packagePath = (relativePath = ""): string =>
  resolve(__dirname, "../../", relativePath);

export const sourcePath = (relativePath = ""): string =>
  resolve(__dirname, "../../src", relativePath);
