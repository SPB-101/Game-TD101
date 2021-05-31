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
import type { CommentId } from "@entities/comments/types";
import {
  RESET_CURRENT_VIEW_LIKES,
  SET_LIKE_FULFILLED,
  RESET_LIKE_FULFILLED,
  ResetCurrentViewLikesAction,
  SetLikeFulfilledAction,
  ResetLikeFulfilledAction,
} from "@actions/comments";

export type CurrentView = {
  isLogin: boolean | null;
  theme: string;
  toastCollection: Toasts;
  likesCollection: CommentId[];
};

export const initialState = {
  isLogin: null,
  theme: THEME_DARK,
  toastCollection: {},
  likesCollection: [],
};

type Actions =
  | FulfilledLoginAction
  | FulfilledLogoutAction
  | FulfilledUserInfoAction
  | FailedUserInfoAction
  | ToastActions
  | ThemeActions
  | SetLikeFulfilledAction
  | ResetCurrentViewLikesAction
  | ResetLikeFulfilledAction;

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

    case SET_LIKE_FULFILLED: {
      if (!state.likesCollection.includes(action.payload)) {
        state.likesCollection.push(action.payload);
      }
      return state;
    }

    case RESET_LIKE_FULFILLED: {
      if (state.likesCollection.includes(action.payload)) {
        const index = state.likesCollection.indexOf(action.payload);
        state.likesCollection.splice(index, 1);
      }
      return state;
    }

    case RESET_CURRENT_VIEW_LIKES: {
      state.likesCollection = [];
      return state;
    }
  }

  return state;
};
