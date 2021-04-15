import { combineReducers } from "redux-immer";
import produce from "immer";

import { loginPage } from "./loginPage";
import { currentView } from "./currentView";

import type { LoginPage } from "./loginPage";
import type { CurrentView } from "./currentView";

export type Widgets = {
  loginPage: LoginPage;
  currentView: CurrentView;
};

export const widgets = combineReducers(produce, {
  currentView,
  loginPage,
});
