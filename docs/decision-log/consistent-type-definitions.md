# Consistent Type Definitions

## Decision

Libraries should prefer interfaces over type aliases.

Other packages should prefer type aliases over interfaces.

## Rationale

Type aliases support unions, primitives, shorthand functions, and advanced type functions.

Interfaces support declaration merging.
This is especially important for libraries as it allows consumers to extend type definitions.

> Because [an ideal property of software is being open to extension](https://en.wikipedia.org/wiki/Open/closed_principle), you should always use an interface over a type alias if possible.
>
> -- [TypeScript](https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases)

## References

- [Martin Hotell - Interfaces vs. Type Aliases](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c)
- [Pawel Grzybek - Interfaces vs. Type Aliases](https://pawelgrzybek.com/typescript-interface-vs-type/)
- [TypeScript - Interface vs. Type Aliases](https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases)
- [Basarat - TypeScript Types vs. Interfaces](https://www.youtube.com/watch?v=IXAT3If0pGI)
