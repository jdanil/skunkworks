import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./App.tsx";

// eslint-disable-next-line functional/no-expression-statement
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root"),
);
