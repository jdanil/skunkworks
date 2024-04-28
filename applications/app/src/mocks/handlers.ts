import { faker } from "@faker-js/faker";
import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("https://www.reddit.com/.json", async () =>
    HttpResponse.json(
      {
        data: {
          children: Array.from({ length: 25 }, () => ({
            data: {
              id: faker.string.uuid(),
              title: faker.lorem.sentence(),
            },
          })),
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- status code
      { status: 200 },
    ),
  ),
];
