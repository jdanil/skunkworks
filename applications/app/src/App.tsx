import * as React from "react";

import { i18n } from "./utils";

export const App: React.FC = () => (
  <div className="App">{i18n("Hello World!")}</div>
);
