import type { Dispatch } from "redux";
import {
  fetchAvatar,
  fetchAvatarFulfilled,
  fetchAvatarFailed,
} from "../../../actions/profile";
import { resolveAvatar } from "../../../../../app/resolvers/users";
import { formatError } from "../../../../utils/formatError";

import type { AvatarFile } from "../../../../../app/resolvers/users/types";

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
