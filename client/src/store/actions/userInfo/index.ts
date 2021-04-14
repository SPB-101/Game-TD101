import type { Action } from "../../actions";
import type { User } from "../../../../app/entities/user/types";

export const FETCH_USER_INFO_FULFILLED = "userInfo/FETCH_LOGIN_FULFILLED";

export type FulfilledUserInfoAction = Action<
  typeof FETCH_USER_INFO_FULFILLED,
  User
>;

export const fetchFulfilled = (user: User) =>
  ({
    type: FETCH_USER_INFO_FULFILLED,
    payload: user,
  } as FulfilledUserInfoAction);
