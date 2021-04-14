import {
  FulfilledAction,
  FETCH_LOGIN_FULFILLED,
} from "../../../actions/loginPage";
import {
  FulfilledActionLogout,
  FETCH_LOGOUT_FULFILLED,
} from "../../../actions/loginPage/logout";

export type CurrentView = {
  isLogin: boolean;
};

const initialState = {
  isLogin: false,
};

export const currentView = (
  state: CurrentView = initialState,
  action: FulfilledAction | FulfilledActionLogout
) => {
  switch (action.type) {
    case FETCH_LOGIN_FULFILLED: {
      state.isLogin = true;
      return state;
    }

    case FETCH_LOGOUT_FULFILLED: {
      state.isLogin = false;
      return state;
    }
  }

  return state;
};
