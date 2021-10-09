import type { FunctionComponent } from "react";
import { ReactQueryDevtools } from "react-query/devtools";

import { useFlag } from "../hooks/use-flag";

export const DeveloperTools: FunctionComponent = () =>
  useFlag("dev-tools") ? <ReactQueryDevtools /> : null;
