export const tsLoader = {
  client: {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules|server/,
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
      },
    },
  },
  server: {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
      },
    },
  },
};
