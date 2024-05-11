import { type Hooks, type Plugin } from "@yarnpkg/core";

import { afterAllInstalled } from "./hooks/after-all-installed";

const plugin: Plugin<Hooks> = {
  hooks: {
    afterAllInstalled,
  },
};

// eslint-disable-next-line no-restricted-exports, import/no-default-export -- `@yarnpkg/builder` expects a default export
export default plugin;
