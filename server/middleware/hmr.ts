import { webpack } from "webpack";
import { merge } from "webpack-merge";
import { webpackClient } from "../../webpack/webpack.client";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import type * as core from "express-serve-static-core";
import type { Configuration } from "webpack";

import { IS_DEV } from "../../constants/server";

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
