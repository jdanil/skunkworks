import { FunctionComponent, useMemo, useState } from "react";

import { ThemeContext } from "./ThemeContext";

export const ThemeContextProvider: FunctionComponent = ({ children }) => {
  const prefersDarkColourScheme = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  const [colourScheme, setColourScheme] = useState(
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
