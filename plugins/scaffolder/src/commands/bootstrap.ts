/* eslint-disable unicorn/prefer-node-protocol -- `esbuild` cannot parse node protocol */
import { execSync } from "child_process";
import {
  cpSync,
  existsSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "fs";
import { join, posix, sep } from "path";
/* eslint-enable unicorn/prefer-node-protocol -- re-enable */

import { BaseCommand } from "@yarnpkg/cli";
import { Configuration, Project } from "@yarnpkg/core";
import { type NativePath, npath } from "@yarnpkg/fslib";
import { Command, Option, type Usage, UsageError } from "clipanion";
// eslint-disable-next-line node/no-missing-import, node/no-unpublished-import -- false positive
import type { PackageJson } from "type-fest";

export class ScaffolderBootstrapCommand extends BaseCommand {
  public static override readonly paths = [["scaffolder", "bootstrap"]];

  // eslint-disable-next-line new-cap -- `clipanion` naming convention
  public static override readonly usage: Usage = Command.Usage({
    category: "Scaffolder commands",
    description: "bootstrap a new package from a template",
    details: `
      This command will bootstrap a new package from a given template. Templates are sourced from the configured \`scaffolderTemplateFolder\`.

      - If \`--destination\` is not set, the new package will be created under the closest matching workspace directory to the given template.

      - If \`--destination\` is set, the new package will be created under the given directory.

      - If \`--destination\` is set to \`.\`, the new package will be created under the current working directory.
    `,
    examples: [
      [
        "Create a new library package under the closest matching workspace directory to the given template",
        "yarn scaffolder bootstrap --name=new-library --template=library",
      ],
      [
        "Create a new library package under the current working directory",
        "yarn scaffolder bootstrap --name=new-library --template=library --destination=.",
      ],
      [
        "Create a new library package under the given directory",
        "yarn scaffolder bootstrap --name=new-library --template=library --destination=libraries",
      ],
    ],
  });

  private readonly name = Option.String("--name", {
    description: "Name of the package (in kebab-case)",
    required: true,
  });

  private readonly template = Option.String("--template", {
    description: "Name of the template to use to bootstrap the package",
    required: true,
  });

  private readonly destination = Option.String("--destination", {
    description: "Destination path of the package",
    required: false,
  });

  public async execute(): Promise<void> {
    const configuration = await Configuration.find(
      this.context.cwd,
      // eslint-disable-next-line unicorn/no-array-method-this-argument -- false positive
      this.context.plugins,
    );

    if (!configuration.projectCwd) {
      throw new UsageError(
        "This command must be run from within a project folder.",
      );
    }

    const projectCwd = npath.fromPortablePath(configuration.projectCwd);

    const { templates, source, destination } = await this.#getPaths({
      configuration,
      projectCwd,
    });

    if (!existsSync(source)) {
      throw new UsageError(
        `Invalid template "${
          this.template
        }"; source path does not exist. Please select from: ${readdirSync(
          templates,
        ).join(", ")}.`,
      );
    }

    this.#initialisePackage({ destination, projectCwd, source });
  }

  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types -- `@yarnpkg/core` and `@yarnpkg/fslib` types are mutable
  async #getPaths({
    configuration,
    projectCwd,
  }: {
    readonly configuration: Configuration;
    readonly projectCwd: NativePath;
  }): Promise<{
    readonly templates: string;
    readonly source: string;
    readonly destination: string;
  }> {
    // eslint-disable-next-line unicorn/no-array-method-this-argument -- false positive
    const { project } = await Project.find(configuration, this.context.cwd);
    const cwd = npath.fromPortablePath(this.context.cwd);

    const templates = join(
      projectCwd,
      project.configuration.get("scaffolderTemplateFolder"),
    );

    const source = join(templates, this.template);

    // eslint-disable-next-line node/no-unsupported-features/es-syntax -- false positive
    const { default: leven } = await import("leven");
    const [fuzzyPath] = project.topLevelWorkspace.manifest.workspaceDefinitions
      .map(
        (workspaceDefinition) =>
          workspaceDefinition.pattern
            .replace("*", "") // remove asterisks
            .replace(/(?<slash>\/)(?=\/*\1)/u, "") // remove duplicate slashes
            .replace(/\/$/u, ""), // remove trailing slash
      )
      .sort((a, b) => leven(this.template, a) - leven(this.template, b));
    const destination = join(
      this.destination == null
        ? fuzzyPath == null
          ? cwd
          : join(projectCwd, fuzzyPath)
        : this.destination === "."
          ? cwd
          : join(projectCwd, this.destination),
      this.name,
    );

    return {
      destination,
      source,
      templates,
    };
  }

  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types -- `@yarnpkg/fslib` types are mutable
  #updateManifest({
    destination,
    projectCwd,
  }: {
    readonly destination: string;
    readonly projectCwd: NativePath;
  }): void {
    const manifest = join(destination, "package.json");
    const data = JSON.parse(
      readFileSync(manifest, {
        encoding: "utf8",
      }),
    ) as PackageJson;

    const name = data.name?.replace(this.template, this.name);
    const directory = destination
      .replace(projectCwd, "")
      .split(sep)
      .join(posix.sep)
      .replaceAll(/^\//u, "");
    const repository =
      typeof data.repository === "object"
        ? {
            ...data.repository,
            directory,
          }
        : data.repository;

    writeFileSync(
      manifest,
      JSON.stringify({
        ...data,
        name,
        repository,
      }),
    );
  }

  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types -- `@yarnpkg/fslib` types are mutable
  #initialisePackage({
    projectCwd,
    source,
    destination,
  }: {
    readonly projectCwd: NativePath;
    readonly source: string;
    readonly destination: string;
  }): void {
    cpSync(source, destination, {
      recursive: true,
    });

    this.#updateManifest({ destination, projectCwd });

    execSync("yarn install", { cwd: projectCwd });

    execSync("yarn format package.json --write", { cwd: destination });

    execSync("git add .", { cwd: destination });
  }
}
