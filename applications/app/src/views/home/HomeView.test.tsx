// import { describe, expect, it } from "@jest/globals"; // @jest/globals does not yet work with extended expect matchers
import { render, screen } from "@testing-library/react";

import { HomeView } from "./HomeView";

describe("home-view", () => {
  it("exists", async () => {
    render(<HomeView />);

    await expect(
      screen.findByText("Hello, World!"),
    ).resolves.toBeInTheDocument();
  });
});
