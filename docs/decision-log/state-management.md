# State Management

## Context

Types of State:

- Local State
  - e.g. React `useState` Hook
- Shared State
  - e.g. React Context, Redux
- Remote State (i.e. API)
  - e.g. React Context, Redux

Shared & Remote State Options:

- `redux` + `redux-observable` + `rxjs` + `react-redux`
  - Drawbacks
    - Boilerplate
- React Context
  - Drawbacks
    - "Provider Hell"
    - Unintentional Re-Renders
- `react-sweet-state`

## Decision

- Local State: React `useState` Hook
- Shared State: `react-sweet-state`
- Remote State: `react-sweet-state`

## Rationale

## References

- [The Tragedy of Scale](https://www.youtube.com/watch?v=ktaSmHpXjSE)
- [`react-sweet-state`](https://github.com/atlassian/react-sweet-state)
- [`react-sweet-state` Comparison](https://github.com/atlassian/react-sweet-state/blob/master/docs/introduction/comparison.md)
