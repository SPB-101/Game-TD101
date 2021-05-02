import type { LeaderboardItem } from "@entities/leaderboard/types";
import type { LeaderboardFilter } from "@resolvers/leaderboard/types";
import type { FulfilledAction, FailedAction } from "@actions/leaderboard";

export interface Props {
  isLoading: boolean;
  leaderboard: LeaderboardItem[];
  fetchLeaderboardThunk: (
    filter: LeaderboardFilter
  ) => Promise<FulfilledAction | FailedAction>;
}
