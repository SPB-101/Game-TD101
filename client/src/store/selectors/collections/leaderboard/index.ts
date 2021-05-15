import { createSelector, Selector } from "reselect";

import type {
  LeaderboardItem,
  LeaderboardItemId,
} from "@entities/leaderboard/types";
import type { State } from "@reducers/index";

export const getLeaderboardCollection = (state: State) =>
  state.collections.leaderboard;

export const getLeaderboardItem = (state: State, id: LeaderboardItemId) =>
  getLeaderboardCollection(state)[id];

export const getLeaderboard: Selector<
  State,
  LeaderboardItem[]
> = createSelector(getLeaderboardCollection, (collection) =>
  Object.values(collection)
);
