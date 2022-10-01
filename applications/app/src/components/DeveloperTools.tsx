import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { FunctionComponent } from "react";

import { useFlag } from "../hooks/use-flag";

export const DeveloperTools: FunctionComponent = () =>
  useFlag("dev-tools") ? <ReactQueryDevtools /> : null;
