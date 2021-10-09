import classNames from "classnames";
import { FunctionComponent, useMemo } from "react";

import { useLocalStorage } from "@library/react-utils";

import { ThemeContext } from "./ThemeContext";
import {
  contextStyle,
  darkThemeClass,
  lightThemeClass,
} from "./ThemeContextProvider.css";

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

  return (
    <ThemeContext.Provider value={info}>
      <div
        className={classNames(contextStyle, {
          [darkThemeClass]: colourScheme === "dark",
          [lightThemeClass]: colourScheme === "light",
        })}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
