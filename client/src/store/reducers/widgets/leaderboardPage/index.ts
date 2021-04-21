import {
  Actions,
  FETCH_LEADERBOARD,
  FETCH_LEADERBOARD_FULFILLED,
  FETCH_LEADERBOARD_FAILED,
} from "../../../actions/leaderboard";

export type LeaderboardPage = {
  isLoading: boolean;
};

const initialState = {
  isLoading: false,
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
      return state;
    }
    case FETCH_LEADERBOARD_FAILED: {
      state.isLoading = false;
      return state;
    }
  }

  return state;
};
