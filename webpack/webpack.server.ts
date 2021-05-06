import path from "path";
import webpack from "webpack";
import packageJson from "../package.json";
import nodeExternals from "webpack-node-externals";

import { fileLoader } from "./loaders/file";
import { scssLoader } from "./loaders/css";
import { tsLoader } from "./loaders/ts";

const rootDir = process.cwd();

export const webpackServer = {
  target: "node",
  node: { __dirname: false },
  entry: {
    server: path.join(rootDir, "server/server.ts"),
  },
  output: {
    path: path.resolve(rootDir, "dist"),
    publicPath: "/server",
    filename: "server.js",
    libraryTarget: "commonjs-module",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@resolvers": path.resolve(rootDir, "client/app/resolvers"),
      "@entities": path.resolve(rootDir, "client/app/entities"),
      "@component": path.resolve(rootDir, "client/src/component"),
      "@constants/index": path.resolve(rootDir, "client/src/constants/"),
      "@actions": path.resolve(rootDir, "client/src/store/actions"),
      "@selectors": path.resolve(rootDir, "client/src/store/selectors"),
      "@reducers/index": path.resolve(rootDir, "client/src/store/reducers"),
      "@thunks": path.resolve(rootDir, "client/src/store/thunks"),
      "@assets": path.resolve(rootDir, "client/src/assets"),
      "@utils": path.resolve(rootDir, "client/src/utils"),
      "@utils-entity": path.resolve(rootDir, "client/app/utils"),
    },
  },
  module: {
    rules: [...fileLoader.server, scssLoader.server, tsLoader.server],
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packageJson.version),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  optimization: {
    nodeEnv: false,
  },
  externals: [
    nodeExternals({
      allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i],
    }),
  ],
};
