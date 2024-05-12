// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types -- module does not support typescript
const shadowRootStyleInsertionCallback = (linkTag) => {
  // Function cannot reference the constant from source
  // as it is executed at runtime.
  const customElementTagName = "x-application";
  customElements
    .whenDefined(customElementTagName)
    .then(() => {
      const target = document.querySelector(customElementTagName)?.shadowRoot;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- module does not support typescript
      target?.append(linkTag);
      return null;
    })
    // eslint-disable-next-line @typescript-eslint/use-unknown-in-catch-callback-variable -- module does not support typescript
    .catch((error) => {
      // eslint-disable-next-line no-console -- there is no better way to handle this error
      console.error(error);
    });
};

// eslint-disable-next-line no-restricted-exports, import/no-default-export -- style-loader requires default export
export default shadowRootStyleInsertionCallback;
