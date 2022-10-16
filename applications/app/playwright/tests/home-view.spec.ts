import { expect, test } from "@playwright/test";

test.describe("home-view", () => {
  test("renders", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.locator('[data-testid="home-view"]', { hasText: "Hello, World!" }),
    ).toBeVisible();
  });
});
