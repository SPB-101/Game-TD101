import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import { App } from "./app";
import { Provider } from "react-redux";

import { ErrorBoundary } from "./component/ErrorBoundary";
import { createApp } from "./store";
import "./i18n";

const initialState = (window as any).__INITIAL_STATE__ || {};
const { store } = createApp(initialState);

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById("root")
);
