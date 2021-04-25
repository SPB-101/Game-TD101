import { createSelector, Selector } from "reselect";
import { LEADERBOARD_TAG } from "@constants/index";

import type { LeaderboardItem } from "@entities/leaderboard/types";
import type { State } from "@reducers/index";

export const getLeaderboardCollection = (state: State) =>
  state.collections.leaderboard;

export const getLeaderboard: Selector<
  State,
  LeaderboardItem[]
> = createSelector(getLeaderboardCollection, (collection) =>
  Object.values(collection).sort((a, b) => {
    return b[LEADERBOARD_TAG]! - a[LEADERBOARD_TAG]!;
  })
);
