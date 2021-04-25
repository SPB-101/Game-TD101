import type { Action } from "../../actions";
import type { User } from "../../../../app/entities/user/types";
import type { Error } from "../../../../app/resolvers/auth/types";

export const FETCH_USER_INFO_FULFILLED = "userInfo/FETCH_LOGIN_FULFILLED";
export const FETCH_USER_INFO_FAILED = "userInfo/FETCH_USER_INFO_FAILED";

export type FulfilledUserInfoAction = Action<
  typeof FETCH_USER_INFO_FULFILLED,
  User
>;

export type FailedUserInfoAction = Action<typeof FETCH_USER_INFO_FAILED, Error>;

export const fetchFulfilled = (user: User) =>
  ({
    type: FETCH_USER_INFO_FULFILLED,
    payload: user,
  } as FulfilledUserInfoAction);

export const fetchFailed = (payload: Error) =>
  ({
    type: FETCH_USER_INFO_FAILED,
    payload,
  } as FailedUserInfoAction);
