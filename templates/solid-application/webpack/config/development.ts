import { ForkTsCheckerWebpackPlugin } from "fork-ts-checker-webpack-plugin/lib/plugin";
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
        test: /\.css$/v,
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
        ],
      },
      {
        exclude: [/node_modules/v],
        include: [sourcePath()],
        test: /\.[jt]sx?$/v,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["solid"],
            },
          },
          {
            loader: "ts-loader",
            options: {
              experimentalWatchApi: true,
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
          },
        }),
  ].filter(Boolean) as WebpackPluginInstance[],
});
