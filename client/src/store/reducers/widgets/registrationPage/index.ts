import {
  Actions,
  FETCH_REGISTRATION,
  FETCH_REGISTRATION_FULFILLED,
  FETCH_REGISTRATION_FAILED,
} from "../../../actions/registration";

export type RegistrationPage = {
  isLoading: boolean;
  errorMessage: string;
};

const initialState = {
  isLoading: false,
  errorMessage: "",
};

export const registrationPage = (
  state: RegistrationPage = initialState,
  action: Actions
) => {
  switch (action.type) {
    case FETCH_REGISTRATION: {
      state.isLoading = true;
      state.errorMessage = "";
      return state;
    }
    case FETCH_REGISTRATION_FULFILLED: {
      state.isLoading = false;
      state.errorMessage = "";
      return state;
    }
    case FETCH_REGISTRATION_FAILED: {
      state.isLoading = false;
      state.errorMessage = action.payload;
      return state;
    }
  }

  return state;
};
