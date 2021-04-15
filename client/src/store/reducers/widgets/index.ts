import { combineReducers } from "redux-immer";
import produce from "immer";

import type { LoginPage } from "./loginPage";
import { loginPage } from "./loginPage";
import { profilePage, ProfilePageState } from "./profile";

export type Widgets = {
  loginPage: LoginPage;
  profilePage: ProfilePageState;
};

export const widgets = combineReducers(produce, {
  loginPage,
  profilePage,
});
