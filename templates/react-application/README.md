# `@application/react-application`

A react application.

## Stack

- [Jest](https://facebook.github.io/jest/) - JavaScript testing framework.
- [React](https://facebook.github.io/react/) - JavaScript library for building user interfaces.
- [Testing Library](https://testing-library.com/) - Testing utilities.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.

## To Do

- [ ] update `package.json` manifest description
- [ ] update `README.md` title
- [ ] update `README.md` description
- [ ] add package to root `README.md` structure
- [ ] update port number
- [ ] remove this checklist

```typescript
import("node:crypto").then(({ createHash }) => {
  const input = "<package.name>";

  const hashRaw = createHash("whirlpool").update(input);
  const hashHex = hashRaw.digest("hex");
  const hashInt = parseInt(hashHex, 16) % Math.pow(10, 4);

  console.log(hashInt);
});
```
