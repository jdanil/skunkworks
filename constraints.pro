constraints_min_version(1).

% This file is written in Prolog.
% It contains rules that the project must respect.
% In order to see them in action, run `yarn constraints source`.

% --- METADATA ---

% This rule will enforce that all workspaces must declare a `version` field.
gen_enforced_field(WorkspaceCwd, 'version', '0.0.0') :-
  % Only proceed if the workspace hasn't declared a `version`.
  \+ workspace_field(WorkspaceCwd, 'version', _).

% This rule will enforce that all workspaces exclude the `private` field if it is `false`.
gen_enforced_field(WorkspaceCwd, 'private', null) :-
  workspace_field(WorkspaceCwd, 'private', 'false').

% This rule will enforce that all workspaces (excluding the root) must declare a `description` field.
gen_enforced_field(WorkspaceCwd, 'description', '> TODO: description') :-
  % Only proceed if the workspace hasn't declared a `description`.
  \+ workspace_field(WorkspaceCwd, 'description', _),
  % Exclude the root workspace.
  WorkspaceCwd \= '.'.

% This rule will enforce that all workspaces must declare their `license` as `MIT`.
gen_enforced_field(WorkspaceCwd, 'license', 'MIT').

% This rule will enforce that all public workspaces must declare a `homepage` field.
gen_enforced_field(WorkspaceCwd, 'homepage', Homepage) :-
  workspace(WorkspaceCwd),
  atom_concat('https://github.com/jdanil/skunkworks/tree/master/', WorkspaceCwd, Homepage),
  % Exclude private workspaces.
  \+ workspace_field_test(WorkspaceCwd, 'private', 'true').

% These rules will enforce that all workspaces must declare `repository` fields.
gen_enforced_field(WorkspaceCwd, 'repository.type', 'git').
gen_enforced_field(WorkspaceCwd, 'repository.url', 'https://github.com/jdanil/skunkworks.git').
gen_enforced_field(WorkspaceCwd, 'repository.directory', WorkspaceCwd) :-
  workspace(WorkspaceCwd),
  % Exclude the root workspace.
  WorkspaceCwd \= '.'.

% This rule will enforce that all public workspaces must declare a `bugs.url` field.
gen_enforced_field(WorkspaceCwd, 'bugs.url', 'https://github.com/jdanil/skunkworks/issues') :-
  % Exclude private workspaces.
  \+ workspace_field_test(WorkspaceCwd, 'private', 'true').

% --- SCRIPTS ---

% This rule will enforce that all workspaces that include `typescript` in `devDependencies` must expose a `scripts.compile` field.
gen_enforced_field(WorkspaceCwd, 'scripts.compile', 'tsc --build') :-
  workspace_has_dependency(WorkspaceCwd, 'typescript', _,  'devDependencies').

% --- DEPENDENCIES ---

% These rules will prevent workspaces from depending on packages that have not been published to the registry.
gen_enforced_dependency(WorkspaceCwd, DependencyIdent, null, DependencyType) :-
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, DependencyRange, DependencyType),
  atom_concat('git:', _, DependencyRange).
gen_enforced_dependency(WorkspaceCwd, DependencyIdent, null, DependencyType) :-
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, DependencyRange, DependencyType),
  atom_concat('github:', _, DependencyRange).

% This rule will enforce that a workspace must depend on the same version of a dependency as the one used by the other workspaces.
gen_enforced_dependency(WorkspaceCwd, DependencyIdent, DependencyRange2, DependencyType) :-
  % Iterates over all dependencies from all workspaces.
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, DependencyRange, DependencyType),
  % Iterates over similarly-named dependencies from all workspaces (again).
  workspace_has_dependency(OtherWorkspaceCwd, DependencyIdent, DependencyRange2, DependencyType2),
  % Ignore peer dependencies.
  DependencyType \= 'peerDependencies',
  DependencyType2 \= 'peerDependencies'.

% This rule will prevent workspaces from depending on non-workspace versions of available workspaces.
gen_enforced_dependency(WorkspaceCwd, DependencyIdent, 'workspace:*', DependencyType) :-
  % Iterates over all dependencies from all workspaces.
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, DependencyRange, DependencyType),
  % Only consider those that target something that could be a workspace.
  workspace_ident(DependencyCwd, DependencyIdent).

% Enforce that only private workspaces can have non-dev private dependencies on other workspaces.
gen_enforced_field(WorkspaceCwd, 'private', WorkspacePrivate) :-
  workspace(WorkspaceCwd),
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, DependencyRange, DependencyType),
  % Only consider those that target something that could be a workspace
  workspace_ident(DependencyCwd, DependencyIdent),
  workspace_field(DependencyCwd, 'private', DependencyPrivate),
  DependencyType == 'dependencies',
  (
    DependencyPrivate == 'true' -> WorkspacePrivate = 'true'
  ).

% Enforces that a dependency doesn't appear in both `dependencies` and `devDependencies`.
gen_enforced_dependency(WorkspaceCwd, DependencyIdent, null, 'devDependencies') :-
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, _, 'devDependencies'),
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, _, 'dependencies').

% This rule will enforce that all workspaces that depend on TypeScript must also depend on tslib.
gen_enforced_dependency(WorkspaceCwd, 'tslib', 'range', 'dependencies') :-
  % Iterates over all TypeScript dependencies from all workspaces.
  workspace_has_dependency(WorkspaceCwd, 'typescript', _, DependencyType),
  % Ignores the case when TypeScript is a peer dependency.
  DependencyType \= 'peerDependencies',
  % Only proceed if the workspace doesn't already depend on tslib.
  \+ workspace_has_dependency(WorkspaceCwd, 'tslib', _, _).
