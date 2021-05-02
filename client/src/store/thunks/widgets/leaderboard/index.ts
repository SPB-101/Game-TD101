import type { Dispatch } from "redux";
import { updateCurrentPage } from "@actions/leaderboard";

export const newCurrentPage = (page: number) => (dispatch: Dispatch) => {
  dispatch(updateCurrentPage(page));
};
