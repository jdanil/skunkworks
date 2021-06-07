// import { describe, expect, it } from "@jest/globals"; // @jest/globals does not yet work with extended expect matchers
import { render, screen } from "@testing-library/react";

import { App } from "./App";

describe("app", () => {
  it("exists", async () => {
    render(<App />);
    expect(await screen.findByText("Hello, World!")).toBeInTheDocument();
  });
});
