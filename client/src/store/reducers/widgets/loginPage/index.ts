import {
  Actions,
  FETCH_LOGIN,
  FETCH_LOGIN_FAILED,
  FETCH_LOGIN_FULFILLED,
} from "../../../actions/login";

export type LoginPage = {
  isLoading: boolean;
  errorMessage: string;
};

const initialState = {
  isLoading: false,
  errorMessage: "",
};

export const loginPage = (state: LoginPage = initialState, action: Actions) => {
  switch (action.type) {
    case FETCH_LOGIN: {
      state.isLoading = true;
      return state;
    }
    case FETCH_LOGIN_FULFILLED: {
      state.isLoading = false;
      return state;
    }
    case FETCH_LOGIN_FAILED: {
      state.isLoading = false;
      state.errorMessage = action.payload;
      return state;
    }
  }

  return state;
};
