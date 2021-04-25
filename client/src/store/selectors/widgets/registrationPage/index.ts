import type { State } from "@reducers/index";

export const getRegistrationPageWidget = (state: State) =>
  state.widgets.registrationPage;

export const getIsLoading = (state: State) =>
  getRegistrationPageWidget(state).isLoading;

export const getErrorMessage = (state: State) =>
  getRegistrationPageWidget(state).errorMessage;
