import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import { App } from "./app";
import { Provider } from "react-redux";
import { ErrorBoundary } from "./component/ErrorBoundary";
import { ThemeProvider } from "./component/ThemeProvider";

import { createApp } from "./store";
import "./i18n";

const initialState = (window as any).__INITIAL_STATE__ || {};
const { store } = createApp(initialState);

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById("root")
);

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
