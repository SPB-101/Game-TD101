import path from "path";
import express from "express";
import { webpack } from "webpack";
import compression from "compression";
import cookieParser from "cookie-parser";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import render from "./middleware/render";
import { checkAuth } from "./middleware/auth";
import { webpackClientConfig } from "./webpack.client.config";

const IS_DEV = process.env.NODE_ENV === "development";
const rootDir = process.cwd();
const app = express();

if (IS_DEV) {
  const compiler = webpack(webpackClientConfig({ mode: "development" }));
  app.use(webpackHotMiddleware(compiler));
  app.use(
    webpackDevMiddleware(compiler, {
      serverSideRender: true,
      writeToDisk: true,
    })
  );
}

app.use(cookieParser());
app.use(checkAuth);
app.use(compression());
app.use(express.static(path.join(rootDir, "dist")));
app.use(express.static(path.join(rootDir, "client/public")));

app.get("/*", render);

export { app };
