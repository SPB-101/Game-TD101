export interface Props {
  idsLeaderboardCount: number;
  newCurrentPageThunk: (page: number) => Promise<void>;
}
