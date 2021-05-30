import { push } from "connected-react-router";

import { resolveLogout } from "@resolvers/auth";
import { resetAllLikes } from "@actions/messages";
import { fetchFulfilled } from "@actions/logout";

import type { Dispatch } from "redux";

export const fetchLogout = () => (dispatch: Dispatch) => {
  return resolveLogout()
    .then(() => {
      dispatch(resetAllLikes());
      dispatch(fetchFulfilled());
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      dispatch(push("/"));
    });
};
