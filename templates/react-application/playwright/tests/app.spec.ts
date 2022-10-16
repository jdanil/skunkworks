import { expect, test } from "@playwright/test";

test.describe("app", () => {
  test("renders", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.locator('[data-testid="app"]', { hasText: "Hello, World!" }),
    ).toBeVisible();
  });
});
