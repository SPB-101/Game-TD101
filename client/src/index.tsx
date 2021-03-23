import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import { App } from "./app";

import "./i18n";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
