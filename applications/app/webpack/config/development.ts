import * as ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import * as webpackMerge from "webpack-merge";

import common from "./common";
import { packagePath, sourcePath } from "./utils";

// eslint-disable-next-line import/no-default-export -- webpack requires default export
export default webpackMerge.smart(common, {
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
        test: /\.tsx?$/u,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: packagePath("tsconfig.json"),
              experimentalWatchApi: true,
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
      tsconfig: packagePath("tsconfig.json"),
    }),
  ],
  watch: true,
});
