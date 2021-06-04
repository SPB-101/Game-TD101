import { push } from "connected-react-router";

import { resolveSignup } from "@resolvers/auth";
import type { UserRegistration } from "@resolvers/auth/types";

import {
  fetchRegistrationPending,
  fetchRegistrationFailed,
  fetchRegistrationFulfilled,
} from "@actions/registration";
import { fetchUserInfo } from "@thunks/collections/userInfo";
import { formatError } from "@utils/formatError";

import type { Dispatch } from "redux";

export const fetchRegistration = (user: UserRegistration) => (
  dispatch: Dispatch
) => {
  dispatch(fetchRegistrationPending());

  return resolveSignup(user)
    .then(() => {
      dispatch(fetchRegistrationFulfilled());
      dispatch(push("/menu"));
      fetchUserInfo()(dispatch);
    })
    .catch((error) => {
      dispatch(fetchRegistrationFailed(formatError(error)));
    });
};
