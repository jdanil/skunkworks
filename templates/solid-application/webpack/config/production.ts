import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import { type Configuration } from "webpack";
import { merge } from "webpack-merge";

import common from "./common";
import { sourcePath } from "./utils";

// eslint-disable-next-line no-restricted-exports, import/no-default-export -- webpack requires default export
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
        test: /\.css$/v,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        exclude: [/node_modules/v],
        include: [sourcePath()],
        test: /\.[jt]sx?$/v,
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
