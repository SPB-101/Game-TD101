import type { Dispatch } from "redux";
import { fetch, fetchFailed, fetchFulfilled } from "../../../actions/profile";

import { formatError } from "../../../../utils/formatError";
import { resolveUserProfile } from "../../../../../app/resolvers/profile";

export const fetchProfile = (userId = 1) => (dispatch: Dispatch) => {
  dispatch(fetch());

  return resolveUserProfile(userId)
    .then(() => {
      dispatch(fetchFulfilled());
    })
    .catch((error) => {
      dispatch(fetchFailed(formatError(error)));
    });
};
