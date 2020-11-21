import type { FunctionComponent } from "react";

import { i18n } from "./utils";

export const App: FunctionComponent = () => <div>{i18n("Hello, World!")}</div>;
