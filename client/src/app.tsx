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

import { ProtectedRoute } from "./component/ProtectedRoute";

import "./styles/root.scss";
import "./app.scss";

import type { History } from "history";
interface Props {
  isLogin: boolean | null;
  history: History;
}

export const App = ({ history }: Props) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <ProtectedRoute
          isPrivate={false}
          redirect="/menu"
          exact
          path="/"
          component={LoginPage}
        />
        <ProtectedRoute
          isPrivate={false}
          redirect="/menu"
          path="/registration"
          component={RegistrationPage}
        />
        <Route path="/menu" component={MenuPage} />
        <ProtectedRoute
          isPrivate={true}
          path="/game"
          redirect="/"
          component={GamePage}
        />
        <ProtectedRoute
          isPrivate={true}
          redirect="/"
          path="/leaderboard"
          component={LeaderBoardPage}
        />
        <ProtectedRoute
          isPrivate={true}
          redirect="/"
          path="/forum"
          component={ForumPage}
        />
        <ProtectedRoute
          isPrivate={true}
          redirect="/"
          path="/comments"
          component={CommentsPage}
        />
        <Route path="/sandbox" component={SandboxPage} />
        <Route component={ErrorPage} />
      </Switch>
    </ConnectedRouter>
  );
};
