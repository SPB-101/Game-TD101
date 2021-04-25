import { push } from "connected-react-router";

import { resolveSignup, resolveUserInfo } from "@resolvers/auth";
import type { UserRegistration } from "@resolvers/auth/types";

import {
  fetchRegistrationPending,
  fetchRegistrationFailed,
  fetchRegistrationFulfilled,
} from "@actions/registration";
import { fetchUserFulfilled, fetchUserFailed } from "@actions/userInfo";

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
      resolveUserInfo()
        .then((user) => {
          dispatch(fetchUserFulfilled(user));
        })
        .catch((error) => {
          dispatch(fetchUserFailed(formatError(error)));
        });
    })
    .catch((error) => {
      dispatch(fetchRegistrationFailed(formatError(error)));
    });
};
