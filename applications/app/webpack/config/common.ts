import * as HtmlWebpackPlugin from "html-webpack-plugin";

import { packagePath, sourcePath } from "./utils";

// eslint-disable-next-line import/no-default-export -- webpack requires default export
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
  plugins: [
    new HtmlWebpackPlugin({
      favicon: packagePath("public/favicon.svg"),
      meta: {
        description: "Application description goes here.",
        "theme-color": "#000000",
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      scriptLoading: "defer",
      template: packagePath("public/index.ejs"),
      title: "Application",
    }),
  ],
  resolve: {
    alias: {
      "react-dom$": "react-dom/profiling",
      "scheduler/tracing": "scheduler/tracing-profiling",
    },
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
  },
};
