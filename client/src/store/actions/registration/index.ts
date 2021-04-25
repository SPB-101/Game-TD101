import type { Action } from "@actions/index";
import type { Error } from "@resolvers/auth/types";

export const FETCH_REGISTRATION = "login/FETCH_REGISTRATION";
export const FETCH_REGISTRATION_FULFILLED =
  "login/FETCH_REGISTRATION_FULFILLED";
export const FETCH_REGISTRATION_FAILED = "login/FETCH_REGISTRATION_FAILED";

export type FetchRegistrationAction = Action<typeof FETCH_REGISTRATION>;
export type FulfilledRegistrationAction = Action<
  typeof FETCH_REGISTRATION_FULFILLED
>;
export type FailedRegistrationAction = Action<
  typeof FETCH_REGISTRATION_FAILED,
  Error
>;
export type Actions =
  | FetchRegistrationAction
  | FulfilledRegistrationAction
  | FailedRegistrationAction;

export const fetchRegistrationPending = () =>
  ({
    type: FETCH_REGISTRATION,
  } as FetchRegistrationAction);

export const fetchRegistrationFulfilled = () =>
  ({
    type: FETCH_REGISTRATION_FULFILLED,
  } as FulfilledRegistrationAction);

export const fetchRegistrationFailed = (payload: Error) =>
  ({
    type: FETCH_REGISTRATION_FAILED,
    payload,
  } as FailedRegistrationAction);
