import * as ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { ForkTsCheckerWebpackPlugin } from "fork-ts-checker-webpack-plugin/lib/plugin";
import reactRefreshTypeScript from "react-refresh-typescript";
import { type CustomTransformers } from "typescript";
import { type Configuration, type WebpackPluginInstance } from "webpack";
import { merge } from "webpack-merge";

import common from "./common";
import { sourcePath } from "./utils";

// eslint-disable-next-line no-restricted-exports, import/no-default-export -- webpack requires default export
export default merge<Configuration>(common, {
  cache: {
    buildDependencies: {
      // eslint-disable-next-line unicorn/prefer-module -- webpack does not support esm configuration
      config: [__filename],
    },
    name: "development",
    type: "filesystem" as const,
  },
  devtool: "eval-cheap-module-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.s?css$/v,
        use: [
          {
            loader: "style-loader",
            options: {
              // eslint-disable-next-line unicorn/prefer-module -- webpack does not support esm configuration
              insert: require.resolve(
                "./runtime/custom-elements-style-insertion-callback",
              ),
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        exclude: [/node_modules/v],
        include: [sourcePath()],
        test: /\.[jt]sx?$/v,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                jsx: "react-jsxdev",
              },
              experimentalWatchApi: true,
              getCustomTransformers: (): CustomTransformers => ({
                before: [reactRefreshTypeScript()],
              }),
              projectReferences: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // eslint-disable-next-line node/no-process-env -- check `process.env` to detect ci environment
    process.env.CI === "true"
      ? null
      : new ForkTsCheckerWebpackPlugin({
          devServer: false,
          typescript: {
            build: true,
            configOverwrite: {
              compilerOptions: {
                jsx: "react-jsxdev",
              },
            },
          },
        }),
    new ReactRefreshPlugin({
      overlay: false,
    }),
  ].filter(Boolean) as WebpackPluginInstance[],
});
