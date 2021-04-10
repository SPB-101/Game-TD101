import type { Dispatch } from "redux";
import {
  resolveLogin,
  TypeLoginAndPass,
} from "../../../../../app/resolvers/auth";
import { fetch, fetchFailed, fetchFulfilled } from "../../../actions/loginPage";

import { formatError } from "../../../../utils/formatError";

export const fetchLogin = (user: TypeLoginAndPass) => (dispatch: Dispatch) => {
  dispatch(fetch());

  return resolveLogin(user)
    .then(() => {
      dispatch(fetchFulfilled());
    })
    .catch((error) => {
      dispatch(fetchFailed(formatError(error)));
    });
};
