import { LeaderboardItem } from "@entities/leaderboard/types";
import { LeaderboardFilter } from "@resolvers/leaderboard/types";

export interface Props {
  isLoading: boolean;
  leaderboard: LeaderboardItem[];
  fetchLeaderboardThunk: (filter: LeaderboardFilter) => Promise<void>;
}
