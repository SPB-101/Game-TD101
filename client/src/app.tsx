import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import { ErrorPage } from "./pages/Error";
import { SandboxPage } from "./pages/Sandbox";
import { GamePage } from "./pages/Game";
import { LeaderBoardPage } from "./pages/LeaderBoardPage";
import { ForumPage } from "./pages/ForumPage";

import "./styles/root.scss";

export class App extends Component {
  render(): JSX.Element {
    return (
      <HashRouter>
        <Switch>
          <Route path="/game" component={GamePage} />
          <Route path="/leaderboard" component={LeaderBoardPage} />
          <Route path="/forum" component={ForumPage} />
          <Route path="/sandbox" component={SandboxPage} />
          <Route component={ErrorPage} />
        </Switch>
      </HashRouter>
    );
  }
}
