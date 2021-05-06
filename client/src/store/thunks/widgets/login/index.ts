import { push } from "connected-react-router";
import {
  resolveLogin,
  resolveUserInfo,
  resolveOauthYandexLogin,
  resolveOauthYandexServiceId,
} from "@resolvers/auth";

import { fetchUserInfo } from "@thunks/collections/userInfo";
import {
  fetchLoginPending,
  fetchLoginFailed,
  fetchLoginFulfilled,
} from "@actions/login";
import { formatError } from "@utils/formatError";

import type { Dispatch } from "redux";
import type { LoginAndPass } from "@resolvers/auth/types";

import { OAUTH_YANDEX, HOST } from "@constants/index";

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

export const fetchLoginYandexStepOne = () => (dispatch: Dispatch) => {
  dispatch(fetchLoginPending());

  return resolveOauthYandexServiceId()
    .then(({ serviceId }) => {
      document.location.href = `${OAUTH_YANDEX}&client_id=${serviceId}&redirect_uri=${HOST}`;
    })
    .catch((error) => {
      dispatch(fetchLoginFailed(formatError(error)));
    });
};

export const fetchLoginYandexStepTwo = (code: string) => (
  dispatch: Dispatch
) => {
  dispatch(fetchLoginPending());

  return resolveOauthYandexLogin({ code })
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
