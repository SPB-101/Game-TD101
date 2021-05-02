import { LeaderboardTag } from "@resolvers/leaderboard/types";

/**
 * & Record<LeaderboardTag, number>
 * Подробности о типе https://github.com/microsoft/TypeScript/issues/24220
 */

export type LeaderboardItemId = number;

export type RawLeaderboard = {
  data: {
    id: number;
    displayName: string;
    avatar: string;
  } & Record<LeaderboardTag, number>;
};

export type LeaderboardItem = {
  id: number;
  displayName: string;
  avatar: string | null;
} & Record<LeaderboardTag, number>;
