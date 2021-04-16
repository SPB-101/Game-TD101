import type { Action } from "../../actions";
import type { User } from "../../../../app/entities/user/types";

export const FETCH_USER_INFO_FULFILLED = "userInfo/FETCH_LOGIN_FULFILLED";
export const FETCH_USER_INFO_FAILED = "userInfo/FETCH_USER_INFO_FAILED";

export type FulfilledUserInfoAction = Action<
  typeof FETCH_USER_INFO_FULFILLED,
  User
>;

export type FailedUserInfoAction = Action<typeof FETCH_USER_INFO_FAILED, void>;

export const fetchFulfilled = (user: User) =>
  ({
    type: FETCH_USER_INFO_FULFILLED,
    payload: user,
  } as FulfilledUserInfoAction);

export const fetchFailed = () =>
  ({
    type: FETCH_USER_INFO_FAILED,
  } as FailedUserInfoAction);
