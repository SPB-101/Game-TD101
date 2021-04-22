import type { State } from "@reducers/index";

export const getLeaderboardPageWidget = (state: State) =>
  state.widgets.leaderboardPage;

export const getIsLoading = (state: State) =>
  getLeaderboardPageWidget(state).isLoading;
