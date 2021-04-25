import { createSelector, Selector } from "reselect";
import type { State } from "../../../reducers";
import { LeaderboardItem } from "../../../../../app/entities/leaderboard/types";

export const getLeaderboardCollection = (state: State) =>
  state.collections.leaderboard;

export const getLeaderboard: Selector<
  State,
  LeaderboardItem[]
> = createSelector(getLeaderboardCollection, (collection) =>
  Object.values(collection)
);
