import { sourcePath } from "./utils";

// eslint-disable-next-line import/no-default-export
export default {
  entry: sourcePath("index.tsx"),
  module: {
    rules: [
      {
        parser: {
          amd: false,
        },
      },
    ],
  },
  resolve: {
    alias: {
      "react-dom$": "react-dom/profiling",
      "scheduler/tracing": "scheduler/tracing-profiling",
    },
    extensions: [".d.ts", ".js", ".json", ".jsx", ".ts", ".tsx"],
  },
};
