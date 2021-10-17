import { setupWorker } from "msw";

import { handlers } from "./handlers";

// Configures a Service Worker with the given request handlers.
const worker = setupWorker(...handlers);

// Conditionally start msw and subscribe to local storage changes.
export const initialise = (): void => {
  const condition = localStorage.getItem("flag:mock-apis");
  let mock = condition == null ? false : (JSON.parse(condition) as boolean);

  if (mock) {
    void worker.start();
  }

  window.addEventListener("storage", () => {
    const nextCondition = localStorage.getItem("flag:mock-apis");
    const nextMock =
      nextCondition == null ? false : (JSON.parse(nextCondition) as boolean);

    if (mock !== nextMock) {
      if (!mock && nextMock) {
        void worker.start();
      }

      if (mock && !nextMock) {
        worker.stop();
      }

      mock = nextMock;
    }
  });
};
