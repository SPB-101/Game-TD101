import React from "react";
import { Redirect, Route } from "react-router-dom";

import type { Props } from "./types";

export const ProtectedRoute = ({ auth, component, path, exact }: Props) => {
  return auth ? (
    <Route exact={exact} path={path} component={component} />
  ) : (
    <Redirect to="/" />
  );
};
