import { LeaderboardItem } from "@entities/leaderboard/types";
import { LeaderboardFilter } from "@resolvers/leaderboard/types";
import { FailedAction, FulfilledAction } from "@actions/leaderboard";

export interface Props {
  isLoading: boolean;
  leaderboard: LeaderboardItem[];
  fetchLeaderboardThunk: (
    filter: LeaderboardFilter
  ) => Promise<FulfilledAction | FailedAction>;
}
