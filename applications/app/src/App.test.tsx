// import { describe, expect, it } from "@jest/globals"; // @jest/globals does not yet work with extended expect matchers
import { render } from "@testing-library/react";

import { App } from "./App";

describe("app", () => {
  it("exists", async () => {
    const { findByText } = render(<App />);
    expect(await findByText("Hello, World!")).toBeInTheDocument();
  });
});
