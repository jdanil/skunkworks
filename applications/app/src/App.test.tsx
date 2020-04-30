import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import * as React from "react";

import { App } from "./App";

describe("app", () => {
  it("exists", async () => {
    const { findAllByText } = render(<App />);
    expect(await findAllByText("Hello, World!")).toHaveLength(1);
  });
});
