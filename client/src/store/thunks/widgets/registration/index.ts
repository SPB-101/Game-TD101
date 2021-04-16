import { push } from "connected-react-router";
import { resolveSignup } from "../../../../../app/resolvers/auth";
import { fetch, fetchFailed, fetchFulfilled } from "../../../actions/login";
import { formatError } from "../../../../utils/formatError";

import type { Dispatch } from "redux";
import type { UserRegistration } from "../../../../../app/resolvers/auth/types";

export const fetchRegistration = (user: UserRegistration) => (
  dispatch: Dispatch
) => {
  dispatch(fetch());

  return resolveSignup(user)
    .then(() => {
      dispatch(fetchFulfilled());
      dispatch(push("/menu"));
    })
    .catch((error) => {
      dispatch(fetchFailed(formatError(error)));
    });
};
