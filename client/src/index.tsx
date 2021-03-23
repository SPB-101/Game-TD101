import React, { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom";

import { App } from "./app";

import "./i18n";

ReactDOM.render(
  <StrictMode>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </StrictMode>,
  document.getElementById("root")
);
