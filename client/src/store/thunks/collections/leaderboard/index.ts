import type { Dispatch } from "redux";
import { resolveLeaderboard } from "../../../../../app/resolvers/leaderboard";

import type { LeaderboardFilter } from "../../../../../app/resolvers/leaderboard/types";
import {
  fetch,
  fetchFailed,
  fetchFulfilled,
} from "../../../actions/leaderboard";

export const fetchLeaderboard = (filter: LeaderboardFilter) => (
  dispatch: Dispatch
) => {
  dispatch(fetch(filter));

  return resolveLeaderboard(filter)
    .then((res) => dispatch(fetchFulfilled(res)))
    .catch((err) => dispatch(fetchFailed(err)));
};
