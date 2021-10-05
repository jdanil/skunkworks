import { createContext } from "react";

import type { Flag } from "../../config/flags";

export type FlagContextInfo = {
  readonly flags: readonly Flag[];
};

export const FlagContext = createContext<FlagContextInfo>({ flags: [] });
