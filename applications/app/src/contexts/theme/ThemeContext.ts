import { createContext } from "react";

export type ColourScheme = "light" | "dark";

export type ThemeContextInfo = {
  readonly colourScheme: ColourScheme;
  readonly setColourScheme: (colourScheme: ColourScheme) => void;
};

export const ThemeContext = createContext<ThemeContextInfo>({
  colourScheme: "light",
  setColourScheme: () => ({}),
});
