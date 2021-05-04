import path from "path";
import webpack from "webpack";
import packageJson from "../package.json";
import ESLintPlugin from "eslint-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// TODO add webpack-manifest-plugin

import { IS_DEV } from "./env";

const rootDir = process.cwd();

export const clientConfig = {
  devtool: "source-map",
  mode: "development",
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
      "@constants/index": path.resolve(rootDir, "client/src/constants/"),
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
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules|server/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          "babel-loader",
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              typescript: true,
              babel: false,
              ext: "tsx",
              prettier: true,
            },
          },
        ],
      },
      {
        test: /\.(?:wav)/,
        type: "asset/resource",
        generator: {
          filename: "assets/sounds/[name][ext]",
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new ESLintPlugin({
      eslintPath: require.resolve("eslint"),
      fix: true,
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packageJson.version),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  performance: {
    hints: IS_DEV ? false : "warning",
  },
};
