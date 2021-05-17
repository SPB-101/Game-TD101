import path from "path";
import webpack from "webpack";

import ESLintPlugin from "eslint-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { fileLoader } from "./loaders/file";
import { scssLoader } from "./loaders/css";
import { tsLoader } from "./loaders/ts";
import { alias } from "./alias";
import { constants } from "./constants";

const rootDir = process.cwd();
const IS_DEV = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    main: path.join(rootDir, "client/src/index.tsx"),
    sw: path.join(rootDir, "client/src/sw.ts"),
  },
  output: {
    path: path.resolve(rootDir, "dist"),
    publicPath: "./",
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
    alias: alias,
  },
  module: {
    rules: [...fileLoader.client, scssLoader.client, tsLoader.client],
  },
  stats: IS_DEV ? "errors-warnings" : "errors-only",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    IS_DEV &&
      new ESLintPlugin({
        eslintPath: require.resolve("eslint"),
        fix: true,
      }),
    new webpack.DefinePlugin(constants),
  ].filter(Boolean),
  performance: {
    hints: IS_DEV ? false : "warning",
  },
};
