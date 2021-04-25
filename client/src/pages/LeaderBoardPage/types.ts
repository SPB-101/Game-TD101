import { LeaderboardItem } from "../../../app/entities/leaderboard/types";
import { LeaderboardFilter } from "../../../app/resolvers/leaderboard/types";

export interface Props {
  leaderboard: LeaderboardItem[];
  fetchLeaderboardThunk: (filter: LeaderboardFilter) => Promise<any>;
}
