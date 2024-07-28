import JSDOMEnvironment from "jest-environment-jsdom";

// eslint-disable-next-line no-restricted-exports, import/no-default-export -- `jest` expects a default export
export default class PatchedJSDOMEnvironment extends JSDOMEnvironment {
  public constructor(
    // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types, unicorn/prevent-abbreviations -- `jest-environment-jsdom` parameters are mutable, arguments is not allowed in strict mode
    ...args: ConstructorParameters<typeof JSDOMEnvironment>
  ) {
    super(...args);

    // https://github.com/jsdom/jsdom/issues/1724
    this.global.fetch = fetch;
    this.global.Headers = Headers;
    this.global.Request = Request;
    this.global.Response = Response;
  }
}
