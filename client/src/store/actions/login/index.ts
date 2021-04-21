import type { Action } from "../../actions";
import type { Error } from "../../../../app/resolvers/auth/types";

export const FETCH_LOGIN = "login/FETCH_LOGIN";
export const FETCH_LOGIN_FULFILLED = "login/FETCH_LOGIN_FULFILLED";
export const FETCH_LOGIN_FAILED = "login/FETCH_LOGIN_FAILED";

export type FetchLoginAction = Action<typeof FETCH_LOGIN>;
export type FulfilledLoginAction = Action<typeof FETCH_LOGIN_FULFILLED>;
export type FailedLoginAction = Action<typeof FETCH_LOGIN_FAILED, Error>;
export type Actions =
  | FetchLoginAction
  | FulfilledLoginAction
  | FailedLoginAction;

export const fetchLoginPending = () =>
  ({
    type: FETCH_LOGIN,
  } as FetchLoginAction);

export const fetchLoginFulfilled = () =>
  ({
    type: FETCH_LOGIN_FULFILLED,
  } as FulfilledLoginAction);

export const fetchLoginFailed = (payload: Error) =>
  ({
    type: FETCH_LOGIN_FAILED,
    payload,
  } as FailedLoginAction);
