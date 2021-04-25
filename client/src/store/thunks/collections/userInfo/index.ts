import { resolveUserInfo } from "../../../../../app/resolvers/auth";
import { fetchFulfilled, fetchFailed } from "../../../actions/userInfo";
import { formatError } from "../../../../utils/formatError";

import type { Dispatch } from "redux";

export const fetchUserInfo = () => (dispatch: Dispatch) => {
  return resolveUserInfo()
    .then((user) => {
      dispatch(fetchFulfilled(user));
    })
    .catch((error) => {
      dispatch(fetchFailed(formatError(error)));
    });
};
