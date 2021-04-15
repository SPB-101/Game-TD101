import { combineReducers } from "redux-immer";
import produce from "immer";

import { leaderboard, Leaderboard } from "./leaderboard";

export type Collections = {
  leaderboard: Leaderboard;
};

export const collections = combineReducers(produce, {
  leaderboard,
});
