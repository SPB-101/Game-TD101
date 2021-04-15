import type { Action } from "../../actions";
import {
  UserProfile,
  UserProfileError,
} from "../../../../app/resolvers/profile";

export const FETCH_PROFILE = "profile/FETCH_PROFILE";
export const FETCH_PROFILE_FULFILLED = "profile/FETCH_PROFILE_FULFILLED";
export const FETCH_PROFILE_FAILED = "profile/FETCH_PROFILE_FAILED";
export const SAVE_PROFILE = "profile/SAVE_PROFILE";
export const SAVE_PROFILE_FULFILLED = "profile/SAVE_PROFILE_FULFILLED";
export const SAVE_PROFILE_FAILED = "profile/SAVE_PROFILE_FAILED";
export const CHANGE_PROFILE_PROPERTY = "profile/CHANGE_PROFILE_PROPERTY";

export type FetchAction = Action<typeof FETCH_PROFILE>;
export type FetchActionFulfilled = Action<
  typeof FETCH_PROFILE_FULFILLED,
  UserProfile
>;
export type FetchActionFailed = Action<
  typeof FETCH_PROFILE_FAILED,
  UserProfileError
>;

export type SaveAction = Action<typeof SAVE_PROFILE>;
export type SaveActionFulfilled = Action<
  typeof SAVE_PROFILE_FULFILLED,
  UserProfile
>;
export type SaveActionFailed = Action<typeof SAVE_PROFILE_FAILED>;

export type ChangeProfileProperty = Action<
  typeof CHANGE_PROFILE_PROPERTY,
  Pair
>;

export type Pair = {
  first: string;
  second: string;
};

export type ProfileActions =
  | FetchAction
  | FetchActionFulfilled
  | FetchActionFailed
  | SaveAction
  | SaveActionFulfilled
  | SaveActionFailed
  | ChangeProfileProperty;

export const changeProfileProperty = (payload: Pair) => ({
  type: CHANGE_PROFILE_PROPERTY,
  payload,
});

export const fetch = () =>
  ({
    type: FETCH_PROFILE,
  } as FetchAction);

export const fetchFulfilled = (payload: UserProfile) =>
  ({
    type: FETCH_PROFILE_FULFILLED,
    payload,
  } as FetchActionFulfilled);

export const fetchFailed = () =>
  ({
    type: FETCH_PROFILE_FAILED,
  } as FetchActionFailed);

export const save = () =>
  ({
    type: SAVE_PROFILE,
  } as SaveAction);

export const saveProfileFulfilled = (payload: UserProfile) =>
  ({
    type: SAVE_PROFILE_FULFILLED,
    payload,
  } as SaveActionFulfilled);

export const saveProfileFailed = () =>
  ({
    type: SAVE_PROFILE_FAILED,
  } as SaveActionFailed);
