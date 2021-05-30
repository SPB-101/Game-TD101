import React from "react";

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
import { Provider as ReduxProvider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import { App } from "../../../client/src/app";
import { history } from "../../../client/src/store";

import { initI18n } from "./i18n";
import { initRedux } from "./redux";
import { initTheme } from "./theme";
import { initHelmet } from "./meta";
import { preloadData } from "./data";
import { getHtml } from "./html";

import type { Request, Response } from "express";
import type { StaticRouterContext } from "react-router";
import type { FilledContext } from "react-helmet-async";

export const render = async (req: Request, res: Response) => {
  const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  const location = req.url;
  const routerContext: StaticRouterContext = {};
  const helmetContext: FilledContext = { helmet: undefined };

  const { theme } = await initTheme(res);
  const { i18n, i18nState } = initI18n();
  const { store, reduxState } = initRedux(res, location, theme);

  const renderApp = () => {
    const jsx = (
      <I18nextProvider i18n={i18n}>
        <ReduxProvider store={store}>
          <StaticRouter context={routerContext} location={location}>
            <HelmetProvider context={helmetContext}>
              <App history={history} />
            </HelmetProvider>
          </StaticRouter>
        </ReduxProvider>
      </I18nextProvider>
    );

    if (routerContext.url) {
      res.redirect(routerContext.url);
      return;
    }

    const reactHtml = renderToString(jsx);
    const helmet = initHelmet(helmetContext.helmet);

    res
      .status(routerContext.statusCode || 200)
      .send(getHtml(reactHtml, reduxState, i18nState, helmet, theme));
  };

  preloadData(fullUrl, store)
    .then(() => renderApp())
    .catch((err) => {
      throw new Error(err);
    });
};
