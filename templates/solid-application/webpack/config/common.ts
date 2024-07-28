import * as HtmlWebpackPlugin from "html-webpack-plugin";

import { name } from "../../src/config/application";
import { packagePath, sourcePath } from "./utils";

// eslint-disable-next-line no-restricted-exports, import/no-default-export -- webpack requires default export
export default {
  amd: false as const,
  devServer: {
    client: {
      overlay: false,
    },
    historyApiFallback: true,
    port: 7824,
  },
  entry: sourcePath("index.tsx"),
  experiments: {
    css: false,
    futureDefaults: true,
    outputModule: true,
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.(?<extension>eot|svg|ttf|woff2?)$/v,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: packagePath("public/favicon.svg"),
      meta: {
        /* eslint-disable @typescript-eslint/naming-convention -- property keys represents meta tags https://github.com/jantimon/html-webpack-plugin#meta-tags */
        description: "Application description goes here.",
        "theme-color": "#000000",
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        /* eslint-enable @typescript-eslint/naming-convention -- re-enable */
      },
      scriptLoading: "module",
      template: packagePath("public/index.ejs"),
      // eslint-disable-next-line unicorn/prefer-string-replace-all -- requires node >= 15
      title: name.replace(
        /\w\S*/gv,
        (string) =>
          string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(),
      ),
    }),
  ],
  resolve: {
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
  },
};
