import { createContext } from "react";

import { type Flag } from "../../config/flags";

export type FlagContextInfo = {
  readonly flags: readonly Flag[];
  readonly setFlag: (id: Flag["id"], condition: Flag["condition"]) => void;
};

export const FlagContext = createContext<FlagContextInfo>({
  flags: [],
  setFlag: () => ({}),
});
