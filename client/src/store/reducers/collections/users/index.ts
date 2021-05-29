import { FETCH_USER_INFO_BY_ID_FULFILLED } from "@actions/userInfo";

import type { FulfilledUserInfoByIdAction } from "@actions/userInfo";

import type { User } from "@entities/user/types";

export type Users = Record<number, User>;

export const initialState = {};

export const users = (
  state: Users = initialState,
  action: FulfilledUserInfoByIdAction
) => {
  switch (action.type) {
    case FETCH_USER_INFO_BY_ID_FULFILLED: {
      return { ...state, ...action.payload.entities.users };
    }
  }

  return state;
};
