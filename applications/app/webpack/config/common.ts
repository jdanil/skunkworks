// eslint-disable-next-line import/no-default-export
export default {
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
  },
};
