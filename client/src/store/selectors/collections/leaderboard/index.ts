import { createSelector, Selector } from "reselect";
import { LeaderboardItem } from "../../../../../app/entities/leaderboard/types";
import { LEADERBOARD_TAG } from "../../../../constants";

import type { State } from "../../../reducers";

export const getLeaderboardCollection = (state: State) =>
  state.collections.leaderboard;

export const getLeaderboard: Selector<
  State,
  LeaderboardItem[]
> = createSelector(getLeaderboardCollection, (collection) =>
  Object.values(collection).sort((a, b) => {
    return b[LEADERBOARD_TAG] - a[LEADERBOARD_TAG];
  })
);
