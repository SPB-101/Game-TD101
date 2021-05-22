import { combineReducers } from "redux-immer";
import produce from "immer";

import { currentView } from "./currentView";
import { leaderboard } from "./leaderboard";
import { messages } from "./messages";
import { forum } from "./forum";

import type { CurrentView } from "./currentView";
import type { Leaderboard } from "./leaderboard";
import type { Messages } from "./messages";
import type { Forum } from "./forum";

export type Collections = {
  currentView: CurrentView;
  leaderboard: Leaderboard;
  messages: Messages;
  forum: Forum;
};

export const collections = combineReducers(produce, {
  currentView,
  leaderboard,
  messages,
  forum,
});
