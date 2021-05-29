import { URL } from "url";
import { matchPath } from "react-router-dom";
import { routes } from "../../../client/src/routes";

import type { Dispatch } from "redux";
import type { Store } from "redux";

export const preloadData = (location: string, store: Store) => {
  const dataRequirements: ((dispatch: Dispatch) => Promise<void>)[] = [];

  routes.some((route) => {
    const { fetchData: fetchMethod } = route;
    const url = new URL(location);
    const match = matchPath<{ slug: string }>(url.pathname, route);

    if (match && fetchMethod) {
      dataRequirements.push(store.dispatch(fetchMethod()));
    }

    return Boolean(match);
  });

  return Promise.all(dataRequirements);
};
