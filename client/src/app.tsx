import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

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

import type { History } from "history";
interface Props {
  history: History;
}

export const App = ({ history }: Props) => {
  return (
    <ConnectedRouter history={history}>
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
    </ConnectedRouter>
  );
};
