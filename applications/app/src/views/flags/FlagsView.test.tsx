// import { describe, expect, it } from "@jest/globals"; // @jest/globals does not yet work with extended expect matchers
import { render, screen } from "@testing-library/react";

import { FlagsView } from "./FlagsView";

describe("flags-view", () => {
  it("exists", async () => {
    render(<FlagsView />);
    await expect(
      screen.findByText("Hello, Flags!"),
    ).resolves.toBeInTheDocument();
  });
});
