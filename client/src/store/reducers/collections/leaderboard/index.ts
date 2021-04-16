import { FETCH_LEADERBOARD_FULFILLED } from "../../../actions/leaderboard";
import initialState from "./mockData.json";

import type { Actions } from "../../../actions/leaderboard";
import type { LeaderboardItem } from "../../../../../app/entities/leaderboard/types";

export type Leaderboard = {
  [id: string]: LeaderboardItem;
};

export const leaderboard = (
  state: Leaderboard = initialState,
  action: Actions
) => {
  switch (action.type) {
    case FETCH_LEADERBOARD_FULFILLED: {
      return action.payload.entities.leaderboard;
    }
  }

  return state;
};
