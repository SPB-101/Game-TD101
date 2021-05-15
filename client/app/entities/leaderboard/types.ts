import { LeaderboardTag } from "@resolvers/leaderboard/types";

/**
 * & Record<LeaderboardTag, number>
 * Подробности о типе https://github.com/microsoft/TypeScript/issues/24220
 */

export type RawLeaderboardItemSection = {
  id: string | number;
  displayName: string;
  avatar: string | null;
} & Record<LeaderboardTag, number>;

export type RawLeaderboardItem = { data: RawLeaderboardItemSection };

export type RawLeaderboard = RawLeaderboardItem[];

export type LeaderboardItemId = number;

export type LeaderboardItem = {
  id: LeaderboardItemId;
  displayName: string;
  avatar: string | null;
} & Record<LeaderboardTag, number>;

export type Leaderboard = {
  data: LeaderboardItem[];
};
