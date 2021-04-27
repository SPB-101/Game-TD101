import path from "path";
import nodeExternals from "webpack-node-externals";

const rootDir = process.cwd();

export const serverConfig = {
  target: "node",
  node: { __dirname: false },
  devtool: "source-map",
  mode: "development",
  entry: {
    server: path.join(rootDir, "server/index.ts"),
  },
  output: {
    path: path.resolve(rootDir, "dist"),
    publicPath: "./",
    filename: "server.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
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
        use: "null-loader",
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)/,
        use: "null-loader",
      },
      {
        test: /\.svg$/,
        use: "null-loader",
      },
      {
        test: /\.(?:wav)/,
        use: "null-loader",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: "asset/inline",
      },
    ],
  },
  optimization: {
    nodeEnv: false,
  },
  externals: [
    nodeExternals({
      allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i],
    }),
  ],
};
