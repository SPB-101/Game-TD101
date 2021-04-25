import {
  FETCH_AVATAR,
  FETCH_AVATAR_FAILED,
  FETCH_AVATAR_FULFILLED,
  FETCH_PROFILE,
  FETCH_PROFILE_FULFILLED,
  FETCH_PROFILE_FAILED,
  FETCH_PASSWORD,
  FETCH_PASSWORD_FULFILLED,
  FETCH_PASSWORD_FAILED,
} from "@actions/profile";

import type {
  ProfileActions,
  PasswordActions,
  AvatarActions,
} from "@actions/profile";

type form = {
  errorMessage: string;
  isLoading: boolean;
};

export type ProfilePage = {
  formAvatar: form;
  formProfile: form;
  formPassword: form;
};

const initialState = {
  formAvatar: {
    isLoading: false,
    errorMessage: "",
  },
  formProfile: {
    isLoading: false,
    errorMessage: "",
  },
  formPassword: {
    isLoading: false,
    errorMessage: "",
  },
};

export const profilePage = (
  state: ProfilePage = initialState,
  action: AvatarActions | PasswordActions | ProfileActions
) => {
  switch (action.type) {
    case FETCH_AVATAR: {
      state.formAvatar.isLoading = true;
      state.formAvatar.errorMessage = "";
      return state;
    }
    case FETCH_AVATAR_FULFILLED: {
      state.formAvatar.isLoading = false;
      state.formAvatar.errorMessage = "";
      return state;
    }
    case FETCH_AVATAR_FAILED: {
      state.formAvatar.isLoading = false;
      state.formAvatar.errorMessage = action.payload;
      return state;
    }
    case FETCH_PROFILE: {
      state.formProfile.isLoading = true;
      state.formProfile.errorMessage = "";
      return state;
    }
    case FETCH_PROFILE_FULFILLED: {
      state.formProfile.isLoading = false;
      state.formProfile.errorMessage = "";
      return state;
    }
    case FETCH_PROFILE_FAILED: {
      state.formProfile.isLoading = false;
      state.formProfile.errorMessage = action.payload;
      return state;
    }
    case FETCH_PASSWORD: {
      state.formPassword.isLoading = true;
      state.formPassword.errorMessage = "";
      return state;
    }
    case FETCH_PASSWORD_FULFILLED: {
      state.formPassword.isLoading = false;
      state.formPassword.errorMessage = "";
      return state;
    }
    case FETCH_PASSWORD_FAILED: {
      state.formPassword.isLoading = false;
      state.formPassword.errorMessage = action.payload;
      return state;
    }
  }

  return state;
};
