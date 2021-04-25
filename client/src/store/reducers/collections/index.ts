import { combineReducers } from "redux-immer";
import produce from "immer";

import { currentView } from "./currentView";
import { leaderboard } from "./leaderboard";
import type { CurrentView } from "./currentView";
import type { Leaderboard } from "./leaderboard";

export type Collections = {
  currentView: CurrentView;
  leaderboard: Leaderboard;
};

export const collections = combineReducers(produce, {
  currentView,
  leaderboard,
});
