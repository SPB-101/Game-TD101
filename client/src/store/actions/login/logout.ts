import type { Action } from "../../actions";

export const FETCH_LOGOUT_FULFILLED = "loginPage/FETCH_LOGOUT_FULFILLED";

export type FulfilledActionLogout = Action<typeof FETCH_LOGOUT_FULFILLED>;

export const fetchFulfilled = () =>
  ({
    type: FETCH_LOGOUT_FULFILLED,
  } as FulfilledActionLogout);
