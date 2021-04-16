import { combineReducers } from "redux-immer";
import produce from "immer";

import { loginPage } from "./loginPage";
import { registrationPage } from "./registrationPage";
import { currentView } from "./currentView";

import type { LoginPage } from "./loginPage";
import type { RegistrationPage } from "./registrationPage";
import type { CurrentView } from "./currentView";

export type Widgets = {
  currentView: CurrentView;
  loginPage: LoginPage;
  registrationPage: RegistrationPage;
};

export const widgets = combineReducers(produce, {
  currentView,
  loginPage,
  registrationPage,
});
