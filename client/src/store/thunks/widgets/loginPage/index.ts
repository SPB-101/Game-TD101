import { push } from "connected-react-router";
import { resolveLogin } from "../../../../../app/resolvers/auth";
import { fetch, fetchFailed, fetchFulfilled } from "../../../actions/loginPage";
import { formatError } from "../../../../utils/formatError";

import type { Dispatch } from "redux";
import type { LoginAndPass } from "../../../../../app/resolvers/auth/types";

export const fetchLogin = (user: LoginAndPass) => (dispatch: Dispatch) => {
  dispatch(fetch());

  return resolveLogin(user)
    .then(() => {
      dispatch(fetchFulfilled());
      dispatch(push("/menu"));
    })
    .catch((error) => {
      dispatch(fetchFailed(formatError(error)));
    });
};
