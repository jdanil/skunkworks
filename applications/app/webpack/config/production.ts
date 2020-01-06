import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as webpackMerge from "webpack-merge";

import * as common from "./common.ts";

module.exports = webpackMerge.smart(common, {
  bail: true,
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/u,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
});
