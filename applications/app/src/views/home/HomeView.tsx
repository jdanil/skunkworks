import type { FunctionComponent } from "react";

import { i18n } from "../../utils";

export const HomeView: FunctionComponent = () => (
  <div data-testid="home-view">{i18n("Hello, World!")}</div>
);
