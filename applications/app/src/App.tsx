import type { FunctionComponent } from "react";

import { spanStyle, themeClass } from "./App.css";
import { i18n } from "./utils";

export const App: FunctionComponent = () => (
  <div className={themeClass}>
    <span className={spanStyle}>{i18n("Hello, World!")}</span>
  </div>
);
