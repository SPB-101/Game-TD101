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
