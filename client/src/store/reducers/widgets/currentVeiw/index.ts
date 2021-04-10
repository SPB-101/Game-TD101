import {
  FulfilledAction,
  FETCH_LOGIN_FULFILLED,
} from "../../../actions/loginPage";

export type CurrentView = {
  isLogin: boolean;
};

const initialState = {
  isLogin: false,
};

export const currentView = (
  state: CurrentView = initialState,
  action: FulfilledAction
) => {
  switch (action?.type) {
    case FETCH_LOGIN_FULFILLED: {
      state.isLogin = true;
      return state;
    }
  }

  return state;
};
