import { type FunctionComponent } from "react";

import { i18n } from "./utils";

export const App: FunctionComponent = () => (
  <div data-testid="app">{i18n("Hello, World!")}</div>
);
