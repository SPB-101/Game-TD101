import { combineReducers } from "redux-immer";
import produce from "immer";

import { currentView } from "./currentView";
import { leaderboard } from "./leaderboard";
import { comments } from "./comments";
import { forum } from "./forum";
import { users } from "./users";

import type { CurrentView } from "./currentView";
import type { Leaderboard } from "./leaderboard";
import type { Comments } from "./comments";
import type { Forum } from "./forum";
import type { Users } from "./users";

export type Collections = {
  currentView: CurrentView;
  leaderboard: Leaderboard;
  comments: Comments;
  users: Users;
  forum: Forum;
};

export const collections = combineReducers(produce, {
  currentView,
  leaderboard,
  comments,
  users,
  forum,
});
