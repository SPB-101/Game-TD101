import React from "react";

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { Provider as ReduxProvider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import { App } from "../../client/src/app";
import { history } from "../../client/src/store";

import { initI18n } from "../inits/i18n";
import { initRedux } from "../inits/redux";
import { preloadData } from "../inits/data";

import type { Request, Response } from "express";
import type { StaticRouterContext } from "react-router";

export default async (req: Request, res: Response) => {
  const location = req.url;
  const context: StaticRouterContext = {};

  const { i18n, i18nState } = initI18n();
  const { store, reduxState } = initRedux(res, location);

  const renderApp = () => {
    const jsx = (
      <I18nextProvider i18n={i18n}>
        <ReduxProvider store={store}>
          <StaticRouter context={context} location={location}>
            <App history={history} />
          </StaticRouter>
        </ReduxProvider>
      </I18nextProvider>
    );
    const reactHtml = renderToString(jsx);

    if (context.url) {
      res.redirect(context.url);
      return;
    }

    res
      .status(context.statusCode || 200)
      .send(getHtml(reactHtml, reduxState, i18nState));
  };

  preloadData(location)
    .then(() => renderApp())
    .catch((err) => {
      throw new Error(err);
    });
};

const getHtml = (reactHtml: string, reduxState = {}, i18nState) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>TD101</title>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link href="/style.css" rel="stylesheet">
    </head>
    <body>
      <div class="root" id="root">${reactHtml}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)};
        window.__INITIAL_I18N_STATE__ = ${JSON.stringify(i18nState)};
      </script>
      <script defer src="/main.js"></script>
      <script defer src="/sw.js"></script>
    </body>
    </html>
  `;
};
