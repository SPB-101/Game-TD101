import { push } from "connected-react-router";

import { resolveLogout } from "@resolvers/auth";
import { resetCurrentViewLikes } from "@actions/comments";
import { fetchFulfilled } from "@actions/logout";

import type { Dispatch } from "redux";

export const fetchLogout = () => (dispatch: Dispatch) => {
  return resolveLogout()
    .then(() => {
      dispatch(resetCurrentViewLikes());
      dispatch(fetchFulfilled());
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      dispatch(push("/"));
    });
};
