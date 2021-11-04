import { setupServer } from "msw/node";

import { handlers } from "./handlers";

// Setup request interception with the given handlers.
export const server = setupServer(...handlers);
