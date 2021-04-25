import { schema } from "normalizr";
import { RawLeaderboard } from "./types";

export const leaderboardEntity = new schema.Entity(
  "leaderboard",
  {},
  {
    idAttribute: ({ data }) => data.id,
    processStrategy: ({ data }: RawLeaderboard) => data,
  }
);

export const leaderboardListEntity = new schema.Array(leaderboardEntity);
