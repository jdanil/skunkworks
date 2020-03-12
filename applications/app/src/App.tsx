import * as React from "react";

import { i18n } from "./utils";

export const App: React.FC = () => (
  <div className="app">{i18n("Hello World!")}</div>
);
