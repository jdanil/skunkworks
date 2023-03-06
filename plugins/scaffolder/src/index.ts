import { type Plugin, SettingsType } from "@yarnpkg/core";

import { ScaffolderBootstrapCommand as bootstrap } from "./commands/bootstrap";

declare module "@yarnpkg/core" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- interface is used by `@yarnpkg/core` for declaration merging
  interface ConfigurationValueMap {
    readonly scaffolderTemplateFolder: string;
  }
}

const plugin: Plugin = {
  commands: [bootstrap],
  configuration: {
    scaffolderTemplateFolder: {
      default: "templates",
      description:
        "The folder containing templates from which the scaffolder bases bootstrapped packages from.",
      isNullable: false,
      type: SettingsType.STRING,
    },
  },
};

// eslint-disable-next-line no-restricted-exports, import/no-default-export -- `@yarnpkg/builder` expects a default export
export default plugin;
