import { expect, test } from "@playwright/test";

test.describe("home-view", () => {
  test("renders", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByTestId("home-view")).toBeVisible();
    await expect(page.getByText("Hello, World!")).toBeVisible();
  });
});
