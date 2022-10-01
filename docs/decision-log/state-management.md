# State Management

## Context

Types of State:

- Local State
  - e.g. React `useState` Hook
- Shared State
  - e.g. React Context, Redux
- Remote State (i.e. API)
  - e.g. React Context, Redux

Shared State Options:

- `redux` + `redux-observable` + `rxjs` + `react-redux`
  - Drawbacks
    - Boilerplate
- React Context
  - Drawbacks
    - "Provider Hell"
    - Unintentional Re-Renders
- `constate` / `recoil` / `react-tracked`

Remote State Options:

- `redux` + `redux-observable` + `rxjs` + `react-redux`
  - Drawbacks
    - Boilerplate
- React Context
  - Drawbacks
    - "Provider Hell"
    - Unintentional Re-Renders
- `constate` / `recoil` / `react-tracked` / `@tanstack/react-query`

## Decision

- Local State: React `useState` Hook
- Shared State: `recoil`
- Remote State: `@tanstack/react-query`

## Rationale

## References

- [The Tragedy of Scale](https://www.youtube.com/watch?v=ktaSmHpXjSE)
- [`jotai` Comparison](https://docs.pmnd.rs/jotai/basics/comparison)
- [`@tanstack/react-query`](https://tanstack.com/query/)
- [`recoil`](https://github.com/facebookexperimental/Recoil)
- [`react-sweet-state` Comparison](https://github.com/atlassian/react-sweet-state/blob/master/docs/introduction/comparison.md)
- [`react-tracked` Comparison](https://github.com/dai-shi/react-tracked/blob/master/website/docs/comparison.md)
