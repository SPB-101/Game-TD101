import type { Dispatch } from "redux";
import { resolveLogout } from "../../../../../app/resolvers/auth";
import { fetchFulfilled } from "../../../actions/loginPage/logout";

export const fetchLogout = () => (dispatch: Dispatch) => {
  return resolveLogout()
    .then(() => {
      dispatch(fetchFulfilled());
    })
    .catch((error) => {
      console.error(error);
    });
};
