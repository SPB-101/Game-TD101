export interface Props {
  total: number;
  newCurrentPageThunk: (page: number) => Promise<void>;
}
