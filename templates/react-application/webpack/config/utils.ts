import { resolve } from "node:path";

export const rootPath = (relativePath = ""): string =>
  // eslint-disable-next-line unicorn/prefer-module -- webpack does not support esm configuration
  resolve(__dirname, "../../../../", relativePath);

export const packagePath = (relativePath = ""): string =>
  // eslint-disable-next-line unicorn/prefer-module -- webpack does not support esm configuration
  resolve(__dirname, "../../", relativePath);

export const sourcePath = (relativePath = ""): string =>
  // eslint-disable-next-line unicorn/prefer-module -- webpack does not support esm configuration
  resolve(__dirname, "../../src", relativePath);

export const customElementStyleInsertionCallback = (
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types -- lib.dom expects a mutable type
  linkTag: HTMLLinkElement,
): void => {
  // Function cannot reference the constant from source
  // as it is executed at runtime.
  const customElementTagName = "x-application";
  customElements
    .whenDefined(customElementTagName)
    .then(() => {
      const target = document.querySelector(customElementTagName);
      target?.append(linkTag);
      return null;
    })
    .catch((error: unknown) => {
      // eslint-disable-next-line no-console -- there is no better way to handle this error
      console.error(error);
    });
};

export const shadowRootStyleInsertionCallback = (
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types -- lib.dom expects a mutable type
  linkTag: HTMLLinkElement,
): void => {
  // Function cannot reference the constant from source
  // as it is executed at runtime.
  const customElementTagName = "x-application";
  customElements
    .whenDefined(customElementTagName)
    .then(() => {
      const target = document.querySelector(customElementTagName)?.shadowRoot;
      target?.append(linkTag);
      return null;
    })
    .catch((error: unknown) => {
      // eslint-disable-next-line no-console -- there is no better way to handle this error
      console.error(error);
    });
};
