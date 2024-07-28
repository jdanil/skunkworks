// import { describe, expect, it } from "@jest/globals"; // @jest/globals does not yet work with extended expect matchers
import { render, screen } from "@solidjs/testing-library";

import { App } from "./App";

describe("app", () => {
  it("exists", async () => {
    render(() => <App />);
    await expect(
      screen.findByText("Hello, World!"),
    ).resolves.toBeInTheDocument();
  });
});
