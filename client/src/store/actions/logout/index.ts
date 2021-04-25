import type { Action } from "..";

export const FETCH_LOGOUT_FULFILLED = "loginPage/FETCH_LOGOUT_FULFILLED";

export type FulfilledLogoutAction = Action<typeof FETCH_LOGOUT_FULFILLED>;

export const fetchFulfilled = () =>
  ({
    type: FETCH_LOGOUT_FULFILLED,
  } as FulfilledLogoutAction);
