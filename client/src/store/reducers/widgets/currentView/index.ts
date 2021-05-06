import { uuid } from "@utils/uuid";

import { FulfilledLoginAction, FETCH_LOGIN_FULFILLED } from "@actions/login";
import { FulfilledLogoutAction, FETCH_LOGOUT_FULFILLED } from "@actions/logout";

import {
  FulfilledUserInfoAction,
  FETCH_USER_INFO_FULFILLED,
  FETCH_USER_INFO_FAILED,
  FailedUserInfoAction,
} from "@actions/userInfo";

import { ToastActions, ADD_TOAST, REMOVE_TOAST } from "@actions/toast";

import type { Toasts } from "./types";

export type CurrentView = {
  isLogin: boolean | null;
  toastCollection: Toasts;
};

const initialState = {
  isLogin: null,
  toastCollection: {},
};

type Actions =
  | FulfilledLoginAction
  | FulfilledLogoutAction
  | FulfilledUserInfoAction
  | FailedUserInfoAction
  | ToastActions;

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

    case ADD_TOAST: {
      const id = uuid();
      state.toastCollection[id] = {
        ...action.payload,
        id,
      };
      return state;
    }

    case REMOVE_TOAST: {
      delete state.toastCollection[action.payload];
      return state;
    }
  }

  return state;
};
