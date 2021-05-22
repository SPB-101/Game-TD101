import path from "path";
import webpack from "webpack";
import nodeExternals from "webpack-node-externals";

import { fileLoader } from "./loaders/file";
import { scssLoader } from "./loaders/css";
import { tsLoader } from "./loaders/ts";
import { alias } from "./alias";
import { constants } from "./constants";

const rootDir = process.cwd();
const IS_DEV = process.env.NODE_ENV === "development";

module.exports = {
  target: "node",
  node: { __dirname: false },
  entry: {
    server: path.join(rootDir, "server/server.ts"),
  },
  output: {
    path: path.resolve(rootDir, "dist"),
    publicPath: "./",
    filename: "server.js",
    libraryTarget: "commonjs-module",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: alias,
  },
  module: {
    rules: [...fileLoader.server, scssLoader.server, tsLoader.server],
  },
  stats: IS_DEV ? "errors-warnings" : "errors-only",
  plugins: [new webpack.DefinePlugin(constants)],
  optimization: {
    nodeEnv: false,
  },
  externals: [
    nodeExternals({
      allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i],
    }),
  ],
};
