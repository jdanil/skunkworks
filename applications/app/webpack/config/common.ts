import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

import { name } from "../../src/config/application";
import { packagePath, sourcePath } from "./utils";

// eslint-disable-next-line no-restricted-exports, import/no-default-export -- webpack requires default export
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
        test: /\.css$/v,
        use: [
          {
            loader: "style-loader",
            options: {
              // eslint-disable-next-line unicorn/prefer-module -- webpack does not support esm configuration
              insert: require.resolve(
                "./runtime/shadow-root-style-insertion-callback",
              ),
            },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        issuer: /\.s?css$/v,
        test: /\.(?<extension>eot|svg|ttf|woff2?)$/v,
        type: "asset/resource",
      },
      {
        issuer: /\.[jt]sx?$/v,
        test: /\.svg$/v,
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
      // eslint-disable-next-line unicorn/prefer-string-replace-all -- requires node >= 15
      title: name.replace(
        /\w\S*/gv,
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
