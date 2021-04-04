import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import { ErrorPage } from "./pages/Error";
import { SandboxPage } from "./pages/Sandbox";
import { GamePage } from "./pages/Game";
import { RegistrationPage } from "./pages/Registration";
import { LoginPage } from "./pages/Login";
import { ProfilePage } from "./pages/Profile";
import { MenuPage } from "./pages/Menu";

import "./styles/root.scss";
import "./app.scss";

export const App = (): JSX.Element => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/game" component={GamePage} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/sandbox" component={SandboxPage} />
        <Route component={ErrorPage} />
      </Switch>
    </HashRouter>
  );
};
