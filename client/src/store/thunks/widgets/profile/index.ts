import type { Dispatch } from "redux";
import {
  fetchAvatar,
  fetchAvatarFulfilled,
  fetchAvatarFailed,
} from "@actions/profile";
import { resolveAvatar } from "@resolvers/users";

import {
  fetchPassword,
  fetchPasswordFulfilled,
  fetchPasswordFailed,
} from "@actions/profile";
import { resolvePassword } from "@resolvers/users";

import {
  fetchProfile,
  fetchProfileFulfilled,
  fetchProfileFailed,
} from "@actions/profile";
import { resolveProfile } from "@resolvers/users";

import type {
  AvatarFile,
  Passwords,
  UserChangeData,
} from "@resolvers/users/types";
import { formatError } from "../../../../utils/formatError";

export const fetchProfileAvatar = (fileAvatar: AvatarFile) => (
  dispatch: Dispatch
) => {
  dispatch(fetchAvatar());

  return resolveAvatar(fileAvatar)
    .then((user) => {
      dispatch(fetchAvatarFulfilled(user));
    })
    .catch((error) => {
      dispatch(fetchAvatarFailed(formatError(error)));
    });
};

export const fetchProfilePassword = (password: Passwords) => (
  dispatch: Dispatch
) => {
  dispatch(fetchPassword());

  return resolvePassword(password)
    .then(() => {
      dispatch(fetchPasswordFulfilled());
    })
    .catch((error) => {
      dispatch(fetchPasswordFailed(formatError(error)));
    });
};

export const fetchProfileData = (userChangeData: UserChangeData) => (
  dispatch: Dispatch
) => {
  dispatch(fetchProfile());

  return resolveProfile(userChangeData)
    .then((user) => {
      dispatch(fetchProfileFulfilled(user));
    })
    .catch((error) => {
      dispatch(fetchProfileFailed(formatError(error)));
    });
};
