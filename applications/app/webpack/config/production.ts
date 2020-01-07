import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as webpackMerge from "webpack-merge";

import * as common from "./common.ts";
import { packagePath, sourcePath } from "./utils.ts";

// eslint-disable-next-line import/no-default-export
export default webpackMerge.smart(common, {
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
        test: /\.tsx?$/u,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: packagePath("tsconfig.json"),
            },
          },
        ],
      },
    ],
  },
});
