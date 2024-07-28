import { render } from "solid-js/web";

import { App } from "./App";
import { customElementTagName } from "./config/application";
import { environment } from "./config/environment";

import "./index.css";

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
      render(() => <App {...this.#getProps(props)} />, this.shadowRoot);
    }
  }
}

customElements.define(customElementTagName, Application);
