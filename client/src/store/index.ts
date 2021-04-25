import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import thunkMiddleware from "redux-thunk";

import { rootReducer } from "@reducers/index";

import type { State } from "@reducers/index";
export type GetState = () => State;

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

export const createApp = (initialState: State) => {
  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(
      applyMiddleware(thunkMiddleware, routerMiddleware(history))
    )
  );

  return { store };
};
