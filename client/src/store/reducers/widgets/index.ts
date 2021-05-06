import { combineReducers } from "redux-immer";
import produce from "immer";

import { loginPage } from "./loginPage";
import { registrationPage } from "./registrationPage";
import { leaderboardPage } from "./leaderboardPage";
import { currentView } from "./currentView";
import { profilePage } from "./profilePage";
import { game } from "./game";

import type { LoginPage } from "./loginPage";
import type { RegistrationPage } from "./registrationPage";
import type { LeaderboardPage } from "./leaderboardPage";
import type { CurrentView } from "./currentView";
import type { ProfilePage } from "./profilePage";
import type { Game } from "./Game";

export type Widgets = {
  currentView: CurrentView;
  loginPage: LoginPage;
  profilePage: ProfilePage;
  registrationPage: RegistrationPage;
  leaderboardPage: LeaderboardPage;
  game: Game;
};

export const widgets = combineReducers(produce, {
  currentView,
  loginPage,
  registrationPage,
  profilePage,
  leaderboardPage,
  game,
});
