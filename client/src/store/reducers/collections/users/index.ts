import { FETCH_USER_INFO_BY_ID_FULFILLED } from "@actions/userInfo";

import type { FulfilledUserInfoByIdAction } from "@actions/userInfo";

import type { User } from "@entities/user/types";

export type Users = Record<string, User>;

export const initialState = {};

export const users = (
  state: Users = initialState,
  action: FulfilledUserInfoByIdAction
) => {
  switch (action.type) {
    case FETCH_USER_INFO_BY_ID_FULFILLED: {
      state.users = { ...state.users, ...action.payload };
      return state;
    }
  }

  return state;
};
