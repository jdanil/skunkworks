import { expect, test } from "@playwright/test";

test.describe("app", () => {
  test("renders", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByTestId("app")).toBeVisible();
    await expect(page.getByText("Hello, World!")).toBeVisible();
  });
});
