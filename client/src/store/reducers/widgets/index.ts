import { combineReducers } from "redux-immer";
import produce from "immer";

import { loginPage } from "./loginPage";
import { registrationPage } from "./registrationPage";
import { currentView } from "./currentView";
import { profilePage } from "./profilePage";
import { game } from "./game";

import type { LoginPage } from "./loginPage";
import type { RegistrationPage } from "./registrationPage";
import type { CurrentView } from "./currentView";
import type { ProfilePage } from "./profilePage";
import type { Game } from "./Game";

export type Widgets = {
  currentView: CurrentView;
  loginPage: LoginPage;
  profilePage: ProfilePage;
  registrationPage: RegistrationPage;
  game: Game;
};

export const widgets = combineReducers(produce, {
  currentView,
  loginPage,
  registrationPage,
  profilePage,
  game,
});
