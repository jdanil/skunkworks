import { type FunctionComponent, lazy, Suspense } from "react";

import { useFlag } from "../hooks/use-flag";
import { SuspenseFallback } from "./SuspenseFallback";

const ReactQueryDevtools = lazy(async () =>
  import("@tanstack/react-query-devtools").then((module) => ({
    default: module.ReactQueryDevtools,
  })),
);

export const DeveloperTools: FunctionComponent = () =>
  useFlag("dev-tools") ? (
    <Suspense fallback={<SuspenseFallback />}>
      <ReactQueryDevtools />
    </Suspense>
  ) : null;
