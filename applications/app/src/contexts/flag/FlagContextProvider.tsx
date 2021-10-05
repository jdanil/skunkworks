import { FunctionComponent, useMemo } from "react";

import { FlagContext, FlagContextInfo } from "./FlagContext";

export type FlagContextProviderProps = FlagContextInfo;

export const FlagContextProvider: FunctionComponent<FlagContextProviderProps> =
  ({ children, flags }) => {
    const info = useMemo(
      () => ({
        flags: flags.map((flag) => {
          const localCondition = localStorage.getItem(flag.id);

          return {
            ...flag,
            condition:
              localCondition === null
                ? flag.condition
                : (JSON.parse(localCondition) as unknown as boolean),
          };
        }),
      }),
      [flags],
    );

    return <FlagContext.Provider value={info}>{children}</FlagContext.Provider>;
  };
