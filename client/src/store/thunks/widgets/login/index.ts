import { push } from "connected-react-router";
import {
  resolveLogin,
  resolveUserInfo,
} from "../../../../../app/resolvers/auth";

import {
  fetchLoginPending,
  fetchLoginFailed,
  fetchLoginFulfilled,
} from "../../../actions/login";
import { fetchUserFulfilled, fetchUserFailed } from "../../../actions/userInfo";
import { formatError } from "../../../../utils/formatError";

import type { Dispatch } from "redux";
import type { LoginAndPass } from "../../../../../app/resolvers/auth/types";

export const fetchLogin = (user: LoginAndPass) => (dispatch: Dispatch) => {
  dispatch(fetchLoginPending());

  return resolveLogin(user)
    .then(() => {
      dispatch(fetchLoginFulfilled());
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
      dispatch(fetchLoginFailed(formatError(error)));
    });
};
