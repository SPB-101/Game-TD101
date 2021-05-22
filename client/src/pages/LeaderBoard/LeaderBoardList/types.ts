import type { LeaderboardItemId } from "@entities/leaderboard/types";
import type { LeaderboardFilter } from "@resolvers/leaderboard/types";
import type { FulfilledAction, FailedAction } from "@actions/leaderboard";

export interface Props {
  className?: string;
  idsLeaderboardCount: number;
  isLoading: boolean;
  idsLeaderboard: LeaderboardItemId[];
  fetchLeaderboardThunk: (
    filter: LeaderboardFilter
  ) => Promise<FulfilledAction | FailedAction>;
}
