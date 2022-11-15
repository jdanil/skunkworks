import {
  type Hooks,
  type Project,
  type Workspace,
  miscUtils,
} from "@yarnpkg/core";
import { type Filename, type PortablePath, ppath, xfs } from "@yarnpkg/fslib";
// eslint-disable-next-line node/no-missing-import, node/no-unpublished-import -- false positive
import type { TsConfigJson } from "type-fest";

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types -- `@yarnpkg/core` types are mutable
const getTsConfigPath = (workspace: Workspace): PortablePath =>
  ppath.join(workspace.cwd, "tsconfig.json" as Filename);

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types -- `@yarnpkg/core` types are mutable
const getReferencedWorkspaces = ({
  project,
  workspace,
}: {
  readonly project: Project;
  readonly workspace: Workspace;
}): readonly Workspace[] =>
  miscUtils.mapAndFilter(workspace.dependencies, ([_identHash, descriptor]) => {
    const dependingWorkspace = project.tryWorkspaceByDescriptor(descriptor);
    if (!dependingWorkspace || dependingWorkspace === workspace) {
      return miscUtils.mapAndFilter.skip;
    }

    return dependingWorkspace;
  });

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types -- `type-fest` types are mutable
const getUpdatedReferences = ({
  referencedWorkspaces,
  tsconfig,
}: {
  readonly referencedWorkspaces: readonly PortablePath[];
  readonly tsconfig: TsConfigJson;
}): {
  readonly modified: boolean;
  readonly references: TsConfigJson["references"];
} => {
  let modified = false;
  // eslint-disable-next-line @typescript-eslint/init-declarations -- initial undefined value is intended
  let references: TsConfigJson["references"];

  if (referencedWorkspaces.length === 0) {
    if (typeof tsconfig.references !== "undefined") {
      modified = true;
    }
  } else {
    const existingReferences = new Set(
      tsconfig.references?.map((reference) => reference.path),
    );

    references = referencedWorkspaces.map((relativePath) => {
      if (!existingReferences.has(relativePath)) {
        modified = true;
      }

      return { path: relativePath };
    });
  }

  return { modified, references };
};

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types -- `@yarnpkg/core` types are mutable
const executeWorkspace = async ({
  project,
  workspace,
}: {
  readonly project: Project;
  readonly workspace: Workspace;
}): Promise<void> => {
  const tsconfigPath = getTsConfigPath(workspace);

  if (!(await xfs.existsPromise(tsconfigPath))) {
    return;
  }

  const referencedWorkspaces = getReferencedWorkspaces({
    project,
    workspace,
  })
    .filter((referencedWorkspace) =>
      // eslint-disable-next-line node/no-sync, security/detect-non-literal-fs-filename -- `Array.prototype.filter` is synchronous
      xfs.existsSync(getTsConfigPath(referencedWorkspace)),
    )
    .map((referencedWorkspace) =>
      ppath.relative(workspace.cwd, referencedWorkspace.cwd),
    );

  const tsconfig = (await xfs.readJsonPromise(tsconfigPath)) as TsConfigJson;

  const { modified, references } = getUpdatedReferences({
    referencedWorkspaces,
    tsconfig,
  });

  if (modified) {
    await xfs.writeJsonPromise(tsconfigPath, {
      ...tsconfig,
      references,
    });
  }
};

export const afterAllInstalled: Hooks["afterAllInstalled"] = (project) => {
  Promise.all(
    project.workspaces.map(async (workspace) => {
      await executeWorkspace({ project, workspace });
    }),
  ).catch(() => ({}));
};
