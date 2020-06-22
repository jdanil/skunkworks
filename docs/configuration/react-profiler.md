# React Profiler

## Design

`webpack/config/common.ts`

```typescript
export default {
  resolve: {
    alias: {
      "react-dom$": "react-dom/profiling",
      "scheduler/tracing": "scheduler/tracing-profiling",
    },
  },
};
```

`Component.tsx`

```typescript jsx
import * as React from "react";

const Component: React.FunctionComponent = () => (
  <React.Profiler id="Component" onRender={callback}>
    ...
  </React.Profiler>
);
```

## Rationale

## References

- [React Profiler](https://reactjs.org/docs/profiler.html)
- [bvaughn - Profiling in Production](https://gist.github.com/bvaughn/25e6233aeb1b4f0cdb8d8366e54a3977)
- [bvaughn - Interaction Tracing with React](https://gist.github.com/bvaughn/8de925562903afd2e7a12554adcdda16)
- [Kent C. Dodds - Profile a React App for Performance](https://kentcdodds.com/blog/profile-a-react-app-for-performance)
- [Kent C. Dodds - React Production Performance Monitoring](https://kentcdodds.com/blog/react-production-performance-monitoring)
