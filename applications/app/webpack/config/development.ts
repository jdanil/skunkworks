import * as ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import * as webpackMerge from "webpack-merge";

import * as common from "./common.ts";
import { packagePath } from "./utils.ts";

module.exports = webpackMerge.smart(common, {
  devtool: "cheap-module-eval-source-map",
  mode: "development",
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
      tsconfig: packagePath("tsconfig.json"),
    }),
  ],
  watch: true,
});
