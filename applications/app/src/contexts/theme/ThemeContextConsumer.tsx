import type { FunctionComponent, JSX } from "react";

import { ThemeContext, type ThemeContextInfo } from "./ThemeContext";

export type ThemeContextConsumerProps = {
  readonly children: (props: ThemeContextInfo) => JSX.Element;
};

export const ThemeContextConsumer: FunctionComponent<
  ThemeContextConsumerProps
> = ({ children }) => <ThemeContext.Consumer>{children}</ThemeContext.Consumer>;
