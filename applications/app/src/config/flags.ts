export type Flag = {
  readonly condition: boolean;
  readonly description: string;
  readonly id: "dev-tools";
  readonly type: "experiment" | "operational" | "release";
  readonly name: string;
};

export const flags: readonly Flag[] = [
  {
    condition: false,
    description:
      "Exposes tools that may be useful during development or debugging.",
    id: "dev-tools",
    name: "Developer Tools",
    type: "operational",
  },
];
