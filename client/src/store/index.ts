import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createMemoryHistory, createBrowserHistory } from "history";
import thunkMiddleware from "redux-thunk";

import { rootReducer } from "@reducers/index";
import { IS_DEV } from "@constants/index";

import { isServer } from "@utils/isServer";

import type { State } from "@reducers/index";

export type GetState = () => State;

const composeEnhancers =
  !isServer && IS_DEV && (window as any).__REDUX_DEVTOOLS_EXTENSION__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : (f: () => void) => f;

export const history = isServer
  ? createMemoryHistory()
  : createBrowserHistory();

export const createApp = (initialState: State) => {
  const store = createStore(
    rootReducer(history),
    initialState,
    compose(
      applyMiddleware(thunkMiddleware, routerMiddleware(history)),
      composeEnhancers
    )
  );

  return { store };
};
