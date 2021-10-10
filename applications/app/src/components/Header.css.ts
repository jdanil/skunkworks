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

export const listItemStyle = style({
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
});

export const logoStyle = style({
  display: "flex",
  marginRight: "0.5rem",
});

export const navStyle = style({
  alignItems: "center",
  display: "flex",
});
