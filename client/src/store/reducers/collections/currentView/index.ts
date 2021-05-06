import { FETCH_USER_INFO_FULFILLED } from "@actions/userInfo";

import type { FulfilledLoginAction } from "@actions/login";
import type { FulfilledUserInfoAction } from "@actions/userInfo";

import type { User } from "@entities/user/types";

export type CurrentView = {
  user: User;
};

export const initialState = {
  user: {
    id: 0,
    firstName: "",
    secondName: "",
    displayName: "",
    login: "",
    email: "",
    phone: "",
    avatar: "",
  },
};

export const currentView = (
  state: CurrentView = initialState,
  action: FulfilledLoginAction | FulfilledUserInfoAction
) => {
  switch (action.type) {
    case FETCH_USER_INFO_FULFILLED: {
      state.user = action.payload;
      return state;
    }
  }

  return state;
};
