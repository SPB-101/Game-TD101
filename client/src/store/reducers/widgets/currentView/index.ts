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

export type Toast = {
  id?: string;
  title: string;
  description?: string;
  type: "info" | "warning" | "error" | "success";
};

export type Toasts = Record<string, Toast>;

export type CurrentView = {
  isLogin: boolean | null;
  toastList: Toasts;
};

const initialState = {
  isLogin: null,
  toastList: {},
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
      state.toastList[id] = {
        ...action.payload,
        id,
      };
      return state;
    }

    case REMOVE_TOAST: {
      delete state.toastList[action.payload];
      return state;
    }
  }

  return state;
};
