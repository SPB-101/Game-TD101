import {
  FETCH_PROFILE,
  FETCH_PROFILE_FAILED,
  FETCH_PROFILE_FULFILLED,
  FetchActions,
} from "../../../actions/profile";

import { UserProfile } from "../../../../../app/resolvers/profile";

export type ProfilePageState = {
  isLoading: boolean;
  errorMessage: string;
  profile: UserProfile;
};

const initialState = {
  isLoading: false,
  errorMessage: "",
  profile: {} as UserProfile,
};

export const profilePage = (
  state: ProfilePageState = initialState,
  action: FetchActions
) => {
  switch (action.type) {
    case FETCH_PROFILE: {
      state.isLoading = true;
      return state;
    }
    case FETCH_PROFILE_FULFILLED: {
      state.isLoading = false;
      return state;
    }
    case FETCH_PROFILE_FAILED: {
      state.isLoading = false;
      state.errorMessage = action.payload;
      return state;
    }
  }

  return state;
};
