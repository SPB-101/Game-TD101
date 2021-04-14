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
} from "../../../actions/userInfo";

export type CurrentView = {
  isLogin: boolean | null;
};

const initialState = {
  isLogin: null,
};

export const currentView = (
  state: CurrentView = initialState,
  action: FulfilledLoginAction | FulfilledLogoutAction | FulfilledUserInfoAction
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
  }

  return state;
};
