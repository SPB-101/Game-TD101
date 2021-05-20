import { combineReducers } from "redux-immer";
import produce from "immer";

import { currentView } from "./currentView";
import { leaderboard } from "./leaderboard";
import { forum } from "./forum";

import type { CurrentView } from "./currentView";
import type { Leaderboard } from "./leaderboard";
import type { Forum } from "./forum";

export type Collections = {
  currentView: CurrentView;
  leaderboard: Leaderboard;
  forum: Forum;
};

export const collections = combineReducers(produce, {
  currentView,
  leaderboard,
  forum,
});
