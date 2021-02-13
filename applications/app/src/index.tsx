import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./App";

import "./index.scss";

// eslint-disable-next-line functional/no-expression-statement -- required for react entry point
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root"),
);
