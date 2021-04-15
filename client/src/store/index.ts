import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { rootReducer } from "./reducers";
import thunkMiddleware from "redux-thunk";

import type { State } from "./reducers";

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
