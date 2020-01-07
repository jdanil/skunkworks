import * as React from "react";

import { i18n } from "./utils.ts";

// eslint-disable-next-line functional/functional-parameters
export const App: React.FC = () => (
  <div className="App">{i18n("Hello World!")}</div>
);
