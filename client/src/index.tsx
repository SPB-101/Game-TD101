import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import { App } from "./app";
import { Provider } from "react-redux";

import { ErrorBoundary } from "./component/ErrorBoundary";
import { createApp, history } from "./store";
import "./i18n";
import "./axios";

const initialState = (window as any).__INITIAL_STATE__ || {};
const { store } = createApp(initialState);

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById("root")
);
