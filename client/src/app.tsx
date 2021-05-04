import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

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
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map(({ isPrivate, redirect, path, component, exact }) => {
          return isPrivate ? (
            <ProtectedRoute
              key={path}
              isPrivate={isPrivate}
              redirect={redirect}
              exact={exact}
              path={path}
              component={component}
            />
          ) : (
            <Route key={path} path={path} component={component} exact={exact} />
          );
        })}
      </Switch>
    </ConnectedRouter>
  );
};
