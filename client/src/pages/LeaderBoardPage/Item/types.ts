import {
  LeaderboardItemId,
  LeaderboardItem,
} from "@entities/leaderboard/types";

export type IdProps = {
  id: LeaderboardItemId;
};

export type OwnProps = {
  offset: number;
  index: number;
  leaderboardItem: LeaderboardItem;
};

export type Props = IdProps & OwnProps;
