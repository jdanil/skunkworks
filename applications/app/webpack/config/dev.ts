import * as ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import * as webpackMerge from "webpack-merge";

import * as common from "./common.ts";
import { packagePath } from "./utils";

module.exports = webpackMerge.smart(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  watch: true,
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
      tsconfig: packagePath("tsconfig.json"),
    }),
  ],
});
