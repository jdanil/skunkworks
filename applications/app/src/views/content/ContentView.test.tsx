// import { describe, expect, it } from "@jest/globals"; // @jest/globals does not yet work with extended expect matchers
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import type { ReactElement } from "react";

import { TestProvider } from "../../../test/utils/context";
import { server } from "../../mocks/server";
import { ContentView } from "./ContentView";

// FIXME: resolve @vanilla-extract esm issue and remove mock.
jest.mock("../../components/Loading", () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention -- key is a react component name
  Loading: (): ReactElement => <div>Loading...</div>,
}));

describe("content-view", () => {
  it("exists", async () => {
    const id = "id";
    const title = "title";
    server.use(
      rest.get("https://www.reddit.com/.json", (_request, response, context) =>
        response(
          context.status(200),
          context.json({
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
          }),
        ),
      ),
    );

    render(<ContentView />, {
      wrapper: (props) => <TestProvider withReactQueryContext {...props} />,
    });

    await expect(screen.findByText(title)).resolves.toBeInTheDocument();
  });
});
