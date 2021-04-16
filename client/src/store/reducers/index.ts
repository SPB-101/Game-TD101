import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import type { Immutable } from "immer";
import type { History } from "history";

import { widgets } from "./widgets";
import type { Widgets } from "./widgets";

import { collections } from "./collections";
import type { Collections } from "./collections";

export type State = Immutable<{
  widgets: Widgets;
  collections: Collections;
}>;

export const rootReducer = (history: History) =>
  combineReducers({
    widgets,
    collections,
    router: connectRouter(history),
  });
