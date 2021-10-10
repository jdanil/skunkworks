import {
  createTheme,
  createThemeContract,
  globalStyle,
  style,
} from "@vanilla-extract/css";

/* eslint-disable import/exports-last -- global styles rely on theme variables */

export const variables = createThemeContract({
  colour: {
    background: "",
    foreground: "",
    link: {
      unvisited: "",
      visited: "",
    },
  },
});

export const darkThemeClass = createTheme(variables, {
  colour: {
    background: "#1f2028",
    foreground: "#ffffff",
    link: {
      unvisited: "#ff7034",
      visited: "#cc5a2a",
    },
  },
});

export const lightThemeClass = createTheme(variables, {
  colour: {
    background: "#ffffff",
    foreground: "#000000",
    link: {
      unvisited: "#0000ee",
      visited: "#551a8b",
    },
  },
});

export const contextStyle = style({
  background: variables.colour.background,
  color: variables.colour.foreground,
  fill: variables.colour.foreground,
  transitionDuration: "500ms",
  transitionProperty: [
    "backdrop-filter",
    "background-color",
    "border-color",
    "box-shadow",
    "color",
    "fill",
    "filter",
    "opacity",
    "stroke",
    "transform",
  ].join(", "),
  transitionTimingFunction: "ease-in-out",
});

/* eslint-enable import/exports-last -- re-enable */

globalStyle("body", {
  margin: 0,
});

globalStyle(`html, body, #root, ${contextStyle}`, {
  height: "100%",
});

globalStyle(":link", {
  color: variables.colour.link.unvisited,
  fill: variables.colour.link.unvisited,
});

globalStyle(":visited", {
  color: variables.colour.link.visited,
  fill: variables.colour.link.visited,
});
