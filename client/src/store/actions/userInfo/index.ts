import type { Action } from "@actions/index";
import type { User } from "@entities/user/types";
import type { Error } from "@resolvers/auth/types";
import type { UserId } from "@resolvers/users/types";
import { ResolveUsersInfo } from "@resolvers/users/types";

export const FETCH_USER_INFO_FULFILLED = "userInfo/FETCH_LOGIN_FULFILLED";
export const FETCH_USER_INFO_FAILED = "userInfo/FETCH_USER_INFO_FAILED";

export const FETCH_USER_INFO_BY_ID = "userById/FETCH_USER_INFO_BY_ID";
export const FETCH_USER_INFO_BY_ID_FULFILLED =
  "userById/FETCH_USER_INFO_BY_ID_FULFILLED";
export const FETCH_USER_INFO_BY_ID_FAILED =
  "userById/FETCH_USER_INFO_BY_ID_FAILED";

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
