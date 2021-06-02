import { resolveUserInfo } from "@resolvers/auth";
import { fetchUserFulfilled, fetchUserFailed } from "@actions/userInfo";
import { formatError } from "@utils/formatError";

import type { Dispatch } from "redux";

export const fetchUserInfo = () => (dispatch: Dispatch) => {
  return resolveUserInfo()
    .then((user) => dispatch(fetchUserFulfilled(user)))
    .catch((error) => dispatch(fetchUserFailed(formatError(error))));
};
