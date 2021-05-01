import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Request, Response } from "express";
import { Provider as ReduxProvider } from "react-redux";

import { App } from "../../client/src/app";
import { createApp, history } from "../../client/src/store";
import { getInitialState } from "../../client/src/store/getInitialState";

import type { StaticRouterContext } from "react-router";

export default (req: Request, res: Response) => {
  const location = req.url;
  const context: StaticRouterContext = {};
  const initialState = getInitialState();
  const { store } = createApp(initialState);

  const jsx = (
    <ReduxProvider store={store}>
      <StaticRouter context={context} location={location}>
        <App history={history} />
      </StaticRouter>
    </ReduxProvider>
  );
  const reactHtml = renderToString(jsx);
  const reduxState = store.getState();

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  res.status(context.statusCode || 200).send(getHtml(reactHtml, reduxState));
};

function getHtml(reactHtml: string, reduxState = {}) {
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
          window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
      </script>
      <script defer src="/runtime.js"></script>
      <script defer src="/main.js"></script>
      <script defer src="/sw.js"></script>
    </body>
    </html>
    `;
}
