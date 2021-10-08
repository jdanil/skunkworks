import { FunctionComponent, useMemo } from "react";

import { useLocalStorage } from "@library/react-utils";

import { ThemeContext } from "./ThemeContext";

export const ThemeContextProvider: FunctionComponent = ({ children }) => {
  const prefersDarkColourScheme = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  const [colourScheme, setColourScheme] = useLocalStorage(
    "colour-scheme",
    prefersDarkColourScheme ? ("dark" as const) : ("light" as const),
  );
  const info = useMemo(
    () => ({
      colourScheme,
      setColourScheme,
    }),
    [colourScheme, setColourScheme],
  );

  return <ThemeContext.Provider value={info}>{children}</ThemeContext.Provider>;
};
