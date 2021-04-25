import { FETCH_LEADERBOARD_FULFILLED } from "@actions/leaderboard";

import type { Actions } from "@actions/leaderboard";
import type { LeaderboardItem } from "@entities/leaderboard/types";

export type Leaderboard = Record<string, LeaderboardItem>;

export const leaderboard = (state: Leaderboard = {}, action: Actions) => {
  switch (action.type) {
    case FETCH_LEADERBOARD_FULFILLED: {
      return action.payload.entities.leaderboard;
    }
  }

  return state;
};
