import { ForkTsCheckerWebpackPlugin } from "fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPlugin.js";
import { merge } from "webpack-merge";

import common from "./common";
import { sourcePath } from "./utils";

// eslint-disable-next-line import/no-default-export, import/no-unused-modules -- webpack requires default export
export default merge(common, {
  devtool: "cheap-module-eval-source-map",
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
              experimentalWatchApi: true,
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
        files: "**/*",
      },
      typescript: {
        build: true,
      },
    }),
  ],
  watch: true,
});
