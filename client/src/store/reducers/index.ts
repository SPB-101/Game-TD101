import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import type { Immutable } from "immer";
import type { History } from "history";

import { widgets } from "./widgets";
import { collections } from "./collections";

import type { Widgets } from "./widgets";
import type { Collections } from "./collections";

export type State = Immutable<{
  widgets: Widgets;
  collections: Collections;
  router: RouterState;
}>;

export const rootReducer = (history: History) =>
  combineReducers({
    widgets,
    collections,
    router: connectRouter(history),
  });
