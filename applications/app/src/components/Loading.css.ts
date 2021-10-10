import { keyframes, style } from "@vanilla-extract/css";

const spin = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

export const containerStyle = style({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
});

export const iconStyle = style({
  animationDuration: "1.5s",
  animationIterationCount: "infinite",
  animationName: spin,
  animationTimingFunction: "linear",
  display: "flex",
});
