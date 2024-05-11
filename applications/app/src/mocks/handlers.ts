import { faker } from "@faker-js/faker";
import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("https://www.reddit.com/.json", () =>
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
      { status: 200 },
    ),
  ),
];
