import { LeaderboardTag } from "../../resolvers/leaderboard/types";

export type RawLeaderboard = {
  data: {
    id: number;
    displayName: string;
    avatar: string;
  } & Record<LeaderboardTag, number>;
};

/**
 * & Record<LeaderboardTag, number>
 * Подробности о типе https://github.com/microsoft/TypeScript/issues/24220
 */

export type LeaderboardItem = {
  id: number | string;
  displayName: string;
  avatar: string | null;
} & Record<LeaderboardTag, number>;

export type LeaderboardItemId = number;
