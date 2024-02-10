// eslint-disable-next-line import/no-unused-modules -- module is required by jest https://mswjs.io/docs/getting-started/integrate/node
import { configure } from "@testing-library/react";

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
