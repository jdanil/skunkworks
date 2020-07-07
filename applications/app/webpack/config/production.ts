import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import { merge } from "webpack-merge";

import common from "./common";
import { sourcePath } from "./utils";

// eslint-disable-next-line import/no-default-export, import/no-unused-modules -- webpack requires default export
export default merge(common, {
  bail: true,
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
});
