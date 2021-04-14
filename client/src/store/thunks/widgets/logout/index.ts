import { push } from "connected-react-router";
import { resolveLogout } from "../../../../../app/resolvers/auth";
import { fetchFulfilled } from "../../../actions/logout";

import type { Dispatch } from "redux";

export const fetchLogout = () => (dispatch: Dispatch) => {
  return resolveLogout()
    .then(() => {
      dispatch(fetchFulfilled());
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      dispatch(push("/"));
    });
};
