# Cypress

## Design

Cypress will create boilerplate files (`cypress.json` & `cypress/`) on first invocation.

`package.json`

```json
{
  "scripts": {
    "cy:ci": "start-server-and-test 'yarn start' 8080 'yarn cy:run'",
    "cy:open": "cypress open",
    "cy:run": "cypress run"
  },
  "devDependencies": {
    "@testing-library/cypress": "x.x.x",
    "cypress": "x.x.x",
    "eslint-plugin-cypress": "x.x.x",
    "start-server-and-test": "x.x.x"
  }
}
```

`cypress/support/commands.ts`

```typescript
import "@testing-library/cypress/add-commands.js";
```

## Rationale

`start-server-and-test` used to start the server before running cypress tests and shutdown the server when the tests end.

Uses `npm` by default to run scripts, so need to explicitly invoke with `yarn`.

`eslint-plugin-cypress` used to enforce some of the best practices recommended for using cypress.

`@testing-library/cypress` provides custom commands and utilities that encourage good testing practices.

## References

- [Cypress TypeScript Support](https://docs.cypress.io/guides/tooling/typescript-support.html)
- [`start-server-and-test`](https://github.com/bahmutov/start-server-and-test)
- [`eslint-plugin-cypress`](https://github.com/cypress-io/eslint-plugin-cypress)
- [`@testing-library/cypress`](https://github.com/testing-library/cypress-testing-library)
