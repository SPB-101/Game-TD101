import type { Action } from "../../actions";
import type { Error } from "../../../../app/resolvers/auth/types";
import { RawUser } from "client/app/entities/user/types";

export const FETCH_AVATAR = "profile/FETCH_AVATAR";
export const FETCH_AVATAR_FAILED = "profile/FETCH_AVATAR_FAILED";
export const FETCH_AVATAR_FULFILLED = "profile/FETCH_AVATAR_FULFILLED";

export type FetchAvatarAction = Action<typeof FETCH_AVATAR>;
export type FulfilledAvatarAction = Action<
  typeof FETCH_AVATAR_FULFILLED,
  RawUser
>;
export type FailedAvatarAction = Action<typeof FETCH_AVATAR_FAILED, Error>;

export type Actions =
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
