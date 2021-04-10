import { combineReducers } from "redux-immer";
import produce from "immer";

import type { LoginPage } from "./loginPage";
import { loginPage } from "./loginPage";

export type Widgets = {
  loginPage: LoginPage;
};

export const widgets = combineReducers(produce, {
  loginPage,
});
