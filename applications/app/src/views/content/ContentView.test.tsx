// import { describe, expect, it } from "@jest/globals"; // @jest/globals does not yet work with extended expect matchers
import { render, screen } from "@testing-library/react";
import { HttpResponse, http } from "msw";

import { TestProvider } from "../../../test/utils/context";
import { server } from "../../mocks/server";
import { ContentView } from "./ContentView";

describe("content-view", () => {
  it("exists", async () => {
    const id = "id";
    const title = "title";
    server.use(
      http.get("https://www.reddit.com/.json", () =>
        HttpResponse.json(
          {
            data: {
              children: [
                {
                  data: {
                    id,
                    title,
                  },
                },
              ],
            },
          },
          { status: 200 },
        ),
      ),
    );

    render(<ContentView />, {
      wrapper: (props) => <TestProvider withReactQueryContext {...props} />,
    });

    await expect(screen.findByText(title)).resolves.toBeInTheDocument();
  });
});
