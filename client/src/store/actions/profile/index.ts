import type { Action } from "../../actions";
import type { TypeErrorLogin } from "../../../../app/resolvers/auth";
import { UserProfileError } from "../../../../app/resolvers/profile";

export const FETCH_PROFILE = "profile/FETCH_PROFILE";
export const FETCH_PROFILE_FULFILLED = "profile/FETCH_PROFILE_FULFILLED";
export const FETCH_PROFILE_FAILED = "profile/FETCH_PROFILE_FAILED";
export const SAVE_PROFILE = "profile/SAVE_PROFILE";
export const SAVE_PROFILE_FULFILLED = "profile/SAVE_PROFILE_FULFILLED";
export const SAVE_PROFILE_FAILED = "profile/SAVE_PROFILE_FAILED";

export type FetchAction = Action<typeof FETCH_PROFILE>;
export type FetchActionFulfilled = Action<typeof FETCH_PROFILE_FULFILLED>;
export type FetchActionFailed = Action<
  typeof FETCH_PROFILE_FAILED,
  UserProfileError
>;
export type FetchActions =
  | FetchAction
  | FetchActionFulfilled
  | FetchActionFailed;

export type SaveAction = Action<typeof SAVE_PROFILE>;
export type SaveActionFulfilled = Action<typeof SAVE_PROFILE_FULFILLED>;
export type SaveActionFailed = Action<
  typeof SAVE_PROFILE_FAILED,
  UserProfileError
>;
export type SaveActions = SaveAction | SaveActionFulfilled | SaveActionFailed;

export const fetch = () =>
  ({
    type: FETCH_PROFILE,
  } as FetchAction);

export const fetchFulfilled = () =>
  ({
    type: FETCH_PROFILE_FULFILLED,
  } as FetchActionFulfilled);

export const fetchFailed = (payload: TypeErrorLogin) =>
  ({
    type: FETCH_PROFILE_FAILED,
    payload,
  } as FetchActionFailed);
