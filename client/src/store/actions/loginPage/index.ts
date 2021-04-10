import type { Action } from "../../actions";
import type { TypeErrorLogin } from "../../../../app/resolvers/auth";

export const FETCH_LOGIN = "loginPage/FETCH_LOGIN";
export const FETCH_LOGIN_FULFILLED = "loginPage/FETCH_LOGIN_FULFILLED";
export const FETCH_LOGIN_FAILED = "loginPage/FETCH_LOGIN_FAILED";

export type FetchAction = Action<typeof FETCH_LOGIN>;
export type FulfilledAction = Action<typeof FETCH_LOGIN_FULFILLED>;
export type FailedAction = Action<typeof FETCH_LOGIN_FAILED, TypeErrorLogin>;
export type Actions = FetchAction | FulfilledAction | FailedAction;

export const fetch = () =>
  ({
    type: FETCH_LOGIN,
  } as FetchAction);

export const fetchFulfilled = () =>
  ({
    type: FETCH_LOGIN_FULFILLED,
  } as FulfilledAction);

export const fetchFailed = (payload: TypeErrorLogin) =>
  ({
    type: FETCH_LOGIN_FAILED,
    payload,
  } as FailedAction);
