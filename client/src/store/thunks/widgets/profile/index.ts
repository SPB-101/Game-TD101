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

import { resolveSetTheme } from "@resolvers/users";
import { setTheme } from "@actions/theme";

import type {
  AvatarFile,
  Passwords,
  UserChangeData,
} from "@resolvers/users/types";
import { formatError } from "@utils/formatError";

import { addToast } from "@actions/toast";
import { fetchUserInfo } from "@thunks/collections/userInfo";

export const fetchProfileAvatar = (fileAvatar: AvatarFile) => (
  dispatch: Dispatch
) => {
  dispatch(fetchAvatar());

  return resolveAvatar(fileAvatar)
    .then((user) => {
      dispatch(fetchAvatarFulfilled(user));
      dispatch(
        addToast({
          title: "saveAvatar",
          type: "success",
        })
      );
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
      dispatch(
        addToast({
          title: "savePassword",
          type: "success",
        })
      );
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
      dispatch(
        addToast({
          title: "saveProfileData",
          type: "success",
        })
      );
      fetchUserInfo();
    })
    .catch((error) => {
      dispatch(fetchProfileFailed(formatError(error)));
    });
};

export const setThemeProfile = (theme: string) => (dispatch: Dispatch) => {
  return resolveSetTheme({ theme })
    .then(() => {
      dispatch(setTheme(theme));
      dispatch(
        addToast({
          title: "saveProfileTheme",
          type: "success",
        })
      );
    })
    .catch(() => {
      dispatch(
        addToast({
          title: "errorProfileTheme",
          type: "error",
        })
      );
    });
};
