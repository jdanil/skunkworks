# Consistent Type Definitions

## Decision

Prefer interfaces over type aliases.

## Rationale

Interfaces support declaration merging.
This is especially important for libraries as it allows consumers to extend type definitions.

> Because [an ideal property of software is being open to extension](https://en.wikipedia.org/wiki/Open/closed_principle), you should always use an interface over a type alias if possible.
>
> -- <cite>[TypeScript](https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases)</cite>

Resolution of interfaces is deferred, which means that interfaces can be defined recursively.
Resolution of type aliases is eager, a compiler error will be thrown stating "type alias circularly references itself".

## Consequences

Interfaces may be merged unintentionally, while type aliases would prevent this by raising a "duplicate identifier" compiler error.
However, consistency is preferred over mixing type definitions.

## References

- [Martin Hotell - Interfaces vs. Type Aliases](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c)
- [Pawel Grzybek - Interfaces vs. Type Aliases](https://pawelgrzybek.com/typescript-interface-vs-type/)
- [TypeScript - Interface vs. Type Aliases](https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases)
