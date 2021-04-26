// eslint-disable-next-line unicorn/prefer-node-protocol -- supported node versions do not yet support the "node" protocol
import { resolve } from "path";

// export const rootPath = (relativePath = ""): string =>
//   // eslint-disable-next-line unicorn/prefer-module -- webpack does not support esm configuration
//   resolve(__dirname, "../../../../", relativePath);

export const packagePath = (relativePath = ""): string =>
  // eslint-disable-next-line unicorn/prefer-module -- webpack does not support esm configuration
  resolve(__dirname, "../../", relativePath);

export const sourcePath = (relativePath = ""): string =>
  // eslint-disable-next-line unicorn/prefer-module -- webpack does not support esm configuration
  resolve(__dirname, "../../src", relativePath);
