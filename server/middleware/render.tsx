import url from "url";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import { Request, Response } from "express";
import { Provider as ReduxProvider } from "react-redux";

import { App } from "../../client/src/app";
import { createApp, history } from "../../client/src/store";
import { getInitialState } from "../../client/src/store/getInitialState";
import { routes } from "../../client/src/routes";
import { fetchLoginFulfilled } from "@actions/login";
import { isUserAuth } from "../utils/isUserAuth";

import type { StaticRouterContext } from "react-router";
import type { Dispatch } from "redux";

export default (req: Request, res: Response) => {
  const location = req.url;
  const context: StaticRouterContext = {};
  const initialState = getInitialState(location);
  const { store } = createApp(initialState);

  if (isUserAuth(res)) {
    store.dispatch(fetchLoginFulfilled());
  }

  const renderApp = () => {
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

  const dataRequirements: ((dispatch: Dispatch) => Promise<void>)[] = [];

  routes.some((route) => {
    const { fetchData: fetchMethod } = route;
    const match = matchPath<{ slug: string }>(
      url.parse(location).pathname as string,
      route
    );

    if (match && fetchMethod) {
      dataRequirements.push(fetchMethod());
    }

    return Boolean(match);
  });

  return Promise.all(dataRequirements)
    .then(() => {
      renderApp();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
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
      <script defer src="/main.js"></script>
      <script defer src="/sw.js"></script>
    </body>
    </html>
    `;
}
