import path from "path";
import webpack from "webpack";
import packageJson from "../package.json";
import ESLintPlugin from "eslint-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

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
      "@reducers/index": path.resolve(rootDir, "client/src/store/reducers"),
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
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            plugins: ["react-refresh/babel"],
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
    new CleanWebpackPlugin(),
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
    new ReactRefreshWebpackPlugin(),
  ],
  performance: {
    hints: IS_DEV ? false : "warning",
  },
  optimization: {
    runtimeChunk: "single",
  },
  devServer: {
    hot: true,
    // open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    contentBase: path.join(rootDir, "client/public"),
    clientLogLevel: "silent",
    publicPath: "/",
    historyApiFallback: true,
    compress: true,
    host: "localhost",
    port: 3000,
  },
};
