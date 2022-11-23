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
  amd: false as const,
  devServer: {
    client: {
      overlay: false,
    },
    historyApiFallback: true,
    port: 9984,
  },
  entry: sourcePath("index.tsx"),
  experiments: {
    css: false,
    futureDefaults: true,
    outputModule: true,
    topLevelAwait: true,
  },
  module: {
    rules: [
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
        /* eslint-disable @typescript-eslint/naming-convention -- property keys represents meta tags https://github.com/jantimon/html-webpack-plugin#meta-tags */
        description: "Application description goes here.",
        "theme-color": "#000000",
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        /* eslint-enable @typescript-eslint/naming-convention -- re-enable */
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
      /* eslint-disable @typescript-eslint/naming-convention -- property keys represent import paths https://webpack.js.org/configuration/resolve/#resolvealias */
      "react-dom$": "react-dom/profiling",
      "scheduler/tracing": "scheduler/tracing-profiling",
      /* eslint-enable @typescript-eslint/naming-convention -- re-enable */
    },
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
  },
};
