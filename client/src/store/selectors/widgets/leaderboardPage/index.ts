import type { State } from "@reducers/index";

import { LEADERBOARD_RECORD_LIMIT } from "@constants/index";

export const getLeaderboardPageWidget = (state: State) =>
  state.widgets.leaderboardPage;

export const getCursor = (state: State) =>
  getLeaderboardPageWidget(state).cursor;

export const getIds = (state: State) => getLeaderboardPageWidget(state).ids;

export const getIsLoading = (state: State) =>
  getLeaderboardPageWidget(state).isLoading;

export const getIdsLeaderboardCount = (state: State) => getIds(state).length;

export const getCurrentPageLeaderboard = (state: State) => {
  const offset = getCursor(state);
  return getIds(state).slice(offset, offset + LEADERBOARD_RECORD_LIMIT);
};
