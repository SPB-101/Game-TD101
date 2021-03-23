import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import { ErrorPage } from "./pages/Error";
import { SandboxPage } from "./pages/Sandbox";
import { GamePage } from "./pages/Game";

import "./styles/root.scss";

export const App = (): JSX.Element => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/game" component={GamePage} />
        <Route path="/sandbox" component={SandboxPage} />
        <Route component={ErrorPage} />
      </Switch>
    </HashRouter>
  );
};
