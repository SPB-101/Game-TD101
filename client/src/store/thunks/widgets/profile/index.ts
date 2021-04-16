import type { Dispatch } from "redux";
import {
  fetchAvatar,
  fetchAvatarFulfilled,
  fetchAvatarFailed,
} from "../../../actions/profile";
import { resolveAvatar } from "../../../../../app/resolvers/users";
import type {
  AvatarFile,
  Passwords,
} from "../../../../../app/resolvers/users/types";

import {
  fetchPassword,
  fetchPasswordFulfilled,
  fetchPasswordFailed,
} from "../../../actions/profile";
import { resolvePassword } from "../../../../../app/resolvers/users";

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
