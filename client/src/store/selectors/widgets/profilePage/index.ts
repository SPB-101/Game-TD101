import type { State } from "@reducers/index";

export const getProfilePageWidget = (state: State) => state.widgets.profilePage;

export const getFormAvatar = (state: State) =>
  getProfilePageWidget(state).formAvatar;

export const getFormProfile = (state: State) =>
  getProfilePageWidget(state).formProfile;

export const getFormPassword = (state: State) =>
  getProfilePageWidget(state).formPassword;
