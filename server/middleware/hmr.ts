import { webpack } from "webpack";
import { merge } from "webpack-merge";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

const webpackClient = require("../../webpack/webpack.client");

import { IS_DEV } from "../../constants/server";

import type * as core from "express-serve-static-core";
import type { Configuration } from "webpack";

export const hmr = (app: core.Express) => {
  if (IS_DEV) {
    const compiler = webpack(
      merge(webpackClient as Configuration, { mode: "development" })
    );
    app.use(webpackHotMiddleware(compiler));
    app.use(
      webpackDevMiddleware(compiler, {
        serverSideRender: true,
        writeToDisk: true,
      })
    );
  }
};
