import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import type { Props } from "./types";

/**
 * Таблица редиректов
 * | page         | isPrivate | isLogin | R |
 * | login        | false     | true    | + |
 * | registration | false     | true    | + |
 * | menu         | true      | true    | - |
 * | game         | true      | true    | - |
 * | leaderboard  | true      | true    | - |
 * | forum        | true      | true    | - |
 * | comments     | true      | true    | - |
 * | sandbox      | true      | true    | - |
 */

export const ProtectedRoute = ({
  isPrivate,
  component,
  path,
  exact,
  redirect = "",
}: Props) => {
  const { isLogin } = useAuth();

  if (redirect.length) {
    if (isPrivate && isLogin == false) {
      return <Redirect to={redirect} />;
    }

    if (!isPrivate && isLogin === true) {
      return <Redirect to={redirect} />;
    }
  }

  return <Route exact={exact} path={path} component={component} />;
};
