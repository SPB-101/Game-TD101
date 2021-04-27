import { push } from "connected-react-router";
import { resolveLogin } from "@resolvers/auth";

import { fetchUserInfo } from "@thunks/collections/userInfo";
import {
  fetchLoginPending,
  fetchLoginFailed,
  fetchLoginFulfilled,
} from "@actions/login";
import { formatError } from "@utils/formatError";

import type { Dispatch } from "redux";
import type { LoginAndPass } from "@resolvers/auth/types";

export const fetchLogin = (user: LoginAndPass) => (dispatch: Dispatch) => {
  dispatch(fetchLoginPending());

  return resolveLogin(user)
    .then(() => {
      dispatch(fetchLoginFulfilled());
      dispatch(push("/menu"));
      fetchUserInfo();
    })
    .catch((error) => {
      dispatch(fetchLoginFailed(formatError(error)));
    });
};
