import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

import { packagePath, sourcePath } from "./utils";

// eslint-disable-next-line import/no-default-export -- webpack requires default export
export default {
  entry: sourcePath("index.tsx"),
  experiments: {
    outputModule: true,
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        parser: {
          amd: false,
        },
      },
      {
        // eslint-disable-next-line security/detect-unsafe-regex -- not evaluated at runtime
        test: /\.(?<extension>eot|ttf|woff2?)$/u,
        type: "asset/resource",
      },
      {
        test: /\.svg$/u,
        use: ["@svgr/webpack"],
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
      scriptLoading: "module",
      template: packagePath("public/index.ejs"),
      title: "Application",
    }),
    new VanillaExtractPlugin(),
  ],
  resolve: {
    alias: {
      "react-dom$": "react-dom/profiling",
      "scheduler/tracing": "scheduler/tracing-profiling",
    },
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
  },
};
