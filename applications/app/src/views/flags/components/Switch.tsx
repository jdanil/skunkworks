import { type FunctionComponent, useCallback, useContext } from "react";

import { type Flag } from "../../../config/flags";
import { FlagContext } from "../../../contexts/flag/FlagContext";

export type SwitchProps = Flag;

export const Switch: FunctionComponent<SwitchProps> = ({ condition, id }) => {
  const { setFlag } = useContext(FlagContext);

  const handleChange = useCallback(() => {
    setFlag(id, !condition);
  }, [condition, id, setFlag]);

  return <input checked={condition} onChange={handleChange} type="checkbox" />;
};
