import React from "react";

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { Provider as ReduxProvider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { Helmet } from "react-helmet";

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

export const render = async (req: Request, res: Response) => {
  const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  const location = req.url;
  const xsrf = req.csrfToken();
  const context: StaticRouterContext = {};

  const { theme } = await initTheme(res);
  const { i18n, i18nState } = initI18n();
  const { store } = initRedux(res, location, theme);
  const helmet = initHelmet(Helmet.renderStatic());

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

    if (context.url) {
      res.redirect(context.url);
      return;
    }

    const reduxState = store.getState();
    const reactHtml = renderToString(jsx);

    res
      .cookie("XSRF-TOKEN", xsrf)
      .status(context.statusCode || 200)
      .send(getHtml(reactHtml, reduxState, i18nState, helmet, theme));
  };

  preloadData(fullUrl, store)
    .then(() => {
      renderApp();
    })
    .catch((err) => {
      throw new Error(err);
    });
};
