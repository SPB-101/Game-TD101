import type {
  RawLeaderboard,
  Leaderboard,
  LeaderboardItem,
} from "@entities/leaderboard/types";

import { LEADERBOARD_TAG } from "@constants/index";

export const formatLeaderBoard = (data: RawLeaderboard): Leaderboard => {
  const formattedData = Object.values(data)
    .map(({ data: { id, [LEADERBOARD_TAG]: tag, ...props } }) => {
      return {
        id: Number(id),
        [LEADERBOARD_TAG]: Number(tag),
        ...props,
      } as LeaderboardItem;
    })
    .sort((a, b) => {
      return b[LEADERBOARD_TAG] - a[LEADERBOARD_TAG];
    });

  return { data: formattedData };
};
