import {
  CHANGE_PROFILE_PROPERTY,
  FETCH_PROFILE,
  FETCH_PROFILE_FAILED,
  FETCH_PROFILE_FULFILLED,
  ProfileActions,
  SAVE_PROFILE,
  SAVE_PROFILE_FAILED,
  SAVE_PROFILE_FULFILLED,
} from "../../../actions/profile";

import { UserProfile } from "../../../../../app/resolvers/profile";

export type ProfilePageState = {
  isLoading: boolean;
  user: UserProfile;
};

const initialState = {
  isLoading: false,
  user: {} as UserProfile,
};

export const profilePage = (
  state: ProfilePageState = initialState,
  action: ProfileActions
) => {
  switch (action.type) {
    case CHANGE_PROFILE_PROPERTY:
      return {
        ...state,
        user: {
          ...state.user,
          [action.payload.first]: action.payload.second,
        },
      };
    case FETCH_PROFILE:
      return {
        ...state,
        isLoading: true,
      };
    case SAVE_PROFILE:
      return {
        ...state,
        isLoading: true,
        user: action.payload,
      };
    case SAVE_PROFILE_FULFILLED:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case FETCH_PROFILE_FULFILLED:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case SAVE_PROFILE_FAILED:
    case FETCH_PROFILE_FAILED:
      return {
        ...state,
        isLoading: false,
      };
  }

  return state;
};
