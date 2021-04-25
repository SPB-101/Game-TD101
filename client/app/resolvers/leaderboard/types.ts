import type {
  LeaderboardItem,
  LeaderboardItemId,
} from "../../entities/leaderboard/types";

export type LeaderboardFilter = {
  ratingFieldName: "TD101Score";
  cursor: number;
  limit: number;
};

export type ResolveLeaderboardResult = {
  entities: {
    [id: string]: LeaderboardItem;
  };
  result: LeaderboardItemId[];
};
