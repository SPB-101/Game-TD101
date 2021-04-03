import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import { ErrorPage } from "./pages/Error";
import { SandboxPage } from "./pages/Sandbox";
import { GamePage } from "./pages/Game";
import { RegistrationPage } from "./pages/Registration";
import { LoginPage } from "./pages/Login";
import { MenuPage } from "./pages/Menu";
import { LeaderBoardPage } from "./pages/LeaderBoardPage";
import { ForumPage } from "./pages/ForumPage";
import { CommentsPage } from "./pages/CommentsPage";

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
        <Route path="/leaderboard" component={LeaderBoardPage} />
        <Route path="/forum" component={ForumPage} />
        <Route path="/comments" component={CommentsPage} />
        <Route path="/sandbox" component={SandboxPage} />
        <Route component={ErrorPage} />
      </Switch>
    </HashRouter>
  );
};
