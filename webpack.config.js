const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const CLIENT_PATH = "./client";

module.exports = {
  entry: `${CLIENT_PATH}/src/index.tsx`,
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "./",
    filename: "main-[fullhash].js",
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
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
        type: "asset/resource",
        generator: {
          filename: "assets/images/[fullhash][ext]",
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${CLIENT_PATH}/public/index.html`,
      filename: "index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "style-[fullhash].css",
    }),
    new ESLintPlugin({
      eslintPath: require.resolve("eslint"),
      fix: true,
    }),
    new PrettierPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    publicPath: "/",
    hot: true,
    open: true,
    compress: true,
    host: "localhost",
    port: 3000,
  },
};
