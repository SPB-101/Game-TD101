import { combineReducers } from "redux-immer";
import produce from "immer";

import { currentViewCollection } from "./currentView";
import { leaderboard } from "./leaderboard";
import type { CurrentViewCollection } from "./currentView";
import type { Leaderboard } from "./leaderboard";

export type Collections = {
  currentViewCollection: CurrentViewCollection;
  leaderboard: Leaderboard;
};

export const collections = combineReducers(produce, {
  currentViewCollection,
  leaderboard,
});
