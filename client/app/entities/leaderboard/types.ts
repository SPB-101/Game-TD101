import { LeaderboardTag } from "@resolvers/leaderboard/types";

/**
 * & Record<LeaderboardTag, number>
 * Подробности о типе https://github.com/microsoft/TypeScript/issues/24220
 */

type PartialRecord<K extends string | number | symbol, T> = { [P in K]?: T };

export type RawLeaderboard = {
  data: {
    id: number;
    displayName: string;
    avatar: string;
  } & Record<LeaderboardTag, number>;
};

export type LeaderboardItem = {
  id: number | string;
  displayName: string;
  avatar: string | null;
} & PartialRecord<LeaderboardTag, number>;

export type LeaderboardItemId = number;
