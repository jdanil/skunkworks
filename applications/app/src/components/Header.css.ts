import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  padding: "1rem",
  position: "sticky",
});

export const listStyle = style({
  display: "flex",
  flex: 1,
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const navStyle = style({
  display: "flex",
});
