import {
  Actions,
  FETCH_USER_INFO_BY_ID,
  FETCH_USER_INFO_BY_ID_FAILED,
  FETCH_USER_INFO_BY_ID_FULFILLED,
} from "@actions/userInfo";

import { UserId } from "@resolvers/auth/types";

export type UsersWidget = {
  ids: UserId[];
  isLoading: boolean;
};

export const initialState = {
  ids: [],
  isLoading: false,
};

export const users = (state: UsersWidget = initialState, action: Actions) => {
  switch (action.type) {
    case FETCH_USER_INFO_BY_ID: {
      state.isLoading = true;
      return state;
    }
    case FETCH_USER_INFO_BY_ID_FAILED: {
      state.isLoading = false;
      return state;
    }
    case FETCH_USER_INFO_BY_ID_FULFILLED: {
      state.isLoading = false;
      state.ids = [...state.ids, ...action.payload.result];
      return state;
    }
  }

  return state;
};
