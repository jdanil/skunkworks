import { createTheme, style } from "@vanilla-extract/css";

// eslint-disable-next-line import/no-unused-modules -- false positive
export const [themeClass, variables] = createTheme({
  color: {
    brand: "black",
  },
});

export const spanStyle = style({
  color: variables.color.brand,
});
