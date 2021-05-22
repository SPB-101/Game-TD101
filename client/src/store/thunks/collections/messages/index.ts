import { resolveMessages } from "@resolvers/messages";
import { fetch, fetchFailed, fetchFulfilled } from "@actions/messages";

import type { MessagesFilter } from "@resolvers/messages/types";
import type { Dispatch } from "redux";

export const fetchMessages = (filter: MessagesFilter) => (
  dispatch: Dispatch
) => {
  dispatch(fetch(filter));

  return resolveMessages(filter)
    .then((res) => dispatch(fetchFulfilled(res)))
    .catch((err) => dispatch(fetchFailed(err)));
};
