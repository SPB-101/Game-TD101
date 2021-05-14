import path from "path";
import webpack from "webpack";
import packageJson from "../package.json";
import ESLintPlugin from "eslint-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { fileLoader } from "./loaders/file";
import { scssLoader } from "./loaders/css";
import { tsLoader } from "./loaders/ts";

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
    alias: {
      "@resolvers": path.resolve(rootDir, "client/app/resolvers"),
      "@entities": path.resolve(rootDir, "client/app/entities"),
      "@component": path.resolve(rootDir, "client/src/component"),
      "@constants": path.resolve(rootDir, "constants"),
      "@actions": path.resolve(rootDir, "client/src/store/actions"),
      "@selectors": path.resolve(rootDir, "client/src/store/selectors"),
      "@reducers": path.resolve(rootDir, "client/src/store/reducers"),
      "@thunks": path.resolve(rootDir, "client/src/store/thunks"),
      "@assets": path.resolve(rootDir, "client/src/assets"),
      "@utils": path.resolve(rootDir, "client/src/utils"),
      "@utils-entity": path.resolve(rootDir, "client/app/utils"),
    },
  },
  module: {
    rules: [...fileLoader.client, scssLoader.client, tsLoader.client],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    IS_DEV &&
      new ESLintPlugin({
        eslintPath: require.resolve("eslint"),
        fix: true,
      }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packageJson.version),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      PORT_ENV: JSON.stringify(process.env.PORT),
    }),
  ].filter(Boolean),
  performance: {
    hints: IS_DEV ? false : "warning",
  },
};
