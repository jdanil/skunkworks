import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { Configuration } from "webpack";
import { merge } from "webpack-merge";

import common from "./common";
import { sourcePath } from "./utils";

// eslint-disable-next-line import/no-default-export -- webpack requires default export
export default merge<Configuration>(common, {
  bail: true,
  cache: {
    buildDependencies: {
      // eslint-disable-next-line unicorn/prefer-module -- webpack does not support esm configuration
      config: [__filename],
    },
    name: "production",
    type: "filesystem" as const,
  },
  devtool: "nosources-source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.s?css$/u,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        exclude: [/node_modules/u],
        include: [sourcePath()],
        test: /\.[j|t]sx?$/u,
        use: [
          {
            loader: "ts-loader",
            options: {
              projectReferences: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
});
