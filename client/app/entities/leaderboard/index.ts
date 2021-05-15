import { schema } from "normalizr";
import { LeaderboardItem } from "./types";

export const leaderboardEntity = new schema.Entity(
  "leaderboard",
  {},
  {
    idAttribute: (data) => data.id,
    processStrategy: (data: { data: LeaderboardItem }) => data,
  }
);

export const leaderboardListEntity = new schema.Array(leaderboardEntity);
