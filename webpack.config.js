const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "client/src/index.tsx"),
    sw: path.join(__dirname, "client/src/sw.ts"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "./",
  },
  devtool: "source-map",
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
        exclude: [path.join(__dirname, "client/src/game")],
        type: "asset/resource",
        generator: {
          filename: "assets/images/[fullhash][ext]",
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)/,
        include: [path.join(__dirname, "client/src/game/img")],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/game/img",
            },
          },
        ],
      },
      {
        test: /\.(?:wav)/,
        type: "asset/resource",
        generator: {
          filename: "assets/sounds/[fullhash][ext]",
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
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "client/public/index.html"),
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
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
