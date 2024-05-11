import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import { customElementTagName } from "./config/application";
import { environment } from "./config/environment";

import "./index.scss";

if (environment === "development") {
  const { initialise } = await import("./mocks/browser");

  initialise();
}

class Application extends HTMLElement {
  public constructor() {
    super();

    // Define the `this.shadowRoot` readonly property by calling `attachShadow`.
    this.attachShadow({ mode: "open" });
  }

  public connectedCallback(): void {
    this.#render();
  }

  public attributeChangedCallback(
    attribute: string,
    _previous: string | null,
    next: string | null,
  ): void {
    this.#render({ [attribute]: next });
  }

  #getProps(props?: object): object {
    return {
      ...Object.fromEntries(
        [...this.attributes].map((attribute) => [
          attribute.nodeName,
          attribute.nodeValue,
        ]),
      ),
      ...props,
    };
  }

  #render(props?: object): void {
    if (this.shadowRoot != null) {
      createRoot(this.shadowRoot).render(
        <StrictMode>
          <App {...this.#getProps(props)} />
        </StrictMode>,
      );
    }
  }
}

customElements.define(customElementTagName, Application);
