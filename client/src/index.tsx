import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import { App } from "./app";
import { ErrorBoundary } from "./component/ErrorBoundary";
import { ThemeProvider } from "./component/ThemeProvider";

import "./i18n";

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
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
