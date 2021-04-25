const path = require("path");
const webpack = require("webpack");
const packageJson = require("./package.json");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: {
    main: path.join(__dirname, "client/src/index.tsx"),
    sw: path.join(__dirname, "client/src/sw.ts"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "./",
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
    alias: {
      "@resolvers": path.resolve(__dirname, "client/app/resolvers"),
      "@entities": path.resolve(__dirname, "client/app/entities"),
      "@component": path.resolve(__dirname, "client/src/component"),
      "@constants/index": path.resolve(__dirname, "client/src/constants/"),
      "@actions": path.resolve(__dirname, "client/src/store/actions"),
      "@selectors": path.resolve(__dirname, "client/src/store/selectors"),
      "@reducers/index": path.resolve(__dirname, "client/src/store/reducers"),
      "@thunks": path.resolve(__dirname, "client/src/store/thunks"),
      "@assets": path.resolve(__dirname, "client/src/assets"),
      "@utils": path.resolve(__dirname, "client/src/utils"),
      "@utils-entity": path.resolve(__dirname, "client/app/utils"),
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
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packageJson.version),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    runtimeChunk: "single",
  },
  devServer: {
    hot: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    contentBase: path.join(__dirname, "client/public"),
    clientLogLevel: "silent",
    publicPath: "/",
    open: true,
    historyApiFallback: true,
    compress: true,
    host: "localhost",
    port: 3000,
  },
};
