import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./App";
import { environment } from "./config/environment";

import "./index.scss";

if (environment === "development") {
  const { initialise } = await import("./mocks/browser");

  initialise();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root"),
);
