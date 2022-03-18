import { faker } from "@faker-js/faker";
import { rest } from "msw";

export const handlers = [
  rest.get("https://www.reddit.com/.json", (_request, response, context) =>
    response(
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- status code
      context.status(200),
      context.json({
        data: {
          children: Array.from({ length: 25 }, () => ({
            data: {
              id: faker.datatype.uuid(),
              title: faker.lorem.sentence(),
            },
          })),
        },
      }),
    ),
  ),
];
