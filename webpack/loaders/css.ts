import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const scssLoader = {
  client: {
    test: /\.(scss|css|postcss)$/,
    use: [
      MiniCssExtractPlugin.loader,
      "css-loader",
      "postcss-loader",
      "sass-loader",
    ],
  },
  server: {
    test: /\.(scss|css|postcss)$/,
    use: "null-loader",
  },
};
