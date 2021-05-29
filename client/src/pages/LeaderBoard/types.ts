export interface Props {
  idsLeaderboardCount: number;
  offset: number;
  newCurrentPageThunk: (page: number) => Promise<void>;
}
