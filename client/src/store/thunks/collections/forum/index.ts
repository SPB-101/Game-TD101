import { resolveForum } from "@resolvers/forum";
import { fetch, fetchFailed, fetchFulfilled } from "@actions/forum";

import type { ForumFilter } from "@resolvers/forum/types";
import type { Dispatch } from "redux";

export const fetchForum = (filter: ForumFilter) => (dispatch: Dispatch) => {
  dispatch(fetch(filter));

  return resolveForum(filter)
    .then((res) => dispatch(fetchFulfilled(res)))
    .catch((err) => dispatch(fetchFailed(err)));
};
