import type { FunctionComponent } from "react";

import { i18n } from "../utils";

export const SuspenseFallback: FunctionComponent = () => (
  <div>{i18n("Loading...")}</div>
);
