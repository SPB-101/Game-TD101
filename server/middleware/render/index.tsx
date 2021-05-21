import React from "react";

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { Provider as ReduxProvider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import { App } from "../../../client/src/app";
import { history } from "../../../client/src/store";

import { initI18n } from "./i18n";
import { initRedux } from "./redux";
import { preloadData } from "./data";
import { getHtml } from "./html";
import { initTheme } from "./theme";

import type { Request, Response } from "express";
import type { StaticRouterContext } from "react-router";

export const render = async (req: Request, res: Response) => {
  const location = req.url;
  const context: StaticRouterContext = {};

  const { theme } = await initTheme(res);
  const { i18n, i18nState } = initI18n();
  const { store, reduxState } = initRedux(res, location, theme);

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
      .send(getHtml(reactHtml, reduxState, i18nState, theme));
  };

  preloadData(location)
    .then(() => renderApp())
    .catch((err) => {
      throw new Error(err);
    });
};
