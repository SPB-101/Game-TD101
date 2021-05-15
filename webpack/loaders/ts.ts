const IS_DEV = process.env.NODE_ENV === "development";

export const tsLoader = {
  client: {
    test: /\.tsx?$/,
    exclude: /node_modules|server/,
    use: [
      IS_DEV && {
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          plugins: ["react-hot-loader/babel"],
        },
      },
      {
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ].filter(Boolean),
  },
  server: {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    use: {
      loader: "ts-loader",
      options: {
        transpileOnly: true,
      },
    },
  },
};
