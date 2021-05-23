import { combineReducers } from "redux-immer";
import produce from "immer";

import { registrationPage } from "./registrationPage";
import { leaderboardPage } from "./leaderboardPage";
import { messagesPage } from "./messagesPage/index";
import { currentView } from "./currentView";
import { profilePage } from "./profilePage";
import { loginPage } from "./loginPage";
import { forumPage } from "./forumPage";
import { game } from "./game";

import type { RegistrationPage } from "./registrationPage";
import type { LeaderboardPage } from "./leaderboardPage";
import type { MessagesPage } from "./messagesPage/index";
import type { CurrentView } from "./currentView";
import type { ProfilePage } from "./profilePage";
import type { LoginPage } from "./loginPage";
import type { ForumPage } from "./forumPage";
import type { Game } from "./Game";

export type Widgets = {
  registrationPage: RegistrationPage;
  leaderboardPage: LeaderboardPage;
  messagesPage: MessagesPage;
  currentView: CurrentView;
  profilePage: ProfilePage;
  loginPage: LoginPage;
  forumPage: ForumPage;
  game: Game;
};

export const widgets = combineReducers(produce, {
  registrationPage,
  leaderboardPage,
  messagesPage,
  profilePage,
  currentView,
  loginPage,
  forumPage,
  game,
});
