// eslint-disable-next-line import/no-unused-modules -- module is required by jest https://mswjs.io/docs/getting-started/integrate/node
import { TextEncoder } from "node:util";

import { configure } from "@testing-library/react";

// https://github.com/jsdom/jsdom/issues/2524
// eslint-disable-next-line functional/immutable-data -- polyfilling global
global.TextEncoder = TextEncoder;

// eslint-disable-next-line import/first -- must be imported after polyfills
import { server } from "../src/mocks/server";

configure({ reactStrictMode: true });

// Before all tests...
beforeAll(() => {
  // ... enable mocking.
  server.listen();
});

// After each test...
afterEach(() => {
  // ... reset any request handlers tests may use,
  // so that they don't affect other tests.
  server.resetHandlers();
});

// After all tests...
afterAll(() => {
  // ... clean up.
  server.close();
});
