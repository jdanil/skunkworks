# Testing

## Stack

- [Jest](https://facebook.github.io/jest/) - JavaScript testing framework.
- [Nock](https://github.com/nock/nock) - HTTP server mocking and expectations library for Node.js.
- [Testing Library](https://testing-library.com/) - Testing utilities.

## Snapshot Testing

Snapshot testing should be done judiciously.

> Snapshot tests are a compliment for conventional tests, not a replacement.

Snapshots...

- do not have specific assertions, so...
  - it indicates there has been no critical thought on what behaviours to enforce.
  - root causes of test failures are not immediately obvious.
- can be easily updated, unintentionally introducing errors.
- are easily overlooked in code reviews.
- are fragile, potentially failing several tests for a single issue.
- do not allow for test-driven development.
- provide a false sense of security.

For these reasons, its usage is generally discouraged, but there may be some appropriate use cases.

## Style

Group tests into test suites using the `describe` method as defined by Jest.
Ensure that your test suite and individual tests have meaningful names that describe what is being done.

## Continuous Integration

Tests must run as part of the build and package process.
Any failing tests must break the build.
No updates should be published or merged without a green build.

## Common Mistakes

### Using the Wrong Render Mode for Enzyme

Using the wrong type of rendering will not necessarily break your tests, but will slow them down.
Please refer to the Enzyme documentation to understand the difference between `shallow`, `render` and `mount`.

### Snapshot Tests Should be Used Judiciously

Snapshot tests asserts everything about a component at once, your unit tests should assert one thing.
Snapshots can be helpful, but before creating a snapshot, consider whether you need a snapshot or a unit test with a simple assertion.

### Forgetting to Test Asynchronous Code Asynchronously

When asynchronous code is not tested in an asynchronous manner it can fail silently.
You can read more about testing asynchronous code in the Jest documentation.

## Resources

- [Testing Playground](https://testing-playground.com/)
