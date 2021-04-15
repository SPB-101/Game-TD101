export type RawLeaderboard = {
  data: {
    id: number;
    displayName: string;
    avatar: string;
    score: number;
  };
};

export type LeaderboardItem = {
  id: number;
  displayName: string;
  avatar?: string | null;
  TD101Score: number;
};

export type LeaderboardItemId = number;
