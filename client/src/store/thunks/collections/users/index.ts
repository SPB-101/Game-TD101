import {
  fetchUserById,
  fetchUserByIdFailed,
  fetchUserByIdFulfilled,
} from "@actions/userInfo";
import { resolveUserInfoById } from "@resolvers/users";

import type { Dispatch } from "redux";
import type { UserId } from "@resolvers/users/types";

export const fetchUsers = (id: UserId) => (dispatch: Dispatch) => {
  dispatch(fetchUserById(id));

  return resolveUserInfoById(id)
    .then((res) => dispatch(fetchUserByIdFulfilled(res)))
    .catch((err) => dispatch(fetchUserByIdFailed(err)));
};
