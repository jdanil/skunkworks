import * as HtmlWebpackPlugin from "html-webpack-plugin";

import { name } from "../../src/config/application";
import { packagePath, sourcePath } from "./utils";

// eslint-disable-next-line import/no-default-export -- webpack requires default export
export default {
  amd: false as const,
  devServer: {
    client: {
      overlay: false,
    },
    historyApiFallback: true,
    port: 8080,
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
        test: /\.(?<extension>eot|svg|ttf|woff2?)$/u,
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
      title: name.replaceAll(
        /\w\S*/gu,
        (string) =>
          string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(),
      ),
    }),
  ],
  resolve: {
    alias: {
      /* eslint-disable @typescript-eslint/naming-convention -- property keys represent import paths https://webpack.js.org/configuration/resolve/#resolvealias */
      "react-dom$": "react-dom/profiling",
      "scheduler/tracing": "scheduler/tracing-profiling",
      /* eslint-enable @typescript-eslint/naming-convention -- re-enable */
    },
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
  },
};
