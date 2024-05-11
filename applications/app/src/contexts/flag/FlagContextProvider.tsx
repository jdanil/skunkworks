import { type FunctionComponent, useCallback, useMemo, useState } from "react";

import { type Flag } from "../../config/flags";
import { FlagContext, type FlagContextInfo } from "./FlagContext";

const getFlagKey = (id: Flag["id"]): string => `flag:${id}`;

export type FlagContextProviderProps = Pick<FlagContextInfo, "flags"> & {
  readonly children?: React.ReactNode;
};

export const FlagContextProvider: FunctionComponent<
  FlagContextProviderProps
> = ({ children, flags: initialFlags }) => {
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
          flag.id === id ? { ...flag, condition } : flag,
        ),
      );
      // `storage` events are not dispatched by default within the same page that triggered the change.
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event
      window.dispatchEvent(new Event("storage"));
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
