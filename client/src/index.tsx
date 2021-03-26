import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import { App } from "./app";
import { ErrorBoundary } from "./component/ErrorBoundary";

import "./i18n";

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById("root")
);
