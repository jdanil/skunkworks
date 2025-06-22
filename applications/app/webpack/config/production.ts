import { fileURLToPath } from "node:url";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { type Configuration } from "webpack";
import { merge } from "webpack-merge";

import common from "./common.ts";
import { sourcePath } from "./utils.ts";

// eslint-disable-next-line no-restricted-exports, import/no-default-export -- webpack requires default export
export default merge<Configuration>(common, {
  bail: true,
  cache: {
    buildDependencies: {
      config: [fileURLToPath(import.meta.url)],
    },
    name: "production",
    type: "filesystem" as const,
  },
  devtool: "nosources-source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.scss$/v,
        use: [
          MiniCssExtractPlugin.loader,
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
              projectReferences: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
});
