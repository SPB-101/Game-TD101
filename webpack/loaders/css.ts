import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const scssLoader = {
  client: {
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      "css-loader",
      "postcss-loader",
      "sass-loader",
    ],
  },
  server: {
    test: /\.scss$/,
    use: "null-loader",
  },
};
