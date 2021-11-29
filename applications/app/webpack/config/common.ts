import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

import { name } from "../../src/config/application";
import {
  packagePath,
  shadowRootStyleInsertionCallback,
  sourcePath,
} from "./utils";

// eslint-disable-next-line import/no-default-export -- webpack requires default export
export default {
  entry: sourcePath("index.tsx"),
  experiments: {
    futureDefaults: true,
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
        test: /\.css$/u,
        use: [
          {
            loader: "style-loader",
            options: {
              insert: shadowRootStyleInsertionCallback,
            },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        issuer: /\.s?css$/u,
        // eslint-disable-next-line security/detect-unsafe-regex -- not evaluated at runtime
        test: /\.(?<extension>eot|svg|ttf|woff2?)$/u,
        type: "asset/resource",
      },
      {
        issuer: /\.[j|t]sx?$/u,
        test: /\.svg$/u,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
            },
          },
        ],
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
      title: name.replace(
        /\w\S*/gu,
        (string) =>
          string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(),
      ),
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
