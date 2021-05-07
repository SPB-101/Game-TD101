import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

import { App } from "./app";
import { ErrorBoundary } from "@component/ErrorBoundary";
import { ThemeProvider } from "@component/ThemeProvider";

import "./i18n";
import "./axios";
import { createApp, history } from "./store";

import { IS_DEV } from "@constants/index";

// eslint-disable-next-line
const initialState = (window as any).__INITIAL_STATE__ || {};
const { store } = createApp(initialState);

const getApp = () => {
  return (
    <StrictMode>
      <ErrorBoundary>
        <Provider store={store}>
          <ThemeProvider>
            <App history={history} />
          </ThemeProvider>
        </Provider>
      </ErrorBoundary>
    </StrictMode>
  );
};

if (IS_DEV) {
  ReactDOM.render(getApp(), document.getElementById("root"));
} else {
  ReactDOM.hydrate(getApp(), document.getElementById("root"));
}

if (!IS_DEV) {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then((registration) => {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      })
      .catch((error: string) => {
        console.log("ServiceWorker failed: ", error);
      });
  }
}
