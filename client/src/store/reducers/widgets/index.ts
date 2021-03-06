import { combineReducers } from "redux-immer";
import produce from "immer";

import { registrationPage } from "./registrationPage";
import { leaderboardPage } from "./leaderboardPage";
import { commentsPage } from "./commentsPage/index";
import { currentView } from "./currentView";
import { profilePage } from "./profilePage";
import { loginPage } from "./loginPage";
import { forumPage } from "./forumPage";
import { users } from "./users";
import { game } from "./game";

import type { RegistrationPage } from "./registrationPage";
import type { LeaderboardPage } from "./leaderboardPage";
import type { CommentsPage } from "./commentsPage/index";
import type { CurrentView } from "./currentView";
import type { ProfilePage } from "./profilePage";
import type { LoginPage } from "./loginPage";
import type { ForumPage } from "./forumPage";
import type { UsersWidget } from "./users";
import type { Game } from "./Game";

export type Widgets = {
  registrationPage: RegistrationPage;
  leaderboardPage: LeaderboardPage;
  commentsPage: CommentsPage;
  currentView: CurrentView;
  profilePage: ProfilePage;
  loginPage: LoginPage;
  forumPage: ForumPage;
  users: UsersWidget;
  game: Game;
};

export const widgets = combineReducers(produce, {
  registrationPage,
  leaderboardPage,
  commentsPage,
  profilePage,
  currentView,
  loginPage,
  forumPage,
  users,
  game,
});
