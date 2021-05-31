import { push } from "connected-react-router";
import { createApp } from "../../../client/src/store";
import { getInitialState } from "../../../client/src/store/getInitialState";
import { fetchLoginFulfilled } from "../../../client/src/store/actions/login";
import { setTheme } from "../../../client/src/store/actions/theme";
import { getUserInfo, isUserAuth } from "../../utils/user";
import { fetchUserFulfilled } from "../../../client/src/store/actions/userInfo";

import type { Response } from "express";

export const initRedux = (res: Response, location: string, theme: string) => {
  const initialState = getInitialState(location);
  const { store } = createApp(initialState);

  store.dispatch(push(location));
  store.dispatch(setTheme(theme));

  if (isUserAuth(res)) {
    const user = getUserInfo(res);
    store.dispatch(fetchLoginFulfilled());
    store.dispatch(fetchUserFulfilled(user));
  }

  return { store };
};
