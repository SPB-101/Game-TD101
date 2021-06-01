export interface Props {
  total: number;
  title: string;
  offset: number;
  newCurrentPageThunk: (page: number) => Promise<void>;
}
