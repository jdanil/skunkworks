import { test } from "@playwright/test";

test.describe("content-view", () => {
  // eslint-disable-next-line playwright/no-skipped-test -- TODO: add expectation and un-skip
  test.skip("renders", async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem("flag:mock-apis", JSON.stringify(true));
    });
    await page.goto("/content");
  });
});
