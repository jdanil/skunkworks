import { FunctionComponent, useCallback, useMemo, useState } from "react";

import type { Flag } from "../../config/flags";
import { FlagContext, FlagContextInfo } from "./FlagContext";

const getFlagKey = (id: Flag["id"]): string => `flag:${id}`;

export type FlagContextProviderProps = Pick<FlagContextInfo, "flags">;

export const FlagContextProvider: FunctionComponent<FlagContextProviderProps> =
  ({ children, flags: initialFlags }) => {
    const [flags, setFlags] = useState(
      initialFlags.map((flag) => {
        const condition = localStorage.getItem(getFlagKey(flag.id));

        return {
          ...flag,
          condition:
            condition === null
              ? flag.condition
              : (JSON.parse(condition) as unknown as boolean),
        };
      }),
    );

    const setFlag = useCallback(
      (id: Flag["id"], condition: Flag["condition"]) => {
        localStorage.setItem(getFlagKey(id), JSON.stringify(condition));
        setFlags((previousFlags) =>
          previousFlags.map((flag) =>
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- false positive
            flag.id === id ? { ...flag, condition } : flag,
          ),
        );
      },
      [setFlags],
    );

    const info = useMemo(
      () => ({
        flags,
        setFlag,
      }),
      [flags, setFlag],
    );

    return <FlagContext.Provider value={info}>{children}</FlagContext.Provider>;
  };
