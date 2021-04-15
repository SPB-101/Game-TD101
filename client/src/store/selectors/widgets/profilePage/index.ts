import type { State } from "../../../reducers";

export const getIsLoading = (state: State) => state.widgets.profile.isLoading;
export const getErrorMessage = (state: State) =>
  state.widgets.profile.errorMessage;
