import * as sonarjs from "eslint-plugin-sonarjs";

export default [
  sonarjs.configs.recommended,
  {
    rules: {
      "sonarjs/fixme-tag": "off", // recommended error, prefer unicorn/expiring-todo-comments
      "sonarjs/function-return-type": "off", // recommended error, unnecessary w/ typescript
      "sonarjs/no-nested-conditional": "off", // recommended error, complexity mitigated by formatting
      "sonarjs/todo-tag": "off", // recommended error, prefer unicorn/expiring-todo-comments
      "sonarjs/void-use": "off", // recommended error, avoid conflict w/ @typescript-eslint/no-floating-promises
    },
  },
];
