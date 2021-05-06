import React from "react";
import { Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { Toast } from "@component/Toast";
import { ProtectedRoute } from "@component/ProtectedRoute";
import { routes } from "./routes";

import "./styles/root.scss";
import "./app.scss";

import type { History } from "history";
interface Props {
  history: History;
}

export const App = ({ history }: Props) => {
  return (
    <>
      <Toast />
      <ConnectedRouter history={history}>
        <Switch>
          {routes.map((route) => {
            return <ProtectedRoute key={route.path} {...route} />;
          })}
        </Switch>
      </ConnectedRouter>
    </>
  );
};
