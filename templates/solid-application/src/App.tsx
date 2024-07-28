import { type Component } from "solid-js";

import { i18n } from "./utils";

export const App: Component = () => (
  <div data-testid="app">{i18n("Hello, World!")}</div>
);
