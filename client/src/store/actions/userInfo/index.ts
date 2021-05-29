import type { Action } from "@actions/index";
import type { User } from "@entities/user/types";
import type { Error } from "@resolvers/auth/types";
import { ResolveUsersInfo, UserId } from "@resolvers/users/types";

export const FETCH_USER_INFO_FULFILLED = "userInfo/FETCH_LOGIN_FULFILLED";
export const FETCH_USER_INFO_FAILED = "userInfo/FETCH_USER_INFO_FAILED";

export const FETCH_USER_INFO_BY_ID = "userInfo/FETCH_FETCH_USER_INFO";
export const FETCH_USER_INFO_BY_ID_FULFILLED =
  "userInfo/FETCH_USER_INFO_FULFILLED";
export const FETCH_USER_INFO_BY_ID_FAILED = "userInfo/FETCH_USER_INFO_FAILED";

export type FulfilledUserInfoAction = Action<
  typeof FETCH_USER_INFO_FULFILLED,
  User
>;

export type FailedUserInfoAction = Action<typeof FETCH_USER_INFO_FAILED, Error>;

export type FetchUserInfoByIdAction = Action<
  typeof FETCH_USER_INFO_BY_ID,
  UserId
>;

export type FulfilledUserInfoByIdAction = Action<
  typeof FETCH_USER_INFO_BY_ID_FULFILLED,
  ResolveUsersInfo
>;

export type FailedUserInfoByIdAction = Action<
  typeof FETCH_USER_INFO_BY_ID_FAILED,
  Error
>;

export type Actions =
  | FulfilledUserInfoAction
  | FailedUserInfoAction
  | FetchUserInfoByIdAction
  | FulfilledUserInfoByIdAction
  | FailedUserInfoByIdAction;

export const fetchUserFulfilled = (user: User) =>
  ({
    type: FETCH_USER_INFO_FULFILLED,
    payload: user,
  } as FulfilledUserInfoAction);

export const fetchUserFailed = (payload: Error) =>
  ({
    type: FETCH_USER_INFO_FAILED,
    payload,
  } as FailedUserInfoAction);

export const fetchUserById = (id: UserId) =>
  ({
    type: FETCH_USER_INFO_BY_ID,
    payload: id,
  } as FetchUserInfoByIdAction);

export const fetchUserByIdFulfilled = (user: ResolveUsersInfo) =>
  ({
    type: FETCH_USER_INFO_BY_ID_FULFILLED,
    payload: user,
  } as FulfilledUserInfoByIdAction);

export const fetchUserByIdFailed = (payload: Error) =>
  ({
    type: FETCH_USER_INFO_BY_ID_FAILED,
    payload,
  } as FailedUserInfoByIdAction);
