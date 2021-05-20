import type { Dispatch } from "redux";
import { resolveForum } from "@resolvers/forum";

import type { ForumFilter } from "@resolvers/forum/types";
import { fetch, fetchFailed, fetchFulfilled } from "@actions/forum";

export const fetchForum = (filter: ForumFilter) => (dispatch: Dispatch) => {
  dispatch(fetch(filter));

  return resolveForum(filter)
    .then((res) => dispatch(fetchFulfilled(res)))
    .catch((err) => dispatch(fetchFailed(err)));
};
