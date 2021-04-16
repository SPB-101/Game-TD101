import { combineReducers } from "redux-immer";
import produce from "immer";

import { currentView } from "./currentView";
import type { CurrentView } from "./currentView";

export type Collections = {
  currentView: CurrentView;
};

export const collections = combineReducers(produce, {
  currentView,
});
