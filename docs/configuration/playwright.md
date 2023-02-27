# Playwright

## Design

```bash
yarn dlx playwright install
```

`package.json`

```json
{
  "scripts": {
    "playwright": "playwright test"
  },
  "devDependencies": {
    "@playwright/test": "x.x.x",
    "eslint-plugin-playwright": "x.x.x"
  }
}
```

`playwright.config.ts`

```typescript
import { defineConfig } from "@playwright/test";

// eslint-disable-next-line node/no-process-env -- check `process.env` to detect ci environment
const CI = !!process.env.CI;
const ROOT_DIR = "playwright";
const URL = "http://localhost:8080";

// eslint-disable-next-line import/no-default-export -- playwright requires default export
export default defineConfig({
  forbidOnly: CI,
  fullyParallel: true,
  outputDir: `${ROOT_DIR}/artifacts`,
  reporter: [
    ["html", { outputFolder: `${ROOT_DIR}/report` }],
    [CI ? "dot" : "list"],
  ],
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- retries
  retries: CI ? 3 : 0,
  testDir: `${ROOT_DIR}/tests`,
  use: {
    baseURL: URL,
    screenshot: "only-on-failure",
    trace: "on-first-retry",
    video: "on-first-retry",
  },
  webServer: {
    command: "yarn start:production",
    reuseExistingServer: !CI,
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- timeout
    timeout: 90 * 1000,
    url: URL,
  },
});
```

## Rationale

`eslint-plugin-playwright` used to enforce some of the best practices recommended for using playwright.

## References

- [Playwright](https://playwright.dev/)
- [`eslint-plugin-playwright`](https://github.com/playwright-community/eslint-plugin-playwright)
