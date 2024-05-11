import { useContext } from "react";

import { type Flag } from "../config/flags";
import { FlagContext } from "../contexts/flag/FlagContext";

export const useFlag = (id: Flag["id"]): boolean => {
  const { flags } = useContext(FlagContext);

  const match = flags.find((flag) => flag.id === id);

  if (match == null) {
    throw new Error("Flag not found.");
  }

  return match.condition;
};
