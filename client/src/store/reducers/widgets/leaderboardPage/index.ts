import {
  Actions,
  FETCH_LEADERBOARD,
  FETCH_LEADERBOARD_FULFILLED,
  FETCH_LEADERBOARD_FAILED,
  UPDATE_CURRENT_PAGE,
} from "@actions/leaderboard";

import { LEADERBOARD_RECORD_LIMIT } from "@constants/index";

import type { LeaderboardItemId } from "@entities/leaderboard/types";

export type LeaderboardPage = {
  isLoading: boolean;
  cursor: number;
  ids: LeaderboardItemId[];
};

export const initialState = {
  isLoading: false,
  cursor: 0,
  ids: [],
};

export const leaderboardPage = (
  state: LeaderboardPage = initialState,
  action: Actions
) => {
  switch (action.type) {
    case FETCH_LEADERBOARD: {
      state.isLoading = true;
      return state;
    }
    case FETCH_LEADERBOARD_FULFILLED: {
      state.isLoading = false;
      state.ids = action.payload.result;
      return state;
    }
    case FETCH_LEADERBOARD_FAILED: {
      state.isLoading = false;
      return state;
    }
    case UPDATE_CURRENT_PAGE: {
      state.cursor = (action.payload - 1) * LEADERBOARD_RECORD_LIMIT;
      return state;
    }
  }

  return state;
};
