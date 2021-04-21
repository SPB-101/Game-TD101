import { LeaderboardItem } from "../../../app/entities/leaderboard/types";
import { LeaderboardFilter } from "../../../app/resolvers/leaderboard/types";

export interface Props {
  isLoading: boolean;
  leaderboard: LeaderboardItem[];
  fetchLeaderboardThunk: (filter: LeaderboardFilter) => Promise<void>;
}
