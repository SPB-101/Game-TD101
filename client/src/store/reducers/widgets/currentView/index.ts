import { uuid } from "@utils/uuid";

import { FulfilledLoginAction, FETCH_LOGIN_FULFILLED } from "@actions/login";
import { FulfilledLogoutAction, FETCH_LOGOUT_FULFILLED } from "@actions/logout";

import {
  FulfilledUserInfoAction,
  FETCH_USER_INFO_FULFILLED,
  FETCH_USER_INFO_FAILED,
  FailedUserInfoAction,
} from "@actions/userInfo";

import { ThemeActions, SET_THEME } from "@actions/theme";
import { ToastActions, ADD_TOAST, REMOVE_TOAST } from "@actions/toast";
import { THEME_DARK } from "@constants/index";

import type { Toasts } from "./types";

export type CurrentView = {
  isLogin: boolean | null;
  theme: string;
  toastCollection: Toasts;
};

export const initialState = {
  isLogin: null,
  theme: THEME_DARK,
  toastCollection: {},
};

type Actions =
  | FulfilledLoginAction
  | FulfilledLogoutAction
  | FulfilledUserInfoAction
  | FailedUserInfoAction
  | ToastActions
  | ThemeActions;

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

    case SET_THEME: {
      state.theme = action.payload;
      return state;
    }
  }

  return state;
};
