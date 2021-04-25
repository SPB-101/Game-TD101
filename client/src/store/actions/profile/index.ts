import type { Action } from "../../actions";
import type { Error } from "../../../../app/resolvers/auth/types";
import type { RawUser } from "client/app/entities/user/types";

/** FETCH_PASSWORD */

export const FETCH_AVATAR = "profile/FETCH_AVATAR";
export const FETCH_AVATAR_FAILED = "profile/FETCH_AVATAR_FAILED";
export const FETCH_AVATAR_FULFILLED = "profile/FETCH_AVATAR_FULFILLED";

export type FetchAvatarAction = Action<typeof FETCH_AVATAR>;
export type FulfilledAvatarAction = Action<
  typeof FETCH_AVATAR_FULFILLED,
  RawUser
>;
export type FailedAvatarAction = Action<typeof FETCH_AVATAR_FAILED, Error>;

export type AvatarActions =
  | FetchAvatarAction
  | FulfilledAvatarAction
  | FailedAvatarAction;

export const fetchAvatar = () =>
  ({
    type: FETCH_AVATAR,
  } as FetchAvatarAction);

export const fetchAvatarFulfilled = (payload: RawUser) =>
  ({
    type: FETCH_AVATAR_FULFILLED,
    payload,
  } as FulfilledAvatarAction);

export const fetchAvatarFailed = (payload: Error) =>
  ({
    type: FETCH_AVATAR_FAILED,
    payload,
  } as FailedAvatarAction);

/** FETCH_PASSWORD */

export const FETCH_PASSWORD = "profile/FETCH_PASSWORD";
export const FETCH_PASSWORD_FAILED = "profile/FETCH_PASSWORD_FAILED";
export const FETCH_PASSWORD_FULFILLED = "profile/FETCH_PASSWORD_FULFILLED";

export type FetchPasswordAction = Action<typeof FETCH_PASSWORD>;
export type FulfilledPasswordAction = Action<typeof FETCH_PASSWORD_FULFILLED>;
export type FailedPasswordAction = Action<typeof FETCH_PASSWORD_FAILED, Error>;

export type PasswordActions =
  | FetchPasswordAction
  | FulfilledPasswordAction
  | FailedPasswordAction;

export const fetchPassword = () =>
  ({
    type: FETCH_PASSWORD,
  } as FetchPasswordAction);

export const fetchPasswordFulfilled = () =>
  ({
    type: FETCH_PASSWORD_FULFILLED,
  } as FulfilledPasswordAction);

export const fetchPasswordFailed = (payload: Error) =>
  ({
    type: FETCH_PASSWORD_FAILED,
    payload,
  } as FailedPasswordAction);

/** FETCH_PROFILE */

export const FETCH_PROFILE = "profile/FETCH_PROFILE";
export const FETCH_PROFILE_FAILED = "profile/FETCH_PROFILE_FAILED";
export const FETCH_PROFILE_FULFILLED = "profile/FETCH_PROFILE_FULFILLED";

export type FetchProfileAction = Action<typeof FETCH_PROFILE>;
export type FulfilledProfileAction = Action<
  typeof FETCH_PROFILE_FULFILLED,
  RawUser
>;
export type FailedProfileAction = Action<typeof FETCH_PROFILE_FAILED, Error>;

export type ProfileActions =
  | FetchProfileAction
  | FulfilledProfileAction
  | FailedProfileAction;

export const fetchProfile = () =>
  ({
    type: FETCH_PROFILE,
  } as FetchProfileAction);

export const fetchProfileFulfilled = (payload: RawUser) =>
  ({
    type: FETCH_PROFILE_FULFILLED,
    payload,
  } as FulfilledProfileAction);

export const fetchProfileFailed = (payload: Error) =>
  ({
    type: FETCH_PROFILE_FAILED,
    payload,
  } as FailedProfileAction);
