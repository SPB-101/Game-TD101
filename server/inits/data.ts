import url from "url";
import { matchPath } from "react-router-dom";
import { routes } from "../../client/src/routes";

import type { Dispatch } from "redux";

export const preloadData = (location: string) => {
  const dataRequirements: ((dispatch: Dispatch) => Promise<void>)[] = [];

  routes.some((route) => {
    const { fetchData: fetchMethod } = route;
    const match = matchPath<{ slug: string }>(
      url.parse(location).pathname as string,
      route
    );

    if (match && fetchMethod) {
      dataRequirements.push(fetchMethod());
    }

    return Boolean(match);
  });

  return Promise.all(dataRequirements);
};
