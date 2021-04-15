import type { Dispatch } from "redux";
import {
  changeProfileProperty,
  fetch,
  fetchFailed,
  fetchFulfilled,
  Pair,
  save,
  saveProfileFailed,
  saveProfileFulfilled,
} from "../../../actions/profile";

import {
  resolveAuthProfile,
  resolveSaveProfile,
  resolveSignIn,
  UserProfile,
} from "../../../../../app/resolvers/profile";

export const saveProfile = (user: UserProfile) => (dispatch: Dispatch) => {
  dispatch(save());
  user = {
    ...user,
    display_name: "",
  };
  return resolveSaveProfile(user)
    .then((userResponse) => {
      dispatch(saveProfileFulfilled(userResponse.data));
    })
    .catch(() => dispatch(saveProfileFailed()));
};

export const dispatchOnChange = (payload: Pair) => (dispatch: Dispatch) => {
  dispatch(changeProfileProperty(payload));
};

export const fetchProfile = () => (dispatch: Dispatch) => {
  dispatch(fetch());
  function resolveAuth() {
    resolveAuthProfile()
      .then((response) => {
        dispatch(fetchFulfilled(response.data));
      })
      .catch(() => {
        dispatch(fetchFailed());
      });
  }
  return resolveSignIn()
    .then(() => {
      resolveAuth();
    })
    .catch(() => {
      resolveAuth();
    });
};
