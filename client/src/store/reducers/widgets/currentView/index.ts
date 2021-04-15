import {
  FulfilledLoginAction,
  FETCH_LOGIN_FULFILLED,
} from "../../../actions/login";

import {
  FulfilledLogoutAction,
  FETCH_LOGOUT_FULFILLED,
} from "../../../actions/logout";

import {
  FulfilledUserInfoAction,
  FETCH_USER_INFO_FULFILLED,
  FETCH_USER_INFO_FAILED,
  FailedUserInfoAction,
} from "../../../actions/userInfo";

export type CurrentView = {
  isLogin: boolean | null;
};

const initialState = {
  isLogin: null,
};

type Actions =
  | FulfilledLoginAction
  | FulfilledLogoutAction
  | FulfilledUserInfoAction
  | FailedUserInfoAction;

export const currentView = (
  state: CurrentView = initialState,
  action: Actions
) => {
  switch (action.type) {
    case FETCH_LOGIN_FULFILLED: {
      state.isLogin = true;
      return state;
    }

    case FETCH_LOGOUT_FULFILLED: {
      state.isLogin = false;
      return state;
    }

    case FETCH_USER_INFO_FULFILLED: {
      state.isLogin = true;
      return state;
    }

    case FETCH_USER_INFO_FAILED: {
      state.isLogin = false;
      return state;
    }
  }

  return state;
};
