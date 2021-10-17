export type Flag = {
  readonly condition: boolean;
  readonly description: string;
  readonly id: "dev-tools" | "mock-apis" | "telemetry";
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
  {
    condition: false,
    description:
      "Starts a service worker to intercept API requests and return mock responses.",
    id: "mock-apis",
    name: "Mock APIs",
    type: "operational",
  },
  {
    condition: true,
    description:
      "Collects and transmits usage, performance, and error reports for monitoring.",
    id: "telemetry",
    name: "Telemetry",
    type: "operational",
  },
];
