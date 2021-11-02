import * as ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { ForkTsCheckerWebpackPlugin } from "fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPlugin";
import reactRefreshTypeScript from "react-refresh-typescript";
import type { CustomTransformers } from "typescript";
import type { Configuration } from "webpack";
import { merge } from "webpack-merge";

import common from "./common";
import { sourcePath } from "./utils";

// eslint-disable-next-line import/no-default-export -- webpack requires default export
export default merge<Configuration>(common, {
  cache: {
    buildDependencies: {
      // eslint-disable-next-line unicorn/prefer-module -- webpack does not support esm configuration
      config: [__filename],
    },
    name: "development",
    type: "filesystem" as const,
  },
  devServer: {
    client: {
      overlay: false,
    },
    historyApiFallback: true,
    port: 8080,
  },
  devtool: "eval-cheap-module-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.s?css$/u,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        exclude: [/node_modules/u],
        include: [sourcePath()],
        test: /\.[j|t]sx?$/u,
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
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        // eslint-disable-next-line node/no-process-env -- check `process.env` to detect ci environment
        enabled: process.env.CI !== "true",
        files: "**/*",
      },
      logger: {
        devServer: false,
      },
      typescript: {
        build: true,
        configOverwrite: {
          compilerOptions: {
            jsx: "react-jsxdev",
          },
        },
        // eslint-disable-next-line node/no-process-env -- check `process.env` to detect ci environment
        enabled: process.env.CI !== "true",
      },
    }),
    new ReactRefreshPlugin({
      overlay: false,
    }),
  ],
});
