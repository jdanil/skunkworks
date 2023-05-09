import type { FunctionComponent, JSX } from "react";

import { FlagContext, type FlagContextInfo } from "./FlagContext";

export type FlagContextConsumerProps = {
  readonly children: (props: FlagContextInfo) => JSX.Element;
};

export const FlagContextConsumer: FunctionComponent<
  FlagContextConsumerProps
> = ({ children }) => <FlagContext.Consumer>{children}</FlagContext.Consumer>;
