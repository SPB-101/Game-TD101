import type {
  LeaderboardItem,
  LeaderboardItemId,
} from "../../entities/leaderboard/types";

export type LeaderboardTag = "TD101Dev1" | "TD101Score";

export type LeaderboardFilter = {
  ratingFieldName: LeaderboardTag;
  cursor: number;
  limit: number;
};

export type ResolveLeaderboardResult = {
  entities: {
    [id: string]: LeaderboardItem;
  };
  result: LeaderboardItemId[];
};

export type LeaderboardAddScore = {
  data: LeaderboardItem;
  ratingFieldName: LeaderboardTag;
};
